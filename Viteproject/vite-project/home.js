import { fetchData } from "./fetch.js";

const dialog1 = document.querySelector('.info_dialog'); // Siirretty tähän
const closeButton1 = document.querySelector('.info_dialog button');

const url = 'https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/entries'; // Määritellään url-muuttuja tässä

const bt1 = document.querySelector('.get_entry');
bt1.addEventListener('click', async () => {
  console.log('Klikki toimii');

  fetchData(url).then((data) => {
    console.log(data);
    dialog1.showModal();
    console.log('in modal');
    dialog1.querySelector('p').innerHTML = `
      <div>Date: <span>${data.entry_date}</span></div>
      <div>Mood: <span>${data.mood}</span></div>
      <div>Note: <span>${data.notes}</span></div>
      <div>Sleep hours: <span>${data.sleep_hours}</span></div>
      <div>Weight: <span>${data.weight}</span></div>
    `;
  });
});

closeButton1.addEventListener('click', () => {
  dialog1.close();

  fetchData(url).then((data) => {
    // käsitellään fetchData funktiosta tullut JSON
    console.log(data);
  });

 
});

const button3 = document.querySelector(".get_users");
button3.addEventListener("click", getUsers);

async function getUsers() {
  console.log("haetaan kaikki käyttäjät");
  const url = "https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/users";
  let token = localStorage.getItem("token");
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer: " + token,
    },
  };

  fetchData(url, options).then((data) => {
    createTable(data);
  });
}

function createTable(data) {
  console.log(data);

  // etsitään tbody elementti
  const tbody = document.querySelector(".tbody");

  // loopissa luodaan jokaiselle tietoriville oikeat elementit
  // elementtien sisään pistetään oikeat tiedot

  data.forEach((rivi) => {
    console.log(rivi.user_id, rivi.username, rivi.user_level);

    // Luodaan jokaiselle riville ensin TR elementti alkuun
    const tr = document.createElement("tr");

    // Luodaan soluja mihin tiedot sijoitetaan
    const td1 = document.createElement("td");
    td1.innerText = rivi.username;

    const td2 = document.createElement("td");
    td2.innerText = rivi.user_level;

    const td3 = document.createElement("td");
    const button1 = document.createElement("button");
    button1.className = "check";
    button1.setAttribute("data-id", rivi.user_id);
    button1.innerText = "Info";
    td3.appendChild(button1);

    button1.addEventListener("click", getUser);

    const td4 = document.createElement("td");
    const button2 = document.createElement("button");
    button2.className = "del";
    button2.setAttribute("data-id", rivi.user_id);
    button2.innerText = "Delete";
    td4.appendChild(button2);

    button2.addEventListener("click", deleteUser);

    const td5 = document.createElement("td");
    td5.innerText = rivi.user_id;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
  });
}

function getUser(evt) {
  const id = evt.target.attributes["data-id"].value;
  console.log('Getting individual data for ID:', id);
  const url = `https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/users/${id}`;
  let token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer: ' + token,
    },
  };
  fetchData(url, options).then((data) => {
    console.log(data);
    const dialog = document.querySelector('.info_dialog');
    dialog.showModal();
    
    const dialogContent = dialog.querySelector('p');
    dialogContent.innerHTML = '';
    
    dialog.querySelector('p').innerHTML = `
      <div>User ID: <span>${data.user_id}</span></div>
      <div>User Name: <span>${data.username}</span></div>
      <div>Email: <span>${data.email}</span></div>
      <div>Role: <span>${data.user_level}</span></div>
    `;
    
    const closeButton = dialog.querySelector('button[autofocus]');
    closeButton.addEventListener('click', () => {
      dialog.close();
    });
  });
}
      
function deleteUser(evt) {
  console.log("Deletoit tietoa");
  console.log(evt);
  const id = evt.target.attributes["data-id"].value;
  console.log(id);

  const url = `https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/users/${id}`;
  let token = localStorage.getItem("token");
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer: " + token,
    },
  };

  const answer = confirm(`Oletko varma, että haluat poistaa käyttäjän ID: ${id}` )
  if (answer) {
    fetchData(url, options).then((data) => {
      console.log(data);
      getUsers();
    }); 
  }

  const id2 = evt.target.parentElement.nextElementSibling.textContent;
  console.log("toine tapa", id2);
}

async function showUserName() {
  console.log("Haetaan kirjautuneen käyttäjän tiedot");

  const userId = localStorage.getItem('userId'); // Lisätään tämä rivi
  console.log("userId:", userId); // Lisätään tämä rivi

  const url = "https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/auth/me";
  let token = localStorage.getItem("token");
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer: " + token,
    },
  };
  fetchData(url, options).then((data) => {
    console.log(data);
    document.getElementById("name").innerHTML = data.user.username;
  });
}

document.querySelector('.logout').addEventListener('click', logOut);

function logOut(evt) {
  evt.preventDefault();
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  console.log('logginout');
  window.location.href = 'index.html';
}

showUserName();

// Lisää tapahtumankäsittelijä lomakkeen lähetykselle
document.getElementById('updateForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Estä lomakkeen oletustoiminto

  const newUsername = document.getElementById('newUsername').value;
  const newEmail = document.getElementById('newEmail').value;
  const userId = localStorage.getItem('userId'); // Hae käyttäjän id localStoragesta

  // Tarkista, että käyttäjän ID ei ole null tai tyhjä
  if (!userId) {
    alert('Käyttäjän ID ei ole määritetty');
    return;
  }

  // Tarkista, että uusi käyttäjänimi ja sähköposti on annettu
  if (!newUsername || !newEmail) {
    alert('Anna uusi käyttäjänimi ja sähköposti');
    return;
  }

  const url = `https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/users`; // Muodosta päivityspyyntöön URL
  const token = localStorage.getItem('token'); // Hae token localStoragesta
  const options = {
    method: 'PUT', // Käytä PUT-metodia päivityspyyntöön
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify({ // Lähetä uusi käyttäjänimi ja sähköposti JSON-muodossa
      username: newUsername,
      email: newEmail,
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    alert('Käyttäjän tiedot päivitetty onnistuneesti');
   
  } catch (error) {
    console.error('Päivitysvirhe:', error);
    alert('Käyttäjätietojen päivitys epäonnistui');
  }
});
