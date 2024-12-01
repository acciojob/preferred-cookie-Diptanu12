//your JS code here. If required.
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === name) return value;
    }
    return null;
}

function applyPreferences() {
    const fontSize = getCookie('fontsize') || '16';
    const fontColor = getCookie('fontcolor') || '#000000';

    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.documentElement.style.setProperty('--fontcolor', fontColor);

    document.getElementById('fontsize').value = fontSize;
    document.getElementById('fontcolor').value = fontColor;
}

document.getElementById('preferencesForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    setCookie('fontsize', fontSize, 365);
    setCookie('fontcolor', fontColor, 365);

    applyPreferences();
});

document.addEventListener('DOMContentLoaded', applyPreferences);
