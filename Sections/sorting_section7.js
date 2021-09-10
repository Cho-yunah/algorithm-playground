// 1. 선택 정렬
function solution1(arr1) {
  let answer = arr1
  for (let i = 0; i < arr1.length - 1; i++) {
    let temp = i
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[j] < arr1[temp]) temp = j
    }
    ;[arr1[i], arr1[temp]] = [arr1[temp], arr1[i]]
  }
  return answer
}
const arr1 = [13, 5, 11, 7, 23, 15]
console.log(solution1(arr1))

// 2. 버블 정렬
function solution2(arr2) {
  let answer = arr2
  for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = 0; j < arr2.length - i - 1; j++) {
      if (arr2[j] > arr2[j + 1]) {
        ;[arr2[j], arr2[j + 1]] = [arr2[j + 1], arr2[j]]
      }
    }
  }
  return answer
}
const arr2 = [13, 5, 11, 7, 23, 15]
console.log(solution2(arr2))

// 3. 버블 정렬 응용
function solution3(arr3) {
  let answer = arr3
  for (let i = 0; i < arr3.length - 1; i++) {
    for (let j = 0; j < arr3.length - i - 1; j++) {
      if (arr3[j] > 0 && arr3[j + 1] < 0) {
        ;[arr3[j], arr3[j + 1]] = [arr3[j + 1], arr3[j]]
      }
    }
  }
  return answer
}
const arr3 = [1, 2, 3, -3, -2, 5, 6, -6]
console.log(solution3(arr3))

// 4. 삽입 정렬
function solution4(arr4) {
  let answer = arr4
  for (let i = 0; i < arr4.length; i++) {
    let tmp = arr4[i]
    let j
    for (j = i - 1; j >= 0; j--) {
      if (arr4[j] > tmp) arr4[j + 1] = arr4[j]
      else break
    }
    arr4[j + 1] = tmp
  }
  return answer
}

const arr4 = [11, 7, 5, 6, 10, 15, 9]
console.log(solution4(arr4))

// 5. 캐시 문제 변형- 나중에 다시 풀것
function solution5(size, arr5) {
  let answer = Array.from({ length: size }, () => 0)
  // Array.from() 메서드는 유사배열객체를 얕게 복사해 새로운 Array객체를 생성

  return answer
}

const arr5 = [1, 2, 3, 2, 6, 2, 3, 5, 7]
console.log(solution5(5, arr5))

// 6. 바꾼 순서 찾기
function solution6(arr6) {
  let answer = []
  let sortArr = arr6.slice()
  sortArr.sort((a, b) => a - b)
  for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] !== sortArr[i]) answer.push(i + 1)
  }

  return answer
}

const arr6 = [120, 125, 152, 130, 135, 135, 143, 127, 160]
console.log(solution6(arr6))

// 7. 좌표 정렬
function solution7(arr7) {
  let answer = arr7
  arr7.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    else return a[0] - b[0]
  })

  return answer
}

const arr7 = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
]
console.log(solution7(arr7))

// 8. 그리디 기본 문제
function solution8(arr8) {
  let answer = 0
  arr8.sort((a, b) => {
    return a[1] - b[1]
  })
  let endTime = 0
  for (let x of arr8) {
    if (x[0] >= endTime) {
      answer++
      endTime = x[1]
    }
  }
  return answer
}
const arr8 = [
  [3, 3],
  [2, 3],
  [1, 3],
]
console.log(solution8(arr8))

// 9. 그리디 응용
function solution9(arr9) {
  let answer = 0
  let timeLine = []
  for (let x of arr9) {
    timeLine.push([x[0], 's'])
    timeLine.push([x[1], 'e'])
  }
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
    else return a[0] - b[0]
  })
  let count = 0
  for (let x of timeLine) {
    if (x[1] === 's') count++
    else count--
    answer = Math.max(answer, count)
  }
  return answer
}
const arr9 = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]
console.log(solution9(arr9))

// 10. 이분 검색 - 무조건 자료가 정렬되어 있어야 함
function solution10(arr10) {}
const arr10 = [23, 87, 65, 12, 57, 32, 99, 81]
console.log(solution(arr10))
