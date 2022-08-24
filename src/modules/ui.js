import { getScores } from './store.js';

const list = document.querySelector('#user-list');

const renderScores = async () => {
  const scores = await getScores();
  scores.forEach((data) => {
    const row = document.createElement('tr');
    row.className = 'list-group-item';
    row.innerHTML = `<td>${data.user}</td> <td>${data.score}</td>`;
    list.appendChild(row);
  });
};

export default renderScores;
