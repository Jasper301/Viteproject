import { fetchData } from './fetch.js';

document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.querySelector('.Register button');
  const usernameInput = document.getElementById('usernameInput');
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');

  registerButton.addEventListener('click', async (evt) => {
    evt.preventDefault();
    console.log('Nyt luodaan käyttäjä');

    // Tarkistetaan, ovatko syötekentät tyhjiä
    if (!usernameInput.value || !emailInput.value || !passwordInput.value) {
      alert('Fill in all input fields before registering.');
      return;
    }

    // Tarkistetaan sähköpostin muoto säännöllisen lausekkeen avulla
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Tarkistetaan käyttäjänimi (4-20 merkkiä pitkä)
    if (usernameInput.value.length < 4 || usernameInput.value.length > 20) {
      alert('Username must be between 4 and 20 characters long.');
      return;
    }

    // Tarkistetaan salasana (vähintään 8 merkkiä pitkä)
    if (passwordInput.value.length < 8 || passwordInput.value.length > 12) {
      alert('Password must be between 8 and 12 characters long.');
      return;
    }

    const url = 'https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/users';

    const data = {
      username: usernameInput.value,
      password: passwordInput.value,
      email: emailInput.value,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetchData(url, options)
      .then((responseData) => {
        // Tallenna käyttäjän id localStorageen
        localStorage.setItem('userId', responseData.user_id);
        console.log('Käyttäjän id tallennettu localStorageen:', responseData.user_id);
        
        // Ohjataan käyttäjä index.html-sivulle
        window.location.href = 'index.html';
      })
      .catch((error) => {
        console.error('Virhe:', error);
      });
  });
});
