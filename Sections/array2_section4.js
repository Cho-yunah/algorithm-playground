// 1. 자릿수의 합
function solution1(n, arr1) {
  let answer;
  let max=Number.MIN_SAFE_INTEGER;

  for (let x of arr1) {
    //1.
    // let sum=0;
    // let temp= x;
    // while(temp) {
    //   sum+= temp%10;
    //   temp=Math.floor(temp/10)
    // }

    // 2.
    let sum= x.toString(
    ).split('').reduce((a,b)=> a+b, 0)
    if(sum>max) {
      max=sum;
      answer=x;
    }
    else if (sum===max) {
      if(x>answer) answer=x
    }
  }
  return answer
}
const arr1= [128, 460, 603, 40, 521, 137, 123]
console.log(solution1(7,arr1))

// 2. 뒤집은 소수
function isPrime(num) {
  if(num===1) return false;
  for (let i=2; i<=num/2; i++) {
    if (num%i===0) return false;
  }
  return true
}
function solution2(n, arr2) {
  let answer=[];
  for(let x of arr2) {
    let reversNum= x.toString().split('').reverse().join('')
    if(isPrime(+reversNum)) answer.push(+reversNum)

    // let res=0;
    // while(x) {
    //   let t= x%10;
    //   res=res*10+t;
    //   x=parseInt(x/10)
    // }
    // if (isPrime(res)) answer.push(res)
  }
  return answer
}
const arr2=[32, 55, 65, 20, 250, 370,200, 30, 100]
console.log(solution2(9, arr2))

// 3. 매칭 경우의 수
function solution3(arr3) {

}
const arr3=[]
console.log(solution3(arr3))