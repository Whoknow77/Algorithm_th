# 백트래킹

## 백트래킹이란?

현재 상태에서 가능한 모든 후보군을 따라 들어가며 탐색하는 알고리즘으로 해를 찾는 도중에 해가 될 것 같지 않으면, 되돌아가서 다시 해를 찾는 방법을 말한다.

백트래킹으로 문제를 풀 경우, DFS로 모든 경우의 수를 탐색하다가 조건문 등을 걸어 해가 절대로 될 수 없는 상황을 정의하고 그런 상황일 경우 탐색을 중지하고 그 이전으로 돌아가 다시 다른 경우를 탐색하게끔 구현할 수 있다.

즉 답이 될 만한지 판단하고 그렇지 않으면 그 부분까지 탐색하는 것을 하지 않고 가지치기 하는 것을 백트래킹이라고 생각하면 된다.

## [N과 M(1)](https://www.acmicpc.net/problem/15649)

첫째 줄에 자연수 N과 M이 주어지면 (1 ≤ M ≤ N ≤ 8)

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 모두 구하는 프로그램을 작성하라는 문제이다.

<img src="https://i.postimg.cc/mDssGR27/image.png">

```js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr = [];
const isused = Array(10).fill(0);

BackTracking(0);

function BackTracking(k) {
  if (k === m) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!isused[i]) {
      arr.push(i + 1);
      isused[i] = 1;
      BackTracking(k + 1);
      arr.pop();
      isused[i] = 0;
    }
  }
}
```

위에서부터(부모에서부터) 차례로 뿌리를 내리면서 조건을 가지는 dfs를 구현하였다.

게속 재귀를 통해 함수를 호출하며, 길이가 n일때 출력하고 다시 return 하는 구조를 가진다.

재귀는 항상 어렵기때문에 백트래킹도 완전히 이해하는데 많은 시간이 걸릴 것 같다.

이것을 응용한 문제를 푸는 것은 진짜 어려워 보인다.

## 참고자료

https://www.youtube.com/watch?v=Enz2csssTCs

https://chanhuiseok.github.io/posts/algo-23/
