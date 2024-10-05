const footer = document.querySelector('#footer');
footer.innerHTML = 
`<div id="contactInfo" class="footerCell">
    <p id="contactName">SV Chamber of Commerce</p>
    <p id="contactAddress1">2~ Sesame St 1-8</p>
    <p id="contactAddress2">San Salvador, SV 503</p>
    <p id="contactEmail">contact@SVchamber.com</p>
    <p id="contactPhone"></p>
</div>
<div id="socialMedia" class="footerCell">
    <a href="https://youtube.com"><img src="./images/youtube.png" alt="YouTube logo by flaticon.com"></a>
    <a href="https://linkedin.com"><img src="./images/linkedin.png" alt="LinkedIn logo by flaticon.com"></a>
    <a href="https://facebook.com"><img src="./images/facebook.png" alt="Facebook logo by flaticon.com"></a>
</div>
<div id="devDetails" class="footerCell">
    <p>WDD231 Project</p>
    <p>Carlos M. Alvanez</p>
    <p id="currentYear"> SV Chamber of Commerce</p>
    <p id="lastModified"></p>
</div>`;

const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('#navElement');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = `Last Updated on <i>${document.lastModified}</i>`;


const currentYear = document.getElementById('currentYear');
currentYear.textContent = "@ " + new Date().getUTCFullYear() + " Naples UT Chamber of Commerce";

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}