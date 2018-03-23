'use strict';

class UserGroup {
  constructor(users) {
    // json {joh:111,lili:1123}
    this.users = users;
  }

  [Symbol.iterator]() {

    let self = this;
    let i = 0;
    const names = Object.keys(this.users);
    const length = names.length;

    // iterator 对象，可以理解为指针
    return {
      next() {
        let name = names[i++];
        let qq = self.users[name];
        return {value: {name, qq}, done: i > length}
      }
    }
  }
}

let group = new UserGroup({'Joh':'595959','Lili':'888116'});
for (let user of group) {
  console.log(user);
}

// { name: 'Joh', qq: '595959' }
// { name: 'Lili', qq: '888116' }