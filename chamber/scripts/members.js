fetch('members.json')
    .then(response => response.json())
    .then(data =>{
        const url = data.url;
})
window.open(url, '_blank');

