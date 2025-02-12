document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
    const messageElement = document.getElementById("message");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o envio normal do formulário para tratar via JS

        // Pegando os valores dos campos
        const barCode = document.getElementById("bar-code").value.trim();
        const paymentValue = document.getElementById("payment-value").value.trim();
        const dueDate = document.getElementById("due-date").value.trim();

        // Resetando a mensagem
        messageElement.textContent = "";

        // Validação dos campos
        if (!barCode || !paymentValue || !dueDate) {
            messageElement.textContent = "Por favor, preencha todos os campos.";
            messageElement.style.color = "red";
            return;
        }

        // Validação do código de barras (deve ter 48 caracteres)
        if (barCode.length !== 48) {
            messageElement.textContent = "O código de barras deve ter exatamente 48 caracteres.";
            messageElement.style.color = "red";
            return;
        }

        // Exibindo a mensagem de sucesso
        messageElement.textContent = `Pagamento de R$${parseFloat(paymentValue).toFixed(2)} realizado com sucesso!`;
        messageElement.style.color = "green";

        // Reseta o formulário após o sucesso
        paymentForm.reset();
    });
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