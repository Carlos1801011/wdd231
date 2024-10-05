import('./common.js');

const membersListActual = document.querySelector('#membersListActual');
const oneCol = document.querySelector('#oneCol');
const threeCol = document.querySelector('#threeCol');
//BOttons in the footer and div for the cards of de ad
oneCol.addEventListener('click', () => {
    if (membersListActual.classList.contains('threeColGrid')) {
        oneCol.classList.toggle('selected');
        threeCol.classList.toggle('selected');
    }
    membersListActual.classList.remove('threeColGrid');
    membersListActual.classList.add('oneCol');
});

threeCol.addEventListener('click', () => {
    if (membersListActual.classList.contains('oneCol')) {
        oneCol.classList.toggle('selected');
        threeCol.classList.toggle('selected');
    }
    
    membersListActual.classList.remove('oneCol');
    membersListActual.classList.add('threeColGrid');
});

async function displayMembers() {
    const membersResponse = await fetch('./data/members.json');
    const members = await membersResponse.json();

    members.forEach(m => {
        const card = document.createElement('div');
        card.classList.add('memberCard');

        const fig = document.createElement('figure');
        const logo = document.createElement('img');
        // THe html form with the information about the cards
        const caption = document.createElement('figcaption');
        caption.innerHTML = 
        `
        <h3>${m.name}</h3>
        <p>${m.phone}</p>
        <p>${m.address1}</p>
        <p>${m.address2}</p>
        <a href="${m.website}">Website</a>
        `;
        logo.src = m.imageUrl;
        logo.alt = `${m.name} logo`;

        fig.appendChild(logo);
        fig.appendChild(caption);
        card.appendChild(fig);
        membersListActual.appendChild(card);
    });
}

displayMembers();