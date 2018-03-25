export class User{
  constructor(name){
    this.name = name;
  }

  get uname() {
    return this.name;
  }

  set uname(name) {
    this.name = name;
  }
}