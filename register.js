const toggleLogin = document.getElementById('toggle-login');
const toggleRegister = document.getElementById('toggle-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const steps = document.querySelectorAll('.form-step');
const indicators = document.querySelectorAll('.progress-bar .step');

let currentStep = 0;

// Toggle between Login/Register
toggleLogin.addEventListener('click', () => {
  toggleLogin.classList.add('active');
  toggleRegister.classList.remove('active');
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
});

toggleRegister.addEventListener('click', () => {
  toggleRegister.classList.add('active');
  toggleLogin.classList.remove('active');
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
});

// Navigation in steps
document.querySelectorAll('.next-btn').forEach((btn) =>
  btn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove('active');
      indicators[currentStep].classList.remove('active');
      currentStep++;
      steps[currentStep].classList.add('active');
      indicators[currentStep].classList.add('active');
    }
  })
);

document.querySelectorAll('.prev-btn').forEach((btn) =>
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      steps[currentStep].classList.remove('active');
      indicators[currentStep].classList.remove('active');
      currentStep--;
      steps[currentStep].classList.add('active');
      indicators[currentStep].classList.add('active');
    }
  })
);