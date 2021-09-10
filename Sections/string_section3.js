// 1. 회문 문자열
function solution1(s) {
  let answer= 'YES';
  s = s.toLowerCase();
  // console.log(s)
  // let len=s.length;
  // for (let i = 0; i<Math.floor(len/2); i++) {
  //   if (s[i] !== s[len-i-1]) return 'NO'
  // }
  // console.log(s.split('').reverse().join(''))
  if(s.split('').reverse().join('') !== s) return 'No';
  return answer;
}
let str1 = 'gooG'
console.log(solution1(str1))

// 2. 유효한 팰린드롬
function solution2(str2) {
  let answer='Yes';
  str2= str2.toLowerCase().replace(/[^a-z]/g, '')
  if(str2.split('').reverse().join('') !== str2) return 'No'
  return answer;
}
let str2 = 'found7, time: study; Yduts; emit, 7Dnuof'
console.log(solution2(str2))

// 3. 숫자만 추출
function solution3(str3) {
  let answer=''
  for(let x of str3) {
    if(!isNaN(x)) answer += answer*10 +Number(x) 
  }
  return answer
}
let str3='g0en2T0s8eSoft';
console.log(solution3(str3))

// 4. 가장 짧은 문자거리 **
function solution4(str4, e) {
  let answer = [];
  let p=1000;
  
  for (let x of str4) {
      if (x === e) {
        p=0; 
        answer.push(p);
      } 
      else {
        p++;
        answer.push(p)
      }
    } 
    p=1000;
    for(let i=str4.length-1; i>=0; i--) {
      if(str4[i]===e) p=0;
      else {
        p++;
        answer[i]=Math.min(answer[i], p)
      }
    }
  return answer
}

let str4='teachermode';
console.log(solution4(str4, 'e'))

// 5. 문자열 압축
function solution5(str5) {
  let answer = '';
  let count=1;
  for( let i=0; i<str5.length; i++) {
    if (str5[i]===str5[i+1]) count++;
    else{
      answer= answer+str5[i];
      if (count>1) answer= answer +String(count);
      count=1;
    }
  }
  return answer;
}
let str5= 'KKHSSSSSSSE'
console.log(solution5(str5))