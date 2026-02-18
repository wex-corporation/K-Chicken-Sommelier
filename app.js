// K-Chicken Sommelier - App Logic (Updated)
console.log("Start of app.js execution");

// ========== STATE MANAGEMENT ==========
const state = {
    currentPage: 'home',
    currentQuestion: 0,
    answers: {
        flavor: [] // Initialize array for multi-select
    },
    userProfile: null,
    matches: [],
    isPremium: false,
    history: []
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
    initBrandTicker(); // New
    initGoogleLogin(); // New
    showPage('home');
});

// ========== NEW FEATURES ==========
function initStats() {
    const lang = state.language || 'en';
    const strings = UI_STRINGS[lang] || UI_STRINGS.en;
    const totalMenus = MENU_ITEMS.length;
    const uniqueBrands = new Set(MENU_ITEMS.map(item => item.brand)).size;
    const statsEl = document.getElementById('data-stats');
    if (statsEl) {
        const today = new Date().toISOString().split('T')[0];
        let text = (strings.statsTemplate || "Analyzing <strong>{brands} Brands</strong> & <strong>{menus} Menus</strong>")
            .replace('{brands}', uniqueBrands)
            .replace('{menus}', totalMenus)
            .replace('{today}', today);
        statsEl.innerHTML = text;
    }
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
            state.answers = { flavor: [] };
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
    const strings = UI_STRINGS[lang] || UI_STRINGS.en;

    // Update progress
    if (progressText) {
        let pText = (strings.questionProgress || 'Question {curr} of {total}')
            .replace('{curr}', state.currentQuestion + 1)
            .replace('{total}', QUIZ_QUESTIONS.length);
        progressText.textContent = pText;
    }
    if (progressFill) {
        const progress = ((state.currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
        progressFill.style.width = `${progress}%`;
    }

    // Localize back button
    const backBtnText = document.getElementById('back-btn-text');
    if (backBtnText) {
        backBtnText.textContent = strings.backBtn || 'Back';
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
function calculateResults() {
    const userSpiciness = state.answers.spiciness || 3;
    const userCrispiness = state.answers.crispiness || 3;
    const userComposition = state.answers.composition || 'any';
    const userFlavors = state.answers.flavor || [];

    // Filter first
    let candidates = MENU_ITEMS;
    if (userComposition !== 'any') {
        candidates = candidates.filter(item => {
            // Check if item.composition includes the selected one
            // item.composition is array of strings e.g. ["전체", "반반", "순살"]
            // userComposition is string e.g. "순살"
            return item.composition && item.composition.includes(userComposition);
        });
    }

    // Score
    const scored = candidates.map(item => {
        // 1. Spiciness Match (Max 30 pts)
        // distance: 0 (perfect) -> 30pts, 1 -> 20pts, 2 -> 10, ...
        const spiceDiff = Math.abs(userSpiciness - item.spiciness);
        const spiceScore = Math.max(0, 30 - (spiceDiff * 10));

        // 2. Crispiness Match (Max 30 pts)
        const crispDiff = Math.abs(userCrispiness - item.crispiness);
        const crispScore = Math.max(0, 30 - (crispDiff * 10));

        // 3. Flavor Match (Max 40 pts)
        // Count overlapping tags
        let matchCount = 0;
        if (userFlavors.length > 0) {
            matchCount = userFlavors.filter(tag => item.flavor_tags.includes(tag)).length;
            // Normalize: if user picked 3 tags and item has 2 matches -> great.
            // Let's just give points per match.
        }
        const flavorScore = Math.min(40, matchCount * 15); // 1 match=15, 2=30, 3=40(max)

        const totalScore = spiceScore + crispScore + flavorScore;
        const normalizedScore = Math.min(99, totalScore + 10); // base shift

        return { ...item, score: normalizedScore };
    });

    // Sort
    scored.sort((a, b) => b.score - a.score);
    state.matches = scored.slice(0, 3);

    // Build user profile text
    state.userProfile = {
        spiciness: userSpiciness,
        crispiness: userCrispiness,
        composition: userComposition,
        flavor: userFlavors.join(', ')
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
function getTranslatedBrand(brand, lang) {
    if (lang === 'ko') return brand;
    const t = BRAND_TRANSLATIONS[brand];
    return (t && t[lang]) ? t[lang] : brand;
}

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
    const koName = item.name;
    if (lang === 'ko') return item.description || '';

    // Check for specific description translation
    const t = MENU_DESCRIPTION_TRANSLATIONS[koName];
    if (t && t[lang]) return t[lang];

    // Fallback: Show Korean with an "Original" label for non-Korean users
    const label = lang === 'zh' ? '[韩文原文]' : (lang === 'ja' ? '[韓国語原文]' : '[Korean Original]');
    return item.description ? `${label} ${item.description}` : '';
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
              ${item.brandImage ? `<img class="match-card-brand-logo" src="${item.brandImage}" alt="${getTranslatedBrand(item.brand, lang)} logo" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : ''}
              <div class="match-card-brand">${getTranslatedBrand(item.brand, lang)}</div>
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
    const lang = state.language || 'en';
    const strings = getStrings();
    const noPicks = strings.noAccount || "No picks yet."; // fallback

    const historyList = document.getElementById('history-list');
    if (historyList) {
        if (state.history.length === 0) {
            historyList.innerHTML = `<p class="text-muted">${noPicks}</p>`;
        } else {
            historyList.innerHTML = state.history.slice(0, 5).map(item => {
                const displayName = getTranslatedName({ name: item.name }, lang);
                const displayBrand = getTranslatedBrand(item.brand || '', lang);
                return `
        <div class="history-item">
          <div>
            <div class="history-name">${displayName} (${displayBrand})</div>
            <div class="history-date">${item.date}</div>
          </div>
        </div>
      `;
            }).join('');
        }
    }
    renderProfileChips();
}

function renderProfileChips() {
    const container = document.getElementById('settings-profile-chips');
    if (!container) return;

    const lang = state.language || 'en';
    const chips = [];

    if (!state.answers) return;

    // Spiciness
    if (state.answers.spiciness) {
        const val = state.answers.spiciness;
        const text = (QUIZ_TRANSLATIONS.spiciness.options[val] && QUIZ_TRANSLATIONS.spiciness.options[val][lang])
            ? QUIZ_TRANSLATIONS.spiciness.options[val][lang] : `Spicy ${val}`;
        chips.push(`<span class="profile-chip">${text}</span>`);
    }
    // Crispiness
    if (state.answers.crispiness) {
        const val = state.answers.crispiness;
        const text = (QUIZ_TRANSLATIONS.crispiness.options[val] && QUIZ_TRANSLATIONS.crispiness.options[val][lang])
            ? QUIZ_TRANSLATIONS.crispiness.options[val][lang] : `Crispy ${val}`;
        chips.push(`<span class="profile-chip">${text}</span>`);
    }
    // Composition
    if (state.answers.composition && state.answers.composition !== 'any') {
        const val = state.answers.composition;
        const text = (QUIZ_TRANSLATIONS.composition.options[val] && QUIZ_TRANSLATIONS.composition.options[val][lang])
            ? QUIZ_TRANSLATIONS.composition.options[val][lang] : val;
        chips.push(`<span class="profile-chip">${text}</span>`);
    }
    // Flavor
    if (state.answers.flavor && state.answers.flavor.length > 0) {
        state.answers.flavor.forEach(f => {
            const text = (QUIZ_TRANSLATIONS.flavor.options[f] && QUIZ_TRANSLATIONS.flavor.options[f][lang])
                ? QUIZ_TRANSLATIONS.flavor.options[f][lang] : f;
            chips.push(`<span class="profile-chip">${text}</span>`);
        });
    }

    if (chips.length === 0) {
        const strings = getStrings();
        container.innerHTML = `<p class="text-muted" style="grid-column: 1/-1;">${strings.noAccount || "No profile yet"}</p>`;
    } else {
        container.innerHTML = chips.join('');
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
            brand: topMatch.brand,
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
            state.answers = data.answers || { spiciness: 3, crispiness: 3, composition: 'any', flavor: [] };
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

    // Text is now handled by applyTranslations

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

    // Header
    update('header-settings-btn', strings.headerSettings);
    update('header-premium-btn', strings.headerPremium);

    // Hero Section
    update('hero-headline', strings.heroHeadline);
    update('hero-sub', strings.heroSub);
    update('start-quiz-btn', strings.startBtn);
    update('btn-hero-secondary', strings.seeTopPicks);
    update('todays-weekly', strings.todaysWeekly);

    // Teaser items (static ones in HTML)
    update('teaser-badge-1', strings.topPick);
    update('teaser-badge-2', strings.lowMess);
    update('teaser-badge-3', strings.bestValue);
    update('teaser-title-1', strings.teaserTitle1);
    update('teaser-title-2', strings.teaserTitle2);
    update('teaser-title-3', strings.teaserTitle3);
    update('teaser-desc-1', strings.teaserSub1);
    update('teaser-desc-2', strings.teaserSub2);
    update('teaser-desc-3', strings.teaserSub3);

    // Quiz Buttons & Progress
    update('quiz-next', strings.nextBtn);
    update('quiz-skip', strings.skipBtn);
    update('back-btn-text', strings.backBtn);
    update('no-account-note', strings.noAccount);

    // Results Page
    update('results-title', strings.resultsTitle || 'Your Perfect Match');
    update('share-btn-text', strings.shareBtn || 'Share');
    update('btn-results-unlock', strings.unlockPremium || 'Unlock Premium');
    update('btn-results-retry', strings.tryAgain || 'Try another profile');
    update('locked-section-title', strings.lockedTitle || 'Premium Unlocks');

    // Locked items
    const lockedList = document.getElementById('locked-premium-section');
    if (lockedList) {
        const items = lockedList.querySelectorAll('.locked-item');
        if (items.length >= 4) {
            items[0].textContent = strings.lockedItem1 || items[0].textContent;
            items[1].textContent = strings.lockedItem2 || items[1].textContent;
            items[2].textContent = strings.lockedItem3 || items[2].textContent;
            items[3].textContent = strings.lockedItem4 || items[3].textContent;
        }
    }

    // Premium Page
    update('back-btn-text-premium', strings.backBtn);
    const premiumHeroTitle = document.querySelector('.premium-headline');
    if (premiumHeroTitle) premiumHeroTitle.textContent = strings.premiumHeroTitle || 'Go Full Sommelier';
    const premiumHeroSub = document.querySelector('.premium-sub');
    if (premiumHeroSub) premiumHeroSub.textContent = strings.premiumHeroSub || 'Start free for 1 month. Upgrade your orders instantly.';

    const featureItems = document.querySelectorAll('.feature-item .feature-text');
    if (featureItems.length >= 5) {
        featureItems[0].textContent = strings.feature1;
        featureItems[1].textContent = strings.feature2;
        featureItems[2].textContent = strings.feature3;
        featureItems[3].textContent = strings.feature4;
        featureItems[4].textContent = strings.feature5;
    }

    update('pricing-big', strings.pricingBig);
    update('pricing-small', strings.pricingSmall);
    update('pricing-micro', strings.pricingMicro);
    update('start-free-btn', strings.startBtn);

    update('trust-secure', strings.trustSecure);
    update('trust-no-hidden', strings.trustNoHidden);
    update('trust-cancel', strings.trustCancel);

    update('faq-q-1', strings.faqQ1);
    update('faq-a-1', strings.faqA1);
    update('faq-q-2', strings.faqQ2);
    update('faq-a-2', strings.faqA2);

    // Settings Page
    update('back-btn-text-settings', strings.backBtn);
    update('settings-header-title', strings.settingsTitle);
    update('settings-profile-title', strings.settingsProfile);
    update('settings-edit-quiz', strings.settingsEditQuiz);
    update('settings-history-title', strings.settingsHistory);
    update('settings-feedback-title', strings.settingsFeedback);
    update('settings-label-feedback', strings.settingsLabelFeedback);
    update('settings-label-issue', strings.settingsLabelIssue);
    update('settings-language-title', strings.settingsLang);
    update('settings-label-lang', strings.settingsLang);

    // Share Modal
    update('share-sheet-title', strings.shareModalTitle);
    update('share-sheet-subtitle', strings.shareModalSub);
    update('share-label-copy', strings.shareCopy);

    if (state.currentPage === 'home') initStats();
    if (state.currentPage === 'quiz') renderQuizQuestion();
    if (state.currentPage === 'results') renderResults();
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
function initBrandTicker() {
    const track = document.getElementById('brand-ticker-track');
    if (track) {
        const brands = [...new Set(MENU_ITEMS.map(item => item.brand))];
        const lang = state.language || 'en';

        // Double them for seamless loop
        const tickerBrands = [...brands, ...brands];

        track.innerHTML = tickerBrands.map(brand => {
            return `
                <div class="ticker-item">
                    <div class="ticker-logo" style="display:grid;place-items:center;font-size:12px;">🍗</div>
                    <span class="ticker-name">${getTranslatedBrand(brand, lang)}</span>
                </div>
            `;
        }).join('');
    }
}
