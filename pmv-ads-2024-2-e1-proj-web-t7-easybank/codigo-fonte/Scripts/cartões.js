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

