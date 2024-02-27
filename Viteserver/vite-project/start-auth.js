import './style.css';
import { fetchData } from './fetch.js';

// haetaan nappi josta lähetetään formi ja luodaan käyttäjä
const createUser = document.querySelector('.createuser');

createUser.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('Nyt luodaan käyttäjä');
  const url = 'http://127.0.0.1:3000/api/users';
  // Create user
  //POST http://127.0.0.1:3000/api/users
  //content-type: application/json
  
  const data = {
    "username": "test-update4",
    "password": "test-pw-update4",
    "email": "update4@example.com"
  };

  const options =  {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };

  fetchData(url, options).then((data) => {

    // käsitellään fetchdata funkiosta tullut JSON
    console.log(data)
    });
});

// haetaan nappi josta haetaan formi ja logataan sisään
// tästä saadaan TOKEN
const loginUser = document.querySelector('.loginuser');

loginUser.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('Nyt logataan sisään');
});

// Haetaan nappi josta testataan TOKENIN käyttöä, /auth/me
const meRequest = document.querySelector('#meRequest');
meRequest.addEventListener('click', async () => {
  console.log('Testataan TOKENIA ja haetaan käyttäjän tiedot');
});

// Haetaan nappi josta tyhjennetään localStorage
const clear = document.querySelector('#clearButton');
clear.addEventListener('click', clearLocalStorage);

// Apufunktio, kirjoittaa halutin koodiblokin sisään halutun tekstin
function logResponse(codeblock, text) {
  document.getElementById(codeblock).innerText = text;
}

// Apufunktio, Tyhjennä local storage
function clearLocalStorage() {
  localStorage.removeItem('token');
  logResponse('clearResponse', 'localStorage cleared!');
}
