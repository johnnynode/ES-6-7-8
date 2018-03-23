'use strict';

var obj = {'Joh':'56999', 'Lili':'899888'};

let iteratorFun = function () {
  let self = this;
  let i = 0;
  const names = Object.keys(this);
  const length = names.length;

  // iterator 对象，可以理解为指针
  return {
    next() {
      let name = names[i++];
      let qq = self[name];
      return {value: {name, qq}, done: i > length}
    }
  }
}

obj[Symbol.iterator] = iteratorFun;


for (let u of obj) console.log(u);
