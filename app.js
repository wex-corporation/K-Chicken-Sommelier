// K-Chicken Sommelier - App Logic

// ========== STATE MANAGEMENT ==========
const state = {
    currentPage: 'home',
    currentQuestion: 0,
    answers: {},
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
    showPage('home');
});

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
        optionsContainer.innerHTML = question.options.map((option, index) => {
            const labelText = qTrans?.options[option.value]?.[lang] || option.label;
            return `
      <button class="quiz-option ${state.answers[question.id] === option.value ? 'selected' : ''}" 
              data-value="${option.value}" 
              data-index="${index}">
        ${labelText}
      </button>
    `;
        }).join('');

        // Add click handlers
        optionsContainer.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => handleOptionSelect(question.id, btn.dataset.value));
        });
    }

    // Update button states
    updateQuizButtons();
}

function handleOptionSelect(questionId, value) {
    state.answers[questionId] = value;

    // Update visual selection
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.value === value);
    });

    updateQuizButtons();
}

function updateQuizButtons() {
    const question = QUIZ_QUESTIONS[state.currentQuestion];
    const nextBtn = document.getElementById('quiz-next');
    const hasAnswer = state.answers[question?.id];

    if (nextBtn) {
        nextBtn.disabled = !hasAnswer;

        // Update button text for last question
        if (state.currentQuestion === QUIZ_QUESTIONS.length - 1) {
            nextBtn.textContent = 'Get My Matches';
        } else {
            nextBtn.textContent = 'Next';
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
    // Build user tag weights from answers
    const userTags = {};

    QUIZ_QUESTIONS.forEach(question => {
        const answerValue = state.answers[question.id];
        if (answerValue) {
            const option = question.options.find(o => o.value === answerValue);
            if (option && option.tags) {
                Object.entries(option.tags).forEach(([tag, weight]) => {
                    userTags[tag] = (userTags[tag] || 0) + weight;
                });
            }
        }
    });

    // Score each menu item
    const scored = MENU_ITEMS.map(item => {
        let score = 0;
        Object.entries(item.tags).forEach(([tag, weight]) => {
            if (userTags[tag]) {
                score += weight * userTags[tag];
            }
        });

        // Normalize to 0-100
        const maxPossible = Object.values(item.tags).reduce((a, b) => a + b, 0) * 4;
        const normalizedScore = Math.min(99, Math.round((score / maxPossible) * 100) + 50);

        return { ...item, score: normalizedScore };
    });

    // Sort by score and take top 3
    scored.sort((a, b) => b.score - a.score);
    state.matches = scored.slice(0, 3);

    // Build user profile
    state.userProfile = {
        crunch: state.answers.crunch || 'Balanced',
        heat: state.answers.heat || 'None',
        mood: state.answers.mood || 'Clean',
        sauce: state.answers.sauce || 'Light',
        situation: state.answers.situation || 'Solo',
        goal: state.answers.goal || 'Taste'
    };

    // Save to history
    addToHistory();
    saveState();
}

// ========== RESULTS PAGE ==========
function renderResults() {
    renderProfileChips();
    renderMatchCards();
    updatePremiumSection();
}

function renderProfileChips() {
    const container = document.getElementById('profile-chips');
    const lang = state.language || 'en';
    const strings = UI_STRINGS[lang];

    if (!container || !state.userProfile) return;

    const chips = [
        { label: strings.crunch, value: state.userProfile.crunch },
        { label: strings.heat, value: state.userProfile.heat },
        { label: strings.sauce, value: state.userProfile.sauce }
    ];

    container.innerHTML = chips.map(chip => `
    <div class="profile-chip">
      <span class="profile-chip-label">${chip.label}:</span>
      <span class="profile-chip-value">${chip.value}</span>
    </div>
  `).join('');
}

function renderMatchCards() {
    const container = document.getElementById('match-cards');
    if (!container) return;

    const lang = state.language || 'en';
    const strings = UI_STRINGS[lang];

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
            <div class="match-card-score-label">${strings.matchScore}</div>
          </div>
        </div>
        <div class="mini-meters">
          <div class="mini-meter">
            <div class="mini-meter-label">${strings.crunch}</div>
            <div class="mini-meter-bar">
              <div class="mini-meter-fill" style="width: ${(item.crunchLevel || 0) * 33}%"></div>
            </div>
          </div>
          <div class="mini-meter">
            <div class="mini-meter-label">${strings.heat}</div>
            <div class="mini-meter-bar">
              <div class="mini-meter-fill" style="width: ${item.heatLevel * 20}%"></div>
            </div>
          </div>
          <div class="mini-meter">
            <div class="mini-meter-label">${strings.sauce}</div>
            <div class="mini-meter-bar">
              <div class="mini-meter-fill" style="width: ${item.sauceLevel * 20}%"></div>
            </div>
          </div>
        </div>
        <div class="match-card-reason">${item.characteristics || 'Perfect match for your taste profile.'}</div>
      </div>
    </div>
  `).join('');

    attachMatchCardImageFallbacks(container);
}

function attachMatchCardImageFallbacks(container) {
    container.querySelectorAll('.match-card-photo').forEach(img => {
        img.addEventListener('error', () => {
            const fallback = img.dataset.fallback;
            const isFallbackApplied = img.dataset.fallbackApplied === 'true';

            if (fallback && !isFallbackApplied) {
                img.dataset.fallbackApplied = 'true';
                img.src = fallback;
                return;
            }

            img.style.display = 'none';
            img.closest('.match-card-image')?.classList.add('is-placeholder');
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
    // Start free month buttons
    document.querySelectorAll('[data-action="start-premium"]').forEach(btn => {
        btn.addEventListener('click', handleStartPremium);
    });

    // Restore purchase
    document.querySelectorAll('[data-action="restore-purchase"]').forEach(btn => {
        btn.addEventListener('click', handleRestorePurchase);
    });
}

function handleStartPremium() {
    // Simulate subscription
    state.isPremium = true;
    saveState();

    // Update UI
    alert('🎉 Welcome to Premium! Your free month has started.');
    showPage('results');
}

function handleRestorePurchase() {
    // Check localStorage for premium status
    if (state.isPremium) {
        alert('✓ Your Premium subscription has been restored!');
    } else {
        alert('No previous subscription found.');
    }
}

// ========== SETTINGS ==========
function initSettings() {
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            langToggle.classList.toggle('active');
        });
    }

    // Edit taste quiz
    document.querySelectorAll('[data-action="edit-quiz"]').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentQuestion = 0;
            showPage('quiz');
        });
    });
}

function renderSettings() {
    // Render profile chips in settings
    const profileSection = document.getElementById('settings-profile-chips');
    const lang = state.language || 'en';
    const uiStrings = UI_STRINGS[lang];

    if (profileSection && state.userProfile) {
        const chips = Object.entries(state.userProfile).map(([key, value]) => {
            // Translate Key
            const label = uiStrings[key] || capitalize(key);

            // Translate Value (if available)
            const qTrans = QUIZ_TRANSLATIONS[key];
            const valTrans = qTrans?.options[value]?.[lang] || value;

            // Skip legacy keys if needed, or show them
            if (['situation', 'goal'].includes(key)) return '';

            return `
      <div class="profile-chip">
        <span class="profile-chip-label">${label}:</span>
        <span class="profile-chip-value">${valTrans}</span>
      </div>
    `;
        }).join('');
        profileSection.innerHTML = chips;
    }

    // Render history
    const historyList = document.getElementById('history-list');
    if (historyList) {
        if (state.history.length === 0) {
            historyList.innerHTML = '<p class="text-muted">No picks yet. Take the quiz!</p>';
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

    // Update premium banner
    const premiumBanner = document.getElementById('settings-premium-banner');
    if (premiumBanner) {
        if (state.isPremium) {
            premiumBanner.innerHTML = `
        <div class="premium-banner premium-active-banner">
          <div class="premium-banner-title">Premium Active</div>
          <div class="premium-banner-text">Next billing: March 6, 2026</div>
          <button class="btn btn-secondary" style="background: white; color: #1A1A1A;">Manage Subscription</button>
        </div>
      `;
        } else {
            premiumBanner.innerHTML = `
        <div class="premium-banner">
          <div class="premium-banner-title">Try Premium</div>
          <div class="premium-banner-text">First month free. Then $4.99/month.</div>
          <button class="btn btn-primary" data-action="start-premium">Start Free Month</button>
        </div>
      `;
            // Re-attach handler
            premiumBanner.querySelector('[data-action="start-premium"]')?.addEventListener('click', handleStartPremium);
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

        // Keep only last 10
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
            state.answers = data.answers || {};
        }
    } catch (e) {
        console.error('Failed to load state:', e);
    }
}

// ========== UTILITIES ==========
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Share functionality
// ========== LANGUAGES ==========
// ========== LANGUAGES ==========
function initLanguages() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            applyTranslations(lang);
        });
    });
}

function applyTranslations(lang) {
    state.language = lang;
    const strings = UI_STRINGS[lang];
    if (!strings) return;

    // Helper to safe update
    const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // Home Page
    updateText('hero-headline', strings.heroHeadline);
    updateText('hero-sub', strings.heroSub);
    updateText('start-quiz-btn', strings.startBtn);

    // Header & Quiz
    updateText('back-btn-text', strings.backBtn);
    updateText('quiz-next', strings.nextBtn);
    updateText('quiz-skip', strings.skipBtn);

    // Results
    updateText('results-title', strings.resultTitle);
    updateText('share-btn', strings.shareBtn);

    // Update active state on all buttons
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    console.log(`Language switched to: ${lang}`);

    // Re-render current content if needed
    if (state.currentPage === 'quiz') {
        renderQuizQuestion();
    } else if (state.currentPage === 'results') {
        renderResults(); // This re-renders match cards with new language
    } else if (state.currentPage === 'settings') {
        renderSettings();
    }
}

// ========== SHARE ==========
function initShare() {
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const text = state.matches.length > 0
                ? `My top K-chicken match: ${state.matches[0].name} (${state.matches[0].score}% match)!`
                : 'Find your perfect Korean chicken match!';

            if (navigator.share) {
                navigator.share({
                    title: 'K-Chicken Sommelier',
                    text: text,
                    url: window.location.href
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
                    alert('Copied to clipboard!');
                });
            }
        });
    }
}
window.shareResults = initShare; // Backwards compatibility just in case

