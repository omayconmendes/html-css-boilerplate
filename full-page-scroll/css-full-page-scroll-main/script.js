// Selectors
const container = document.getElementById('container');
const modeTitle = document.getElementById('mode-title');
const button = document.getElementById('mode-selector');

const darkModeClass = 'dark-mode';


// Events
button.addEventListener('click', changeMode);


// Functions
function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses(){

    container.classList.toggle(darkModeClass);
    modeTitle.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);

}

function changeText() {

    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(container.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        modeTitle.innerHTML = darkMode + ' ON';
        return;
    }
    button.innerHTML = darkMode;
    modeTitle.innerHTML = lightMode + ' ON';
}