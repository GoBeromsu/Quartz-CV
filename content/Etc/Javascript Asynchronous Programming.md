---
tags:
  - AsynchronousProgramming
  - JavaScriptConcepts
  - EventLoop
aliases: 
date_created: 2024-09-24
up:
  - "[[JavaScript]]"
link:
  - https://eloquentjavascript.net/11_async.html
Habitus:
  - "[[◦ Knowledge]]"
---

Asynchronous programming in JavaScript is a technique that allows the program to start potentially time-consuming tasks and continue executing other tasks without waiting for the initial task to complete.

This approach is essential in web development where operations like fetching data from a server, reading files, or executing time-consuming computations can block the main thread, leading to unresponsive interfaces.

## Key Concepts in Asynchronous Programming

### Callbacks
Functions passed as arguments to other functions to be executed after the first function has completed. For example:

```javascript
setTimeout(() => console.log("Tick"), 500);
```

### Promises
Objects representing the eventual completion or failure of an asynchronous operation. They can be chained and managed more systematically than callbacks.

```javascript
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
```

### Async/Await
Syntactic sugar built on top of promises, making asynchronous code easier to write and read by allowing asynchronous code to be structured similarly to synchronous code.

```javascript
async function example() {
  let result = await someAsyncOperation();
  console.log(result);
}
```

## The Event Loop

JavaScript uses an event loop to handle asynchronous operations:

- The main script runs first, often setting up callbacks for later execution.
- When the main script completes, the program may become idle, waiting for events.
- As events occur (e.g., timeouts, network responses), their associated callbacks are added to a queue.
- The event loop processes these queued callbacks one by one.

This model ensures that **JavaScript remains single-threaded**, executing only one piece of code at a time.

To better understand how JavaScript handles asynchronous operations, it's crucial to grasp the concept of the event loop and the order in which callbacks are executed. Let's break it down:

1. **The Call Stack**:
   - **JavaScript uses a call [[Strack 자료구조|stack]]** to keep track of where it is in the program.
   - When a function is called, it's added to the stack. When it returns, it's removed from the stack.

2. **The Event Loop**:
   - The event loop continuously checks if the call stack is empty.
   - If it's empty, it looks at the callback queue to see if there are any functions waiting to be executed.

3. **Callback Queue**:
   - There are actually two types of queues: the microtask queue and the macrotask queue.
   - Microtasks (like Promise callbacks) have priority over macrotasks (like setTimeout callbacks).

Let's look at an example:

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise (Microtask)');
});

console.log('End');
```

```
Start
End
Promise (Microtask)
Timeout (Macrotask)
```

1. `console.log('Start')` is executed immediately.
2. `setTimeout` is encountered. Its callback is scheduled as a **macrotask**.
3. The Promise's `then` callback is scheduled as a **microtask**.
4. `console.log('End')` is executed immediately.
5. The call stack is now empty, so the event loop checks the microtask queue first.
6. The Promise callback (microtask) is executed, logging 'Promise (Microtask)'.
7. The microtask queue is now empty, so the event loop moves to the macrotask queue.
8. The setTimeout callback (macrotask) is executed, logging 'Timeout (Macrotask)'.

### Key Takeaways for Junior Developers

1. **Single-Threaded Nature**: JavaScript is single-threaded, meaning it can only do one thing at a time.
2. **Asynchronous Operations**: Functions like `setTimeout` and Promises allow JavaScript to perform non-blocking operations.
3. **Microtasks vs Macrotasks**:
   - Microtasks (Promises, queueMicrotask) are processed before macrotasks (setTimeout, setInterval, I/O operations).
   - This prioritization ensures that Promise resolutions are handled as soon as possible.
4. **Event Loop**: It's the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded.

## Asynchronous Patterns

#### Promise Chaining
Promises can be chained to handle sequences of asynchronous operations:

```javascript
fetchData()
  .then(processData)
  .then(saveResult)
  .catch(handleError);
```

#### Parallel Execution
`Promise.all` allows multiple asynchronous operations to run concurrently:

```javascript
Promise.all([fetchUser(), fetchPosts()])
  .then(([user, posts]) => {
    // Use user and posts data
  });
```

#### Async Functions
Async functions provide a cleaner syntax for working with promises:

```javascript
async function fetchUserData() {
  try {
    let user = await fetchUser();
    let posts = await fetchPosts(user.id);
    return { user, posts };
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
```

## Common Pitfalls

- Callback Hell: Nesting multiple callbacks can lead to unreadable and hard-to-maintain code.
- Forgetting to handle errors in asynchronous code.
- Misunderstanding the asynchronous nature of operations, leading to race conditions or unexpected behavior.

## Best Practices

1. Use promises or async/await instead of nested callbacks.
2. Always handle errors in asynchronous code.
3. Be aware of the event loop and how it affects the execution of your code.
4. Use `Promise.all` for concurrent operations when appropriate.
5. Avoid blocking the main thread with long-running synchronous operations.

## Tip
### [[Concurrency Vs Parallelism]]

Clarify the difference between concurrency (managing multiple tasks over the same time period) and parallelism (executing multiple tasks simultaneously).

JavaScript is single-threaded but can **handle concurrent operations** through asynchronous programming, even though it doesn't perform tasks in parallel unless using Web Workers.

### Best Practices Enhancements

**Avoiding Overuse of Async/Await**

- **Explanation**: Not all functions need to be asynchronous. Overusing `async` can lead to unnecessary promise creation, which can affect performance.

- **Example**:

  ```javascript
  // Unnecessary async
  async function add(a, b) {
    return a + b;
  }

  // Better
  function add(a, b) {
    return a + b;
  }
  ```

**Handling Multiple Asynchronous Operations in Loops**

- **Inefficient Approach**:

  ```javascript
  for (const url of urls) {
    await fetchAndProcess(url);
  }
  ```

- **Efficient Approach**:

  ```javascript
  await Promise.all(urls.map(url => fetchAndProcess(url)));
  ```

- **Insight**: Running asynchronous operations in parallel when possible improves performance.

**Using Linters and Code Style Guides**

- **Explanation**: Enforce consistent asynchronous code patterns using tools like ESLint with plugins for promises and async/await.

- **Example ESLint Configuration**:

  ```json
  {
    "plugins": ["promise"],
    "rules": {
      "promise/always-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error"
    }
  }
  ```
###  Handling Await in Loops and Conditional Statements

- **Pitfall**: Using `await` inside loops or conditionals without proper understanding can lead to sequential execution and performance issues.

Use `Promise.all` to run tasks in parallel when order doesn't matter. If order matters, consider refactoring the code to allow for concurrency.


Certainly! Here's an expanded explanation of synchronous vs asynchronous exceptions, tailored for junior developers:

### Synchronous Vs. Asynchronous Exceptions

#### Synchronous Exceptions

Synchronous exceptions occur in the normal flow of program execution. They are immediately caught by surrounding try-catch blocks.

```javascript
try {
  console.log("Start of try block");
  throw new Error('Synchronous error');
  console.log("This line will never be executed");
} catch (error) {
  console.error("Caught synchronous error:", error.message);
}
console.log("Program continues executing");

// Output:
// Start of try block
// Caught synchronous error: Synchronous error
// Program continues executing
```

Key points:
- The error is thrown and caught immediately.
- Code execution in the try block stops at the point where the error is thrown.
- The catch block is executed right away.
- Program execution continues after the try-catch block.

#### Asynchronous Exceptions

Asynchronous exceptions occur in code that runs at a later time, such as in Promises, setTimeout, or event callbacks. These cannot be caught by a regular try-catch block surrounding the asynchronous function call.

```javascript
try {
  console.log("Start of try block");
  Promise.reject(new Error('Asynchronous error'));
  console.log("This line will be executed");
} catch (error) {
  console.error("This catch block will not catch the async error");
}

// Proper way to handle asynchronous errors
Promise.reject(new Error('Asynchronous error'))
  .catch(error => {
    console.error("Caught asynchronous error:", error.message);
  });

console.log("Program execution continues immediately");

// Output:
// Start of try block
// This line will be executed
// Program execution continues immediately
// Caught asynchronous error: Asynchronous error
```

Key points:
- The Promise.reject doesn't throw an error immediately; it schedules it for later.
- The try-catch block surrounding the Promise creation is ineffective for catching the async error.
- Asynchronous errors must be handled using .catch() on Promises or try-catch within async functions.
- The program continues executing immediately, not waiting for the Promise to settle.

#### Why This Matters

1. **Error Propagation**: Synchronous errors propagate up the call stack immediately, while asynchronous errors do not.

2. **Debugging**: Synchronous errors provide a clear stack trace to the error's origin. Asynchronous errors can be more challenging to trace.

3. **Program Flow**: Unhandled synchronous exceptions can halt program execution immediately. Unhandled asynchronous exceptions might not stop the program immediately but can lead to unexpected behavior.

4. **Error Handling Strategies**: Different strategies are needed for handling synchronous and asynchronous errors effectively.
