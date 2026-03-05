// Function to toggle password visibility
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// Helper: Show Error
function showError(input, message) {
    const formControl = input.parentElement.parentElement; // Climbing up to .input-group
    // Handle the specific wrapper for password fields
    const container = input.parentElement.classList.contains('password-wrapper') 
                      ? input.parentElement.parentElement 
                      : input.parentElement;
    
    input.classList.add('error');
    input.classList.remove('success');
    const small = container.querySelector('.error-msg');
    small.innerText = message;
    container.classList.add('error');
}

// Helper: Show Success
function showSuccess(input) {
    const container = input.parentElement.classList.contains('password-wrapper') 
                      ? input.parentElement.parentElement 
                      : input.parentElement;
    
    input.classList.add('success');
    input.classList.remove('error');
    container.classList.remove('error');
}

// Helper: Check Email Regex
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Helper: Check Alphabets Only
function isAlphabets(str) {
    return /^[A-Za-z\s]+$/.test(str);
}

// Helper: Check Password Strength (Alpha-numeric)
function isStrongPassword(password) {
    // Contains letters and numbers
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    return re.test(password);
}

// --- SIGN UP LOGIC ---
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const city = document.getElementById('city');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        
        let isValid = true;

        // Full Name Validation
        if (fullname.value.trim() === '') {
            showError(fullname, 'Full Name is required');
            isValid = false;
        } else {
            showSuccess(fullname);
        }

        // Email Validation
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Email is not valid');
            isValid = false;
        } else {
            showSuccess(email);
        }

        // Phone Validation (10 digits)
        if (phone.value.trim().length !== 10) {
            showError(phone, 'Phone number must be 10 digits');
            isValid = false;
        } else {
            showSuccess(phone);
        }

        // City Validation (Alphabets only)
        if (city.value.trim() === '') {
            showError(city, 'City is required');
            isValid = false;
        } else if (!isAlphabets(city.value.trim())) {
            showError(city, 'City must contain only alphabets');
            isValid = false;
        } else {
            showSuccess(city);
        }

        // Password Validation (8+ chars, alphanumeric)
        if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 chars');
            isValid = false;
        } else if (!isStrongPassword(password.value)) {
            showError(password, 'Password must contain letters and numbers');
            isValid = false;
        } else {
            showSuccess(password);
        }

        // Confirm Password Validation
        if (confirmPassword.value === '') {
            showError(confirmPassword, 'Please confirm your password');
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        } else {
            showSuccess(confirmPassword);
        }

        // If Valid, Save to LocalStorage and Redirect
        if (isValid) {
            const user = {
                fullname: fullname.value,
                email: email.value,
                phone: phone.value,
                city: city.value,
                password: password.value
            };

            // Using email as unique key
            localStorage.setItem(email.value, JSON.stringify(user));
            alert('Registration Successful! Redirecting to Sign In...');
            window.location.href = 'index.html';
        }
    });
}

// --- SIGN IN LOGIC ---
const signinForm = document.getElementById('signinForm');

if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('login-email');
        const password = document.getElementById('login-password');
        let isValid = true;

        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Invalid email format');
            isValid = false;
        } else {
            showSuccess(email);
        }

        if (password.value === '') {
            showError(password, 'Password is required');
            isValid = false;
        } else {
            showSuccess(password);
        }

        if (isValid) {
            // Retrieve user from storage
            const storedUser = localStorage.getItem(email.value);
            
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                if (userData.password === password.value) {
                    alert('Login Successful!');
                    window.location.href = 'landing.html';
                } else {
                    showError(password, 'Incorrect password');
                }
            } else {
                showError(email, 'No account found with this email');
            }
        }
    });
}