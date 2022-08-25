const userName = document.querySelector('#name').value;
const userScore = document.querySelector('#score').value;

const sendNewScore = () => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fadf/scores',
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
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fadf/scores';
  const data = await fetch(url);
  const scores = await data.json();
  return scores.result;
};

export { sendNewScore, getScores };
