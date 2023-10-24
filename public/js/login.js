const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    let data = await response.json();
    console.log(data)
    if (response.ok) {
      document.location.replace('/search');
    } else {
      alert('Failed to log in.');
    }
  }
};

const registerFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#registerUserName').value.trim();
  const email = document.querySelector('#registerEmail').value.trim();
  const password = document.querySelector('#registerPassword').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#loginForm')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#registerForm')
  .addEventListener('submit', registerFormHandler);
