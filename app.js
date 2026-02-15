// K-Chicken Sommelier - App Logic (Updated)

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
    initGoogleLogin(); // New
    showPage('home');
});

// ========== NEW FEATURES ==========
function initStats() {
    const totalMenus = MENU_ITEMS.length;
    const uniqueBrands = new Set(MENU_ITEMS.map(item => item.brand)).size;
    const statsEl = document.getElementById('data-stats');
    if (statsEl) {
        // Simple localization check (could be robust, but kept simple)
        const isKo = state.language === 'ko';
        statsEl.innerHTML = isKo
            ? `현재 <strong>${uniqueBrands}개 브랜드</strong>, <strong>${totalMenus}개 메뉴</strong> 분석 완료 📊`
            : `Currently analyzing <strong>${uniqueBrands} Brands</strong> & <strong>${totalMenus} Menus</strong> 📊`;
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
    container.innerHTML = question.options.map((option, index) => {
        const isSelected = state.answers[question.id] === option.value;
        return `
      <button class="quiz-option ${isSelected ? 'selected' : ''}" 
              data-type="single"
              data-question-id="${question.id}"
              data-value="${option.value}">
        ${option.label}
      </button>
    `;
    }).join('');

    attachOptionListeners(container);
}

function renderMultiSelectOptions(container, question) {
    container.innerHTML = question.options.map((option, index) => {
        const currentAnswers = state.answers[question.id] || [];
        const isSelected = currentAnswers.includes(option.value);
        return `
      <button class="quiz-option ${isSelected ? 'selected' : ''}" 
              data-type="multi"
              data-question-id="${question.id}"
              data-value="${option.value}">
        ${option.label}
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

function renderMatchCards() {
    const container = document.getElementById('match-cards');
    if (!container) return;

    // Translation not fully implemented in JS logic for new structure, fallback to EN keys or raw data
    const strings = getStrings();

    if (state.matches.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding: 2rem;">No matches found with these exact filters. Try loosening your criteria!</div>';
        return;
    }

    container.innerHTML = state.matches.map(item => `
    <div class="match-card">
      <div class="match-card-image" onclick="window.open('${item.menuPage}', '_blank')" style="cursor: pointer; overflow: hidden;">
        <img class="match-card-photo" src="${item.image}" data-fallback="${item.fallbackImage || ''}" alt="${item.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer">
        <div class="match-card-badge">
          <span class="badge ${item.badge === 'Spicy' ? 'badge-spicy' : ''}">${item.badge}</span>
        </div>
      </div>
      <div class="match-card-content">
        <div class="match-card-header">
          <div class="match-card-meta" onclick="window.open('${item.website}', '_blank')">
            <div class="match-card-name">${item.name} <span style="font-size: 12px; vertical-align: middle;">🔗</span></div>
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
                <div class="mini-meter-label">Spiciness</div>
                <div class="mini-meter-bar"><div class="mini-meter-fill" style="width: ${item.spiciness * 20}%"></div></div>
            </div>
            <div class="mini-meter">
                <div class="mini-meter-label">Crispiness</div>
                <div class="mini-meter-bar"><div class="mini-meter-fill" style="width: ${item.crispiness * 20}%"></div></div>
            </div>
        </div>
        
        <div style="margin-top: 8px; font-size: 12px; color: #666;">
            <strong>Features:</strong> ${item.flavor_tags.join(', ')}
        </div>

        <div class="match-card-reason">${item.description || ''}</div>
      </div>
    </div>
  `).join('');

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
function initShare() {
    // Header share button (if kept)
    document.getElementById('share-btn')?.addEventListener('click', () => handleSharePlatform('Link'));

    // Results page share button
    const resShare = document.getElementById('btn-results-share');
    if (resShare) {
        resShare.addEventListener('click', () => {
            // Mock share
            const lang = state.language || 'en';
            const isKo = lang === 'ko';
            const isZh = lang === 'zh';
            const isJa = lang === 'ja';

            let msg = "Results copied to clipboard!";
            if (isKo) msg = "결과가 클립보드에 복사되었습니다!";
            else if (isZh) msg = "结果已复制到剪贴板！";
            else if (isJa) msg = "結果がクリップボードにコピーされました！";

            alert(msg);
        });
    }

    document.querySelectorAll('[data-share-close]').forEach(el => {
        el.addEventListener('click', closeShareModal);
    });

    // Platform buttons
    document.querySelectorAll('[data-share-platform]').forEach(btn => {
        btn.addEventListener('click', () => {
            handleSharePlatform(btn.dataset.sharePlatform);
        });
    });
}

function openShareModal() {
    const modal = document.getElementById('share-modal');
    if (modal) {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    }
}

function closeShareModal() {
    const modal = document.getElementById('share-modal');
    if (modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }
}

async function handleSharePlatform(platform) {
    // Placeholder share logic for now
    alert(`Shared to ${platform}!`);
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

    // Re-render quiz if active
    if (state.currentPage === 'quiz') {
        renderQuizQuestion();
    }

    // Re-render results/cards if active 
    if (state.currentPage === 'results') {
        renderResults();
    }
}
