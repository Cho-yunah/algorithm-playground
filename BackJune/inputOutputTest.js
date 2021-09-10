const fs = require('fs')

// 한줄 입력
let input = fs.readFileSync('./input.txt').toString().split(' ')
// console.log(input)

let numArr = input.map((item) => +item)
console.log(numArr)

for (let i = 0; i < numArr.length; i++) {
  let answer = 0
  answer += numArr[i]
  console.log(answer)
}

// 여러줄로 입력받을 때
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

// let count = +input[0]
// let numbers = []

// for (let i = 1; i < input.length; i++) {
//   if (input[i] !== '') {
//     push(input[i].split(' '))
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   let num1 = Number(numbers[i][0])
//   let num2 = Number(numbers[i][1])

//   console.log(num1 + num2)
// }
