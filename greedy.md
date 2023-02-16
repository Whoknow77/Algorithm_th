# 그리디 알고리즘

## 그리디 알고리즘이란?

Greedy Algorithm(탐욕 알고리즘)은 말 그대로 선택의 순간마다 당장 눈앞에 보이는 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법이다.
그러나 **항상 최적의 결과를 보장하지는 못한다**는 점을 명심해야 한다.

그럼에도 어느 정도 최적에 근사한 값을 빠르게 도출할 수 있는 장점을 가지고 있기 때문에 많이 사용된다.

<img src="https://i.postimg.cc/9fbLSdJD/image.png">

그리디 알고리즘의 대표적인 문제인 동전 문제에서 한정된 금액을 최대한 적은 동전개수로 쪼개려면 왼쪽의 방법에서는 Greedy 알고리즘으로 문제가 풀리지만 오른쪽의 경우에는 Greedy 알고리즘으로 문제가 풀리지 않는다.

이런 상황에서는 **DP**로 문제를 해결 해야 한다.

그렇다면 Greedy로 풀리는 문제와 안 풀리는 문제를 어떻게 구분해야 할까?

## 그리디 알고리즘 구분

탐욕 알고리즘을 적용하려면 해결하려는 문제가 다음의 2가지 조건을 성립하여야 한다.

- **앞의 선택이 이후의 선택에 영향을 주지 않는다**.
- 문제에 대한 최종 해결 방법은 부분 문제에 대한 최적 문제 해결 방법으로 구성된다.

하지만 문제를 풀면서 이것을 깨달아 적용시키는 것은 꽤 어려운 일이므로 결국 **많은 문제를 풀어서 감을 익히는 것이 중요하다.**

그리디 알고리즘으로 유명한 문제인 활동 선택 문제와 배낭 문제를 살펴보자.

## 예시

- **활동 선택 문제**

  활동 선택 문제는 한 강의실에서 여러 개의 수업을 하려고 할 때 한 번에 가장 많은 수업을 할 수 있는 경우를 고르는 문제이다.

  아래에서 Si는 시작시간, Fi는 종료시간이다.

    <img src="https://cdn.filepicker.io/api/file/MQKZ2QIHRie6hY1DDNGK">

  이 문제는 **DP** 로도 풀리지만 Greedy로 훨씬 쉽게 풀 수 있다.

  직관적으로 보면 최적의 해를 구하려면 첫 번째 활동이 최대한 일찍 끝나야 한다. 그래야 다른 활동들을 더 많이 선택할수 있기 때문이다.

  따라서 데이터를 끝나는 시간을 기준으로 오름차순으로 정렬 후 강의 들 중에서 이전 강의가 끝나는 시간 <= 다음 강의 시작 시간을 만족하는 강의들만 카운팅하면 된다.

  ```js
  function solution(arr) {
    let result = [];
    let sorted = arr.sort((a, b) => a[1] - b[1]);
    let last = 0;
    let count = 0;
    for (let x of sorted) {
      if (last < x[0]) {
        last = x[1];
        result.push(x);
        count++;
      }
    }
    console.log(result);
    return count;
  }

  let activity = [
    [1, 3],
    [2, 5],
    [4, 7],
    [1, 8],
    [5, 9],
    [8, 10],
    [9, 11],
    [11, 14],
    [13, 16],
  ];
  console.log(solution(activity));
  ```

  따라서 최종적으로 답은 {1,3,6,8} 번째 강의를 고르는 경우이다.

- **분할 배낭 문제**

  배낭 문제는 무게 제한이 50인 배낭에 다음과 같은 세 개의 물건을 넣는 문제이다. 넣은 물건들의 가치(v) 합이 최대가 되면 된다.
  문제는 세 물건의 무게(w)를 합치면 60이라 다 넣지는 못한다.

  물건이 무거울 경우 쪼개서 넣을 수 있다. 즉 무게가 초과할 거 같은면 물건을 쪼개서 일부만 넣을 수 있다는 뜻이다.

  <img src="https://cdn.filepicker.io/api/file/l3hxPZOpQNyFxRNCMMxl">

  직관적으로 생각해보자. 물건을 쪼갤 수 있다는 가정 하에서는 무엇부터 넣는 게 최선일까?

  무게 대비 가치가 높은 것들을 먼저 넣는 것이 좋다.

  따라서 물건을 1, 2번 차례대로 넣고, 3번은 20만큼 쪼개서 넣으면 된다.

  ```js
  function solution(item, w) {
    let sorted = item.sort((a, b) => b[1] / b[2] - a[1] / a[2]); // 무게 대비 가치 순으로 정렬
    let limit = w;
    let result = 0;
    for (let i = 0; i < sorted.length; i++) {
      let cur = sorted[i];
      if (limit > 0) {
        // 배낭의 남은 용량 확인
        if (limit >= cur[1]) {
          limit -= cur[1];
          result += cur[0];
        } else {
          // 쪼개서 넣기
          result += (cur[0] / cur[1]) * limit;
          limit = 0;
        }
      } else {
        break;
      }
    }
    return result;
  }

  let test = [
    [60, 10],
    [100, 20],
    [120, 30],
  ];
  console.log(solution(test, 50));
  ```

## 참고자료

https://velog.io/@devjade/JavaScript%EB%A1%9C-greedy-algorithm%ED%83%90%EC%9A%95-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

https://www.youtube.com/watch?v=CxBYY7XTQvI

https://www.zerocho.com/category/Algorithm/post/584ba5c9580277001862f188
