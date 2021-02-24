// 타입단언 type assertions

let a;
a = 20;
a = 'a'
let b = a as string;

// DOM API 조작
var div = document.querySelector('div');
if (div) {
  div.innerHTML = 'test'
}