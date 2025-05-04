document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const usernameInput = document.getElementById('username');
    const themeSelect = document.getElementById('theme');
    const savePrefsBtn = document.getElementById('savePrefs');
    const targetBox = document.getElementById('targetBox');
    const bounceBtn = document.getElementById('bounceBtn');
    const spinBtn = document.getElementById('spinBtn');
    const colorBtn = document.getElementById('colorBtn');

    // Load saved preferences
    loadPreferences();

    // Save preferences to localStorage
    savePrefsBtn.addEventListener('click', function() {
        const preferences = {
            username: usernameInput.value,
            theme: themeSelect.value
        };
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        applyTheme(preferences.theme);
        alert('Preferences saved!');
    });

    // Animation controls
    bounceBtn.addEventListener('click', function() {
        targetBox.classList.remove('spin', 'color-transition');
        targetBox.classList.toggle('bounce');
    });

    spinBtn.addEventListener('click', function() {
        targetBox.classList.remove('bounce', 'color-transition');
        targetBox.classList.toggle('spin');
    });

    colorBtn.addEventListener('click', function() {
        targetBox.classList.remove('bounce', 'spin');
        targetBox.classList.toggle('color-transition');
    });

    // Load preferences from localStorage
    function loadPreferences() {
        const savedPrefs = localStorage.getItem('userPreferences');
        if (savedPrefs) {
            const preferences = JSON.parse(savedPrefs);
            usernameInput.value = preferences.username || '';
            themeSelect.value = preferences.theme || 'light';
            applyTheme(preferences.theme);
        }
    }

    // Apply theme to page
    function applyTheme(theme) {
        document.body.className = theme;
    }

    // Theme selector change handler
    themeSelect.addEventListener('change', function() {
        applyTheme(this.value);
    });
});