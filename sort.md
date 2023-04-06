# 정렬 알고리즘

- ## 선택정렬

  - 선택정렬이란?

    - 선택정렬 알고리즘의 컨셉은 요소들이 들어갈 **위치는 이미 정해져있다**는 것에 있다.
      예를 들어, 배열의 첫 번째 자리에는 배열 요소들 중 가장 작은 요소가 들어가고, 두 번째 자리에는 그 다음 가장 작은 요소를 선택해서 그 자리에 넣으면 된다. 이렇게 배열이 끝날 때까지 이 단계를 진행하면 된다.

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

  - 버블정렬이란?

    - 두 인접한 원소를 검사하여 정렬하는 방법이다. (오름차순이라면 작은 값부터 큰 값 순으로 정렬이 될 것이고, 내림차순이라면 큰 값부터 작은 값 순으로 정렬이 된다.)

  - 과정

    - 인접한 두 요소를 마지막 요소까지 모두 비교하며 교환하거나 유지하면서 정렬한다.
    - 1회전을 수행한 후 정렬 조건에 따라 가장 크거나 작은 요소가 맨 뒤로 이동하기 때문에 2회전부터는 가장 끝에 있는 요소는 정렬에서 제외된다.
      쉽게 말해 정렬 1회전을 수행할 때마다 정렬에서 제외되는 요소가 1개씩 늘어나게 된다.

  - 시간 복잡도

    - 버블 정렬의 시간 복잡도는 최상, 최악, 평균 모두 O(n^2)의시간복잡도(n\*(n-1)/2)를 가지고 있다. 그 이유는 버블정렬은 이미 정렬이 되어 있든 안되어 있든 상관없이 n개의 요소가 있을 때 n개에 대해서 각 n번의 순회를 돌기 때문에 모두 동일한 시간복잡도를 가지고 있는 것이다.

  - 구현

    ```js
    function bubblesort(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - (i + 1); j++) {
          // 4 3 2 1
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    }
    ```

  - 장점

    - 난이도가 낮고, 단순하다.
    - 추가적인 메모리 공간을 필요로 하지 않는다.

  - 단점

    - 수행 시간이 굉장히 오래 걸린다.

    - 불필요한 교환이 이뤄질 가능성이 크다. (최종 단계에서는 현재 위치가 맞음에도 불구하고, 인접한 두 요소 간의 비교에 의해 위치가 변경된다.)

- ## 삽입정렬

  - 삽입정렬이란?

    - 삽입 정렬은 왼쪽에서 오른쪽으로 가면서 각 요소들을 왼쪽 요소들과 비교하여 알맞은 자리에 삽입하는 형식의 정렬 방법이다.

        <img src="./img/insert.png" height="300" width="300">

  - 과정

    1. 배열에서 두 번째 요소(그 다음 루프에서는 세 번째...루프 끝까지)를 선택하여 루프를 시작한다.
    2. 이제 두 번째 요소를 이전 요소와 비교하고 더 작은 경우 교체한다.
    3. 다음 요소로 진행하고 순서가 잘못된 경우 왼쪽에 정렬된 부분에서 반복문을 돌려 거기서 해당 요소가 있어야 할 위치에 배치한다.
    4. 배열이 정렬될 때까지 위 작업을 반복한다.

       **비교 하기 전에 원소들은 이미 정렬이 되어있고, 자리를 찾아서 들어가기만 하면됨**

  - 시간 복잡도

    - 평균적인 시간 복잡도는 모두 O(n2)으로 동일하나, Best Case(정렬이 되어있는 경우)에서 O(n)이다.

  - 구현

    ```js
    function insertionSort(array) {
      for (let i = 1; i < array.length; i++) {
        let cur = array[i];
        let left = i - 1;

        while (left >= 0 && array[left] > cur) {
          array[left + 1] = array[left];
          left--;
        }
        array[left + 1] = cur;
        console.log(`${i}회전: ${array}`);
      }
      return array;
    }
    ```

  - 장점

    - 난이도가 낮고, 단순하다.
    - 추가적인 메모리 공간을 필요로 하지 않는다.

  - 단점

    - 자료의 개수가 많아질수록 성능이 매우 떨어진다.

- ## 병합정렬

  - 병합정렬이란?

    - 분할 정복 알고리즘 중 하나에 속하며 하나의 리스트를 두 개의 균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법이다.

        <img src="https://gmlwjd9405.github.io/images/algorithm-merge-sort/merge-sort-concepts.png" height="300" width="300">

  - 과정

  1.  리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
  2.  정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
  3.  각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

  4.  두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

      **비교 하기 전에 원소들은 이미 정렬이 되어있고, 자리를 찾아서 들어가기만 하면됨**

  - 시간 복잡도

    - T(n) = nlog₂n(비교) + 2nlog₂n(이동) = 3nlog₂n = O(nlog₂n)

  - 구현

    ```js
    function merge(left, right) {
      const sortedArr = [];
      while (left.length && right.length) {
        //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
        if (left[0] <= right[0]) {
          sortedArr.push(left.shift());
        } else {
          sortedArr.push(right.shift());
        }
      }
      //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
      //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여준다.
      return [...sortedArr, ...left, ...right];
    }

    function mergeSort(arr) {
      if (arr.length === 1) return arr;
      const boundary = Math.ceil(arr.length / 2);
      //slice로 해주기 때문에 원본 arr은 손상 없다.
      const left = arr.slice(0, boundary);
      const right = arr.slice(boundary);
      //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
      //차근차근 merge(정렬해서 합치기)해주면 된다.
      return merge(mergeSort(left), mergeSort(right));
    }

    const arr = [7, 4, 3, 2, 1, 6, 5];
    const sortedArray = mergeSort(arr);
    console.log(arr); //[7, 4, 3, 2, 1, 6, 5]
    console.log(sortedArray); //[1, 2, 3, 4,5, 6, 7]
    ```

  - 장점

    - 안정적인 정렬 방법(데이터 분포에 영향을 덜 받는다.)
    - 만약 레코드를 연결 리스트(Linked List)로 구성하면, 링크 인덱스만 변경되므로 데이터의 이동은 무시할 수 있을 정도로 작아진다.

  - 단점

    - 자료의 개수가 많아질수록 성능이 매우 떨어진다.
    - 만약 레코드를 배열(Array)로 구성하면, 임시 배열이 필요하다.

## 참고자료

https://webruden.tistory.com

https://im-developer.tistory.com/133

https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html

https://velog.io/@proshy/JSmerge-sort%ED%95%A9%EB%B3%91-%EC%A0%95%EB%A0%AC
