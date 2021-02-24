// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }

function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}

fetchItems().then(res => {
  console.log(res);
});
