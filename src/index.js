import './style.css';
import { sendNewScore } from './modules/store.js';
import UI from './modules/ui.js';
import User from './modules/user.js';

// display users onload of the page
document.addEventListener('DOMContentLoaded', UI.displayUsers);

const form = document.querySelector('#user-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  const user = new User(name, score);

  sendNewScore.sendUser();
  UI.addUserToList();

  UI.clearFields();
});
