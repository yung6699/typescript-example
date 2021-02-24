function sum (a: number, b: number): number {
  return a + b;
}

sum(10, 20);

// sum(10, 20, 30, 40, 50);

// 함수의 옵셔널 파라미터
function log (a: string, b?: string):void {
  console.log(a, b)
}

log('hello')
log('hello', 'abc')