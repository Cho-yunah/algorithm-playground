// Q1. 배열에서 400, 500 값을 삭제

// let newArr = []
// function solution1() {
//   // const number;
//   for(i=0; i<arrayNum.length; i++) {
//     if(arrayNum[i] <= 300)
//     newArr.push (arrayNum[i]) 
//   }
//   return newArr
// }
// const arrayNum = [100, 200, 300, 400, 500]
// solution(arrayNum)
// console.log(newArr)

// Q2. 날짜 계산 하기 (문제 42번)
const day= ['SUN', 'MON', 'TUE', 'WED', 'THE', 'FRI', 'SAT']
const month='5'
const date= '5'

function solution (a,b) {
  const theDay = new Date(`2021-${a}-${b}`);
  console.log(theDay)
  console.log(day[theDay.getDay()]);
}
solution (month, date)

// Q3. 10진수를 2진수로
let dec='32'
let arrBinary = [];

while(dec) {
  arrBinary.push(dec%2);
  // console.log(arrBinary)
  dec=Math.floor(dec/2)
}
console.log(arrBinary.reverse().join(''))

// 위의 로직을 더 간단하게 할 수 있는 메서드를 제공하고 있다. 
let decNum= 160
console.log(decNum.toString(2))

// Q4. 각 자리수의 합
let num = '1234'
let sum = 0;

while(num) {
  sum= sum + num%10
  num = Math.floor(num/10)
}

console.log(num)

// Q5. getTime() 함수 사용하여 지금의 년도 구하기
const theDate= new Date();
// console.log(theDate.getTime())
console.log(Math.floor(theDate.getTime()/(60*60*24*365*1000))+1970)

// Q6. 각 자리수의 합
let numbersArr=[]
let total=0;

for(i=1; i<=20; i++) {
  numbersArr[i] = i+1
}
numbersArr.forEach((n)=> {
  while(n){
    total = total + n%10;
    n = Math.floor(n/10);
  }
})
console.log(total)

// Q7. set 자료형의 응용 (중복 제거)
// let result = new Set();
// for(let key in people) {
//   result.add (people[key])
// }
// console.log(result)


// Q8. 최댓값 구하기
let res = '10 9 8 7 6 5 4 3 2 1'
res = res.split(' ').map(n=> {
  return parseInt(n, 10)
})
res.sort((a,b) => {
  return b-a;
})
console.log(res[0])


// Q9. 버블 정렬
function bubble(arr){
  let bubbleArr= arr.slice()

  for (let i =0; i <bubbleArr.length-1; i++) {
    for(let j=0; j< bubbleArr.length-i; j++) {
      if (bubbleArr[j] > bubbleArr[j+1]){
        let temp= bubbleArr[j]
        bubbleArr [j] = bubbleArr [j+1]
        bubbleArr [j+1] = temp
      }
    }
  }
  return bubbleArr;
}
const items='9 5 6 3 8'.split(' ').map((n)=> {
  return parseInt(n, 10)
})
console.log(bubble(items))