---
tags: [MSc]
aliases: []
date_created: 2024-10-09
link: 
up:
  - "[[COM6516 Object Oriented Programming and Software Design]]"
---
## COM6516 객체 지향 프로그래밍 및 소프트웨어 설계

>[!notes] **TL;DR**
>- Java의 equals를 통한 [[Overriding]] 학습

```java
// Todo: This is key point
 // Override equals method to check for equality based on name and price
 @Override
 public boolean equals(Object obj) {
	  // Check if the two objects are the same reference
	  if (this == obj) {
			return true;
	  }
	  // Check if the other object is null or of a different class
	  if (obj == null || getClass() != obj.getClass()) {
			return false;
	  }

	  // Cast to ItemWithEquals and compare fields
	  ItemWithEquals item = (ItemWithEquals) obj;
	  return (name.equals(item.getName())) && price == item.getPrice();
 }
```

### 목표
이번 실습의 목표는 Java의 객체 지향 기능을 학습하는 것입니다. 다른 학생과 협력하여 작업할 수 있지만, 반드시 자신의 코드를 작성하고 직접 이해하는 것이 중요합니다.

### Part 1: 지난주 코드 검토
- **작업**:
  - Blackboard에서 지난 주의 예제 솔루션을 검토하고, 자신의 `CycleComputer` 코드와 비교합니다.
  - **비교 사항**:
    - 두 코드가 같은 출력을 생성하는지 확인합니다.
    - 각 프로그램의 장점과 개선할 점을 파악합니다.
  - **Java 초보자일 경우**: 지난주 강의 슬라이드의 Java 주요 기능을 복습하세요.

---

### Part 2: 객체 지향 프로그래밍 (기초)

#### 객체 지향 프로그래밍 기본 개념
- **객체 지향 프로그래밍**: 객체가 속성과 작업을 수행하며, 프로그램 상태는 객체 간 상호작용으로 변합니다. 객체의 내부 작동보다는 인터페이스에 중점을 둡니다.
- **주요 용어**:
  - **Class**: 객체의 청사진으로, 데이터와 메서드를 정의합니다.
  - **Object**: 클래스의 인스턴스로, 생성자를 호출하여 만듭니다.
  - **Encapsulation**: 데이터와 동작을 객체로 결합하여 내부 구현을 숨깁니다.
  - **Extension**: 다른 클래스 위에 구축된 클래스를 의미합니다.

#### 프로그래밍 작업 1
- **작업**:
  - `FoodStore.java` 파일을 열어 클래스의 역할과 코드를 이해합니다.
  - `TestFoodStore` 클래스 작성:
    ```java
    public class TestFoodStore {
        public static void main(String[] args) {
            FoodStore myFoodStore = new FoodStore(10);
            System.out.println("Contains " + myFoodStore.getAmountStored());
        }
    }
    ```
	- **수정 사항**:
		- [x] `TestFoodStore`를 수정하여 다른 메서드를 테스트하세요.\
			- Test code는 어떻게 짜는게 좋을까?
		- [x] `FoodStore` 클래스를 수정하여 입출금 횟수를 기록하는 인스턴스 변수를 추가하세요.
	- **새 클래스 작성**: `TestFoodStore2`
		- 프로그램은 먼저 저장 용기 안의 현재 음식 양을 읽는 것으로 시작해야 합니다.
			- 이후, 반복문을 사용하여 일련의 트랜잭션을 읽고 처리해야 합니다.
		- 각 트랜잭션은 정수 $n$의 형태로 제공됩니다.
			- 만약 $n$이 양수이면, 이는 음식의 입금을 의미하며, 저장 용기의 음식 양을 $n$만큼 증가시킵니다.
			- 반대로 $n$이 음수이면, 이는 음식의 출금을 의미하며, 저장 용기의 음식 양을 $n$만큼 감소시킵니다.
		- 각 트랜잭션이 처리될 때마다 프로그램은 출금 또는 입금 여부를 나타내는 메시지를 출력해야 합니다.
		- 저장 용기 내의 음식 양이 0 아래로 떨어지게 되는 트랜잭션은 거부해야 합니다.
		- 모든 트랜잭션 처리가 완료되면,
			- 총 출금 횟수
			- 총 입금 횟수
			- 거부된 트랜잭션의 총 횟수
			- 총 입금된 음식의 양
			- 총 출금된 음식의 양
- **추가 작업**:
	- 두 개의 `FoodStore` 객체가 동일한지 테스트하는 방법을 고민해 보세요.
	- Equal method [[Overriding|오버라이딩]]해서 해결 할 것임


## Part 3: Object-Oriented Programming (Advanced)

### Class Files Overview
On the Blackboard page, you’ll find code for the following classes:
- **Basket.java**: Represents a collection (an array) of `Item` objects held in a shopping basket.
- **Item.java**: Represents a single item with a fixed price (e.g., a tin of baked beans).

#### Task
1. Review these classes and examine the associations between them.
2. Check if the classes are properly documented with comments.
	- Add comments where necessary to make the code more understandable.
3. Ensure that the code is consistently indented.
	- `Shift + Option+ F` : auto lint

**Questions**:
- Why does the `Item` class have a `main` method, and what is its purpose?
	- To test Item clsass is working properly
- The `Item` class is **immutable**
	- (i.e., once an `Item` is created, its instance fields cannot be changed).
	- Is this design decision appropriate?
		- it depends on situation. if there are plans to change the name or price, it is not good to adapt the requirements

## Programming Task 2: Creating the `TestBasket` Class

### Goal
Write a new class called `TestBasket.java` that:
- Stores an array of `Item` objects in a `Basket` object.
- Contains a `main` method for testing.

### Instructions
1. Initialize an array of `Item` objects within the `main` method. For example:
   ```java
   Item[] shopping = {
       new Item("baked beans", 0.3),
       new Item("tomato soup", 0.4)
   };
   ```
2. Use the `toString` method to print out each item’s instance fields.
3. Use the `total` method from the `Basket` class to calculate the total cost of the items in the basket and display the result.

**Check**:
- Ensure that the output is as expected and that the total cost matches your calculations.


## Programming Task 3: Implementing the `equals` Method

**Note**: Avoid using an IDE for this task, as most IDEs can generate this code automatically. It is essential to understand how the `equals` method works.

### Goal
Write an `equals` method for the `ItemWithEquals` class that:
- Returns `true` if the current (`this`) object and the object passed to the `equals` method are identical.
- Returns `false` if the object passed to `equals` is `null`.
- Returns `false` if the current object and the passed object have different classes.
- Checks for equality of the instance fields.

### Testing
1. Create a new class called `TestItemEquals.java`.
2. Use this class to test that the `equals` method in `ItemWithEquals` works correctly.
