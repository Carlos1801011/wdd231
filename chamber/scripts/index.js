import('./common.js');

const events = document.querySelector('#events');

function loadEvents() { 
    for (i = 0; i < 5; i++) {
        const p = document.createElement('p');
        p.innerText = `event #${i+1}`;
        events.appendChild(p);
    }
}

loadEvents();

const businessCards = document.querySelector('.businessCards');

async function loadBusinessCards() {
    const membersResponse = await fetch('./data/members.json');
    const members = await membersResponse.json();
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffledMembers.slice(0, 3);
    selectedMembers.forEach(m => {
        const card = document.createElement('div');
        card.classList.add('businessCard');

        const businessCardHeader = document.createElement('h3');
        businessCardHeader.innerText = `${m.name}`;
        card.appendChild(businessCardHeader);

        const fig = document.createElement('figure');
        const logo = document.createElement('img');
        
        const caption = document.createElement('figcaption');
        caption.innerHTML = 
        `
        <p>${m.phone}</p>
        <p>${m.address1}</p>
        <p>${m.address2}</p>
        <p><strong>Membership Level:</strong> ${m.membershipLevel}</p>
        <a href="${m.website}">Website</a>
        `;
        logo.src = m.imageUrl;
        logo.alt = `${m.name} logo`;

        fig.appendChild(logo);
        fig.appendChild(caption);
        card.appendChild(fig);
        businessCards.appendChild(card);
    });
}

loadBusinessCards();

const joinButton = document.querySelector('#joinButton');
joinButton.addEventListener('click', () => {
    location.href = 'https://carlos1801011.github.io/wdd231/chamber/join.html'
});