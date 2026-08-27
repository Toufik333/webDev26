/**
 * CTCI Study App — Storage Manager
 * Handles all localStorage persistence for progress, quiz results, and active chapter.
 */

const STORAGE_KEY = "ctci_progress";

const Storage = {
  /**
   * Returns the default progress object for a fresh start.
   */
  _defaultProgress() {
    const chapters = {};
    CHAPTERS.forEach((ch) => {
      chapters[ch.id] = {
        contentRead: false,
        quizCompleted: false,
        quizScore: null,
        answers: [],
      };
    });
    return {
      activeChapter: null,
      activeView: "dashboard", // 'dashboard' | 'content' | 'quiz' | 'results'
      chapters,
    };
  },

  /**
   * Load progress from localStorage, or create default if none exists.
   */
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Ensure all chapters exist (in case new chapters were added)
        CHAPTERS.forEach((ch) => {
          if (!parsed.chapters[ch.id]) {
            parsed.chapters[ch.id] = {
              contentRead: false,
              quizCompleted: false,
              quizScore: null,
              answers: [],
            };
          }
        });
        return parsed;
      }
    } catch (e) {
      console.warn("Failed to load progress, resetting:", e);
    }
    return this._defaultProgress();
  },

  /**
   * Save the entire progress object to localStorage.
   */
  save(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn("Failed to save progress:", e);
    }
  },

  /**
   * Mark a chapter's content as read.
   */
  markContentRead(progress, chapterId) {
    progress.chapters[chapterId].contentRead = true;
    this.save(progress);
  },

  /**
   * Save quiz results for a chapter.
   */
  saveQuizResult(progress, chapterId, score, answers) {
    progress.chapters[chapterId].quizCompleted = true;
    progress.chapters[chapterId].quizScore = score;
    progress.chapters[chapterId].answers = answers;
    this.save(progress);
  },

  /**
   * Set the active chapter and view.
   */
  setActive(progress, chapterId, view) {
    progress.activeChapter = chapterId;
    progress.activeView = view;
    this.save(progress);
  },

  /**
   * Get the count of fully completed chapters (content read + quiz done).
   */
  getCompletedCount(progress) {
    return CHAPTERS.filter(
      (ch) =>
        progress.chapters[ch.id].contentRead &&
        progress.chapters[ch.id].quizCompleted
    ).length;
  },

  /**
   * Get overall completion percentage.
   */
  getCompletionPercent(progress) {
    const total = CHAPTERS.length;
    if (total === 0) return 0;
    return Math.round((this.getCompletedCount(progress) / total) * 100);
  },

  /**
   * Reset all progress to defaults.
   */
  reset() {
    localStorage.removeItem(STORAGE_KEY);
    return this._defaultProgress();
  },
};
