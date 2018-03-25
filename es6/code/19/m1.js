// 写法1
export var a = "I am a";

// 写法2
var b = "I am b";
export {b};

// 写法3
var c = "I am c";
export {c as d} // 将c重名为d, 外部也同样需要 import d

// 异步写法
var m = "I am m";
export {m};
setTimeout(()=>{
  m = "I am mm";
},1000);

