const btn = document.querySelector('.switch-btn');
const body = document.querySelector('body');
const caption = document.querySelector('.last-date-caption');
const COLOR_BLACK = 'black';
const COLOR_WHITE = 'white';
const ON = 'on';
const OFF = 'off';


if (localStorage.getItem('theme') === 'dark') {
    turnOff();
}

btn.addEventListener('click', () => {
    const lastDate = dateFormatter();
    if (localStorage.getItem('theme') !== 'dark') {
        return turnOff(lastDate);
    };
    return turnOn(lastDate);
});

function dateFormatter() {
    const date = new Date();
    const dateYears = date.getFullYear();
    let dateMonths = date.getMonth() + 1;
    let dateDate = date.getDate();
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let dateSeconds = date.getSeconds();
    const lastDate = localStorage.getItem('lastdate');

    if (dateMonths < 10) dateMonths = '0' + dateMonths;
    if (dateDate < 10) dateDate = '0' + dateDate;
    if (dateHours < 10) dateHours = '0' + dateHours;
    if (dateMinutes < 10) dateMinutes = '0' + dateMinutes;
    if (dateSeconds < 10) dateSeconds = '0' + dateSeconds;
    
    window.localStorage.setItem('lastdate', `${dateYears}-${dateMonths}-${dateDate} ${dateHours}:${dateMinutes}:${dateSeconds}`);
    return lastDate;
    
}

function turnOff(lastDate) {
    body.style.backgroundColor = COLOR_BLACK;
    btn.style = `background: ${COLOR_WHITE}; color: ${COLOR_BLACK}`;
    caption.style.color = COLOR_WHITE;
    btn.innerHTML = `Turn ${ON}`;
    caption.innerHTML =  lastDate ? `Last turn ${ON}: ${lastDate}` : '';
    window.localStorage.setItem('theme','dark');
}

function turnOn(lastDate) {
    body.style.backgroundColor = COLOR_WHITE;
    btn.style = `background: ${COLOR_BLACK}; color: ${COLOR_WHITE}`;
    caption.style.color = COLOR_BLACK;
    btn.innerHTML = `Turn ${OFF}`;
    caption.innerHTML = lastDate ? `Last turn ${OFF}: ${lastDate}` : '';
    window.localStorage.setItem('theme','light');
}