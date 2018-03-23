'use strict';

const User = require('./User');
let user = new User();
user.print(); // Joh

let getName = Symbol('getName');
user[getName](); // getName is not defined 报错, 可知 Symbol 可以在面向对象中模拟私有属性