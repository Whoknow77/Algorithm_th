# 슬라이딩 윈도우

## 슬라이딩 윈도우란?

부분배열의 원소들을 어떠한 조건 하에 계산하는 상황에서 사용되는 알고리즘

## 문제 예시

### 사이즈가 k인 subarray의 최대 합 구하기(부분배열의 최대 합)

### 문제해결 아이디어

윈도우라는 하나의 특정 범위를 정해 놓고 윈도우를 이동시키면서 범위내의 원소를 계산해주는 방식이다.

<img src="https://i.postimg.cc/HkbpW5rn/image.png">

1. k가 만약 3이라면, 윈도우의 범위는 3이 된다.
2. 윈도우를 이동시키면서 중복요소의 계산을 매번 반복적으로 하는 대신에 현재의 합에서 범위 밖으로 벗어난 숫자를 빼고 현재 인덱스의 값을 더한다.

### 브루트포스 풀이

```js
for (let i = 0; i <= arr.length - k; i++) {
  subarraySum = 0;
  for (let j = i; j < i + k; j++) {
    subarraySum += arr[j];
  }
  maxSum = Math.max(maxSum, subarraySum);
}
```

이 풀이는 **중복 연산**이 매번 발생하므로 시간복잡도가 O(n\*k)가 된다.

### 슬라이싱 윈도우 풀이

```js
function maxSumOfSubArray(arr, k) {
  let windowSum = 0;
  let maxSum = -Infinity; // 배열에 음수값이 있을 경우를 대비

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(windowSum, maxSum);
      windowSum -= arr[i - (k - 1)];
    }
  }
  return maxSum;
}

console.log(maxSumOfSubArray([5, 7, -1, 14, 3, 12, 1, 4], 3)); // 29
```

윈도우를 통한 연산으로 중복 연산을 제거해 시간 복잡도가 O(n)이 된다.

## 참고자료

https://www.youtube.com/watch?v=ttLRltNDiCo
