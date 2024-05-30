console.log("testing");

import './style.css';


// import funciton

import clearContent from './clear-contents.js';
import loadHomepage from './load-Homepage.js';
import loadMenu from './load-menu.js';
import loadStylesheet from './loadStylesheet.js';

// call function

const allBtns = document.getElementsByTagName('button');
for (let i=0; i< allBtns.length; i++) {
        allBtns[i].addEventListener('click', clearContent);
}

const homeBtn = document.getElementsByClassName('homeBtn')[0];
if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        loadStylesheet('homepage.css');
        loadHomepage();
    })
}

const menuBtn = document.getElementsByClassName('menuBtn')[0];
if (menuBtn) {
    menuBtn.addEventListener('click', () => { 
        loadStylesheet('menu.css');
        loadMenu();
    })
}
