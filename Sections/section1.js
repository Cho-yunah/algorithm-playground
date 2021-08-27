// 1. 세 수 중 최소값
function solution1(a, b, c) {
  let answer;
  let minNum = a > b ? b : a;
  answer = minNum > c ? c : minNum;
  return answer;
}

console.log(solution1(2, 5, 1));
console.log(solution1(6, 5, 11));

// 2. 삼각형 판별하기
function solution2(a, b, c) {
  let answer= "YES", maxLength;
  let sum = a+b+c;
  if (a>b) max =a;
  else max=b;
  if(c>max) max=c
  sum-max <= max ? answer="No" : answer= "YES"

  return answer;
}
console.log(solution2(6, 7, 11));

// 3. 연필 개수
function solution3(n) {
  let restNum = n %12 ? n/12+1 : n/12 
  return Math.floor(restNum)
}
console.log(solution3(178))

// 4. 1부터 n까지의 합 출력
function solution4(n) {
  let answer=0
  for (let i=1; i<=n; i++) {
    answer = answer+i
  }
  return answer
}
console.log(solution4(6))

// 5. 최솟값
function solution5(){
  let answer, min=arr[0];
  for(let i = 1; i< arr.length; i++) {
    arr[i]<min ? min=arr[i] : arr[i]
  }
  answer = min
  return answer
}
const arr= [5, 3, 7, 11, 15, 17]
console.log(solution5(arr))

// 6. 홀수
function solution6(arr6) {
  let answer=[], total=0;
  let min= Number.MAX_SAFE_INTEGER;
  for (let i=0; i< arr6.length; i++){
    if(arr6[i]%2===1){ 
      total =  total + arr6[i]
      if (arr6[i]< min) min= arr6[i]
    }
  }

  // for (let x of arr6) {
  //   if (x%2===1) {
  //     total+=x;
  //     if(x<min) min=x
  //   }
  // }
  answer.push(total)
  answer.push(min)
  return answer
}
const arr6= [12, 77, 38, 41, 92, 85, 53]
console.log(solution6(arr6))

// 7. 10부제
function solution7 (day, arr7) {
  let count= 0;
  for(let x of arr7) {
    if(x%10===day) count++;
  }
  return count
}
const arr7=[25,23,11,47,53,17,33]
console.log(solution7(3, arr7))

// 8. 일곱난쟁이?
function solution8(arr8) {
  let answer= arr8;
  let total = arr8.reduce((a,b)=> a+b)
  for(let i =0; i <8; i++) {
    for (let j=i+1; j<9; j++) {
      if (total-(arr8[i]+arr8[j])===100) {
        arr8.splice(i,1);
        arr8.splice(j,1)
      } 
    }
  }
  return answer;
}
const arr8=[20, 7,23,19,10,15,25, 8,13]
console.log(solution8(arr8))

// 9. A를 #으로
function solution9 (str) {
  let answer=str
  answer= answer.split('A').join('#') // 1
  // answer= answer.replace(/A/g, '#') // 2

  // let answer='' //3
  // for(let x of str) {
  //   if(x==='A') answer+= '#'
  //   else answer+=x
  // }
  return answer
}
const str= 'BANANA'
console.log(solution9(str))

// 10. 문자 찾기
function solution10 (str, alphabet) {
 let answer= str.split(alphabet).length;
 return answer-1

//  let answer=0;
//  for(let x of str) {
//    if(x===alphabet) answer++;
//  }
//  return answer
}
const str10 = 'COMPUTERPROGRAMING'
const alphabet='R'
console.log(solution10(str10, alphabet))

// 11. 대문자 찾기
function solution11 (str11) {
  let count=0;
  for (let x of str11) {
    // if(x===x.toUpperCase())count++
    let num= x.charCodeAt(); // 아스키 코드로 대문자: 65~90/ 소문자: 97~122
  }
  return count
}
const str11='KoreaTimeGood'
console.log(solution11(str11))

// 12. 대문자로 통일
function solution12(str12){
  let answer= str12.toUpperCase()
  return answer
}
const str12='ItIsTimeToStudy'
console.log(solution12(str12))


// 13. 대소문자 변환
function solution13(str13) {
  let answer=''
  for (let x of str13) {
    if(x===x.toLowerCase()) answer += x.toUpperCase();
    else answer+= x.toLowerCase()
  }
  return answer
}
const str13='Study'
console.log(solution13(str13))

//  14. 가장 긴 문자열
function solution14(arr14) {
  let answer;
  let max=Number.MIN_SAFE_INTEGER
  for(let x of arr14 ) {
    if (x.length>max) {
      max=x.length;
      answer=x
    }
  }
  return answer;
}
const arr14=['Study', 'hoho','Beautiful']
console.log(solution14(arr14))

// 15. 가운데 문자 풀력
function solution15(str15) {
  let answer;
  let mid = Math.floor(str15.length/2)
  str15.length%2===1
    ? answer=str15.substr(mid, 1)
    : answer= str15.substr(mid-1,2)

  return answer;
}
const str15='learning'
console.log(solution15(str15))


// 16. 중복문자 제거
function solution16(s) {
  let answer=''
  console.log(s.indexOf('k'))
  for(let i=0; i<s.length; i++) {
    console.log(s[i], i, s.indexOf(s[i]))
    if(s.indexOf(s[i])===i)answer+=s[i]
  }
  return answer
}
console.log(solution16('ksekkset'))

// 17. 중복 단어 제거
