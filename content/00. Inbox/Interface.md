---
tags: [ObjectOrientedProgramming, SoftwareEngineering, Interface, AbstractClass, Polymorphism, public]
aliases: [OOPInterface, ProgrammingInterface]
CMDS:
  - "[[📚 013 Terminologies]]"
up:
  - "[[Java]]"
  - "[[Object-Oriented Programming|OOP]]"
date_created: 2024-10-16
---
## Interface
### What is an Interface
- Background
	- Interfaces were introduced to **address limitations of multiple inheritance** in [[Object-Oriented Programming]]
	- They provide a way to achieve [[Polymorphism]] and define contracts for classes [(What is the definition of "interface" in object oriented programming, Stack Overflow, n.d.)](https://stackoverflow.com/questions/2866987/what-is-the-definition-of-interface-in-object-oriented-programming)
- Definition:
	- An interface is a programming structure that defines a contract specifying methods a class must implement
	- It describes actions an object can perform without specifying how those actions are implemented [(OOP - Interfaces, Germain, n.d.)](https://users.cs.utah.edu/~germain/PPS/Topics/interfaces.html)
	- An interface defines a set of abstract methods, properties, and events that implementing classes must provide [(Interfaces - define behavior for multiple types - C#, Microsoft, n.d.)](https://learn.microsoft.com/vi-vn/dotnet/csharp/fundamentals/types/interfaces)
- Practical uses:
	- Interfaces allow for **abstraction** and separation of interface from implementation [(What is an interface and why are they useful?, MyTutor, n.d.)](https://www.mytutor.co.uk/answers/14323/A-Level/Computing/What-is-an-interface-and-why-are-they-useful/)
	- They enable polymorphism by allowing different classes to be treated uniformly [(PHP OOP Interfaces, W3Schools, n.d.)](https://www.w3schools.com/php/php_oop_interfaces.asp)
	- Interfaces facilitate code reuse and make it easier to change implementations without breaking existing code [(What is an interface and why are they useful?, MyTutor, n.d.)](https://www.mytutor.co.uk/answers/14323/A-Level/Computing/What-is-an-interface-and-why-are-they-useful/)
- Common Misconceptions
	- Interfaces are not classes and cannot contain implementation code (except for default methods in some languages) [(OOP - Interfaces, Germain, n.d.)](https://users.cs.utah.edu/~germain/PPS/Topics/interfaces.html)
	- Interfaces are not limited to just method declarations - some languages allow constants and static methods [(What is the definition of "interface" in object oriented programming, Stack Overflow, n.d.)](https://stackoverflow.com/questions/2866987/what-is-the-definition-of-interface-in-object-oriented-programming)

### Examples
#### Vehicle Interface
- Defines common methods like start_engine() that all vehicle classes must implement [(OOP - Interfaces, Germain, n.d.)](https://users.cs.utah.edu/~germain/PPS/Topics/interfaces.html)
- Allows different vehicle types (car, truck, etc.) to be treated uniformly as "Vehicles" [(OOP - Interfaces, Germain, n.d.)](https://users.cs.utah.edu/~germain/PPS/Topics/interfaces.html)

#### Animal Sound Interface
- Defines a makeSound() method implemented differently by various animal classes [(PHP OOP Interfaces, W3Schools, n.d.)](https://www.w3schools.com/php/php_oop_interfaces.asp)
- Enables polymorphic behavior when working with different animal types [(PHP OOP Interfaces, W3Schools, n.d.)](https://www.w3schools.com/php/php_oop_interfaces.asp)

## Literature Review
#### Germain, n.d
- [OOP - Interfaces](https://users.cs.utah.edu/~germain/PPS/Topics/interfaces.html)
- Key points:
	- Interfaces enforce properties on objects
	- They describe actions without implementation details
	- Interfaces enable treating different classes uniformly

#### Microsoft, n.d
- [Interfaces - define behavior for multiple types - C#](https://learn.microsoft.com/vi-vn/dotnet/csharp/fundamentals/types/interfaces)
- Key points:
	- Interfaces define functionality for multiple types
	- They can include static and default implementations in some cases
	- Interfaces enable multiple inheritance-like behavior for classes

## Related Concepts
- [[Abstract Class]] #ObjectOrientedProgramming #Abstraction
	- Similar to interfaces but can include implementation and state
- [[Polymorphism]] #ObjectOrientedProgramming #Inheritance
	- Interfaces enable polymorphic behavior across different classes
- [[Multiple Inheritance]] #ObjectOrientedProgramming #Inheritance
	- Interfaces provide an alternative to multiple inheritance in some languages