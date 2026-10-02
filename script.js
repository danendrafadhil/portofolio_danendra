const themeButton = document.querySelector('#theme-toggle-button');
const themeToggleLabel = document.querySelector('#theme-toggle-label');
const themeIcon = document.querySelector('.theme-icon');
const themeColor = document.querySelector('meta[name="theme-color"]');
const contactButtons = document.querySelectorAll('#hero-contact-button, #footer-contact-button');
const contactModal = document.querySelector('#contact-modal');
const contactDialog = contactModal.querySelector('.modal-box');
const closeModalButton = document.querySelector('#close-contact-modal');
let lastFocusedElement;

function setTheme(theme, animate = true) {
    const updateTheme = function() {
        const isLight = theme === 'light';
        document.body.classList.toggle('dark-mode', !isLight);
        themeToggleLabel.textContent = isLight ? 'Dark mode' : 'Light mode';
        themeIcon.textContent = isLight ? '☾' : '☼';
        themeButton.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
        themeButton.setAttribute('aria-pressed', String(!isLight));
        themeColor.setAttribute('content', isLight ? '#ffffff' : '#050605');
    };

    if (animate && typeof document.startViewTransition === 'function') {
        document.startViewTransition(updateTheme);
    } else {
        updateTheme();
    }
}

setTheme('dark', false);

themeButton.addEventListener('click', function() {
    setTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark');
});

function openContactModal() {
    lastFocusedElement = document.activeElement;
    contactModal.classList.add('show');
    contactModal.setAttribute('aria-hidden', 'false');
    contactDialog.focus();
}

function closeContactModal() {
    contactModal.classList.remove('show');
    contactModal.setAttribute('aria-hidden', 'true');
    lastFocusedElement?.focus();
}

contactButtons.forEach(function(button) {
    button.addEventListener('click', openContactModal);
});

closeModalButton.addEventListener('click', closeContactModal);

contactModal.addEventListener('click', function(event) {
    if (event.target === contactModal) {
        closeContactModal();
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && contactModal.classList.contains('show')) {
        closeContactModal();
    }
});
