# LIS 알고리즘

## LIS란?

Longest Increasing Subsequence(최장 증가 부분 수열)은 원소가 원소가 n개인 배열의 일부 원소를 골라내서 만든 부분 수열 중, 각 원소가 이전 원소보다 크다는 조건을 만족하고, 그 길이가 최대인 부분 수열을 최장 증가 부분 수열이라고 한다.

예를들어 `[1,5,6,1,2,3,4,5]` 이라는 배열에서 최장 증가 수열은 `[1,2,3,4,5]`가 된다.

## DP 풀이

```js
const arr = [1, 4, 4, 6, 8, 4];
const dp = Array(6).fill(1);

for (let i = 0; i < arr.length - 1; i++) {
  for (let target = i + 1; target < arr.length; target++) {
    if (arr[i] < arr[target]) {
      dp[target] = Math.max(dp[i] + 1, dp[target]);
    }
  }
}

const lis = Math.max(...dp);
```

arr의 각 원소마다 끝까지 다음원소들을 훑으면서 dp를 증가시켜나간다.

여기서 dp의 각 원소는 arr[i]를 마지막 값으로 가지는 가장 긴 부분수열의 길이를 나타낸다.

따라서, 최종적으로 dp의 배열의 최댓값이 가장 긴 부분수열의 길이를 나타내게 된다.

하지만, 이 풀이도 완전 탐색과 다를바 없이 시간복잡도가 `O(N^2)`가 된다.

## 이분탐색 풀이

```js
const arr = [1, 2, 3, 7, 5, 6];
const lis = [];

lis.push(arr[0]);
for (let i = 1; i < arr.length; i++) {
  // 이분 탐색으로 위치 찾기
  let left = 0,
    right = lis.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[i] > lis[mid]) left = mid + 1;
    else right = mid;
  }

  if (right === lis.length - 1) lis.push(arr[i]);
  else lis[right] = arr[i];
}
```

LIS를 만드는 과정을 보면 LIS의 마지막 원소가 가능한 작을수록 더 긴 LIS를 생성할 수 있다는 것을 알 수 있다. 따라서 현재 생성된 LIS가 있는데 새로운 원소가 LIS의 마지막 원소보다 작은 경우, 들어갈 위치를 이분 탐색으로 찾은 후 대체시키며 LIS를 찾을 수 있다.

예를 들어 배열이 `[1, 2, 3, 7, 5, 6]`일 때 5까지 탐색한 경우, 가능한 LIS는 `[1, 2, 3, 7]`과 `[1, 2, 3, 5]`다. 하지만 더 긴 LIS를 만들기 위해서는 `[1, 2, 3, 5]`가 더 유리하다.

따라서 `[1, 2, 3, 7]` 다음 5가 들어온다면 7과 바꿔주는 것이다.

하지만, 이 풀이는 단지 가장 긴 부분 수열의 길이만 알 수 있고, 수열을 알 수는 없다.

수열을 알려면 각 원소가 들어간 인덱스를 저장하면 된다. 이 배열을 사용해서 동적 계획법에서 한 것처럼 거꾸로 이어나가면 된다.

## 참고자료

https://chanhuiseok.github.io/posts/algo-49/

https://www.youtube.com/watch?v=voklbG1wU8A

https://woong-jae.com/algorithm/220513-longest-increasing-subseqeunce
