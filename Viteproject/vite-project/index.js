import './style.css';
import { fetchData } from './fetch.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginUser = document.querySelector('.loginuser');

    if (loginUser) {
        loginUser.addEventListener('click', async (evt) => {
            evt.preventDefault();
            console.log('Nyt logataan sisään');

            const url = 'https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/auth/login';

            const form = document.querySelector('.login_form');

            const data = {
                username: form.querySelector('input[name=username]').value,
                password: form.querySelector('input[name=password]').value,
            };

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };

            fetchData(url, options).then((data) => {
                console.log(data);
                console.log(data.token);
                localStorage.setItem('token', data.token);
                if (data.token == undefined) {
                    alert('unauth user: käyttäjänimi tai salasana ei oikein');
                } else {
                    alert(data.message);
                    localStorage.setItem('name', data.user.username);
                    window.location.href ='home.html';
                }

                logResponse('loginResponse', `localStorage set with token value: ${data.token}`)
            });
        });
    }

    const meRequest = document.querySelector('#meRequest');
    if (meRequest) {
        meRequest.addEventListener('click', async () => {
            console.log('Testataan TOKENIA ja haetaan käyttäjän tiedot');

            const url = 'https://hyte-server-teacher.northeurope.cloudapp.azure.com/api/auth/me';
            const muntokeni = localStorage.getItem('token');
            console.log('Tämä on haettu LocalStoragesta', muntokeni);

            const options = {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer: ' + muntokeni,
                },
            };

            console.log(options);

            fetchData(url, options).then((data) => {
                console.log(data);
                logResponse('meResponse', `Authorized user info: ${JSON.stringify(data)}`);
            });
        });
    }

    const clear = document.querySelector('#clearButton');
    if (clear) {
        clear.addEventListener('click', clearLocalStorage);
    }
});

function logResponse(codeblock, text) {
    document.getElementById(codeblock).innerText = text;
}

function clearLocalStorage() {
    localStorage.removeItem('token');
    logResponse('clearResponse', 'localStorage cleared!');
}
