
const footer = document.querySelector('#footer');
footer.innerHTML = 
`<div id="contactInfo" class="footerCell">
    <p id="contactName">Frenzy Food Open 24 HRS</p>
    <p id="contactAddress1">Sv San salvador.</p>
    <p id="contactAddress2">Calle Araujo 1854.</p>
    <p id="contactEmail">Frenzysv17@email.com</p>
    <p id="contactPhone">7698-9888</p>
</div>
<div id="socialMedia" class="footerCell">
    <a href="https://youtube.com"><img src="./images/youtube.webp" alt="YouTube logo by WEB" ></a>
    <a href="https://facebook.com"><img src="./images/facebook.webp" alt="Facebook logo by WEB"></a>
    <a href="https://linkedin.com"><img src="./images/linkedin.webp" alt="LinkedIn logo by WEB"></a>
</div>
<div id="devDetails" class="footerCell">
    <p>WDD231 Class Project</p>
    <p>Carlos A. Pacheco</p>
    <p id="currentYear"> The site of the food</p>
    <p id="lastModified"></p>
</div>`;

const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('#navElement');
const navLinks = document.querySelectorAll('.navLink');


hamburgerElement.addEventListener('click', () => {
    navLinks.forEach(nl => {
        nl.classList.toggle('closedLink');
    });
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = `Last Updated on <i>${document.lastModified}</i>`;


const currentYear = document.getElementById('currentYear');
currentYear.textContent = "@ " + new Date().getUTCFullYear() + " The Frenzy Food Menu";


