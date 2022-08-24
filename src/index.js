import './style.css';
import { sendNewScore } from './modules/store.js';
import renderScores from './modules/ui.js';
import User from './modules/user.js';

// display users onload of the page
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.refresh-button')
    .addEventListener('click', async () => {
      renderScores();
    });

  const form = document.querySelector('#user-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    sendNewScore();

    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  });
});
