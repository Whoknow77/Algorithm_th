# 정렬 알고리즘

- ## 선택정렬

  - 선택정렬이란?

    선택정렬 알고리즘의 컨셉은 요소들이 들어갈 **위치는 이미 정해져있다**는 것에 있다.
    예를 들어, 배열의 첫 번째 자리에는 배열 요소들 중 가장 작은 요소가 들어가고, 두 번째 자리에는 그 다음 가장 작은 요소를 선택해서 그 자리에 넣으면 된다. 이렇게 배열이 끝날 때까지 이 단계를 진행하면 된다.

    <img src="https://blog.kakaocdn.net/dn/6J99x/btqNwweqt1i/lHSxkH0KybIjdbVnrhCqJ1/img.gif">

  - 과정

    1. 배열 중에 최솟값이 위치한 index를 찾습니다.
    2. 최솟값이 위치한 index의 값과 맨 처음의 index 값을 swap합니다.
    3. 맨 처음의 index를 제외한 나머지 배열에 대해서 1,2 단계를 진행합니다.
    4. 하나의 요소가 남을 때까지 위 1~3 과정을 반복합니다.

  - 시간 복잡도

    - 선택정렬은 **최선, 최악, 평균 모두 O(n2)의 시간복잡도**를 가지고 있다. 선택정렬의 비교 횟수는 초기 minIndex를 설정해주는 외부 루프 (n-1)번 그리고 순회하면서 최솟값을 찾는 내부 루프(n-1, n-2, ..., 1)번으로 총 두 개의 반복문이 실행된다.

  - 구현

    ```js
    function selectionsort(arr) {
      for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[minIndex] > arr[j]) {
            minIndex = j;
          }
        }
        if (minIndex !== j) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
      }
      return arr;
    }
    ```

  - 장점

    - 난이도가 낮고, 단순하다.
    - 추가적인 메모리 공간을 필요로 하지 않는다.

  - 단점

    - 현재 값이 최솟값임에도 불구하고 최솟값을 찾기 위한 순회 과정을 진행한다. (**불필요한 순회과정**이 포함되어 있다.)

    - **O(n2)**의 시간복잡도를 가진 만큼 퍼포먼스 측면에서 좋지 않다.

    - 불안정 정렬(unstable sort)로써 동일한 값에 대해 기존의 순서가 뒤바뀔 수 있는 정렬 방식이다.

- ## 버블정렬
- ## 삽입정렬

## 참고자료

https://webruden.tistory.com/476
