'use strict';

let getName = Symbol('getName');

module.exports = class User {
  [getName]() {
    return 'Joh';
  }

  print() {
    console.log(this[getName]());
  }
}