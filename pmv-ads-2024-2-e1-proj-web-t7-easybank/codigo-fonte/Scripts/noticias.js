
fetch('../db/news/news.json')
.then(response => response.json())
.then(noticias => {
    const container = document.getElementById('menu-options_noticia');
    noticias.forEach(noticia => {
        // Criar cada card dinamicamente
        const card = document.createElement('div');
        card.classList.add('news-box');

        card.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descricao}</p>
            <a href="../pages/template_noticias.html?id=${noticia.id}" class="detalhes-link">Leia mais</a>
        `;

        container.appendChild(card);
    });
})
.catch(error => console.error('Erro ao carregar as notícias:', error));

function getUserImg() {
    const profileIconDiv = document.getElementById('profile-icon');
    if (!profileIconDiv) return;


    const storedImage = localStorage.getItem('profileImage');
    

    const img = document.createElement('img');

    img.src = storedImage || 'default-profile-image.png';

    img.alt = 'Imagem de perfil';
    

    profileIconDiv.innerHTML = '';
    profileIconDiv.appendChild(img);
}

document.addEventListener('DOMContentLoaded', getUserImg);