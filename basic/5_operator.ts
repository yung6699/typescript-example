function logMessage(value?: string | number) {
  console.log(value)
}

logMessage('test');
logMessage(100);
logMessage();


interface ITest01 {
  name: string;
  skill: string;
}

interface IPerson01 {
  name: string;
  age: number;
}


// 유니온
function askSomeone(someone: ITest01 | IPerson01) {
  someone.name;
  // someone.skill;
  // someone.age;
}


askSomeone({ name: 'test', age: 20,})
askSomeone({ name: 'test', skill: 'js',})

// 인터섹션 타입
function askSomeoneInter(someone: ITest01 & IPerson01) {
}

askSomeoneInter({ name: 'test', age: 20, skill: 'js'})
// askSomeoneInter({ name: 'test', skill: 'js',}) 

var seho01: string | number | boolean;
var capt01: string & number & boolean;