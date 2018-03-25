// 注意，这里的{name}中的name不能被重新赋值
// run index.js as ../../../node_modules/.bin/babel-node index.js
// suport es6

import {a, b, d, m} from './m1'; 
import M, {A1, B1, C1} from './multi'; 
import {User} from './User'; 
import {Log} from './func'; 


console.log(a); // I am a
console.log(b); // I am b
console.log(d); // I am c
console.log(m); // I am m

setTimeout(()=>{
  console.log(m); // I am mm
},1500);

console.log(A1); // 1111
console.log(B1); // 2222
console.log(C1); // 3333
console.log(M); // M

var user = new User('Joh');
console.log(user.uname); // Joh
user.uname = 'Lily';
console.log(user.uname); // Lily

Log("I am log"); // I am log

import X from './dj';


console.log("...");

var _dd = new X();

console.log(_dd.dname);

import {default as nr} from './rename';

console.log(nr);

import t, { a as comA} from './com';

console.log(t); // 111
console.log(comA); // 1