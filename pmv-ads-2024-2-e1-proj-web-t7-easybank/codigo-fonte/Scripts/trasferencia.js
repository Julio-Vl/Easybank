let users = [];

// Carregar dados do users.json
fetch('../db/users/users.json')
    .then(response => response.json())
    .then(data => {
        users = data;
        console.log('Usuários carregados:', users);
    })
    .catch(error => console.error('Erro ao carregar usuários:', error));

function confirmTransfer() {
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const recipientName = document.getElementById('recipient-name').value;
    const message = document.getElementById('message');

    // Validação dos campos e limites
    if (!accountNumber || accountNumber.length < 6 || accountNumber.length > 10) {
        message.textContent = "O número da conta deve ter entre 6 e 10 dígitos.";
        message.style.color = "red";
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        message.textContent = "Insira um valor válido para a transferência.";
        message.style.color = "red";
        return;
    }

    if (!recipientName) {
        message.textContent = "Por favor, preencha o nome do destinatário.";
        message.style.color = "red";
        return;
    }

    // Verificar se o remetente existe (baseado no número da conta)
    const sender = users.find(user => user.chave_numero_conta === accountNumber);

    if (!sender) {
        message.textContent = "Conta remetente não encontrada.";
        message.style.color = "red";
        return;
    }

    // Verificar se o destinatário existe (baseado no nome completo)
    const recipient = users.find(
        user => `${user.name} ${user.lastName}`.toLowerCase() === recipientName.toLowerCase()
    );

    if (!recipient) {
        message.textContent = "Destinatário não encontrado.";
        message.style.color = "red";
        return;
    }

    // Verificar saldo do remetente
    if (sender.Saldo < amount) {
        message.textContent = "Saldo insuficiente para a transferência.";
        message.style.color = "red";
        return;
    }

    // Atualizar saldos
    sender.Saldo -= amount;
    recipient.Saldo += amount;

    // Exibir mensagem de sucesso
    message.textContent = `Transferência de R$${amount.toFixed(2)} para ${recipientName} realizada com sucesso!`;
    message.style.color = "green";

    // Resetar formulário
    document.getElementById('transfer-form').reset();

    // Atualizar localStorage (simula persistência)
    localStorage.setItem('users', JSON.stringify(users));

    console.log('Transferência concluída. Usuários atualizados:', users);
}

document.addEventListener('DOMContentLoaded', () => {
    // Verificar se há dados no localStorage para simular persistência
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
        console.log('Usuários carregados do localStorage:', users);
    } else {
        console.log('Usuários serão carregados do JSON.');
    }
});
