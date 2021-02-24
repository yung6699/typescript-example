enum Shoes {
  Nike = 'nike',
  Adidas = 'adidas',
  NewBlance = '뉴발란스'
}

let myShoes = Shoes.Nike
let myShoes02 = Shoes.Adidas
console.log(myShoes, myShoes02);


enum Answer {
  Yes = 'Y',
  No = 'N',
  Y = "Y"
}


function askQuestion (answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }

  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}

console.log(Answer.Y === Answer.Yes)
askQuestion(Answer.Yes)

// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');