class AuthService {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    login(email, password) {
        const user = this.users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('UserName', user.name);
            return true;
        }
        return false;
    }
}

document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const authService = new AuthService();
    const isAuthenticated = authService.login(email, password);
    
    if (isAuthenticated) {
        alert('Login successful!');
        
        window.location.href = "../index.html";

    } else {
        alert('Invalid email or password.');
    }
});
