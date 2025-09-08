// ===== PART 1: JavaScript Event Handling =====

// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', this.checked);
});

// ===== PART 2: Building Interactive Elements =====

// Counter game functionality
const counterValue = document.getElementById('counter-value');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const incrementBtn = document.getElementById('increment-btn');
const gameMessage = document.getElementById('game-message');

let count = 0;

function updateCounter() {
  counterValue.textContent = count;

  // Game logic
  if (count === 10) {
    gameMessage.textContent = "You won! Exactly 10!";
    gameMessage.style.color = "var(--success)";
  } else if (count > 10) {
    gameMessage.textContent = "Too high! Try to get exactly 10.";
    gameMessage.style.color = "var(--error)";
  } else {
    gameMessage.textContent = "";
  }
}

decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  gameMessage.textContent = "";
  updateCounter();
});

incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close all other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });

    // Toggle current item
    item.classList.toggle('active');
  });
});

// ===== PART 3: Form Validation =====

const form = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const successMessage = document.getElementById('success-message');

// Validation functions
function validateName() {
  const name = nameInput.value.trim();
  if (name.length < 2) {
    nameError.style.display = 'block';
    return false;
  } else {
    nameError.style.display = 'none';
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailError.style.display = 'block';
    return false;
  } else {
    emailError.style.display = 'none';
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (!passwordRegex.test(password)) {
    passwordError.style.display = 'block';
    return false;
  } else {
    passwordError.style.display = 'none';
    return true;
  }
}

function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    confirmPasswordError.style.display = 'block';
    return false;
  } else {
    confirmPasswordError.style.display = 'none';
    return true;
  }
}

// Real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    successMessage.style.display = 'block';

    // Reset form after success
    setTimeout(() => {
      form.reset();
      successMessage.style.display = 'none';
    }, 3000);
  }
});
