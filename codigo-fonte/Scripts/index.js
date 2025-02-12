function falarTexto(texto) {
    if (responsiveVoice) {
        // responsiveVoice.cancel();
        responsiveVoice.speak(texto, "Portuguese Female", {
            rate: 1,
            pitch: 1,
            volume: 1
        });
    } else {
        console.error('A biblioteca ResponsiveVoice não está disponível.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('tutorial-popup');
    const closePopupButton = document.getElementById('close-popup');
    const startTutorialButton = document.getElementById('start-tutorial');
    const checkbox = document.getElementById('deficienciaAuditiva');

    let lastElement = null;
    const spokenElements = new Set();
    const debounceTime = 200; 

    popup.style.display = 'flex';

    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    startTutorialButton.addEventListener('click', function() {
        popup.style.display = 'none';
        if (checkbox.checked) {
            document.addEventListener('mouseover', function(event) {
                const element = event.target;

                // Verifica se o elemento é um novo e se contém texto
                if (element !== lastElement && !spokenElements.has(element)) {
                    const text = element.textContent || element.innerText;
                    if (text.trim()) {
                        lastElement = element;
                        spokenElements.add(element);
                        setTimeout(() => {
                            falarTexto(text.trim());
                        }, debounceTime);
                    }
                }
            });
        }
    });
});

function changeFontSize(size) {
    let fontSize;
    switch(size) {
        case 'small':
            fontSize = '12px';
            break;
        case 'medium':
            fontSize = '16px';
            break;
        case 'large':
            fontSize = '20px';
            break;
        default:
            fontSize = '16px';
    }
    document.body.style.fontSize = fontSize;
}

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


