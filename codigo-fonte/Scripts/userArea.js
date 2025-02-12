class UserArea {
    constructor() {
        this.userContainer = document.getElementById('user');
        this.profileImage = document.getElementById('profileImage');
        this.imageInput = document.getElementById('imageInput');
    }

    genHtmlUser(name) {
        if (!this.userContainer) return;
        
        this.userContainer.innerHTML = '';
        const userDiv = document.createElement('div');
        userDiv.className = 'user';

        name = localStorage.getItem('UserName') || 'Faça login para ver seu nome';
        const nameElement = document.createElement('h2');
        nameElement.textContent = name;

        userDiv.appendChild(nameElement);
        this.userContainer.appendChild(userDiv);
    }

    getUserData() {
        const url = '../db/users/users.json';

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                this.genHtmlUser(data.name);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
                if (this.userContainer) {
                    this.userContainer.innerHTML = '<p>Erro ao carregar os dados do usuário.</p>';
                }
            });
    }

    getUserImg() {
        if (!this.profileImage) return;

        const storedImage = localStorage.getItem('profileImage');
        this.profileImage.src = storedImage || 'default-profile-image.png';
    }

    setUserImage() {
        if (!this.imageInput || !this.profileImage) return;

        this.imageInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.profileImage.src = e.target.result;
                    localStorage.setItem('profileImage', e.target.result); 
                };
                reader.readAsDataURL(file);
            }
        });
    }

    init() {
        this.getUserImg();
        this.setUserImage();
        this.getUserData();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const userArea = new UserArea();
    userArea.init();
});
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