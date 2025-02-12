
function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); 
}

function renderNoticia(noticia) {
    const container = document.getElementById('noticia-container');
    const noticiaHTML = `
        <article class="noticia">
            <h2>${noticia.titulo}</h2>
            <img src="${noticia.imagem}" alt="${noticia.titulo}" class="noticia-img">
            <p class="noticia-data">Publicado em: ${noticia.data}</p>
            <div class="noticia-conteudo">${noticia.conteudo}</div>
        </article>
    `;

    container.innerHTML = noticiaHTML;
}

async function carregarNoticia() {
    const id = getIdFromUrl(); 
    if (!id) {
        alert("Notícia não encontrada!");
        return;
    }

    try {
        
        const response = await fetch(`../db/news/news.json`);
        const data = await response.json();
        console.log(data)
        
        const noticia = data.find(item => item.id == id);
        console.log(noticia)
        if (noticia) {
            renderNoticia(noticia);
        } else {
            alert("Notícia não encontrada!");
        }
    } catch (error) {
        console.error("Erro ao carregar a notícia:", error);
        alert("Erro ao carregar a notícia!");
    }
}

window.onload = carregarNoticia;

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