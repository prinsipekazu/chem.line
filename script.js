document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const passwordInput = document.getElementById('password-input');
  const togglePassword = document.getElementById('toggle-password');
  let passwordVisible = false;

 
  togglePassword.addEventListener('click', () => {
    passwordVisible = !passwordVisible;
    passwordInput.type = passwordVisible ? 'text' : 'password';
  });


  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = form.querySelector('input[type="text"]').value.trim();
    const password = passwordInput.value;

    if (usernameInput === 'admin' && password === '1234') {
      window.location.href = 'main.html';
    } else {
      alert('Invalid username or password. Please try again.');
      passwordInput.value = '';
    }
  });
});
