# 투포인터 알고리즘

## 투포인터 알고리즘이란?

배열에 순차적으로 접근해야 할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘

## 문제 예시

### 다음과 같은 N개의 자연수로 구성된 수열에서 합이 M인 부분 연속 수열의 개수를 구하라.( 수행 시간은 O(N))

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpvSPP%2FbtqEziaUJQt%2FuNZaQhwyStTm1kQXXj8dFk%2Fimg.png" height="300">

반드시 수열이 연속되어야 하고, 원소가 하나여도 된다.

보통의 경우 이중 for문으로 풀면 잘 풀리지만 시간 복잡도가 O(N^2)이 되므로 투포인터를 사용하는 것이 좋다.

### 문제해결 아이디어

1. 시작점과 끝점이 첫 번째의 원소의 인덱스를 가리킨다.
2. 현재 부분 합 === M : 카운트
3. 현재 부분 합 < M : end를 1 증가
4. 현재 부분 합 <= M : start를 1 증가
5. 모든 경우 확인할 때 까지 2번부터 4번까지의 과정 반복

### 풀이

```js
function solution(data, m) {
  let n = data.length;

  let count = 0;
  let interval_sum = 0;
  let end = 0;

  for (let start = 0; start < n; start++) {
    while (interval_sum < m && end < n) {
      interval_sum += data[end];
      end += 1;
    }
    if (interval_sum === m) {
      count += 1;
    }
    interval_sum -= data[start];
  }

  return count;
}

console.log(solution([1, 2, 3, 2, 5], 5)); // 3
```

참고한 영상자료의 그림에서는 end 인덱스가 2일때 start가 증가하는데 start가 증가하기전에 while문 안에서 end 인덱스가 3으로 증가한 상태이므로 잘못된 그림이다.

```js
function solution(m, data) {
  let answer = 0,
    start = 0,
    sum = 0;
  for (let end = 0; end < data.length; end++) {
    sum += data[end];
    if (sum === m) {
      answer++;
    }
    while (sum >= m) {
      sum -= data[start++];
      if (sum === m) {
        answer++;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
```

이러한 방법도 있다.

오히려 참고자료 그림의 잘못된 인덱스를 참조하면서 이해하기 보다는 비록 if문으로 두번 조사를 하지만 이런 코드가 더 이해하기 쉽다.

## 참고자료

https://www.youtube.com/watch?v=ttLRltNDiCo
