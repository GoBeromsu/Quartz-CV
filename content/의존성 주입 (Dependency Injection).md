---
tags:
  - 소프트웨어설계
  - 디자인패턴
  - 언어/Java
  - Tools/프레임워크/Spring
  - DependencyInjection
  - InversionOfControl
  - SoftwareDesign
  - DesignPatterns
  - SOLIDPrinciples
  - Testing
aliases:
  - Dependency Injection
  - 의존성 주입
CMDS:
  - "[[📚 013 Terminologies]]"
author:
  - "[[고범수]]"
date_created: 2024-08-13
persona:
  - "[[🔥 Programmer]]"
---

**의존성 주입(Dependency Injection, DI)** 은 객체 지향 프로그래밍에서 객체가 자신이 필요로 하는 의존성을 직접 생성하지 않고, 외부에서 제공(주입)받는 설계 패턴이자 원칙입니다[(Fowler, 2004)](https://martinfowler.com/articles/injection.html). 여기서 **의존성**이란 한 객체가 다른 객체의 기능이나 데이터를 필요로 할 때 그 객체를 의미합니다. DI는 이러한 의존성을 객체 내부에서 직접 생성하지 않고, 외부에서 전달받음으로써 객체 간의 결합도를 낮추고 코드의 유연성과 재사용성을 향상시킵니다.

DI는 다양한 프로그래밍 언어와 프레임워크에서 널리 사용되며, 객체 지향 프로그래밍의 핵심 원칙 중 하나인 **[[단일 책임 원칙(Single Responsibility Principle)]]** 을 준수하도록 돕습니다. 또한 DI는 **[[제어의 역전(Inversion of Control, IoC)]]** 원칙을 구현하는 한 가지 방법으로, 객체 생성과 의존성 관리를 애플리케이션이 아닌 외부 컨테이너나 프레임워크가 담당하게 합니다.

### 왜 사용하는가 (Why Use Dependency Injection)

- **결합도 감소 (Reduced Coupling)**: 객체가 구체적인 구현체가 아닌 인터페이스나 추상 클래스와 같은 추상화에 의존함으로써 클래스 간의 강한 결합도를 낮춥니다. 이는 코드 변경 시 영향 범위를 최소화하고, 모듈화와 재사용성을 향상시킵니다.

- **테스트 용이성 (Improved Testability)**: 의존성을 외부에서 주입받기 때문에, 테스트 시 모의 객체(mock objects)나 스텁(stubs)을 활용하여 단위 테스트를 쉽게 수행할 수 있습니다. 이는 **[[테스트 주도 개발(Test-Driven Development, TDD)]]** 을 실천하는 데 큰 도움이 됩니다.

- **유연성과 확장성 (Flexibility and Scalability)**: 런타임 시 의존성을 교체하거나 구성할 수 있어 애플리케이션의 유연성을 높입니다. 새로운 기능 추가나 변경 시 기존 코드를 최소한으로 수정하여 확장성을 제공합니다.

- **가독성 및 유지보수성 향상 (Improved Readability and Maintainability)**: 의존성이 명시적으로 드러나기 때문에, 코드의 가독성이 향상되고 유지보수가 쉬워집니다.

#### 의존성을 직접 생성하는 경우

의존성을 주입하지 않는다는 것은 객체 내부에서 필요한 의존성을 직접 생성한다는 의미이며, 이는 **강한 결합(Tight Coupling)** 을 초래합니다. 이러한 경우 다음과 같은 문제가 발생합니다.

- **유연성 감소**: 의존 대상의 구현체가 변경되면 이를 사용하는 모든 객체를 수정해야 합니다.

- **테스트의 어려움**: 객체 내부에서 의존성을 생성하기 때문에, 단위 테스트 시 모의 객체를 주입하기 어렵습니다.

- **재사용성 저하**: 특정 구현체에 종속되어 다른 컨텍스트에서 재사용하기 어렵습니다.

- **코드 중복 증가**: 동일한 의존성을 여러 곳에서 생성하면 코드 중복이 발생합니다.

아래 코드는 의존성을 직접 생성하는 경우의 예시입니다.

```java
public class UserService {
    private UserRepository userRepository;

    public UserService() {
        this.userRepository = new UserRepository(); // 의존성을 직접 생성
    }

    public void performAction() {
        userRepository.save();
    }
}
```

위 코드에서 `UserService`는 `UserRepository`의 구체적인 구현체를 직접 생성하고 있습니다. 만약 `UserRepository`의 구현을 변경하거나 다른 구현체로 교체하려면 `UserService` 코드를 수정해야 합니다.

반면에 의존성을 주입받게 되면, `UserService`는 `UserRepository`의 구체적인 구현에 대해 알 필요가 없으며, 필요에 따라 다른 구현체를 주입할 수 있습니다.

### 어떻게 적용하는가 (How to Apply Dependency Injection)

- **생성자 주입(Constructor Injection)**: 생성자를 통해 필요한 의존성을 주입받는 방식입니다. 의존성이 반드시 필요한 경우에 사용하며, 객체의 불변성을 유지할 수 있습니다.

  ```java
  public class UserService {
      private final UserRepository userRepository;

      public UserService(UserRepository userRepository) {
          this.userRepository = userRepository;
      }

      public void performAction() {
          userRepository.save();
      }
  }
  ```

  **장점**:
  - 의존성이 객체 생성 시점에 주입되므로, 의존성이 누락되는 것을 방지할 수 있습니다.
  - `final` 키워드를 사용하여 의존성을 불변으로 유지할 수 있습니다.

  **단점**:
  - 의존성이 많을 경우 생성자의 매개변수가 많아져 가독성이 떨어질 수 있습니다.

- **세터 주입(Setter Injection)**: 세터 메서드를 통해 의존성을 주입받는 방식입니다. 선택적인 의존성이나 변경 가능한 의존성을 주입할 때 사용합니다.

  ```java
  public class UserService {
      private UserRepository userRepository;

      public void setUserRepository(UserRepository userRepository) {
          this.userRepository = userRepository;
      }

      public void performAction() {
          userRepository.save();
      }
  }
  ```

  **장점**:

  - 의존성을 선택적으로 주입할 수 있어 유연성이 높습니다.
  - 필요에 따라 의존성을 변경할 수 있습니다.

  **단점**:

  - 의존성이 주입되지 않을 위험이 있어, 런타임 시 `NullPointerException`이 발생할 수 있습니다.
  - 객체 상태의 불변성을 보장하기 어렵습니다.

- **필드 주입(Field Injection)**: 직접 필드에 의존성을 주입하는 방식입니다. 주로 프레임워크에서 지원하며, 리플렉션(reflection)을 사용합니다.

  ```java
  public class UserService {
      @Autowired
      private UserRepository userRepository;

      public void performAction() {
          userRepository.save();
      }
  }
  ```

  **장점**:

  - 코드가 간결해집니다.
  - 의존성을 쉽게 주입할 수 있습니다.

  **단점**:

  - 테스트 시 의존성 주입이 어렵습니다.
  - 필드가 외부에서 보이지 않아 의존성을 명확히 알기 어렵습니다.
  - DI 컨테이너에 종속적입니다.

- **인터페이스 주입(Interface Injection)**: 특정 인터페이스를 구현하여 의존성을 주입받는 방식입니다. 의존성을 주입하기 위한 메서드를 정의해야 하므로 일반적이지 않습니다.

  ```java
  public interface UserRepositoryAware {
      void setUserRepository(UserRepository userRepository);
  }

  public class UserService implements UserRepositoryAware {
      private UserRepository userRepository;

      @Override
      public void setUserRepository(UserRepository userRepository) {
          this.userRepository = userRepository;
      }

      public void performAction() {
          userRepository.save();
      }
  }
  ```

  **장점**:

  - 의존성 주입 메서드를 명시적으로 정의합니다.

  **단점**:

  - 코드의 복잡성이 증가합니다.
  - 의존성을 위한 인터페이스를 추가로 생성해야 합니다.
  - DI 컨테이너에 의존적입니다.

- **서비스 로케이터 패턴(Service Locator Pattern)**: 의존성을 런타임에 검색하여 주입하는 방식입니다. 하지만 이는 DI의 원칙에 어긋나며, 코드의 가독성과 테스트 용이성을 떨어뜨릴 수 있어 일반적으로 권장되지 않습니다.

  ```java
  public class UserService {
      private UserRepository userRepository;

      public UserService() {
          this.userRepository = ServiceLocator.getUserRepository();
      }

      public void performAction() {
          userRepository.save();
      }
  }
  ```

  **주의사항**:

  - 서비스 로케이터 패턴은 의존성을 숨기기 때문에 코드의 가독성과 유지보수성을 떨어뜨립니다.
  - 테스트 시 모의 객체를 주입하기 어렵습니다.
  - 의존성 역전 원칙(DIP)에 위배될 수 있습니다.
### 왜 나는 DI와 퍼사드 패턴을 혼동했을까?
**초점의 차이** 때문이었습니다. 두 패턴 모두 "복잡성을 줄인다"는 공통 목표를 가진다고 생각할 수 있습니다. 그러나 DI와 **퍼사드 패턴(Facade Pattern)** 은 서로 다른 문제를 해결하는 패턴입니다.

**퍼사드 패턴**은복잡한 하위 시스템에 대한 **간단한 인터페이스**를 제공하여 사용자가 시스템의 내부 복잡성을 알 필요 없이 기능을 사용할 수 있게 합니다. **DI(의존성 주입)** 객체가 자신의 **의존성을 외부에서 주입받는 방식**을 정의하여 객체 간의 결합도를 낮추고, 유연성과 테스트 용이성을 향상시킵니다.

제가 혼동한 이유는 즉 두 패턴 모두 추상화와 결합도 줄이기에 중점을 두고 있기 때문입니다. 하지만, 퍼사드 패턴은 주로 **인터페이스 단순화**에, DI는 **객체 간 결합도 줄이기**와 **테스트 용이성**에 초점을 맞추고 있습니다.

각 전략의 본질을 알아봅시다. DI는 단순히 객체의 의존성을 주입하는 것이 아니라, 객체 간의 **강한 결합**을 **느슨하게** 만듭니다. 이를 통해 코드가 더 쉽게 수정되고, **유닛 테스트**가 용이해집니다. 또한 시스템의 유연성을 높여 변경 사항에 유연하게 대응할 수 있게 합니다. **퍼사드의 역할**: 퍼사드는 시스템의 내부 동작을 감추고 단순한 API를 제공하여 클라이언트가 복잡한 시스템을 이해할 필요 없이 쉽게 사용할 수 있게 합니다. 퍼사드가 직접적으로 의존성을 처리하는 것이 아니라, **하위 시스템의 복잡성을 감추는 데** 중점을 둡니다.

즉 두 패턴의 **목적과 적용 범위가 다르다는 점**을 파악해야 합니다. 퍼사드는 복잡한 하위 시스템의 상호작용을 간소화하고, DI는 시스템을 더 유연하고 테스트 가능한 구조로 만드는 데 기여합니다.

### 음향 엔지니어 예시로 설명

**퍼사드 패턴**은 복잡한 음향 시스템을 관리하는 하나의 **단순한 인터페이스**로 비유할 수 있습니다. 예를 들어, 콘서트에서 믹싱 엔지니어는 다양한 장비(마이크, 스피커, 이펙터)를 일일이 조작하지 않고, 믹싱 콘솔이라는 하나의 통합된 인터페이스를 통해 전체 시스템을 제어합니다. 이는 퍼사드가 복잡한 시스템을 **간단하게 조작**할 수 있게 하는 역할과 유사합니다.

반면, **DI(의존성 주입)** 는 각 장비(의존성)를 **외부에서 주입받아** 사용하는 개념과 비슷합니다. 믹싱 엔지니어는 필요한 장비를 직접 제작하거나 연결하지 않고, 외부에서 제공되는 장비를 받아 시스템에 연결합니다. 이를 통해 장비를 교체하거나 업그레이드할 때 시스템 전체를 변경할 필요 없이 간단히 새로운 장비를 주입할 수 있습니다.
### Characteristics and Considerations

- **제어의 역전(Inversion of Control, IoC)**:

  - 프로그램의 제어 흐름을 개발자가 아닌 프레임워크나 컨테이너가 관리하는 원칙입니다.
  - DI는 IoC의 한 구현체로서, 객체 생성과 의존성 관리를 외부로 위임합니다.
  - 이를 통해 객체는 자신의 핵심 로직에만 집중할 수 있습니다.

- **의존성 역전 원칙(Dependency Inversion Principle, DIP)**:

  - SOLID 원칙 중 하나로, 고수준 모듈이 저수준 모듈에 의존하지 않고, 둘 다 추상화에 의존해야 한다는 원칙입니다.
  - DI를 통해 구현체가 아닌 인터페이스나 추상 클래스에 의존함으로써 이 원칙을 준수할 수 있습니다.
  - 이를 통해 시스템의 유연성과 확장성이 향상됩니다.

- **단일 책임 원칙(Single Responsibility Principle, SRP)**:

  - 클래스는 하나의 책임만 가져야 하며, 변경 사유는 하나여야 합니다.
  - DI를 활용하여 객체의 생성과 로직을 분리함으로써 이 원칙을 지킬 수 있습니다.
  - 객체는 자신의 책임에만 집중하고, 의존성 관리는 외부에 위임합니다.

- **개방-폐쇄 원칙(Open/Closed Principle, OCP)**:

  - 소프트웨어 엔티티는 확장에는 열려 있어야 하고, 수정에는 닫혀 있어야 합니다.
  - DI를 통해 새로운 의존성을 주입함으로써 기존 코드를 수정하지 않고도 기능을 확장할 수 있습니다.

- **리스코프 치환 원칙(Liskov Substitution Principle, LSP)**:

  - 프로그램의 객체는 그 하위 타입의 인스턴스로 대체할 수 있어야 합니다.
  - DI를 사용하여 인터페이스나 추상 클래스에 의존함으로써 이 원칙을 준수할 수 있습니다.

- **인터페이스 분리 원칙(Interface Segregation Principle, ISP)**:

  - 클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 합니다.
  - DI를 통해 필요한 의존성만 주입받아 사용함으로써 이 원칙을 지킬 수 있습니다.

- **주의사항**:

  - **복잡성 증가**: 작은 규모의 프로젝트에서 DI를 과도하게 사용하면 오히려 복잡성이 증가할 수 있습니다. 필요에 따라 적절히 적용해야 합니다.
  - **학습 곡선**: DI 컨테이너나 프레임워크의 사용법을 숙지해야 하므로 초기 학습 비용이 발생할 수 있습니다.
  - **성능 고려**: DI 컨테이너는 런타임 시 객체를 생성하고 주입하므로, 성능에 영향을 줄 수 있습니다. 그러나 일반적으로 이는 미미한 수준이며, 애플리케이션의 구조적 이점이 더 큽니다.
  - **디버깅의 어려움**: 의존성이 자동으로 주입되므로, 디버깅 시 객체 생성과정이 명확하지 않을 수 있습니다.
  - **오버엔지니어링**: 필요 이상으로 복잡한 구조를 도입하면 유지보수가 어려워질 수 있습니다.

### DI in Various Languages and Frameworks

- **JavaScript/TypeScript**:
	- **InversifyJS**, **TSyringe** 등의 라이브러리를 사용하여 DI를 구현할 수 있습니다.
	- ES6 모듈과 클래스를 활용하여 간단한 DI 패턴을 적용할 수 있습니다.

  ```typescript
  class UserService {
      constructor(private userRepository: UserRepository) {}

      performAction() {
          this.userRepository.save();
      }
  }

  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  ```

- **Python**:
	- **Dependency Injector**, **Python Inject** 등의 라이브러리를 사용하여 DI 패턴을 적용할 수 있습니다.

  ```python
  class UserService:
      def __init__(self, user_repository):
          self.user_repository = user_repository

      def perform_action(self):
          self.user_repository.save()

  user_repository = UserRepository()
  user_service = UserService(user_repository)
  ```


### Design Patterns Related to Dependency Injection

- **[[팩토리 패턴(Factory Pattern)]]**:
  - 객체 생성 로직을 별도의 팩토리 클래스나 메서드로 분리하여 관리합니다.
  - DI 컨테이너는 내부적으로 팩토리 패턴을 사용하여 객체를 생성합니다.
  - DI와 함께 사용하여 객체 생성과 의존성 주입을 효율적으로 관리할 수 있습니다.

- **[[빌더 패턴(Builder Pattern)]]**:
  - 복잡한 객체의 생성 과정을 단계별로 분리하여 유연하게 객체를 생성합니다.
  - DI와 함께 사용하여 객체의 구성 요소를 주입받을 수 있습니다.

- **[[싱글턴 패턴(Singleton Pattern)]]**:
  - 애플리케이션에서 하나의 인스턴스만 존재해야 하는 경우에 사용됩니다.
  - DI 컨테이너는 싱글턴 스코프를 지원하여 객체의 생명주기를 관리합니다.

- **[[서비스 로케이터 패턴(Service Locator Pattern)]]**:
  - 의존성을 런타임에 검색하여 제공하는 패턴입니다.
  - 그러나 DI보다 결합도가 높고, 코드의 가독성과 테스트 용이성이 떨어지기 때문에 일반적으로 권장되지 않습니다.

### Limitations and Points to Consider

- **과도한 추상화**:
	- 인터페이스나 추상 클래스를 남발하면 코드의 복잡성이 증가하고 가독성이 떨어질 수 있습니다.
	- 필요한 경우에만 추상화를 도입하고, 과도한 추상화는 피해야 합니다.

- **순환 의존성(Circular Dependency)**:
	- 두 개 이상의 클래스가 서로를 의존성으로 주입받을 때 발생하며, 이는 애플리케이션의 안정성을 해칩니다.
	- DI 컨테이너에서 순환 의존성을 감지하고 예외를 발생시키므로, 설계를 개선하여 순환 의존성을 제거해야 합니다.

- **런타임 에러**:
	- 의존성이 누락되거나 잘못된 의존성이 주입될 경우, 컴파일 타임이 아닌 런타임에 에러가 발생할 수 있습니다.
	- 이를 방지하기 위해 DI 컨테이너의 설정을 철저히 검증하고, 단위 테스트를 강화해야 합니다.

- **컨테이너 종속성**:
	- DI 컨테이너에 종속적인 코드를 작성하면, 프레임워크에 대한 의존성이 높아집니다.
	- 표준 애노테이션이나 인터페이스를 사용하여 컨테이너 종속성을 최소화하는 것이 좋습니다.

### Practical Application Cases

- **대규모 애플리케이션**: 복잡한 비즈니스 로직과 다수의 모듈을 가진 애플리케이션에서 DI는 코드의 유지보수성과 확장성을 크게 향상시킵니다.

- **테스트 주도 개발(TDD)**: DI를 사용하면 모의 객체를 쉽게 주입하여 단위 테스트를 효율적으로 작성할 수 있습니다.

- **플러그인 아키텍처**: 의존성을 주입받아 런타임 시에 플러그인을 교체하거나 추가할 수 있습니다.

- **마이크로서비스 아키텍처**: 각 서비스 간의 의존성을 관리하고, 서비스 간의 결합도를 낮추는 데 도움이 됩니다.

## Relevant Concept

- [[제어의 역전 (Inversion of Control, IoC)]]: IoC는 프로그램의 제어 흐름을 개발자가 아닌 프레임워크나 컨테이너가 관리하는 소프트웨어 디자인 원칙입니다. DI는 IoC를 구현하는 한 가지 방법입니다.

- [[의존성 역전 원칙 (Dependency Inversion Principle, DIP)]]: 고수준 모듈이 저수준 모듈에 의존하지 않고, 추상화에 의존해야 한다는 SOLID 원칙 중 하나입니다. DI를 통해 이 원칙을 준수할 수 있습니다.

- [[디자인 패턴 (Design Pattern)]]: DI는 디자인 패턴 중 하나로, 소프트웨어 개발에서 반복적으로 발생하는 문제를 해결하는 일반적인 솔루션을 제공합니다.

- [[테스트 주도 개발 (Test-Driven Development)]]: DI는 테스트 가능한 코드를 작성하는 데 핵심적인 역할을 하며, TDD의 실천을 용이하게 합니다.

- [[SOLID 원칙 (SOLID Principles)]]: [[객체 지향 프로그래밍(Object-Oriented Programming)|OOP]] 및 설계의 다섯 가지 기본 원칙으로, DI는 이 원칙들을 준수하는 데 도움이 됩니다.

- [[객체 지향 프로그래밍(Object-Oriented Programming)]]: DI는 OOP의 원칙을 효과적으로 적용하는 데 중요한 역할을 합니다.

