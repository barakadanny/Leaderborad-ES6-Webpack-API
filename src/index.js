import './style.css';
import sendNewScore from './modules/store.js';
import getData from './modules/get.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fadf/scores';

document.querySelector('.refresh-button').addEventListener('click', () => {
  window.location.reload();
});

const form = document.querySelector('#user-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userName = document.querySelector('#name').value;
  const userScore = document.querySelector('#score').value;

  const data = {
    user: userName,
    score: userScore,
  };

  sendNewScore(url, data);

  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});
getData(url);
