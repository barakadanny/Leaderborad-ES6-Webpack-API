const renderScores = (data) => {
  const list = document.querySelector('#user-list');
  // const scores = await getScores();
  data.forEach((data) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${data.user}</td> <td>${data.score}</td>`;
    list.appendChild(row);
  });
};

export default renderScores;
