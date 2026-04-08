(function () {
  const data = window.ASTRA_DATA;
  const appState = {
    screen: "accueil",
    tipCategory: "Tous",
    search: "",
    favorites: loadJson("astra-favorites", []),
    readTips: loadJson("astra-read-tips", []),
    completedQuizzes: loadJson("astra-completed-quizzes", []),
    quizScores: loadJson("astra-quiz-scores", {}),
    incidentChecks: data.incidentSteps.map(() => false),
    activeQuizId: data.quizzes[0].id,
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false
  };

  const els = {
    screens: document.querySelectorAll(".screen"),
    navButtons: document.querySelectorAll(".nav-btn"),
    gotoButtons: document.querySelectorAll("[data-goto]"),
    dailyTip: document.getElementById("daily-tip"),
    tipsList: document.getElementById("tips-list"),
    tipSearch: document.getElementById("tip-search"),
    tipFilters: document.getElementById("tip-filters"),
    favoritesList: document.getElementById("favorites-list"),
    tipModal: document.getElementById("tip-modal"),
    tipModalCategory: document.getElementById("tip-modal-category"),
    tipModalTitle: document.getElementById("tip-modal-title"),
    tipModalBody: document.getElementById("tip-modal-body"),
    tipModalNotes: document.getElementById("tip-modal-notes"),
    tipModalFavorite: document.getElementById("tip-modal-favorite"),
    statTips: document.getElementById("stat-tips"),
    statQuizzes: document.getElementById("stat-quizzes"),
    statFavs: document.getElementById("stat-favs"),
    statScore: document.getElementById("stat-score"),
    vigilanceLabel: document.getElementById("vigilance-label"),
    vigilanceBar: document.getElementById("vigilance-bar"),
    vigilanceText: document.getElementById("vigilance-text"),
    quizTabs: document.getElementById("quiz-tabs"),
    quizStartPanel: document.getElementById("quiz-start-panel"),
    quizTitle: document.getElementById("quiz-title"),
    quizSummary: document.getElementById("quiz-summary"),
    quizMeta: document.getElementById("quiz-meta"),
    startQuizBtn: document.getElementById("start-quiz"),
    quizPanel: document.getElementById("quiz-panel"),
    quizProgress: document.getElementById("quiz-progress"),
    quizScore: document.getElementById("quiz-score"),
    quizQuestion: document.getElementById("quiz-question"),
    answerList: document.getElementById("answer-list"),
    quizFeedback: document.getElementById("quiz-feedback"),
    nextQuestion: document.getElementById("next-question"),
    restartQuiz: document.getElementById("restart-quiz"),
    quizResetTop: document.getElementById("quiz-reset-top"),
    incidentChecklist: document.getElementById("incident-checklist"),
    markIncidentDone: document.getElementById("mark-incident-done"),
    resetIncident: document.getElementById("reset-incident")
  };

  const tipModalState = {
    tipId: null
  };

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function goto(screen) {
    appState.screen = screen;
    els.screens.forEach((node) => node.classList.toggle("active", node.dataset.screen === screen));
    els.navButtons.forEach((node) => node.classList.toggle("active", node.dataset.goto === screen));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function isFavorite(tipId) {
    return appState.favorites.includes(tipId);
  }

  function toggleFavorite(tipId) {
    const index = appState.favorites.indexOf(tipId);
    if (index >= 0) {
      appState.favorites.splice(index, 1);
    } else {
      appState.favorites.unshift(tipId);
    }
    saveJson("astra-favorites", appState.favorites);
    renderAll();
  }

  function markTipRead(tipId) {
    if (!appState.readTips.includes(tipId)) {
      appState.readTips.push(tipId);
      saveJson("astra-read-tips", appState.readTips);
    }
  }

  function renderStats() {
    const completedCount = appState.completedQuizzes.length;
    const totalScore = Object.values(appState.quizScores);
    const averageScore = totalScore.length
      ? Math.round(totalScore.reduce((sum, value) => sum + value, 0) / totalScore.length)
      : 0;
    const vigilance = Math.min(100, appState.readTips.length * 4 + completedCount * 10 + appState.favorites.length * 3 + averageScore / 2);
    let level = "Debutant";
    let text = "Continue avec les conseils et les quiz pour progresser.";
    if (vigilance >= 75) {
      level = "Expert";
      text = "Tu maitrises deja beaucoup de reflexes. Continue a faire monter le niveau.";
    } else if (vigilance >= 45) {
      level = "Intermediaire";
      text = "Tu avances bien. Les conseils et les quiz te font gagner en reflexe.";
    }

    els.statTips.textContent = String(appState.readTips.length);
    els.statQuizzes.textContent = String(completedCount);
    els.statFavs.textContent = String(appState.favorites.length);
    els.statScore.textContent = `${averageScore}%`;
    els.vigilanceLabel.textContent = level;
    els.vigilanceBar.style.width = `${Math.max(12, vigilance)}%`;
    els.vigilanceText.textContent = text;
  }

  function renderDailyTip() {
    const tip = data.tips.filter((item) => item.featured)[appState.readTips.length % data.tips.filter((item) => item.featured).length] || data.tips[0];
    els.dailyTip.innerHTML = `
      <div class="tip-topline">
        <span class="tip-tag">${tip.icon} ${tip.category}</span>
        <button class="mini-btn ${isFavorite(tip.id) ? "fav-btn active" : "secondary"}" data-tip-fav="${tip.id}">
          ${isFavorite(tip.id) ? "En favori" : "Ajouter"}
        </button>
      </div>
      <h3 class="tip-title">${tip.title}</h3>
      <p class="tip-body">${tip.body}</p>
      <div class="tip-actions">
        <button class="mini-btn primary" data-tip-open="${tip.id}">Voir le detail</button>
        <button class="mini-btn secondary" data-goto="conseils">Plus de conseils</button>
      </div>
    `;
  }

  function renderTipFilters() {
    const filters = data.categories.map((category) => {
      const active = category === appState.tipCategory ? "active" : "";
      return `<button class="chip ${active}" data-filter-category="${category}">${category}</button>`;
    });
    els.tipFilters.innerHTML = filters.join("");
  }

  function matchesSearch(tip) {
    const query = appState.search.trim().toLowerCase();
    if (!query) {
      return true;
    }
    return [tip.title, tip.body, tip.category, ...(tip.notes || [])].join(" ").toLowerCase().includes(query);
  }

  function renderTipsList() {
    const filtered = data.tips.filter((tip) => {
      const categoryOk = appState.tipCategory === "Tous" || tip.category === appState.tipCategory;
      return categoryOk && matchesSearch(tip);
    });

    if (!filtered.length) {
      els.tipsList.innerHTML = `
        <div class="empty-card">
          <strong>Aucun conseil trouve</strong>
          <p>Essaie un autre mot-cle ou une autre categorie.</p>
        </div>
      `;
      return;
    }

    els.tipsList.innerHTML = filtered.map((tip) => `
      <article class="tip-card" data-tip-card="${tip.id}">
        <div class="tip-topline">
          <span class="tip-tag">${tip.icon} ${tip.category}</span>
          <button class="mini-btn ${isFavorite(tip.id) ? "fav-btn active" : "secondary"}" data-tip-fav="${tip.id}">
            ${isFavorite(tip.id) ? "En favori" : "Favori"}
          </button>
        </div>
        <h3 class="tip-title">${tip.title}</h3>
        <p class="tip-body">${tip.body}</p>
        <div class="tip-actions">
          <button class="mini-btn primary" data-tip-open="${tip.id}">Voir le detail</button>
          <button class="mini-btn secondary" data-tip-read="${tip.id}">Marquer lu</button>
        </div>
      </article>
    `).join("");
  }

  function renderFavorites() {
    const favorites = appState.favorites.map((tipId) => data.tips.find((tip) => tip.id === tipId)).filter(Boolean);
    if (!favorites.length) {
      els.favoritesList.innerHTML = `
        <div class="empty-card">
          <strong>Aucun favori pour le moment</strong>
          <p>Ajoute des conseils ou des quiz a ton espace prefere pour les retrouver vite.</p>
        </div>
      `;
      return;
    }

    els.favoritesList.innerHTML = favorites.map((tip) => `
      <article class="tip-card">
        <div class="tip-topline">
          <span class="tip-tag">${tip.icon} ${tip.category}</span>
          <button class="mini-btn fav-btn active" data-tip-fav="${tip.id}">En favori</button>
        </div>
        <h3 class="tip-title">${tip.title}</h3>
        <p class="tip-body">${tip.body}</p>
        <div class="tip-actions">
          <button class="mini-btn primary" data-tip-open="${tip.id}">Voir le detail</button>
          <button class="mini-btn secondary" data-tip-read="${tip.id}">Marquer lu</button>
        </div>
      </article>
    `).join("");
  }

  function openTipModal(tipId) {
    const tip = data.tips.find((item) => item.id === tipId);
    if (!tip) {
      return;
    }
    tipModalState.tipId = tipId;
    markTipRead(tipId);
    els.tipModalCategory.textContent = `${tip.icon} ${tip.category}`;
    els.tipModalTitle.textContent = tip.title;
    els.tipModalBody.textContent = tip.body;
    els.tipModalNotes.innerHTML = `<strong>Bonnes pratiques</strong><br>${tip.notes.map((line) => `• ${line}`).join("<br>")}`;
    els.tipModalFavorite.textContent = isFavorite(tipId) ? "Retirer des favoris" : "Ajouter aux favoris";
    els.tipModal.classList.add("open");
    els.tipModal.setAttribute("aria-hidden", "false");
    renderAll();
  }

  function closeTipModal() {
    els.tipModal.classList.remove("open");
    els.tipModal.setAttribute("aria-hidden", "true");
    tipModalState.tipId = null;
  }

  function renderQuizTabs() {
    els.quizTabs.innerHTML = data.quizzes.map((quiz) => `
      <button class="chip ${quiz.id === appState.activeQuizId ? "active" : ""}" data-quiz-select="${quiz.id}">${quiz.title}</button>
    `).join("");
  }

  function getActiveQuiz() {
    return data.quizzes.find((quiz) => quiz.id === appState.activeQuizId) || data.quizzes[0];
  }

  function renderQuizIntro() {
    const quiz = getActiveQuiz();
    els.quizTitle.textContent = quiz.title;
    els.quizSummary.textContent = quiz.summary;
    els.quizMeta.innerHTML = `<span>${quiz.level}</span><span>${quiz.questions.length} questions</span><span>Score sauvegarde</span>`;
    els.quizStartPanel.hidden = false;
    els.quizPanel.hidden = true;
  }

  function startQuiz() {
    appState.quizIndex = 0;
    appState.quizScore = 0;
    appState.quizAnswered = false;
    els.quizStartPanel.hidden = true;
    els.quizPanel.hidden = false;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const quiz = getActiveQuiz();
    const question = quiz.questions[appState.quizIndex];
    appState.quizAnswered = false;
    els.quizProgress.textContent = `Question ${appState.quizIndex + 1} / ${quiz.questions.length}`;
    els.quizScore.textContent = `Score ${appState.quizScore}`;
    els.quizScore.classList.add("score");
    els.quizQuestion.textContent = question.q;
    els.quizFeedback.textContent = "";
    els.nextQuestion.hidden = true;
    els.restartQuiz.hidden = true;
    els.answerList.innerHTML = "";

    question.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.className = "answer-btn";
      btn.type = "button";
      btn.textContent = option;
      btn.addEventListener("click", () => handleAnswer(index));
      els.answerList.appendChild(btn);
    });
  }

  function completeQuiz() {
    const quiz = getActiveQuiz();
    if (!appState.completedQuizzes.includes(quiz.id)) {
      appState.completedQuizzes.push(quiz.id);
    }
    appState.quizScores[quiz.id] = Math.round((appState.quizScore / quiz.questions.length) * 100);
    saveJson("astra-completed-quizzes", appState.completedQuizzes);
    saveJson("astra-quiz-scores", appState.quizScores);
    renderStats();
  }

  function handleAnswer(index) {
    if (appState.quizAnswered) {
      return;
    }
    appState.quizAnswered = true;
    const quiz = getActiveQuiz();
    const question = quiz.questions[appState.quizIndex];
    const buttons = els.answerList.querySelectorAll(".answer-btn");

    buttons.forEach((button, buttonIndex) => {
      if (buttonIndex === question.answer) {
        button.classList.add("correct");
      } else if (buttonIndex === index) {
        button.classList.add("wrong");
      }
    });

    if (index === question.answer) {
      appState.quizScore += 1;
    }

    els.quizScore.textContent = `Score ${appState.quizScore}`;
    els.quizFeedback.textContent = question.explanation;

    if (appState.quizIndex < quiz.questions.length - 1) {
      els.nextQuestion.hidden = false;
    } else {
      els.quizFeedback.textContent = `${question.explanation} Score final: ${appState.quizScore}/${quiz.questions.length}.`;
      els.restartQuiz.hidden = false;
      completeQuiz();
    }
  }

  function renderIncidentChecklist() {
    els.incidentChecklist.innerHTML = data.incidentSteps.map((step, index) => `
      <label class="check-item">
        <input type="checkbox" data-incident-check="${index}" ${appState.incidentChecks[index] ? "checked" : ""}>
        <span>${step}</span>
      </label>
    `).join("");
  }

  function markAllIncident() {
    appState.incidentChecks = appState.incidentChecks.map(() => true);
    renderIncidentChecklist();
  }

  function resetIncident() {
    appState.incidentChecks = appState.incidentChecks.map(() => false);
    renderIncidentChecklist();
  }

  function buildFilterHandlers() {
    els.tipFilters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter-category]");
      if (!button) return;
      appState.tipCategory = button.dataset.filterCategory;
      renderAll();
    });
  }

  function buildQuizHandlers() {
    els.quizTabs.addEventListener("click", (event) => {
      const button = event.target.closest("[data-quiz-select]");
      if (!button) return;
      appState.activeQuizId = button.dataset.quizSelect;
      renderQuizIntro();
      renderQuizTabs();
    });

    els.startQuizBtn.addEventListener("click", startQuiz);
    els.nextQuestion.addEventListener("click", () => {
      appState.quizIndex += 1;
      renderQuizQuestion();
    });
    els.restartQuiz.addEventListener("click", startQuiz);
    els.quizResetTop.addEventListener("click", () => {
      renderQuizIntro();
      renderQuizTabs();
    });
  }

  function bindGeneralHandlers() {
    els.navButtons.forEach((button) => {
      button.addEventListener("click", () => goto(button.dataset.goto));
    });

    els.gotoButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const target = button.dataset.goto;
        if (!target) return;
        event.preventDefault();
        goto(target);
      });
    });

    els.tipSearch.addEventListener("input", (event) => {
      appState.search = event.target.value;
      renderTipsList();
    });

    els.tipsList.addEventListener("click", handleTipActions);
    els.favoritesList.addEventListener("click", handleTipActions);
    els.dailyTip.addEventListener("click", handleTipActions);
    els.tipModalFavorite.addEventListener("click", () => {
      if (tipModalState.tipId) {
        toggleFavorite(tipModalState.tipId);
        els.tipModalFavorite.textContent = isFavorite(tipModalState.tipId) ? "Retirer des favoris" : "Ajouter aux favoris";
      }
    });

    els.tipModal.addEventListener("click", (event) => {
      if (event.target.dataset.close === "modal") {
        closeTipModal();
      }
    });

    els.markIncidentDone.addEventListener("click", markAllIncident);
    els.resetIncident.addEventListener("click", resetIncident);

    els.incidentChecklist.addEventListener("change", (event) => {
      const input = event.target.closest("[data-incident-check]");
      if (!input) return;
      const index = Number(input.dataset.incidentCheck);
      appState.incidentChecks[index] = input.checked;
    });

    document.querySelectorAll(".utility-card").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "password") {
          openTipModal("tip-1");
        } else if (action === "phishing") {
          openTipModal("tip-14");
        } else if (action === "backup") {
          openTipModal("tip-21");
        } else if (action === "device") {
          openTipModal("tip-10");
        }
        goto("conseils");
      });
    });
  }

  function handleTipActions(event) {
    const favBtn = event.target.closest("[data-tip-fav]");
    const openBtn = event.target.closest("[data-tip-open]");
    const readBtn = event.target.closest("[data-tip-read]");
    const gotoBtn = event.target.closest("[data-goto]");

    if (favBtn) {
      toggleFavorite(favBtn.dataset.tipFav);
      return;
    }

    if (openBtn) {
      openTipModal(openBtn.dataset.tipOpen);
      return;
    }

    if (readBtn) {
      markTipRead(readBtn.dataset.tipRead);
      renderAll();
      return;
    }

    if (gotoBtn) {
      goto(gotoBtn.dataset.goto);
    }
  }

  function renderAll() {
    renderStats();
    renderDailyTip();
    renderTipFilters();
    renderTipsList();
    renderFavorites();
    renderQuizTabs();
    renderQuizIntro();
    renderIncidentChecklist();
  }

  bindGeneralHandlers();
  buildFilterHandlers();
  buildQuizHandlers();
  renderAll();
  goto("accueil");
})();
