// const userName = document.querySelector('#name').value;
// const userScore = document.querySelector('#score').value;

const sendNewScore = async () => {
  const post = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch(url, post);
};

export default sendNewScore;
