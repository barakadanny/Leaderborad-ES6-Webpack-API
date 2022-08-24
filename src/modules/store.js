class Store {
  // static getUser() {
  //   let users;
  //   if (localStorage.getItem('users') === null) {
  //     users = [];
  //   } else {
  //     users = JSON.parse(localStorage.getItem('users'));
  //   }
  //   return users;
  // }

  // static addUser(user) {
  //   const users = this.getUser();
  //   users.push(user);
  //   localStorage.setItem('users', JSON.stringify(users));
  // }

  static sendUser(user) {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }
  
  static sendNewScore(user) {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nONLcYfe5VIS7yt3lQIO/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  static getScores() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nONLcYfe5VIS7yt3lQIO/scores/';
    const data = await fetch(url);
    const scores = await data.json();
    return scores.result;
  }
}

export default Store;
