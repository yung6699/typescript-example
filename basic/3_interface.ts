interface PersonType {
  name: string;
  content: string;
  // age: number;
  [key: string]: string;
}

const person02: PersonType = {
  name: 'test',
  content: "연습용",
  test: 'zzz',
  test02: 'zfdadf'
}

interface SumFunction {
  (a: number, b: number): number;
}

let sum01: SumFunction;
sum01 = function(a:number, b: number): number {
  return a + b;
}

// 딕셔너리 패턴
interface StringArray {
  [index: number]: string
}

let arr01: StringArray = ['a', 'b', 'c']
// arr[0] = 10;

interface StringRegexDictionary {
  [key:string]: RegExp
}

const objRex: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

interface Developer extends PersonType {
  langauge: string
}

const capt: Developer = {
  name: 'test',
  content: 'zzz',
  langauge: 'JS'
}