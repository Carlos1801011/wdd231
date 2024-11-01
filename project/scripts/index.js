
import('./common.js');


document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.getElementById('navButton');
    const nav = document.querySelector('nav');

    navButton.addEventListener('click', () => {
        nav.classList.toggle('open'); 
        navButton.classList.toggle('open'); 
    });
});