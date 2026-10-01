const themeButton = document.querySelector('#btnToggleTema');
const themeLabel = document.querySelector('#themeLabel');
const themeIcon = document.querySelector('.theme-icon');
const contactButtons = document.querySelectorAll('#btnKontak, #btnContactFooter');
const contactModal = document.querySelector('#modalKontak');
const contactDialog = contactModal.querySelector('.modal-box');
const closeModalButton = document.querySelector('#btnTutupModal');
let lastFocusedElement;

function setTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('dark-mode', !isLight);
    themeLabel.textContent = isLight ? 'Dark mode' : 'Light mode';
    themeIcon.textContent = isLight ? '☾' : '☼';
    themeButton.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    themeButton.setAttribute('aria-pressed', String(!isLight));
    localStorage.setItem('portfolio-theme', theme);
}

setTheme(localStorage.getItem('portfolio-theme') || 'dark');

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
