const btn = document.querySelector('.switch-btn');
const body = document.querySelector('body');
const caption = document.querySelector('.last-date-caption');
const ON = 'on';
const OFF = 'off';
let lastDateOn = localStorage.getItem('lastdateOn');
let lastDateOff = localStorage.getItem('lastdateOff');

if (localStorage.getItem('theme') === 'dark') {
    turnOff();
} else {
    turnOn();
}

btn.addEventListener('click', () => {
    if (localStorage.getItem('theme') !== 'dark') {
        lastDateOff = dateFormatter();
        localStorage.setItem('lastdateOff', lastDateOff)
        turnOff();
        return;
    }
        lastDateOn = dateFormatter();
        localStorage.setItem('lastdateOn', lastDateOn)
        turnOn();
        return;
});

function turnOff() {
    btn.innerHTML = `Turn ${ON}`;
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    caption.innerHTML = lastDateOff ? `Last turn ${OFF}: ${lastDateOff}` : '';
}

function turnOn() {
    btn.innerHTML = `Turn ${OFF}`;
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    caption.innerHTML = lastDateOn ? `Last turn ${ON}: ${lastDateOn}` : '';
}

function dateFormatter() {
    const date = new Date();
    const dateYears = date.getFullYear();
    let dateMonths = date.getMonth() + 1;
    let dateDate = date.getDate();
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let dateSeconds = date.getSeconds();

    if (dateMonths < 10) dateMonths = '0' + dateMonths;
    if (dateDate < 10) dateDate = '0' + dateDate;
    if (dateHours < 10) dateHours = '0' + dateHours;
    if (dateMinutes < 10) dateMinutes = '0' + dateMinutes;
    if (dateSeconds < 10) dateSeconds = '0' + dateSeconds;

return `${dateYears}-${dateMonths}-${dateDate} ${dateHours}:${dateMinutes}:${dateSeconds}`;
}



