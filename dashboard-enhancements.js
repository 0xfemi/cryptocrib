// Dashboard Enhancements: XP System, Progress Tracking, Achievements
// Manages user progress, XP, streaks, and achievements

class DashboardEnhancements {
    constructor() {
        this.storageKeys = {
            progress: 'cryptocrib_progress',
            xp: 'cryptocrib_xp',
            streak: 'cryptocrib_streak',
            achievements: 'cryptocrib_achievements',
            stats: 'cryptocrib_stats'
        };
        this.init();
    }

    init() {
        this.loadUserData();
        this.updateDashboard();
        this.setupEventListeners();
    }

    loadUserData() {
        // Load or initialize user progress data
        this.progress = this.loadFromStorage(this.storageKeys.progress, {
            completedLessons: [],
            completedChapters: [],
            completedPaths: [],
            currentLessons: {}
        });

        this.xpData = this.loadFromStorage(this.storageKeys.xp, {
            totalXP: 0,
            currentLevel: 1,
            xpToNextLevel: 100
        });

        this.streakData = this.loadFromStorage(this.storageKeys.streak, {
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
            weeklyCalendar: this.initWeeklyCalendar()
        });

        this.achievements = this.loadFromStorage(this.storageKeys.achievements, []);

        this.stats = this.loadFromStorage(this.storageKeys.stats, {
            totalLessonsCompleted: 0,
            totalChaptersCompleted: 0,
            totalPathsCompleted: 0,
            averageScore: 0,
            totalQuizAttempts: 0,
            totalPerfectScores: 0
        });

        // Update streak for today
        this.updateStreak();
    }

    loadFromStorage(key, defaultValue) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error(`Error loading ${key}:`, e);
            return defaultValue;
        }
    }

    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error(`Error saving ${key}:`, e);
        }
    }

    initWeeklyCalendar() {
        const calendar = {};
        const today = new Date();
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateKey = date.toISOString().split('T')[0];
            calendar[dateKey] = {
                date: dateKey,
                lessonsCompleted: 0,
                xpEarned: 0,
                hasActivity: false
            };
        }
        return calendar;
    }

    updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayKey = yesterday.toISOString().split('T')[0];

        if (this.streakData.lastActivityDate === today) {
            // Already updated today
            return;
        }

        if (this.streakData.lastActivityDate === yesterdayKey) {
            // Continue streak
            this.streakData.currentStreak += 1;
        } else if (this.streakData.lastActivityDate !== today) {
            // Break streak
            if (this.streakData.currentStreak > this.streakData.longestStreak) {
                this.streakData.longestStreak = this.streakData.currentStreak;
            }
            this.streakData.currentStreak = 1;
        }

        this.streakData.lastActivityDate = today;
        this.saveToStorage(this.storageKeys.streak, this.streakData);
    }

    addXP(amount, reason = '') {
        this.xpData.totalXP += amount;
        
        // Check for level up
        const newLevel = this.calculateLevel(this.xpData.totalXP);
        if (newLevel > this.xpData.currentLevel) {
            this.xpData.currentLevel = newLevel;
            this.showLevelUpModal(newLevel);
        }

        this.xpData.xpToNextLevel = this.calculateXPToNextLevel(this.xpData.totalXP);
        this.saveToStorage(this.storageKeys.xp, this.xpData);
        this.updateXPDisplay();

        // Check for achievements
        this.checkAchievements();

        return { totalXP: this.xpData.totalXP, level: this.xpData.currentLevel };
    }

    calculateLevel(totalXP) {
        if (!window.USER_RANKS) return 1;
        let level = 1;
        for (let i = window.USER_RANKS.length - 1; i >= 0; i--) {
            if (totalXP >= window.USER_RANKS[i].xp) {
                level = window.USER_RANKS[i].rank;
                break;
            }
        }
        return level;
    }

    calculateXPToNextLevel(totalXP) {
        if (!window.USER_RANKS) return 100;
        const currentLevel = this.calculateLevel(totalXP);
        if (currentLevel >= window.USER_RANKS.length) return 0;
        const nextLevelXP = window.USER_RANKS.find(r => r.rank === currentLevel + 1)?.xp || totalXP;
        return Math.max(0, nextLevelXP - totalXP);
    }

    getUserRank() {
        if (!window.USER_RANKS) return { rank: 1, name: 'Crypto Curious', xp: 0, color: '#6B7280' };
        const level = this.xpData.currentLevel;
        return window.USER_RANKS.find(r => r.rank === level) || window.USER_RANKS[0];
    }

    completeLesson(lessonId, chapterId, pathId, xpEarned, score = null) {
        // Mark lesson as completed
        if (!this.progress.completedLessons.includes(lessonId)) {
            this.progress.completedLessons.push(lessonId);
            this.stats.totalLessonsCompleted += 1;
        }

        // Track current lesson progress
        if (!this.progress.currentLessons[chapterId]) {
            this.progress.currentLessons[chapterId] = [];
        }
        if (!this.progress.currentLessons[chapterId].includes(lessonId)) {
            this.progress.currentLessons[chapterId].push(lessonId);
        }

        // Update score stats
        if (score !== null) {
            this.stats.totalQuizAttempts += 1;
            if (score === 100) {
                this.stats.totalPerfectScores += 1;
            }
            // Update average score
            const totalScore = this.stats.averageScore * (this.stats.totalQuizAttempts - 1) + score;
            this.stats.averageScore = totalScore / this.stats.totalQuizAttempts;
        }

        // Add XP
        if (xpEarned > 0) {
            this.addXP(xpEarned, `Completed lesson: ${lessonId}`);
        }

        // Update weekly calendar
        this.updateWeeklyCalendar(xpEarned);

        // Check if chapter is complete
        this.checkChapterCompletion(chapterId, pathId);

        // Save progress
        this.saveToStorage(this.storageKeys.progress, this.progress);
        this.saveToStorage(this.storageKeys.stats, this.stats);
        
        this.updateDashboard();
    }

    updateWeeklyCalendar(xpEarned = 0) {
        const today = new Date().toISOString().split('T')[0];
        if (this.streakData.weeklyCalendar[today]) {
            this.streakData.weeklyCalendar[today].lessonsCompleted += 1;
            this.streakData.weeklyCalendar[today].xpEarned += xpEarned;
            this.streakData.weeklyCalendar[today].hasActivity = true;
        } else {
            // Initialize if not exists (shouldn't happen with initWeeklyCalendar)
            this.streakData.weeklyCalendar[today] = {
                date: today,
                lessonsCompleted: 1,
                xpEarned: xpEarned,
                hasActivity: true
            };
        }
        this.saveToStorage(this.storageKeys.streak, this.streakData);
    }

    checkChapterCompletion(chapterId, pathId) {
        if (!window.CURRICULUM || !window.CURRICULUM[pathId]) return;
        
        const path = window.CURRICULUM[pathId];
        const chapter = path.chapters.find(ch => ch.id === chapterId);
        if (!chapter) return;

        // Check if all lessons in chapter are completed
        const allLessonsCompleted = chapter.lessons.every(lesson => 
            this.progress.completedLessons.includes(lesson.id)
        );

        if (allLessonsCompleted && !this.progress.completedChapters.includes(chapterId)) {
            this.progress.completedChapters.push(chapterId);
            this.stats.totalChaptersCompleted += 1;
            this.addXP(100, `Completed chapter: ${chapter.title}`);
        }

        // Check if path is complete
        this.checkPathCompletion(pathId);
    }

    checkPathCompletion(pathId) {
        if (!window.CURRICULUM || !window.CURRICULUM[pathId]) return;
        
        const path = window.CURRICULUM[pathId];
        const allChaptersCompleted = path.chapters.every(chapter =>
            this.progress.completedChapters.includes(chapter.id)
        );

        if (allChaptersCompleted && !this.progress.completedPaths.includes(pathId)) {
            this.progress.completedPaths.push(pathId);
            this.stats.totalPathsCompleted += 1;
            this.addXP(500, `Completed path: ${path.title}`);
            this.unlockAchievement(`path-${pathId}`);
        }
    }

    checkAchievements() {
        // First lesson
        if (this.stats.totalLessonsCompleted >= 1 && !this.hasAchievement('first-lesson')) {
            this.unlockAchievement('first-lesson');
        }

        // First chapter
        if (this.stats.totalChaptersCompleted >= 1 && !this.hasAchievement('first-chapter')) {
            this.unlockAchievement('first-chapter');
        }

        // Streak achievements
        if (this.streakData.currentStreak >= 7 && !this.hasAchievement('streak-7')) {
            this.unlockAchievement('streak-7');
        }
        if (this.streakData.currentStreak >= 30 && !this.hasAchievement('streak-30')) {
            this.unlockAchievement('streak-30');
        }

        // Perfect scores
        if (this.stats.totalPerfectScores >= 10 && !this.hasAchievement('perfect-score')) {
            this.unlockAchievement('perfect-score');
        }

        // Code challenges (count lessons with type 'code' or 'challenge')
        const codeLessonsCount = this.progress.completedLessons.filter(lessonId => {
            // Would need to check lesson type from curriculum
            return lessonId.includes('challenge') || lessonId.includes('code');
        }).length;
        if (codeLessonsCount >= 20 && !this.hasAchievement('code-master')) {
            this.unlockAchievement('code-master');
        }
    }

    hasAchievement(achievementId) {
        return this.achievements.includes(achievementId);
    }

    unlockAchievement(achievementId) {
        if (this.hasAchievement(achievementId)) return;

        this.achievements.push(achievementId);
        this.saveToStorage(this.storageKeys.achievements, this.achievements);

        // Get achievement details
        if (window.ACHIEVEMENTS) {
            const achievement = window.ACHIEVEMENTS.find(a => a.id === achievementId);
            if (achievement) {
                this.showAchievementModal(achievement);
                this.addXP(achievement.xp, `Achievement: ${achievement.name}`);
            }
        }
    }

    showLevelUpModal(level) {
        const rank = window.USER_RANKS?.find(r => r.rank === level);
        if (!rank) return;

        // Create and show modal
        const modal = document.createElement('div');
        modal.className = 'level-up-modal';
        modal.innerHTML = `
            <div class="level-up-content">
                <div class="level-up-icon">🎉</div>
                <h2>Level Up!</h2>
                <h3>You've reached ${rank.name}</h3>
                <p>Level ${level}</p>
                <button class="btn-close-modal">Continue</button>
            </div>
        `;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);

        modal.querySelector('.btn-close-modal').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        });
    }

    showAchievementModal(achievement) {
        const modal = document.createElement('div');
        modal.className = 'achievement-modal';
        modal.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <h2>Achievement Unlocked!</h2>
                <h3>${achievement.name}</h3>
                <p>${achievement.description}</p>
                <p class="achievement-xp">+${achievement.xp} XP</p>
                <button class="btn-close-modal">Awesome!</button>
            </div>
        `;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);

        modal.querySelector('.btn-close-modal').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        });
    }

    updateDashboard() {
        this.updateXPDisplay();
        this.updateStreakDisplay();
        this.updateProgressCards();
        this.updateWeeklyCalendar();
        this.updateContinueLearning();
        this.updateLearningPaths();
        this.updateAchievements();
    }

    updateXPDisplay() {
        const xpValueEl = document.getElementById('user-xp-value');
        const levelRingEl = document.getElementById('level-ring');
        const rankNameEl = document.getElementById('user-rank-name');
        const xpProgressEl = document.getElementById('xp-progress-fill');

        if (xpValueEl) xpValueEl.textContent = this.xpData.totalXP.toLocaleString();

        const rank = this.getUserRank();
        if (rankNameEl) rankNameEl.textContent = rank.name;

        // Calculate progress to next level
        const currentLevelXP = window.USER_RANKS?.find(r => r.rank === this.xpData.currentLevel)?.xp || 0;
        const nextLevelXP = window.USER_RANKS?.find(r => r.rank === this.xpData.currentLevel + 1)?.xp || currentLevelXP + 100;
        const progressPercent = ((this.xpData.totalXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

        if (levelRingEl) {
            const circumference = 2 * Math.PI * 45; // radius = 45
            const offset = circumference - (progressPercent / 100) * circumference;
            levelRingEl.style.strokeDashoffset = offset;
        }

        if (xpProgressEl) {
            xpProgressEl.style.width = `${Math.min(100, progressPercent)}%`;
        }
    }

    updateStreakDisplay() {
        const streakValueEl = document.getElementById('streak-value');
        const streakLongestEl = document.getElementById('streak-longest');

        if (streakValueEl) streakValueEl.textContent = this.streakData.currentStreak;
        if (streakLongestEl) streakLongestEl.textContent = this.streakData.longestStreak;
    }

    updateProgressCards() {
        const lessonsCompletedEl = document.getElementById('lessons-completed');
        const chaptersCompletedEl = document.getElementById('chapters-completed');
        const avgScoreEl = document.getElementById('avg-score-value');

        if (lessonsCompletedEl) lessonsCompletedEl.textContent = this.stats.totalLessonsCompleted;
        if (chaptersCompletedEl) chaptersCompletedEl.textContent = this.stats.totalChaptersCompleted;
        if (avgScoreEl) avgScoreEl.textContent = `${Math.round(this.stats.averageScore)}%`;
    }

    updateWeeklyCalendar() {
        const calendarContainer = document.getElementById('weekly-calendar');
        if (!calendarContainer) return;

        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let html = '';

        // Get last 7 days
        const today = new Date();
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateKey = date.toISOString().split('T')[0];
            const dayData = this.streakData.weeklyCalendar[dateKey] || { hasActivity: false, lessonsCompleted: 0 };
            const dayName = weekDays[date.getDay()];
            const isToday = i === 0;

            html += `
                <div class="calendar-day ${dayData.hasActivity ? 'active' : ''} ${isToday ? 'today' : ''}">
                    <div class="day-name">${dayName}</div>
                    <div class="day-number">${date.getDate()}</div>
                    ${dayData.hasActivity ? `<div class="day-activity">${dayData.lessonsCompleted}</div>` : ''}
                </div>
            `;
        }

        calendarContainer.innerHTML = html;
    }

    updateContinueLearning() {
        // Find in-progress lessons
        const continueContainer = document.getElementById('continue-learning');
        if (!continueContainer) return;

        // This would be populated from currentLessons in progress
        // For now, show placeholder or first incomplete lesson
    }

    updateLearningPaths() {
        // Update path unlock status and progress
        if (!window.CURRICULUM) return;

        Object.keys(window.CURRICULUM).forEach(pathId => {
            const path = window.CURRICULUM[pathId];
            const pathCard = document.getElementById(`path-${pathId}`);
            if (!pathCard) return;

            // Check if path is unlocked
            const isUnlocked = !path.unlockedBy || this.progress.completedPaths.includes(path.unlockedBy);
            pathCard.classList.toggle('locked', !isUnlocked);

            // Calculate progress
            const completedChapters = path.chapters.filter(ch => 
                this.progress.completedChapters.includes(ch.id)
            ).length;
            const progressPercent = (completedChapters / path.chapters.length) * 100;

            const progressBar = pathCard.querySelector('.path-progress-fill');
            const progressText = pathCard.querySelector('.path-progress-text');
            if (progressBar) progressBar.style.width = `${progressPercent}%`;
            if (progressText) progressText.textContent = `${Math.round(progressPercent)}% Complete`;
        });
    }

    updateAchievements() {
        const achievementsContainer = document.getElementById('achievements-grid');
        if (!achievementsContainer || !window.ACHIEVEMENTS) return;

        let html = '';
        window.ACHIEVEMENTS.forEach(achievement => {
            const isUnlocked = this.hasAchievement(achievement.id);
            html += `
                <div class="achievement-badge ${isUnlocked ? 'unlocked' : 'locked'}">
                    <div class="achievement-icon-badge">${achievement.icon}</div>
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                    ${isUnlocked ? `<span class="achievement-xp-badge">+${achievement.xp} XP</span>` : ''}
                </div>
            `;
        });

        achievementsContainer.innerHTML = html;
    }

    setupEventListeners() {
        // Listen for lesson completion events
        window.addEventListener('lessonCompleted', (e) => {
            const { lessonId, chapterId, pathId, xpEarned, score } = e.detail;
            this.completeLesson(lessonId, chapterId, pathId, xpEarned, score);
        });
    }

    // Public methods for external use
    getProgress() {
        return this.progress;
    }

    getXPData() {
        return this.xpData;
    }

    getStreakData() {
        return this.streakData;
    }

    getAchievements() {
        return this.achievements;
    }

    getStats() {
        return this.stats;
    }
}

// Initialize on page load
let dashboardEnhancements;
if (typeof window !== 'undefined') {
    window.dashboardEnhancements = new DashboardEnhancements();
}

