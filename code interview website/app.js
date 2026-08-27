/**
 * CTCI Study App — Application Controller
 * SPA router, view rendering, quiz engine, and UI interactions.
 */

(function () {
  "use strict";

  // ── State ────────────────────────────────────────────────
  let progress = Storage.load();
  let currentQuizIndex = 0;
  let currentQuizAnswers = [];
  let quizSubmitted = false;
  let sidebarOpen = false;

  const app = document.getElementById("app");

  // ── Init ─────────────────────────────────────────────────
  function init() {
    render();
    window.addEventListener("popstate", () => {
      render();
    });
  }

  // ── Router / Main Render ─────────────────────────────────
  function render() {
    const view = progress.activeView || "dashboard";
    const chId = progress.activeChapter;

    let pageHTML = "";

    switch (view) {
      case "content":
        pageHTML = renderContentView(chId);
        break;
      case "quiz":
        pageHTML = renderQuizView(chId);
        break;
      case "results":
        pageHTML = renderResultsView(chId);
        break;
      default:
        pageHTML = renderDashboard();
    }

    app.innerHTML = `
      <div class="sidebar-overlay" id="sidebarOverlay"></div>
      ${renderSidebar()}
      <div class="main-content">
        ${renderTopBar(view, chId)}
        <div class="page-container">
          ${pageHTML}
        </div>
      </div>
    `;

    attachEvents();
    applyStaggerAnimation();
  }

  // ── Sidebar ──────────────────────────────────────────────
  function renderSidebar() {
    const completed = Storage.getCompletedCount(progress);
    const total = CHAPTERS.length;
    const pct = Storage.getCompletionPercent(progress);

    let chaptersHTML = CHAPTERS.map((ch) => {
      const chProg = progress.chapters[ch.id];
      const isActive = progress.activeChapter === ch.id && progress.activeView !== "dashboard";

      let statusText = "Not started";
      let badgeClass = "badge-locked";
      let badgeIcon = "○";

      if (chProg.quizCompleted) {
        statusText = `Score: ${chProg.quizScore}/5`;
        badgeClass = "badge-completed";
        badgeIcon = "✓";
      } else if (chProg.contentRead) {
        statusText = "Quiz ready";
        badgeClass = "badge-in-progress";
        badgeIcon = "▸";
      }

      return `
        <div class="chapter-nav-item ${isActive ? "active" : ""}" data-chapter="${ch.id}">
          <div class="chapter-nav-icon">${ch.icon}</div>
          <div class="chapter-nav-info">
            <div class="chapter-nav-name">${ch.title}</div>
            <div class="chapter-nav-status">${statusText}</div>
          </div>
          <div class="chapter-nav-badge ${badgeClass}">${badgeIcon}</div>
        </div>
      `;
    }).join("");

    return `
      <aside class="sidebar ${sidebarOpen ? "open" : ""}" id="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-brand" id="goHome">
            <div class="sidebar-logo">C</div>
            <div>
              <div class="sidebar-title">CTCI Prep</div>
              <div class="sidebar-subtitle">Study Dashboard</div>
            </div>
          </div>
        </div>
        <div class="sidebar-progress">
          <div class="progress-label">
            <span>Progress</span>
            <span>${completed}/${total} · ${pct}%</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
          </div>
        </div>
        <div class="sidebar-chapters">
          <div class="sidebar-section-label">Chapters</div>
          ${chaptersHTML}
        </div>
        <div class="sidebar-footer">
          <button class="btn-reset" id="btnReset">↺ Reset All Progress</button>
        </div>
      </aside>
    `;
  }

  // ── Top Bar ──────────────────────────────────────────────
  function renderTopBar(view, chId) {
    let breadcrumbs = `<span class="breadcrumb-link" data-nav="dashboard">Dashboard</span>`;

    if (view !== "dashboard" && chId) {
      const ch = CHAPTERS.find((c) => c.id === chId);
      breadcrumbs += `<span class="breadcrumb-sep">›</span>`;
      if (view === "content") {
        breadcrumbs += `<span class="breadcrumb-current">${ch.title}</span>`;
      } else if (view === "quiz") {
        breadcrumbs += `<span class="breadcrumb-link" data-nav="content" data-chapter="${chId}">${ch.title}</span>`;
        breadcrumbs += `<span class="breadcrumb-sep">›</span>`;
        breadcrumbs += `<span class="breadcrumb-current">Quiz</span>`;
      } else if (view === "results") {
        breadcrumbs += `<span class="breadcrumb-link" data-nav="content" data-chapter="${chId}">${ch.title}</span>`;
        breadcrumbs += `<span class="breadcrumb-sep">›</span>`;
        breadcrumbs += `<span class="breadcrumb-current">Results</span>`;
      }
    }

    return `
      <header class="top-bar">
        <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
        <nav class="breadcrumb">${breadcrumbs}</nav>
      </header>
    `;
  }

  // ── Dashboard View ───────────────────────────────────────
  function renderDashboard() {
    const completed = Storage.getCompletedCount(progress);
    const total = CHAPTERS.length;
    const totalQuestions = CHAPTERS.reduce((sum, ch) => sum + ch.quiz.length, 0);
    const answeredCorrect = CHAPTERS.reduce((sum, ch) => {
      const p = progress.chapters[ch.id];
      return sum + (p.quizScore || 0);
    }, 0);

    let cardsHTML = CHAPTERS.map((ch, i) => {
      const chProg = progress.chapters[ch.id];

      let statusClass = "status-not-started";
      let statusLabel = "Not Started";
      let scoreText = "";

      if (chProg.quizCompleted) {
        statusClass = "status-completed";
        statusLabel = "✓ Completed";
        scoreText = `${chProg.quizScore}/${ch.quiz.length}`;
      } else if (chProg.contentRead) {
        statusClass = "status-quiz-ready";
        statusLabel = "▸ Quiz Ready";
      }

      const cardClass = chProg.quizCompleted ? "completed" : chProg.contentRead ? "in-progress" : "";

      return `
        <div class="chapter-card ${cardClass}" data-chapter="${ch.id}" style="animation-delay: ${i * 0.06}s">
          <div class="card-header">
            <div class="card-icon">${ch.icon}</div>
            <div class="card-number">CH ${String(ch.id).padStart(2, "0")}</div>
          </div>
          <div class="card-title">${ch.title}</div>
          <div class="card-description">${ch.description}</div>
          <div class="card-footer">
            <div class="card-status ${statusClass}">${statusLabel}</div>
            ${scoreText ? `<div class="card-score">Score: ${scoreText}</div>` : ""}
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="dashboard-hero">
        <span class="hero-icon">🧠</span>
        <h1 class="hero-title">Cracking the Coding Interview</h1>
        <p class="hero-subtitle">Master data structures, algorithms, and system design through focused study and interactive quizzes.</p>
        <div class="stats-row">
          <div class="stat-item">
            <div class="stat-value">${completed}/${total}</div>
            <div class="stat-label">Chapters</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${answeredCorrect}/${totalQuestions}</div>
            <div class="stat-label">Correct Answers</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${Storage.getCompletionPercent(progress)}%</div>
            <div class="stat-label">Complete</div>
          </div>
        </div>
      </div>
      <div class="chapters-grid">${cardsHTML}</div>
    `;
  }

  // ── Content View ─────────────────────────────────────────
  function renderContentView(chId) {
    const ch = CHAPTERS.find((c) => c.id === chId);
    if (!ch) return renderDashboard();

    const chProg = progress.chapters[ch.id];

    let conceptsHTML = ch.concepts.map((concept, i) => {
      let bigOHTML = "";
      if (concept.bigO) {
        const rows = Object.entries(concept.bigO)
          .map(([op, complexity]) => {
            const label = op.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
            return `<tr><td>${label}</td><td>${complexity}</td></tr>`;
          })
          .join("");
        bigOHTML = `
          <table class="bigo-table">
            <thead><tr><th>Operation</th><th>Complexity</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        `;
      }

      const tipsHTML = concept.tips
        ? `
          <div class="tips-section">
            <div class="tips-title">💡 Key Tips</div>
            <ul class="tips-list">
              ${concept.tips.map((t) => `<li>${t}</li>`).join("")}
            </ul>
          </div>
        `
        : "";

      return `
        <div class="concept-card" style="animation-delay: ${i * 0.08}s">
          <h3 class="concept-title">${concept.title}</h3>
          <p class="concept-content">${concept.content}</p>
          ${bigOHTML}
          ${tipsHTML}
        </div>
      `;
    }).join("");

    const nextChapter = CHAPTERS.find((c) => c.id === ch.id + 1);
    const isRead = chProg.contentRead;

    return `
      <div class="content-header">
        <span class="content-chapter-icon">${ch.icon}</span>
        <div class="content-chapter-label">Chapter ${ch.id} of ${CHAPTERS.length}</div>
        <h1 class="content-chapter-title">${ch.title}</h1>
        <p class="content-chapter-desc">${ch.description}</p>
      </div>
      <div class="content-stage-label">📖 Stage 1 — Key Concepts</div>
      ${conceptsHTML}
      <div class="content-actions">
        ${
          !isRead
            ? `<button class="btn btn-primary" id="btnMarkRead">✓ Mark as Read & Unlock Quiz</button>`
            : `<button class="btn btn-primary" id="btnStartQuiz">▸ Start Quiz</button>`
        }
        ${
          chProg.quizCompleted
            ? `<button class="btn btn-secondary" id="btnViewResults" data-chapter="${ch.id}">📊 View Results</button>`
            : ""
        }
        ${
          nextChapter
            ? `<button class="btn btn-secondary" id="btnNextChapter" data-chapter="${nextChapter.id}">Next: ${nextChapter.title} →</button>`
            : ""
        }
      </div>
    `;
  }

  // ── Quiz View ────────────────────────────────────────────
  function renderQuizView(chId) {
    const ch = CHAPTERS.find((c) => c.id === chId);
    if (!ch) return renderDashboard();

    const q = ch.quiz[currentQuizIndex];
    const total = ch.quiz.length;
    const pct = ((currentQuizIndex + 1) / total) * 100;

    const selectedAnswer = currentQuizAnswers[currentQuizIndex];
    const hasAnswered = selectedAnswer !== undefined;

    const optionsHTML = q.options.map((opt, i) => {
      let optClass = "";
      if (hasAnswered && quizSubmitted) {
        if (i === q.correct) optClass = "correct";
        else if (i === selectedAnswer && i !== q.correct) optClass = "incorrect";
        optClass += " disabled";
      } else if (i === selectedAnswer) {
        optClass = "selected";
      }

      const letters = ["A", "B", "C", "D"];
      return `
        <div class="quiz-option ${optClass}" data-option="${i}" ${hasAnswered && quizSubmitted ? "" : ""}>
          <span class="quiz-option-letter">${letters[i]}</span>
          <span class="quiz-option-text">${opt}</span>
        </div>
      `;
    }).join("");

    let feedbackHTML = "";
    if (hasAnswered && quizSubmitted) {
      const isCorrect = selectedAnswer === q.correct;
      feedbackHTML = `
        <div class="quiz-feedback ${isCorrect ? "correct" : "incorrect"}">
          <div class="feedback-label">${isCorrect ? "✓ Correct!" : "✗ Incorrect"}</div>
          <div>${q.explanation}</div>
        </div>
      `;
    }

    const isLast = currentQuizIndex === total - 1;

    return `
      <div class="quiz-header">
        <div class="content-chapter-label">Chapter ${ch.id}: ${ch.title}</div>
        <h1 class="content-chapter-title">Practice Quiz</h1>
        <div class="content-stage-label">📝 Stage 2 — Test Your Knowledge</div>
      </div>
      <div class="quiz-progress-row">
        <span class="quiz-progress-text">Question ${currentQuizIndex + 1} of ${total}</span>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${pct}%"></div>
        </div>
      </div>
      <div class="quiz-question-card">
        <div class="quiz-question-number">Question ${currentQuizIndex + 1}</div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options">${optionsHTML}</div>
        ${feedbackHTML}
      </div>
      <div class="quiz-actions">
        ${
          !hasAnswered || !quizSubmitted
            ? `<button class="btn btn-primary" id="btnSubmitAnswer" ${selectedAnswer === undefined ? "disabled" : ""}>Submit Answer</button>`
            : isLast
              ? `<button class="btn btn-primary" id="btnFinishQuiz">Finish Quiz →</button>`
              : `<button class="btn btn-primary" id="btnNextQuestion">Next Question →</button>`
        }
        <button class="btn btn-secondary" id="btnBackToContent" data-chapter="${ch.id}">← Back to Content</button>
      </div>
    `;
  }

  // ── Results View ─────────────────────────────────────────
  function renderResultsView(chId) {
    const ch = CHAPTERS.find((c) => c.id === chId);
    if (!ch) return renderDashboard();

    const chProg = progress.chapters[ch.id];
    const score = chProg.quizScore || 0;
    const total = ch.quiz.length;
    const pct = Math.round((score / total) * 100);
    const nextChapter = CHAPTERS.find((c) => c.id === ch.id + 1);

    // SVG circle math
    const radius = 58;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pct / 100) * circumference;

    let emoji, title, message;
    if (pct === 100) {
      emoji = "🏆";
      title = "Perfect Score!";
      message = "Outstanding! You've mastered every concept in this chapter. Ready for the next challenge?";
    } else if (pct >= 80) {
      emoji = "🌟";
      title = "Excellent Work!";
      message = "Great understanding! A quick review of the missed questions will solidify your knowledge.";
    } else if (pct >= 60) {
      emoji = "💪";
      title = "Good Effort!";
      message = "You're on the right track. Review the key concepts and try again to boost your score.";
    } else {
      emoji = "📖";
      title = "Keep Studying!";
      message = "Don't worry — revisit the content and try the quiz again. Practice makes perfect!";
    }

    return `
      <div class="results-card">
        <span class="results-icon">${emoji}</span>
        <h1 class="results-title">${title}</h1>
        <p class="results-chapter">Chapter ${ch.id}: ${ch.title}</p>
        <div class="results-score-ring">
          <svg viewBox="0 0 140 140">
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--accent-1)" />
                <stop offset="100%" stop-color="var(--accent-2)" />
              </linearGradient>
            </defs>
            <circle class="ring-bg" cx="70" cy="70" r="${radius}" />
            <circle class="ring-fill" cx="70" cy="70" r="${radius}"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${offset}" />
          </svg>
          <div class="results-score-value">
            <div class="results-score-number">${score}/${total}</div>
            <div class="results-score-label">${pct}%</div>
          </div>
        </div>
        <p class="results-message">${message}</p>
        <div class="results-actions">
          <button class="btn btn-primary" id="btnRetryQuiz" data-chapter="${ch.id}">↺ Retry Quiz</button>
          ${nextChapter ? `<button class="btn btn-secondary" id="btnNextChapter" data-chapter="${nextChapter.id}">Next: ${nextChapter.title} →</button>` : ""}
          <button class="btn btn-secondary" data-nav="dashboard">← Dashboard</button>
        </div>
      </div>
    `;
  }

  // ── Confirmation Modal ───────────────────────────────────
  function showResetModal() {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "resetModal";
    overlay.innerHTML = `
      <div class="modal-card">
        <span class="modal-icon">⚠️</span>
        <h2 class="modal-title">Reset All Progress?</h2>
        <p class="modal-text">This will erase all your reading progress, quiz scores, and saved answers. This action cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn btn-reset" id="confirmReset" style="width:auto;padding:10px 24px;">Yes, Reset</button>
          <button class="btn btn-secondary" id="cancelReset">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("confirmReset").addEventListener("click", () => {
      progress = Storage.reset();
      currentQuizIndex = 0;
      currentQuizAnswers = [];
      quizSubmitted = false;
      overlay.remove();
      navigateTo("dashboard", null);
    });

    document.getElementById("cancelReset").addEventListener("click", () => {
      overlay.remove();
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
  }

  // ── Navigation ───────────────────────────────────────────
  function navigateTo(view, chapterId) {
    sidebarOpen = false;
    Storage.setActive(progress, chapterId, view);
    if (view === "quiz") {
      // Reset quiz state when entering fresh
      const chProg = progress.chapters[chapterId];
      if (chProg && chProg.quizCompleted) {
        // Retaking — clear old answers
        currentQuizIndex = 0;
        currentQuizAnswers = [];
        quizSubmitted = false;
      } else {
        currentQuizIndex = 0;
        currentQuizAnswers = [];
        quizSubmitted = false;
      }
    }
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Event Attachment ─────────────────────────────────────
  function attachEvents() {
    // Sidebar chapter clicks
    document.querySelectorAll(".chapter-nav-item[data-chapter]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = parseInt(el.dataset.chapter);
        navigateTo("content", id);
      });
    });

    // Dashboard chapter card clicks
    document.querySelectorAll(".chapter-card[data-chapter]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = parseInt(el.dataset.chapter);
        navigateTo("content", id);
      });
    });

    // Go home
    const goHome = document.getElementById("goHome");
    if (goHome) {
      goHome.addEventListener("click", () => navigateTo("dashboard", null));
    }

    // Breadcrumb navigation
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.addEventListener("click", () => {
        const view = el.dataset.nav;
        const chId = el.dataset.chapter ? parseInt(el.dataset.chapter) : null;
        navigateTo(view, chId);
      });
    });

    // Mark as Read
    const btnMarkRead = document.getElementById("btnMarkRead");
    if (btnMarkRead) {
      btnMarkRead.addEventListener("click", () => {
        Storage.markContentRead(progress, progress.activeChapter);
        render();
      });
    }

    // Start Quiz
    const btnStartQuiz = document.getElementById("btnStartQuiz");
    if (btnStartQuiz) {
      btnStartQuiz.addEventListener("click", () => {
        navigateTo("quiz", progress.activeChapter);
      });
    }

    // View Results
    const btnViewResults = document.getElementById("btnViewResults");
    if (btnViewResults) {
      btnViewResults.addEventListener("click", () => {
        navigateTo("results", parseInt(btnViewResults.dataset.chapter));
      });
    }

    // Quiz option selection
    document.querySelectorAll(".quiz-option:not(.disabled)").forEach((el) => {
      el.addEventListener("click", () => {
        if (quizSubmitted) return;
        const idx = parseInt(el.dataset.option);
        currentQuizAnswers[currentQuizIndex] = idx;
        render();
      });
    });

    // Submit answer
    const btnSubmit = document.getElementById("btnSubmitAnswer");
    if (btnSubmit) {
      btnSubmit.addEventListener("click", () => {
        if (currentQuizAnswers[currentQuizIndex] === undefined) return;
        quizSubmitted = true;
        render();
      });
    }

    // Next question
    const btnNext = document.getElementById("btnNextQuestion");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        currentQuizIndex++;
        quizSubmitted = false;
        render();
      });
    }

    // Finish quiz
    const btnFinish = document.getElementById("btnFinishQuiz");
    if (btnFinish) {
      btnFinish.addEventListener("click", () => {
        const ch = CHAPTERS.find((c) => c.id === progress.activeChapter);
        let score = 0;
        ch.quiz.forEach((q, i) => {
          if (currentQuizAnswers[i] === q.correct) score++;
        });
        Storage.saveQuizResult(progress, ch.id, score, [...currentQuizAnswers]);
        navigateTo("results", ch.id);
      });
    }

    // Back to content
    const btnBack = document.getElementById("btnBackToContent");
    if (btnBack) {
      btnBack.addEventListener("click", () => {
        navigateTo("content", parseInt(btnBack.dataset.chapter));
      });
    }

    // Next chapter
    const btnNextCh = document.getElementById("btnNextChapter");
    if (btnNextCh) {
      btnNextCh.addEventListener("click", () => {
        navigateTo("content", parseInt(btnNextCh.dataset.chapter));
      });
    }

    // Retry quiz
    const btnRetry = document.getElementById("btnRetryQuiz");
    if (btnRetry) {
      btnRetry.addEventListener("click", () => {
        const chId = parseInt(btnRetry.dataset.chapter);
        // Clear previous results so user can retake
        progress.chapters[chId].quizCompleted = false;
        progress.chapters[chId].quizScore = null;
        progress.chapters[chId].answers = [];
        Storage.save(progress);
        navigateTo("quiz", chId);
      });
    }

    // Reset
    const btnReset = document.getElementById("btnReset");
    if (btnReset) {
      btnReset.addEventListener("click", showResetModal);
    }

    // Mobile menu
    const mobileBtn = document.getElementById("mobileMenuBtn");
    if (mobileBtn) {
      mobileBtn.addEventListener("click", () => {
        sidebarOpen = !sidebarOpen;
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("sidebarOverlay");
        if (sidebar) sidebar.classList.toggle("open", sidebarOpen);
        if (overlay) overlay.classList.toggle("visible", sidebarOpen);
      });
    }

    // Sidebar overlay close
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener("click", () => {
        sidebarOpen = false;
        const sidebar = document.getElementById("sidebar");
        if (sidebar) sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("visible");
      });
    }
  }

  // ── Stagger Animation Helper ─────────────────────────────
  function applyStaggerAnimation() {
    document.querySelectorAll(".chapter-card, .concept-card").forEach((el, i) => {
      el.style.animationDelay = `${i * 0.06}s`;
    });
  }

  // ── Boot ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", init);
})();
