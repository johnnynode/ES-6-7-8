'use strict';

var obj = {
  length:2,
  '0':'abc',
  '1':'ddd'
}

/*
// err: obj is not iterable
for (let i of obj) {
  console.log(i);
}
*/

obj[Symbol.iterator] = [][Symbol.iterator];
for (let i of obj) {
  console.log(i);
}

// 在ES6中 set, map 字符串都能实现 iterator接口