function logText<T>(text: T): number {
  return Number(text);
}

const temp:number = logText<string>('10');
console.log(temp)

function logText02<T, K>(text: T, num: K): [ T, K ] {
  return [text, num];
}
 
logText02<string, number>('10', 10);


// 제네릭 타입 제한
function logText03<T>(text: T[]): T[] {
  console.log(text.length);
  return text
}


logText03<string>(['hi'])


// 제네릭 타입제한 02 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logTextLength<string>('hi test')
logTextLength<number[]>([1, 2])

// 제네릭 타입제한 03 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem> (itemOption: T): T {
  return itemOption
}

// getShoppingItemOption(10)
// getShoppingItemOption<string>('test')

getShoppingItemOption("name")
getShoppingItemOption("price")




function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];  
}

// function getProperty<O extends keyof ShoppingItem>(obj: ShoppingItem, key: O) {
//   return obj[key];  
// }
let objTemp: ShoppingItem = { name: 'test', price: 2, stock: 3 };
getProperty(objTemp, "name"); // okay
// getProperty(obj, "z"); // error: "z"는 "a", "b", "c" 속성에 해당하지 않습니다.