document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const unameInput = document.getElementById('uname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const unameError = document.getElementById('unameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        clearErrors();
        let isValid = true;

        if (unameInput.value.trim() === '') {
            unameError.textContent = 'Username is required.';
            isValid = false;
        }

      

        if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        }

        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password should be at least 8 characters long.';
            isValid = false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }

        if (isValid) {
            
            console.log('Form is valid');
       
        }
    }

    function isValidEmail(email) {
       
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function clearErrors() {
        unameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
    }
});
