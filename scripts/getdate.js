const menu = document.querySelector("#menu").addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = "block";
});

const hideMenu = document.querySelector(".close-menu").addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = "none";
});


const lastModified = document.getElementById("lastM");

const LastModifiedDate = new Date(document.lastModified);

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formattedDate = LastModifiedDate.toLocaleDateString(undefined, options);

lastModified.textContent = `Last Modified on : ${formattedDate}`;
//The color in the html text on the footer..
lastModified.style.color = "white";

document.getElementById("actualyear").innerText = new Date().getFullYear();