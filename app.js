// K-Chicken Sommelier - App Logic (Updated)
console.log("Start of app.js execution");

// ========== STATE MANAGEMENT ==========
const state = {
    currentPage: 'home',
    currentQuestion: 0,
    answers: {},
    userProfile: null,
    matches: [],
    isPremium: false,
    history: [],
    brandDirectory: [],
    brandSheetMeta: null
};

const BRAND_SHEET_ID = '1CGhr6ETMKV3VTC_62Y-8hRgqt9KQQ-VXSnBQsdTkTnM';
const BRAND_SHEET_JSON_URL = `https://opensheet.elk.sh/${BRAND_SHEET_ID}/1`;
const BRAND_SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${BRAND_SHEET_ID}/gviz/tq?tqx=out:csv`;
const BRAND_SHEET_CACHE_KEY = 'kcs-brand-sheet-cache-v1';

const BRAND_MATCH_ALIASES = {
    BHC: ['비에이치씨(BHC)', '비에이치씨'],
    BBQ: ['BBQ치킨', 'BBQ 치킨앤비어'],
    '60계치킨': ['60계'],
    푸라닭: ['푸라닭치킨'],
    '호식이두마리치킨': ['호식이 두마리치킨']
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initNavigation();
    initQuiz();
    initPremium();
    initSettings();
    initFAQ();
    initLanguages();
    initShare();
    initStats();      // New
    initBrandDirectory(); // New
    initGoogleLogin(); // New
    showPage('home');
});

// ========== NEW FEATURES ==========
function initStats() {
    const totalMenus = MENU_ITEMS.length;
    const uniqueBrands = new Set(MENU_ITEMS.map(item => item.brand)).size;
    const statsEl = document.getElementById('data-stats');
    if (statsEl) {
        const lang = state.language || 'en';
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

        const stats = {
            ko: `현재 <strong>${uniqueBrands}개 브랜드</strong>, <strong>${totalMenus}개 메뉴</strong> 분석 완료 📊 <span style="font-size: 11px; color: #999; margin-left: 5px;">(실시간 DB: ${today})</span>`,
            en: `Analyzing <strong>${uniqueBrands} Brands</strong> & <strong>${totalMenus} Menus</strong> 📊 <span style="font-size: 11px; color: #999; margin-left: 5px;">(Real-time: ${today})</span>`,
            zh: `正在分析 <strong>${uniqueBrands} 个品牌</strong> 和 <strong>${totalMenus} 个菜单</strong> 📊 <span style="font-size: 11px; color: #999; margin-left: 5px;">(实时数据: ${today})</span>`,
            ja: `現在 <strong>${uniqueBrands}つのブランド</strong>、<strong>${totalMenus}つのメニュー</strong>を分析中 📊 <span style="font-size: 11px; color: #999; margin-left: 5px;">(リアルタイム: ${today})</span>`
        };

        statsEl.innerHTML = stats[lang] || stats.en;
    }
}

function normalizeBrandKey(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[()]/g, '')
        .replace(/\s+/g, '')
        .replace(/[^a-z0-9가-힣]/g, '');
}

function parseStoreCount(value) {
    const digits = String(value || '').replace(/[^0-9]/g, '');
    if (!digits) return null;
    const parsed = parseInt(digits, 10);
    return Number.isFinite(parsed) ? parsed : null;
}

function parseCsvRows(text) {
    const rows = [];
    let row = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char === '"') {
            if (inQuotes && text[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
            continue;
        }

        if (char === ',' && !inQuotes) {
            row.push(current);
            current = '';
            continue;
        }

        if ((char === '\n' || char === '\r') && !inQuotes) {
            if (char === '\r' && text[i + 1] === '\n') i++;
            row.push(current);
            rows.push(row);
            row = [];
            current = '';
            continue;
        }

        current += char;
    }

    if (current.length || row.length) {
        row.push(current);
        rows.push(row);
    }

    return rows.filter(r => r.some(cell => String(cell).trim().length > 0));
}

function mapSheetRows(rawRows) {
    return rawRows
        .map(row => {
            const brandName = String(row.brandName || '').trim();
            const category = String(row.category || '').trim();
            return {
                brandName,
                category,
                storeCount: parseStoreCount(row.storeCount),
                normalized: normalizeBrandKey(brandName)
            };
        })
        .filter(row => row.brandName);
}

async function fetchBrandSheetFromJson() {
    const response = await fetch(`${BRAND_SHEET_JSON_URL}?_ts=${Date.now()}`, {
        cache: 'no-store'
    });
    if (!response.ok) throw new Error(`Brand sheet JSON fetch failed: ${response.status}`);

    const jsonRows = await response.json();
    const mappedRows = mapSheetRows(
        jsonRows.map(row => ({
            brandName: row['브랜드명'],
            category: row['분류'],
            storeCount: row['매장 수 (추정)']
        }))
    );

    return { rows: mappedRows, source: 'json' };
}

async function fetchBrandSheetFromCsv() {
    const response = await fetch(`${BRAND_SHEET_CSV_URL}&_ts=${Date.now()}`, {
        cache: 'no-store'
    });
    if (!response.ok) throw new Error(`Brand sheet CSV fetch failed: ${response.status}`);

    const csvText = await response.text();
    const rows = parseCsvRows(csvText);
    if (!rows.length) throw new Error('Brand sheet CSV is empty.');

    const headers = rows[0].map(header => String(header || '').replace(/^\uFEFF/, '').trim());
    const brandIndex = headers.findIndex(header => header.includes('브랜드명'));
    const categoryIndex = headers.findIndex(header => header.includes('분류'));
    const storeIndex = headers.findIndex(header => header.includes('매장'));

    if (brandIndex === -1 || categoryIndex === -1 || storeIndex === -1) {
        throw new Error('Brand sheet CSV header mismatch.');
    }

    const mappedRows = mapSheetRows(rows.slice(1).map(row => ({
        brandName: row[brandIndex],
        category: row[categoryIndex],
        storeCount: row[storeIndex]
    })));

    return { rows: mappedRows, source: 'csv' };
}

function loadBrandSheetCache() {
    try {
        const raw = localStorage.getItem(BRAND_SHEET_CACHE_KEY);
        if (!raw) return null;

        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.rows) || !parsed.fetchedAt) return null;

        return parsed;
    } catch (error) {
        console.warn('Failed to parse brand sheet cache:', error);
        return null;
    }
}

function saveBrandSheetCache(rows, source) {
    try {
        localStorage.setItem(BRAND_SHEET_CACHE_KEY, JSON.stringify({
            rows,
            source,
            fetchedAt: Date.now()
        }));
    } catch (error) {
        console.warn('Failed to save brand sheet cache:', error);
    }
}

async function loadBrandSheetRows() {
    const cached = loadBrandSheetCache();

    try {
        const jsonResult = await fetchBrandSheetFromJson();
        saveBrandSheetCache(jsonResult.rows, jsonResult.source);
        return { rows: jsonResult.rows, source: jsonResult.source, fetchedAt: Date.now() };
    } catch (jsonError) {
        console.warn('Brand sheet JSON load failed, trying CSV:', jsonError);
    }

    try {
        const csvResult = await fetchBrandSheetFromCsv();
        saveBrandSheetCache(csvResult.rows, csvResult.source);
        return { rows: csvResult.rows, source: csvResult.source, fetchedAt: Date.now() };
    } catch (csvError) {
        console.warn('Brand sheet CSV load failed:', csvError);
    }

    if (cached) {
        return { rows: cached.rows, source: 'stale-cache', fetchedAt: cached.fetchedAt };
    }

    throw new Error('Failed to load brand sheet data.');
}

function collectServiceBrands() {
    const byBrand = new Map();

    MENU_ITEMS.forEach(item => {
        if (!byBrand.has(item.brand)) {
            byBrand.set(item.brand, {
                brand: item.brand,
                menuCount: 0,
                brandImage: item.brandImage || '',
                website: item.website || '#'
            });
        }

        byBrand.get(item.brand).menuCount += 1;
    });

    return Array.from(byBrand.values());
}

function findSheetRowForBrand(brandName, sheetRows) {
    const primaryKey = normalizeBrandKey(brandName);
    const aliasKeys = (BRAND_MATCH_ALIASES[brandName] || []).map(normalizeBrandKey);
    const keysToMatch = [primaryKey, ...aliasKeys].filter(Boolean);

    const candidates = sheetRows.filter(row => {
        const rowKey = row.normalized;
        if (!rowKey || rowKey.length < 3) return false;

        return keysToMatch.some(key => {
            if (!key || key.length < 3) return false;
            return rowKey === key || rowKey.includes(key) || key.includes(rowKey);
        });
    });

    if (!candidates.length) return null;

    return candidates.sort((a, b) => (b.storeCount || -1) - (a.storeCount || -1))[0];
}

function buildBrandDirectoryRecords(sheetRows) {
    return collectServiceBrands()
        .map(serviceBrand => {
            const matched = findSheetRowForBrand(serviceBrand.brand, sheetRows);
            return {
                ...serviceBrand,
                category: matched?.category || null,
                storeCount: matched?.storeCount ?? null,
                sourceBrandName: matched?.brandName || null
            };
        })
        .sort((a, b) => (b.storeCount || -1) - (a.storeCount || -1) || a.brand.localeCompare(b.brand, 'ko'));
}

function translateSheetCategory(category, lang) {
    const labels = {
        대형: { en: 'Major', ko: '대형', zh: '大型', ja: '大手' },
        중형: { en: 'Mid-size', ko: '중형', zh: '中型', ja: '中規模' },
        소형: { en: 'Small', ko: '소형', zh: '小型', ja: '小規模' },
        지역구: { en: 'Regional', ko: '지역구', zh: '地区型', ja: '地域密着' }
    };

    if (!category) return null;
    return labels[category]?.[lang] || category;
}

function formatStoreCount(storeCount, lang) {
    if (!Number.isFinite(storeCount)) {
        return (lang === 'ko') ? '정보 없음' :
            (lang === 'zh') ? '暂无' :
                (lang === 'ja') ? 'データなし' : 'N/A';
    }

    const formatted = storeCount.toLocaleString();
    return (lang === 'ko') ? `${formatted}개` :
        (lang === 'zh') ? `${formatted}家` :
            (lang === 'ja') ? `${formatted}店` : formatted;
}

function renderBrandDirectory() {
    const container = document.getElementById('brand-directory-list');
    const sourceEl = document.getElementById('brand-directory-source');
    if (!container) return;

    const strings = getStrings();
    const lang = state.language || 'en';

    if (!state.brandDirectory.length) {
        container.innerHTML = `<div class="brand-directory-placeholder">${strings.brandLoading || 'Loading Google Sheets data...'}</div>`;
    } else {
        container.innerHTML = state.brandDirectory.map(record => {
            const categoryText = translateSheetCategory(record.category, lang) || (strings.brandNotFound || 'No matched data');
            const storeCountText = formatStoreCount(record.storeCount, lang);

            return `
        <article class="brand-directory-card">
          <div class="brand-directory-top">
            ${record.brandImage ? `<img class="brand-directory-logo" src="${record.brandImage}" alt="${record.brand} logo" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : ''}
            <div class="brand-directory-name">${record.brand}</div>
          </div>
          <div class="brand-directory-meta"><span>${strings.brandCategoryLabel || 'Category'}</span><strong>${categoryText}</strong></div>
          <div class="brand-directory-meta"><span>${strings.brandStoreLabel || 'Stores'}</span><strong>${storeCountText}</strong></div>
          <div class="brand-directory-meta"><span>${strings.brandMenuLabel || 'Menus'}</span><strong>${record.menuCount}</strong></div>
        </article>
      `;
        }).join('');
    }

    if (sourceEl) {
        if (!state.brandSheetMeta?.fetchedAt) {
            sourceEl.textContent = '';
        } else {
            const dateText = new Date(state.brandSheetMeta.fetchedAt).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US');
            sourceEl.textContent = `${strings.brandSourcePrefix || 'Source'}: ${strings.brandSourceGoogleSheet || 'Google Sheets'} · ${dateText}`;
        }
    }
}

function initBrandDirectory() {
    renderBrandDirectory();

    loadBrandSheetRows()
        .then(result => {
            state.brandDirectory = buildBrandDirectoryRecords(result.rows);
            state.brandSheetMeta = {
                source: result.source,
                fetchedAt: result.fetchedAt
            };
            renderBrandDirectory();
        })
        .catch(error => {
            console.error('Failed to initialize brand directory:', error);
            state.brandDirectory = buildBrandDirectoryRecords([]);
            state.brandSheetMeta = null;
            renderBrandDirectory();
        });
}

function initGoogleLogin() {
    const btn = document.getElementById('google-login-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            // Mock login
            const isKo = state.language === 'ko';
            alert(isKo
                ? "구글 로그인 성공! 더 많은 정보를 무료로 확인하세요."
                : "Logged in with Google! Enjoy free access to extended insights."
            );
            btn.innerHTML = isKo ? "로그인됨 (Google)" : "Logged In (Google)";
            btn.disabled = true;
            btn.style.opacity = "0.7";
        });
    }
}

// ========== NAVIGATION ==========
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
        state.currentPage = pageName;

        // Scroll to top
        window.scrollTo(0, 0);

        // Page-specific initialization
        if (pageName === 'quiz') {
            renderQuizQuestion();
        } else if (pageName === 'results') {
            renderResults();
        } else if (pageName === 'settings') {
            renderSettings();
        }
    }
}

function initNavigation() {
    // Navigation buttons
    document.querySelectorAll('[data-navigate]').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.navigate;
            showPage(target);
        });
    });

    // Start quiz button
    document.querySelectorAll('[data-action="start-quiz"]').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentQuestion = 0;
            state.answers = {};
            showPage('quiz');
        });
    });
}

// ========== QUIZ LOGIC ==========
function initQuiz() {
    // Next button
    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', handleQuizNext);
    }

    // Skip button
    const skipBtn = document.getElementById('quiz-skip');
    if (skipBtn) {
        skipBtn.addEventListener('click', handleQuizSkip);
    }

    // Back button
    const backBtn = document.getElementById('quiz-back');
    if (backBtn) {
        backBtn.addEventListener('click', handleQuizBack);
    }
}

function renderQuizQuestion() {
    const question = QUIZ_QUESTIONS[state.currentQuestion];
    if (!question) return;

    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const lang = state.language || 'en';

    // Update progress
    if (progressText) {
        progressText.textContent = `Question ${state.currentQuestion + 1} of ${QUIZ_QUESTIONS.length}`;
    }
    if (progressFill) {
        const progress = ((state.currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
        progressFill.style.width = `${progress}%`;
    }

    // Get translations
    const qTrans = QUIZ_TRANSLATIONS[question.id];
    const titleText = qTrans?.title[lang] || question.title;

    // Update question title
    const titleEl = document.getElementById('quiz-title');
    if (titleEl) {
        titleEl.textContent = titleText;
    }

    // Render options
    const optionsContainer = document.getElementById('quiz-options');
    if (optionsContainer) {
        // Different rendering based on type
        if (question.type === 'scale' || question.type === 'filter') {
            renderSingleSelectOptions(optionsContainer, question);
        } else if (question.type === 'tags') {
            renderMultiSelectOptions(optionsContainer, question);
        }
    }

    // Update button states
    updateQuizButtons();
}

function renderSingleSelectOptions(container, question) {
    const lang = state.language || 'en';
    const qTrans = QUIZ_TRANSLATIONS[question.id];

    container.innerHTML = question.options.map((option, index) => {
        const isSelected = state.answers[question.id] === option.value;
        // Try to get translation, fallback to option.label
        const translatedLabel = qTrans?.options?.[option.value]?.[lang] || option.label;

        return `
      <button class="quiz-option ${isSelected ? 'selected' : ''}" 
              data-type="single"
              data-question-id="${question.id}"
              data-value="${option.value}">
        ${translatedLabel}
      </button>
    `;
    }).join('');

    attachOptionListeners(container);
}

function renderMultiSelectOptions(container, question) {
    const lang = state.language || 'en';
    const qTrans = QUIZ_TRANSLATIONS[question.id];

    container.innerHTML = question.options.map((option, index) => {
        const currentAnswers = state.answers[question.id] || [];
        const isSelected = currentAnswers.includes(option.value);
        // Try to get translation, fallback to option.label
        const translatedLabel = qTrans?.options?.[option.value]?.[lang] || option.label;

        return `
      <button class="quiz-option ${isSelected ? 'selected' : ''}" 
              data-type="multi"
              data-question-id="${question.id}"
              data-value="${option.value}">
        ${translatedLabel}
      </button>
    `;
    }).join('');

    attachOptionListeners(container);
}

function attachOptionListeners(container) {
    container.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const qId = btn.dataset.questionId;
            const val = btn.dataset.value;
            const type = btn.dataset.type;

            if (type === 'single') {
                // Parse int if it looks like a number (for 1-5 scales)
                const parsedVal = isNaN(val) ? val : parseInt(val, 10);
                handleOptionSelect(qId, parsedVal);
            } else {
                handleMultiSelect(qId, val);
            }
        });
    });
}

function handleOptionSelect(questionId, value) {
    state.answers[questionId] = value;
    // Re-render to update UI selection state
    renderQuizQuestion();
}

function handleMultiSelect(questionId, value) {
    const current = state.answers[questionId] || [];
    const idx = current.indexOf(value);

    if (idx >= 0) {
        // Remove
        current.splice(idx, 1);
    } else {
        // Add
        current.push(value);
    }
    state.answers[questionId] = current;
    renderQuizQuestion();
}

function updateQuizButtons() {
    const question = QUIZ_QUESTIONS[state.currentQuestion];
    const nextBtn = document.getElementById('quiz-next');

    let hasAnswer = false;
    if (question.type === 'tags') {
        // For tags, maybe allow empty? Or require at least one? Let's allow empty or require 1.
        // Let's require at least one for better results.
        hasAnswer = state.answers[question.id] && state.answers[question.id].length > 0;
    } else {
        hasAnswer = state.answers[question.id] !== undefined;
    }

    if (nextBtn) {
        nextBtn.disabled = !hasAnswer;

        // Update button text for last question
        const lang = state.language || 'en';
        const strings = UI_STRINGS[lang] || UI_STRINGS['en'];

        if (state.currentQuestion === QUIZ_QUESTIONS.length - 1) {
            nextBtn.textContent = (lang === 'ko' ? '결과 보기' : (lang === 'zh' ? '查看结果' : (lang === 'ja' ? '結果を見る' : 'Get Matches')));
        } else {
            nextBtn.textContent = strings.nextBtn;
        }
    }
}

function handleQuizNext() {
    if (state.currentQuestion < QUIZ_QUESTIONS.length - 1) {
        state.currentQuestion++;
        renderQuizQuestion();
    } else {
        // Calculate results and show
        calculateResults();
        showPage('results');
    }
}

function handleQuizSkip() {
    if (state.currentQuestion < QUIZ_QUESTIONS.length - 1) {
        state.currentQuestion++;
        renderQuizQuestion();
    } else {
        calculateResults();
        showPage('results');
    }
}

function handleQuizBack() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        renderQuizQuestion();
    } else {
        showPage('home');
    }
}

// ========== SCORING ALGORITHM ==========
const THIGH_BONELESS_BRANDS = new Set([
    '굽네치킨', '푸라닭', 'BBQ', '맘스터치', '60계치킨', '노랑통닭', '자담치킨', '호식이두마리치킨', '또래오래'
]);
const BREAST_BONELESS_BRANDS = new Set([
    '네네치킨', 'KFC'
]);

function inferBonelessType(item) {
    const composition = item.composition || [];
    const name = item.name || '';
    if (!composition.includes('순살')) return null;

    if (/싸이|다리살|통다리/.test(name)) return 'boneless_thigh';
    if (/가슴|안심|텐더/.test(name)) return 'boneless_breast';
    if (THIGH_BONELESS_BRANDS.has(item.brand)) return 'boneless_thigh';
    if (BREAST_BONELESS_BRANDS.has(item.brand)) return 'boneless_breast';
    return 'boneless_mix';
}

function matchesCompositionPreference(item, preference) {
    if (preference === 'any') return true;
    const composition = item.composition || [];

    switch (preference) {
        case 'whole_bone':
            return composition.includes('전체');
        case 'wing_combo':
            return composition.includes('윙봉') || composition.includes('콤보');
        case 'boneless_thigh':
            return composition.includes('순살') && inferBonelessType(item) === 'boneless_thigh';
        case 'boneless_breast':
            return composition.includes('순살') && inferBonelessType(item) === 'boneless_breast';
        case 'boneless_mix':
            return composition.includes('순살') && inferBonelessType(item) === 'boneless_mix';
        default:
            return true;
    }
}

function classifyTextureMethod(item) {
    const method = item.cooking_method || '';
    const name = item.name || '';
    const crispiness = item.crispiness || 3;

    if (/숯불|조림/.test(method) || /숯불|양념구이/.test(name) || item.brand === '지코바치킨') {
        return 'stirfry';
    }

    if (/오븐/.test(method) || /오븐/.test(name)) {
        if (crispiness >= 3 || /바사삭|크리스피/.test(name)) return 'baked';
        return 'roast';
    }

    if (/구이/.test(method) || /구이/.test(name)) return 'roast';

    if (crispiness >= 4 || /크리스피|핫크리스피/.test(name)) return 'crispy';

    return 'embossed';
}

function classifySauceProfile(item) {
    const name = item.name || '';
    const tags = item.flavor_tags || [];
    const hasTag = (target) => tags.includes(target);

    if (/뿌링|스노윙|시즈닝|콘소메|파우더/.test(name) || hasTag('시즈닝') || hasTag('콘소메')) {
        return 'powder';
    }
    if (/마요|크림|치즈|어니언|화이트/.test(name) || hasTag('치즈') || hasTag('요거트') || hasTag('크리미')) {
        return 'white';
    }
    if (/간장|갈비|맛초킹|소이|블랙/.test(name) || hasTag('간장') || hasTag('마늘간장') || hasTag('짭조름')) {
        return 'black';
    }
    if (/양념|레드|핫|칠리|고추|불닭|땡초|볼케이노/.test(name) || hasTag('매콤') || hasTag('매운') || hasTag('고추')) {
        return 'red';
    }
    return 'none';
}

function calculateResults() {
    const userSpiciness = Number(state.answers.spiciness) || 3;
    const userTextureMethod = state.answers.texture_method || 'any';
    const userComposition = state.answers.composition || 'any';
    const userSauceProfile = state.answers.sauce_profile || 'any';

    const compositionFiltered = MENU_ITEMS.filter(item => matchesCompositionPreference(item, userComposition));
    const candidates = compositionFiltered.length > 0 ? compositionFiltered : MENU_ITEMS;

    const scored = candidates.map(item => {
        const spiceDiff = Math.abs(userSpiciness - item.spiciness);
        const spiceScore = Math.max(0, 35 - (spiceDiff * 8));

        const textureType = classifyTextureMethod(item);
        const sauceType = classifySauceProfile(item);

        const textureScore = userTextureMethod === 'any' ? 12 : (textureType === userTextureMethod ? 25 : 0);
        const sauceScore = userSauceProfile === 'any' ? 12 : (sauceType === userSauceProfile ? 25 : 0);
        const compositionScore = matchesCompositionPreference(item, userComposition)
            ? (userComposition === 'any' ? 8 : 15)
            : 0;

        const totalScore = spiceScore + textureScore + sauceScore + compositionScore;
        const normalizedScore = Math.max(50, Math.min(99, Math.round(totalScore + 15)));

        return { ...item, score: normalizedScore };
    });

    scored.sort((a, b) => b.score - a.score);
    state.matches = scored.slice(0, 3);

    state.userProfile = {
        spiciness: userSpiciness,
        texture_method: userTextureMethod,
        composition: userComposition,
        sauce_profile: userSauceProfile
    };

    addToHistory();
    saveState();
}

// ========== RESULTS PAGE ==========
function renderResults() {
    renderMatchCards();
    updatePremiumSection();
    // Profile chips could be rendered if needed, but simplified for now
}

// ========== Translation Helpers ==========
function getTranslatedName(item, lang) {
    const koName = item.name; // always Korean from raw data
    if (lang === 'ko') return koName;
    const t = MENU_NAME_TRANSLATIONS[koName];
    if (t && t[lang]) return t[lang];
    return koName; // fallback to Korean
}

function getTranslatedTags(item, lang) {
    if (lang === 'ko') return item.flavor_tags;
    return item.flavor_tags.map(tag => {
        const t = FLAVOR_TAG_TRANSLATIONS[tag];
        return (t && t[lang]) ? t[lang] : tag;
    });
}

function getTranslatedDescription(item, lang) {
    // Description is always in Korean from raw data
    // For non-Korean, we keep Korean but show it in a helpful way
    if (lang === 'ko') return item.description || '';
    // For other languages, we won't machine-translate inline, just show Korean with context
    return item.description || '';
}

function getTranslatedBadge(badge, lang) {
    const t = BADGE_TRANSLATIONS[badge];
    if (t && t[lang]) return t[lang];
    return badge;
}

function renderMatchCards() {
    const container = document.getElementById('match-cards');
    if (!container) return;

    const lang = state.language || 'en';
    const strings = getStrings();

    if (state.matches.length === 0) {
        const noMatchMsg = lang === 'ko' ? '이 조건에 맞는 결과가 없습니다. 조건을 변경해보세요!' :
            lang === 'zh' ? '没有找到匹配的结果，请调整条件！' :
                lang === 'ja' ? '条件に合う結果がありません。条件を変更してみてください！' :
                    'No matches found with these exact filters. Try loosening your criteria!';
        container.innerHTML = `<div style="text-align:center; padding: 2rem;">${noMatchMsg}</div>`;
        return;
    }

    const spicyLabel = strings.spiciness || 'Spiciness';
    const crispyLabel = strings.crispiness || 'Crispiness';
    const featuresLabel = lang === 'ko' ? '특징' : lang === 'zh' ? '特色' : lang === 'ja' ? '特徴' : 'Features';

    container.innerHTML = state.matches.map(item => {
        const displayName = getTranslatedName(item, lang);
        const koName = item.name;
        // Show both Korean original + translated name for non-Korean users
        const nameDisplay = lang === 'ko' ? koName : `${displayName} <span style="font-size: 13px; color: #888; font-weight: 400;">(${koName})</span>`;
        const tags = getTranslatedTags(item, lang);
        const badge = getTranslatedBadge(item.badge, lang);
        const desc = item.description || '';

        return `
    <div class="match-card">
      <div class="match-card-image" onclick="window.open('${item.menuPage}', '_blank')" style="cursor: pointer; overflow: hidden;">
        <img class="match-card-photo" src="${item.image}" data-fallback="${item.fallbackImage || ''}" alt="${displayName}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="if(this.dataset.fallback && this.src !== this.dataset.fallback) { this.src = this.dataset.fallback; }">
        <div class="match-card-badge">
          <span class="badge ${item.badge === 'Spicy' ? 'badge-spicy' : ''}">${badge}</span>
        </div>
      </div>
      <div class="match-card-content">
        <div class="match-card-header">
          <div class="match-card-meta" onclick="window.open('${item.website}', '_blank')">
            <div class="match-card-name">${nameDisplay} <span style="font-size: 12px; vertical-align: middle;">🔗</span></div>
            <div class="match-card-brand-row">
              ${item.brandImage ? `<img class="match-card-brand-logo" src="${item.brandImage}" alt="${item.brand} logo" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : ''}
              <div class="match-card-brand">${item.brand}</div>
            </div>
          </div>
          <div class="match-card-score">
            <div class="match-card-score-value">${item.score}</div>
            <div class="match-card-score-label">${strings.matchScore || 'Match'}</div>
          </div>
        </div>
        
        <div class="mini-meters">
            <div class="mini-meter">
                <div class="mini-meter-label">${spicyLabel}</div>
                <div class="mini-meter-bar"><div class="mini-meter-fill" style="width: ${item.spiciness * 20}%"></div></div>
            </div>
            <div class="mini-meter">
                <div class="mini-meter-label">${crispyLabel}</div>
                <div class="mini-meter-bar"><div class="mini-meter-fill" style="width: ${item.crispiness * 20}%"></div></div>
            </div>
        </div>
        
        <div style="margin-top: 8px; font-size: 12px; color: #666;">
            <strong>${featuresLabel}:</strong> ${tags.join(', ')}
        </div>

        <div class="match-card-reason">${desc}</div>
      </div>
    </div>
  `;
    }).join('');

    attachMatchCardImageFallbacks(container);
}

function attachMatchCardImageFallbacks(container) {
    container.querySelectorAll('.match-card-photo').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
    });
    container.querySelectorAll('.match-card-brand-logo').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
    });
}

function updatePremiumSection() {
    const lockedSection = document.getElementById('locked-premium-section');
    if (lockedSection) {
        lockedSection.style.display = state.isPremium ? 'none' : 'block';
    }
}

// ========== PREMIUM ==========
function initPremium() {
    document.querySelectorAll('[data-action="start-premium"]').forEach(btn => {
        btn.addEventListener('click', handleStartPremium);
    });
    document.querySelectorAll('[data-action="restore-purchase"]').forEach(btn => {
        btn.addEventListener('click', handleRestorePurchase);
    });
}

function handleStartPremium() {
    state.isPremium = true;
    saveState();
    alert('🎉 Welcome to Premium! Your free month has started.');
    showPage('results');
}

function handleRestorePurchase() {
    if (state.isPremium) {
        alert('✓ Your Premium subscription has been restored!');
    } else {
        alert('No previous subscription found.');
    }
}

// ========== SETTINGS ==========
function initSettings() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            langToggle.classList.toggle('active');
        });
    }

    document.querySelectorAll('[data-action="edit-quiz"]').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentQuestion = 0;
            showPage('quiz');
        });
    });
}

function renderSettings() {
    // Simplified settings render
    const historyList = document.getElementById('history-list');
    if (historyList) {
        if (state.history.length === 0) {
            historyList.innerHTML = '<p class="text-muted">No picks yet.</p>';
        } else {
            historyList.innerHTML = state.history.slice(0, 5).map(item => `
        <div class="history-item">
          <div>
            <div class="history-name">${item.name}</div>
            <div class="history-date">${item.date}</div>
          </div>
        </div>
      `).join('');
        }
    }
}

// ========== FAQ ==========
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            item.classList.toggle('open');
        });
    });
}

// ========== HISTORY ==========
function addToHistory() {
    if (state.matches.length > 0) {
        const topMatch = state.matches[0];
        state.history.unshift({
            name: topMatch.name,
            score: topMatch.score,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        });
        state.history = state.history.slice(0, 10);
    }
}

// ========== PERSISTENCE ==========
function saveState() {
    localStorage.setItem('kcs-state', JSON.stringify({
        userProfile: state.userProfile,
        history: state.history,
        isPremium: state.isPremium,
        answers: state.answers
    }));
}

function loadState() {
    try {
        const saved = localStorage.getItem('kcs-state');
        if (saved) {
            const data = JSON.parse(saved);
            state.userProfile = data.userProfile || null;
            state.history = data.history || [];
            state.isPremium = data.isPremium || false;
        }
    } catch (e) {
        console.error('Failed to load state:', e);
    }
}

// ========== UTILITIES ==========
function getStrings() {
    return UI_STRINGS[state.language || 'en'] || UI_STRINGS.en;
}

// ========== SHARE ==========
function buildShareText() {
    const lang = state.language || 'en';
    const url = 'https://k-chicken-sommelier.vercel.app';

    if (state.matches.length === 0) {
        const defaultMsg = lang === 'ko' ? '🍗 K-Chicken Sommelier에서 나의 치킨 소울메이트를 찾았어요!' :
            '🍗 Found my Korean chicken soulmate with K-Chicken Sommelier!';
        const hashtags = lang === 'ko'
            ? '\n\n#KChickenSommelier #치킨추천 #한국치킨 #치킨소울메이트'
            : '\n\n#KChickenSommelier #KoreanChicken #ChickenSoulmate';
        return `${defaultMsg}${hashtags}\n${url}`;
    }

    const top = state.matches[0];
    const koName = top.name;
    const displayName = getTranslatedName(top, lang);
    const tags = getTranslatedTags(top, lang).slice(0, 3).join(', ');
    const badge = getTranslatedBadge(top.badge, lang);

    let text, hashtags;
    if (lang === 'ko') {
        text = `🍗 나의 치킨 소울메이트를 찾았어요!\n\n` +
            `✅ ${koName} — ${top.brand}\n` +
            `🏷️ ${badge} | 매치 점수 ${top.score}점\n` +
            `🔥 ${tags}\n\n` +
            `30초 퀴즈로 나만의 치킨을 찾아보세요!`;
        hashtags = '\n\n#KChickenSommelier #치킨추천 #한국치킨 #치킨소울메이트 #' + koName.replace(/\s/g, '');
    } else if (lang === 'zh') {
        text = `🍗 找到了我的炸鸡灵魂伴侣！\n\n` +
            `✅ ${displayName} — ${top.brand}\n` +
            `🏷️ ${badge} | 匹配度 ${top.score}\n` +
            `🔥 ${tags}\n\n` +
            `30秒测试找到你的专属炸鸡！`;
        hashtags = '\n\n#KChickenSommelier #韩国炸鸡 #炸鸡推荐';
    } else if (lang === 'ja') {
        text = `🍗 チキンソウルメイトを見つけました！\n\n` +
            `✅ ${displayName} — ${top.brand}\n` +
            `🏷️ ${badge} | マッチ度 ${top.score}\n` +
            `🔥 ${tags}\n\n` +
            `30秒クイズであなたのチキンを見つけよう！`;
        hashtags = '\n\n#KChickenSommelier #韓国チキン #チキンおすすめ';
    } else {
        text = `🍗 Found my Korean chicken soulmate!\n\n` +
            `✅ ${displayName} — ${top.brand}\n` +
            `🏷️ ${badge} | Match Score: ${top.score}\n` +
            `🔥 ${tags}\n\n` +
            `Take the 30-sec quiz to find yours!`;
        hashtags = '\n\n#KChickenSommelier #KoreanChicken #ChickenSoulmate #KFood';
    }

    return `${text}${hashtags}\n${url}`;
}

function buildShareHashtags() {
    const lang = state.language || 'en';
    if (lang === 'ko') return 'KChickenSommelier,치킨추천,한국치킨,치킨소울메이트';
    if (lang === 'zh') return 'KChickenSommelier,韩国炸鸡,炸鸡推荐';
    if (lang === 'ja') return 'KChickenSommelier,韓国チキン,チキンおすすめ';
    return 'KChickenSommelier,KoreanChicken,ChickenSoulmate,KFood';
}

function showToast(message) {
    // Remove existing toast
    document.querySelector('.share-toast')?.remove();
    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: #333; color: white; padding: 12px 24px; border-radius: 25px;
        font-size: 14px; z-index: 10000; animation: toastFade 2.5s ease forwards;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
}

function initShare() {
    // Results page share button — opens share modal
    const resShare = document.getElementById('btn-results-share');
    if (resShare) {
        resShare.addEventListener('click', () => {
            openShareModal();
        });
    }

    // Close handlers
    document.querySelectorAll('[data-share-close]').forEach(el => {
        el.addEventListener('click', closeShareModal);
    });
    const closeBtn = document.getElementById('share-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeShareModal);
    }

    // Platform buttons in share modal
    document.querySelectorAll('[data-share-platform]').forEach(btn => {
        btn.addEventListener('click', () => {
            handleSharePlatform(btn.dataset.sharePlatform);
        });
    });
}

function openShareModal() {
    const modal = document.getElementById('share-modal');
    if (!modal) return;

    // Populate preview text
    const preview = document.getElementById('share-preview-text');
    if (preview) {
        preview.textContent = buildShareText();
    }

    // Set title/subtitle based on language
    const lang = state.language || 'en';
    const title = document.getElementById('share-sheet-title');
    const subtitle = document.getElementById('share-sheet-subtitle');
    if (title) {
        title.textContent = lang === 'ko' ? '결과 공유하기' :
            lang === 'zh' ? '分享结果' :
                lang === 'ja' ? '結果をシェア' :
                    'Share your result';
    }
    if (subtitle) {
        subtitle.textContent = lang === 'ko' ? 'SNS에 자랑해보세요! 멘트와 해시태그가 자동 입력됩니다.' :
            lang === 'zh' ? '在社交媒体上分享！文字和标签已自动生成。' :
                lang === 'ja' ? 'SNSでシェアしよう！テキストとハッシュタグは自動入力されます。' :
                    'Share on social media! Text and hashtags are auto-generated.';
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}

function closeShareModal() {
    const modal = document.getElementById('share-modal');
    if (modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
    }
}

async function handleSharePlatform(platform) {
    const rawText = buildShareText();
    const shareUrl = 'https://k-chicken-sommelier.vercel.app';
    const hashtags = buildShareHashtags();
    const lang = state.language || 'en';

    // Build a short text for Twitter (character limit)
    const top = state.matches.length > 0 ? state.matches[0] : null;
    const tweetText = top
        ? (lang === 'ko'
            ? `🍗 나의 치킨 소울메이트: ${top.name} (${top.brand}) — 매치 ${top.score}점!\n30초 퀴즈로 나만의 치킨을 찾아보세요!`
            : `🍗 My chicken soulmate: ${getTranslatedName(top, lang)} (${top.brand}) — Match ${top.score}!\nFind yours with the 30-sec quiz!`)
        : (lang === 'ko' ? '🍗 K-Chicken Sommelier에서 치킨 소울메이트를 찾아보세요!' : '🍗 Find your Korean chicken soulmate!');

    switch (platform) {
        case 'x':
            window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${hashtags}`,
                '_blank'
            );
            break;
        case 'facebook':
            window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(rawText)}`,
                '_blank'
            );
            break;
        case 'instagram':
            // Instagram has no web share URL — copy text to clipboard
            await copyToClipboard(rawText);
            showToast(lang === 'ko'
                ? '📋 텍스트가 복사되었습니다! 인스타그램에 붙여넣기 하세요.'
                : lang === 'zh' ? '📋 文字已复制！请粘贴到Instagram。'
                    : lang === 'ja' ? '📋 テキストをコピーしました！Instagramに貼り付けてください。'
                        : '📋 Text copied! Paste it on Instagram.');
            break;
        case 'copy':
            await copyToClipboard(rawText);
            showToast(lang === 'ko' ? '📋 링크와 텍스트가 복사되었습니다!' :
                lang === 'zh' ? '📋 链接和文字已复制！' :
                    lang === 'ja' ? '📋 リンクとテキストがコピーされました！' :
                        '📋 Link and text copied!');
            break;
    }
    closeShareModal();
}

function applyTranslations(lang) {
    const strings = UI_STRINGS[lang] || UI_STRINGS['en'];

    // safe update helper
    const update = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = text;
    };

    update('hero-headline', strings.heroHeadline);
    update('hero-sub', strings.heroSub);
    update('start-quiz-btn', strings.startBtn);
    update('btn-hero-secondary', strings.seeTopPicks);
    update('brand-directory-title', strings.brandDirectoryTitle);
    update('brand-directory-subtitle', strings.brandDirectorySubtitle);
    update('header-premium-btn', lang === 'ko' ? '프리미엄' : (lang === 'zh' ? '高级版' : (lang === 'ja' ? 'プレミアム' : 'Premium')));

    // Quiz Buttons
    update('quiz-next', strings.nextBtn); // Default state, updateQuizButtons will override if needed
    update('quiz-skip', strings.skipBtn);
    update('back-btn-text', strings.backBtn);

    // Results Page Buttons
    update('results-title', strings.resultTitle);
    update('share-btn-text', strings.shareBtn);
    update('btn-results-unlock', strings.unlockPremium);
    update('btn-results-retry', strings.tryAgain);
    update('locked-section-title', strings.premiumUnlocks);

    // Recalculate stats text in new language
    initStats();
    renderBrandDirectory();

    // Re-render quiz if active
    if (state.currentPage === 'quiz') {
        renderQuizQuestion();
    }

    // Re-render results/cards if active 
    if (state.currentPage === 'results') {
        renderResults();
    }
}

// ========== LANGUAGES ==========
function initLanguages() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    state.language = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    applyTranslations(lang);
    saveState();
}
