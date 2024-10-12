---
tags: public
aliases:
date_created: 2024-09-24
---

## 동시성 (Concurrency)

동시성은 JavaScript에서 비동기 프로그래밍을≤ 통해 구현됩니다. 단일 스레드 언어인 JavaScript는 이벤트 루프를 사용하여 여러 작업을 효율적으로 처리할 수 있습니다.

### 이벤트 루프

- **이벤트 루프(Event Loop)** 는 프로그램 주위를 도는 큰 루프로 생각할 수 있습니다. 처리할 일이 없을 때는 멈춰있다가, 이벤트가 발생하면 해당 이벤트를 큐에 추가하고 하나씩 코드를 실행합니다.

예를 들어:

```javascript
console.log("시작");

setTimeout(() => console.log("타이머 1"), 0);
setTimeout(() => console.log("타이머 2"), 0);

Promise.resolve().then(() => console.log("프로미스 1"));
Promise.resolve().then(() => console.log("프로미스 2"));

console.log("끝");
```

**실행 결과:**

```
시작
끝
프로미스 1
프로미스 2
타이머 1
타이머 2
```

이 예제는 동기 코드, 마이크로태스크(Promise), 매크로태스크(setTimeout)의 실행 순서를 보여줍니다.

### 비동기 함수

ES6부터 도입된 `async/await` 문법을 사용하면 비동기 코드를 마치 동기 코드처럼 작성할 수 있습니다. 이는 코드를 더 읽기 쉽게 만들어 줍니다.

예를 들어:

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error("사용자 데이터를 가져오는 데 실패했습니다:", error);
  }
}

fetchUserData(123);
```

이 함수는 사용자 데이터를 비동기적으로 가져오면서도, 동기 코드처럼 읽히도록 작성되었습니다.

---

## 병렬성 (Parallelism)

JavaScript는 기본적으로 단일 스레드에서 실행되지만, **Web Workers**를 사용하면 일부 병렬 처리가 가능합니다.

### Web Workers

- **Web Worker**는 메인 스크립트와 함께 실행되는 별도의 JavaScript 프로세스로, 자체적인 실행 흐름을 가집니다.
- 복잡하고 시간이 오래 걸리는 작업을 백그라운드에서 실행하여 메인 스레드의 응답성을 유지할 수 있습니다.

예를 들어:

**main.js**

```javascript
const worker = new Worker('worker.js');

worker.onmessage = function(event) {
  console.log('워커로부터 받은 결과:', event.data);
};

worker.postMessage([1, 2, 3, 4, 5]);
```

**worker.js**

```javascript
self.onmessage = function(event) {
  const numbers = event.data;
  const result = numbers.reduce((sum, num) => sum + num, 0);
  self.postMessage(result);
};
```

이 예제에서 워커는 메인 스크립트와 병렬로 실행되어 배열의 합계를 계산합니다.

---

## 정리

- **동시성 (Concurrency)**
  - JavaScript의 **이벤트 루프**를 통해 구현
  - **비동기 프로그래밍**(콜백, Promise, async/await)을 사용
  - 단일 스레드에서 여러 작업을 효율적으로 관리

- **병렬성 (Parallelism)**
  - **Web Workers**를 통해 제한적으로 구현 가능
  - 메인 스레드와 별도로 백그라운드에서 스크립트 실행
  - CPU 집약적인 작업에 유용

JavaScript에서는 주로 동시성을 활용하여 비동기 작업을 처리하며, 필요한 경우 Web Workers를 통해 병렬 처리를 수행합니다. 이를 통해 효율적이고 반응성 높은 웹 애플리케이션을 구축할 수 있습니다.

