# 해시맵

## 해시란?

- ### 해시테이블

  - key와 value를 가지는 자료구조
  - 배열에서는 key값에 숫자만 가능하지만, Hash Table에서는 문자열 또한 Key (Map에서는 함수도 가능)
  - Hash Function을 통해 빠른 탐색이 가능 -> O(1)

- ### 해시함수(해시)

  - key와 연결되어 있는 value를 삽입, 삭제, 탐색하는 알고리즘 함수
  - key가 들어오면 **Random하게 주소값을 생성**한 후, 해당 주소값에 key와 value를 저장
  - 해시함수 과정에서 **해시충돌**이 일어날 수 있음

## 해시테이블 : Map

JS에서 key-value로 이루어진 자료구조는 Object가 대표적이였지만, ES6에서 Map과 Set이 추가되었다.

- ### Map 객체란?

  - key-value로 이루어진 해시 테이블
  - 탐색은 get(), 삽입은 set()으로 한다.
  - key는 고유값으로써, 단 한개만 존재한다.

- ### Map 함수

  - set() : value 설정

    ```js
    let map = new Map();

    let number = 0;
    let str = "string";
    let obj = { a: 1 };
    let fnc = () => {
      console.log("fnc");
    };

    map.set(number, 4); //key에 number 가능
    map.set(str, 1); // key에 string 가능
    map.set(obj, 2); //key에 object 가능
    map.set(fnc, 3); // key에 함수 가능
    map.set(number, 0); // 덮어쓰기 가능

    console.log(map); // Map(4) {0 => 0, "string" => 1, {…} => 2, ƒ => 3}
    ```

    이처럼 `key`값에 다양한 자료형들이 들어갈 수 있다.

  - get() : value 얻기

    ```js
    map.get(str); // 1
    ```

  - has() : value 찾기

    ```js
    map.has(str); // true
    ```

  - delete() : value 삭제

    ```js
    map.delete(str);
    ```

  - size : length는 불가능 : 크기

    ```js
    map.size; // 4
    map.length; // undefined
    ```

  - for-of : 탐색

    ```js
    //key, value 쌍으로 출력
    for (let [key, value] of map) {
      console.log(key + " = " + value);
    }

    //key만 출력
    for (let key of map.keys()) {
      console.log(key);
    }

    //value만 출력
    for (let value of map.values()) {
      console.log(value);
    }
    ```

참고로 `map`과 `object`는 엄연히 다르다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbhjZ0H%2Fbtq6MSuP2HH%2Foyw51UHqhpywENcvZhI9Jk%2Fimg.png">

요약하자면

1. 더 많은 key의 유형
2. size 사용 가능 : O(1)로 알아냄, 기존의 `Object`의 length는 O(n)
3. 순서 보장
4. 구조분해를 통한 편리한 반복문 사용 가능

등으로 `Map`이 `Object`에 비해서 성능이 훨씬 좋다.

## 참고자료

https://velog.io/@jun094/Hash%EC%99%80-Map

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map
