// 1. 큰 수 출력하기
function solution1(arr1) {
  let answer = [];
  answer.push(arr1[0]);
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > arr1[i - 1]) {
      answer.push(arr1[i]);
    }
  }
  return answer;
}

let arr1 = [7, 3, 9, 5, 6, 12];
console.log(solution1(arr1));

// 2. 보이는 학생
function solution2(arr2) {
  let answer = 0; // max=arr[0]
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] <= arr2[i + 1]) answer++;
    // if(arr2[i]>max) {
    //   answer++;
    //   max=arr[i]
    // }
  }
  return answer;
}
let arr2 = [130, 135, 148, 145, 150, 150, 153];
console.log(solution2(arr2));

// 3. 가위 바위 보
function solution3(a,b) {
  let answer='';
  for (let i =0; i< a.length; i++) {
      if (a[i]===b[i]) answer+='D'
      else if(a[i]===1 && b[i] === 3) answer+= 'A'
      else if(a[i]===2 && b[i] === 1) answer+= 'A'
      else if(a[i]===3 && b[i] === 2) answer+= 'A'
      else answer += 'B'
  }
  return answer
}
let a =[2,3,3,1,3]
let b = [1,1,2,2,3]
console.log(solution3(a,b))

// 4. 점수 계산
function solution4(arr4){
  let answer=0;
  let count=0;
  for (let i =0; i<arr4.length; i++) {
    if (arr4[i] === 1 ) {
      count++;
      answer += count
    }
    else count=0;
  }
  return answer;
}
let arr4=[1,0,1,1,1,0,0,1,1,0]
console.log(solution4(arr4))


// 5. 등수 구하기
function solution5(arr5) {
  let n=arr5.length;
  let answer=Array.from({length:n},()=> 1);
  for (let i =0; i<n; i++) {
    for(j=0; j<n; j++) {
      if(arr5[j]>arr5[i]) answer[i]++
    }
  }
  return answer;
}
let arr5=[87, 89, 92, 100, 76]
console.log(solution5(arr5))
