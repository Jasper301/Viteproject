import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './minun-style.css'
import { show_joke } from './joke.js';
import { showPics } from './catpics.js'

document.querySelector('#app').innerHTML = 'moi täällä ollaan';

 let element = document.querySelector('#chuck')

show_joke(element);
showPics

//setupCounter(document.querySelector('button'))

