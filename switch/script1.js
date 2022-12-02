const btn = document.querySelector('.switch-btn');
const body = document.querySelector('body');
const caption = document.querySelector('.last-date-caption');
const COLOR_BLACK = 'black';
const COLOR_WHITE = 'white';
const ON = 'on';
const OFF = 'off';
let lastDateOn = localStorage.getItem('lastdateOn');
let lastDateOff = localStorage.getItem('lastdateOff');


if (localStorage.getItem('theme') === 'dark') {
    turnOff();
}

// caption.innerHTML = lastDateOn ? `Last turn ${ON}: ${lastDateOn}` : '';

btn.addEventListener('click', () => {
    lastDateOn = localStorage.getItem('lastdateOn');
    lastDateOff = localStorage.getItem('lastdateOff');
    if (localStorage.getItem('theme') !== 'dark') {
        lastDateOff = dateFormatter();
        return turnOff(lastDateOff);
    } else {
        lastDateOn = dateFormatter();
        return turnOn(lastDateOn);
    }
});

function dateFormatter() {
    const date = new Date();
    const dateYears = date.getFullYear();
    let dateMonths = date.getMonth() + 1;
    let dateDate = date.getDate();
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let dateSeconds = date.getSeconds();
    lastDateOn = localStorage.getItem('lastdateOn');
    lastDateOff = localStorage.getItem('lastdateOff');

    if (dateMonths < 10) dateMonths = '0' + dateMonths;
    if (dateDate < 10) dateDate = '0' + dateDate;
    if (dateHours < 10) dateHours = '0' + dateHours;
    if (dateMinutes < 10) dateMinutes = '0' + dateMinutes;
    if (dateSeconds < 10) dateSeconds = '0' + dateSeconds;

    if (localStorage.getItem('theme') !== 'dark') {
        window.localStorage.setItem('lastdateOff', `${dateYears}-${dateMonths}-${dateDate} ${dateHours}:${dateMinutes}:${dateSeconds}`);
    } else {
        window.localStorage.setItem('lastdateOn', `${dateYears}-${dateMonths}-${dateDate} ${dateHours}:${dateMinutes}:${dateSeconds}`);
    }
    return lastDateOn, lastDateOff;
}

function turnOff(lastDateOff) {
    body.style.backgroundColor = COLOR_BLACK;
    btn.style = `background: ${COLOR_WHITE}; color: ${COLOR_BLACK}`;
    caption.style.color = COLOR_WHITE;
    btn.innerHTML = `Turn ${ON}`;
    caption.innerHTML = lastDateOff ? `Last turn ${OFF}: ${lastDateOff}` : '';
    window.localStorage.setItem('theme', 'dark');
}

function turnOn(lastDateOn) {
    body.style.backgroundColor = COLOR_WHITE;
    btn.style = `background: ${COLOR_BLACK}; color: ${COLOR_WHITE}`;
    caption.style.color = COLOR_BLACK;
    btn.innerHTML = `Turn ${OFF}`;
    caption.innerHTML = lastDateOn ? `Last turn ${ON}: ${lastDateOn}` : '';
    window.localStorage.setItem('theme', 'light');
}