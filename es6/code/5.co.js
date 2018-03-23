var co = require('co');

function asyncF(name) {
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve('my name is ' + name);
    });
  });
}

function sum(a, b) {
  return new Promise(function (resolve) {
    setTimeout(function () {
        resolve(a + b);
    });
  })
}

function * fn(name) {
  if((yield sum(3,5)) > 6) {
    console.log(yield asyncF(name));
  }else{
    console.log('error');
  }
}

var fnx = co.wrap(fn);

fnx('Joh'); // my name is Joh