const userName = document.querySelector('#name').value;
const userScore = document.querySelector('#score').value;

const sendUser = () => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name: 'test' }),
    }
  );
};

const sendNewScore = () => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nONLcYfe5VIS7yt3lQIO/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user: userName, score: userScore }),
    }
  );
};

const getScores = async () => {
  const url =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nONLcYfe5VIS7yt3lQIO/scores/';
  const data = await fetch(url);
  const scores = await data.json();
  return scores.result;
};

export { sendUser, sendNewScore, getScores };
