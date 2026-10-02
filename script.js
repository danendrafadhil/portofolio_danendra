const themeBtn = document.querySelector('#theme-toggle-button');
const themeLabel = document.querySelector('#theme-toggle-label');
const themeIcon = document.querySelector('.theme-icon');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const contactBtns = document.querySelectorAll('#hero-contact-button, #footer-contact-button');
const modal = document.querySelector('#contact-modal');
const closeBtn = document.querySelector('#close-contact-modal');

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        themeLabel.textContent = 'Dark mode';
        themeIcon.textContent = '☾';
        themeMeta.setAttribute('content', '#ffffff');
    } else {
        document.body.classList.add('dark-mode');
        themeLabel.textContent = 'Light mode';
        themeIcon.textContent = '☼';
        themeMeta.setAttribute('content', '#050605');
    }
}

setTheme('dark');

themeBtn.addEventListener('click', function () {
    if (document.body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

function openModal() {
    modal.classList.add('show');
}

function closeModal() {
    modal.classList.remove('show');
}

contactBtns.forEach(function (btn) {
    btn.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
