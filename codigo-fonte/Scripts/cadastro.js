class User {
    constructor(formID) {  
        this.formID = formID;
        this.form = document.getElementById(this.formID);
        this.form.addEventListener('submit', this.submitForm.bind(this));
    }

    submitForm(event) {  
        event.preventDefault();  
        this.createUser();
    }

    createUser() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        const user = {
            name: name,
            email: email,
            password: password
        };
    
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        users.push(user);
    
        localStorage.setItem('users', JSON.stringify(users));
    
        console.log(user);
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "../pages/login.html";   
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    if (!localStorage.getItem('users')) {
        const users = [];
        localStorage.setItem('users', JSON.stringify(users));
        console.log("Array salvo no Local Storage!");
    }

    // Inicializa a classe User para o formulário de cadastro
    new User('form-login'); 
});
