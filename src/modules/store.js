class Store {
  static getUser() {
    let users;
    if (localStorage.getItem('users') === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem('users'));
    }
    return users;
  }

  static addUser(user) {
    const users = this.getUser();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
}

export default Store;
