
const fs=require('fs')
let input = fs.readFileSync('./input.txt').toString().split('\n')

const inputC = +input[0]
const inputTestCase = []

for(let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(' ').map(item=> +item)
  // let newArr = [];
  // for (let i = 0; i <arr.length; ++i){
  //   newArr.push (+arr[i])
  // }

  console.log(arr)

  // const testCase = {
  //   N: arr[0],
  //   arr: newArr,
  // }

  // console.log('testCase', testCase)
  // inputTestCase.push(testCase)
  break;
}
console.log('inputTestCase', inputTestCase)

// function solution (C, testCase) {
//   console.log(C)
//   console.log(testCase)
// }

// solution(inputC,inputTestCase)