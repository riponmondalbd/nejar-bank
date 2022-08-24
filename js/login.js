document.getElementById('login-submit').addEventListener('click', function () {
    // get User email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    // check email and password
    if (userEmail == 'sontan@gmail.com' && userPassword == 'secrect') {
        window.location.href = 'banking.html';
    } else {
        alert('Invalid')
    }
})

