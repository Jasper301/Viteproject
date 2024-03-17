import { fetchData } from './fetch.js';

async function renderUsername() {
  console.log('Haetaan käyttäjän tiedot');
  const url = 'http://localhost:3000/api/auth/me';
  let token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer: ' + token,
    },
  };
  fetchData(url, options).then((data) => {
    console.log(data);
    document.getElementById('name').innerHTML = data.user.username;
  });
}

document.querySelector('.logout').addEventListener('click', logOut);

function logOut(evt) {
  evt.preventDefault();
  localStorage.removeItem('token');
  console.log('logginout');
  window.location.replace('index.html');
}


renderUsername();

