
import('./common.js');


import {showMenu} from './menu.js';


document.addEventListener("DOMContentLoaded", async ()=>{
    try{
            const categories = await showMenu();
            console.log('Fetched categories:', categories);
                if (categories){
                fillForm(categories);
                }
    
            let quantity = document.querySelector('#quantity');
            let increase = document.querySelector("#increaseBtn");
            let decrease = document.querySelector("#decreaseBtn");

            decrease.addEventListener('click', ()=>{
                if(quantity.value>1){
                    quantity.value--;
                }
            });

            increase.addEventListener('click', ()=>{
                quantity.value++;
            });
        }catch (error) {
            console.log("Error fetching menu data:", error.message);
        }
});

function fillForm(categories){
    const food = document.querySelector("#food");
    categories.forEach(category => {
        category.items.forEach(item =>{
            let option = document.createElement("option");
            option.value = item.name;
            option.innerHTML = `${item.name} - ${item.price}`;
            food.appendChild(option);
        });
    });
}

//Function to display the number of visits to the webpage//


function currentTime(){
    return new Date().getTime();
}
function showLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    const timeNow = currentTime();
    const modal = document.getElementById("visitModal");
    const modalContent = document.getElementById("visitMessage");
    let message = "";

    if (lastVisit !== null) {
        const previousTime = parseInt(lastVisit, 10);
        const difference = timeNow - previousTime;

        // En lugar de mostrar "Back so soon!", solo mostramos el mensaje de bienvenida si es la primera visita
        message = `Welcome! Let us know if you have any questions.`;
    } else {
        message = `Welcome! Let us know if you have any questions.`;
    }

    // Solo mostrar el modal si hay un mensaje
    if (message) {
        modalContent.innerHTML = message;
        modal.style.display = 'block';
    }

    localStorage.setItem('lastVisit', timeNow.toString());

    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", () => {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", showLastVisit);
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const categories = await showMenu(); // Obtiene las categorías
        console.log('Fetched categories:', categories);
        if (categories) {
            fillForm(categories);
            setupMenuButton(categories); // Configura el botón para mostrar el menú
        }

        // Código existente...

    } catch (error) {
        console.log("Error fetching menu data:", error.message);
    }
});

function setupMenuButton(categories) {
    const showMenuButton = document.getElementById('showMenuButton');
    const menuDiv = document.getElementById('menu');

    showMenuButton.addEventListener('click', () => {
        menuDiv.style.display = menuDiv.style.display === 'none' ? 'block' : 'none'; // Alternar visibilidad
        
        menuDiv.innerHTML = ''; // Limpiar el contenido anterior

        if (menuDiv.style.display === 'block') { // Si el menú se va a mostrar
            categories.forEach(category => {
                let categoryDiv = document.createElement('div');
                categoryDiv.innerHTML = `<h4>${category.name}</h4><p>${category.description}</p>`;
                
                category.items.forEach(item => {
                    let itemDiv = document.createElement('div');
                    itemDiv.innerHTML = `${item.name} - ${item.price}`;
                    categoryDiv.appendChild(itemDiv);
                });
                
                menuDiv.appendChild(categoryDiv); // Agregar la categoría al contenedor del menú
            });
        }
    });
}
