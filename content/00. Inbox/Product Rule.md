---
aliases:
  - 곱의 법칙
  - multiplication counting principle
tags:
  - ProbabilityTheory
  - ConditionalProbability
  - JointProbability
  - MathematicalDerivation
  - StatisticsFoundation
  - public
Habitus:
  - "[[◦ Knowledge]]"
persona:
  - "[[🔥 Knowledge Management Specialist]]"
  - "[[🔥 Analysist]]"
date_created: 2024-10-03
---

$$
\frac{d(f(x)g(x))}{dx} = \left(\frac{df(x)}{dx}\right)g(x) + f(x)\left(\frac{dg(x)}{dx}\right)
$$

## Product Rule
### What is Product Rule
- Background
	- The Product Rule, also known as the Multiplication Rule or Chain Rule of Probability, is a fundamental concept in probability theory and statistics [(Blitzstein & Hwang, 2019)](https://doi.org/10.1201/9780429258770).
	- It provides a method for calculating the probability of multiple events occurring together [(Wasserman, 2004)](https://link.springer.com/book/10.1007/978-0-387-21736-9).
- Definition:
	- The Product Rule states that the probability of two events A and B occurring together is equal to the probability of A multiplied by the conditional probability of B given A has occurred [(Ross, 2010)](https://www.pearson.com/en-us/subject-catalog/p/first-course-in-probability-a/P200000003220/9780137618736).
	- Mathematically, it is expressed as: P(A ∩ B) = P(A) * P(B|A) [(Blitzstein & Hwang, 2019)](https://doi.org/10.1201/9780429258770).
	- For independent events, this simplifies to: P(A ∩ B) = P(A) * P(B) [(Wasserman, 2004)](https://link.springer.com/book/10.1007/978-0-387-21736-9).
- Practical uses:
  - The Product Rule is essential in calculating joint probabilities in various fields, including finance, epidemiology, and engineering [(Ross, 2010)](https://www.pearson.com/en-us/subject-catalog/p/first-course-in-probability-a/P200000003220/9780137618736).
  - It's a key component in Bayesian inference and decision theory [(Gelman et al., 2013)](https://doi.org/10.1201/b16018).
- Common Misconceptions
	- The Product Rule is often confused with the addition rule for probability. While the Product Rule deals with the intersection of events, the addition rule concerns the union of events [(Blitzstein & Hwang, 2019)](https://doi.org/10.1201/9780429258770).
	- Some mistakenly apply the Product Rule to dependent events as if they were independent, leading to incorrect probability calculations [(Ross, 2010)](https://www.pearson.com/en-us/subject-catalog/p/first-course-in-probability-a/P200000003220/9780137618736).

### Examples
#### Calculating Joint Probability 1
- Given: P(A) = 0.6, P(B|A) = 0.3
- Using the Product Rule: P(A ∩ B) = P(A) * P(B|A) = 0.6 * 0.3 = 0.18
- This means the probability of both A and B occurring is 18% [(Blitzstein & Hwang, 2019)](https://doi.org/10.1201/9780429258770).


#### Calculating Joint Probability 2

주어진 정보는 다음과 같습니다:

- $P(J | W) = 0.5$: "윌리엄이 도둑일 때($W$), 윌리엄의 점퍼에 잼이 묻어 있을 확률"이 50%입니다.
- $P(W) = \frac{1}{200}$: "윌리엄이 도둑일 확률"이 1/200입니다.

여기서 구하고자 하는 것은 $P(J, W)$입니다. 즉, **윌리엄이 도둑이고 동시에 잼이 그의 점퍼에 묻어 있을 확률**을 계산하는 것입니다. 이때, **곱셈 법칙(Product Rule of Probability)** 을 사용하여 다음과 같은 식을 구성할 수 있습니다:

$$P(J, W) = P(J | W) \cdot P(W)$$

이 식에서:
- $P(J | W)$는 "윌리엄이 도둑일 때 잼이 묻어 있을 확률" (조건부 확률)입니다.
- $P(W)$는 "윌리엄이 도둑일 확률"입니다.

### 계산

주어진 값들을 대입하여 $P(J, W)$를 계산해보면:

$$P(J, W) = 0.5 \cdot \frac{1}{200} = \frac{0.5}{200} = \frac{1}{400}$$

따라서, **윌리엄이 도둑이면서 동시에 그의 점퍼에 잼이 묻어 있을 확률**은 **1/400**입니다.

### 설명

이 확률은 다음과 같은 의미를 가집니다:
- 윌리엄이 도둑일 확률이 1/200이었는데, 만약 그가 도둑이라면 잼이 그의 점퍼에 묻어 있을 확률이 50%이므로, 두 사건이 동시에 발생할 확률은 그 둘의 곱인 1/400이 됩니다.

곱셈 법칙은 두 사건이 **독립적**이지 않을 때, 즉 한 사건이 다른 사건에 영향을 줄 때 사용되며, **조건부 확률**과 개별 확률을 결합하여 이와 같은 결합 확률을 계산할 수 있습니다.
#### Chain Rule Application
- For events A, B, and C: P(A ∩ B ∩ C) = P(A) * P(B|A) * P(C|A ∩ B)
- This extension of the Product Rule allows for the calculation of joint probabilities for multiple events [(Ross, 2010)](https://www.pearson.com/en-us/subject-catalog/p/first-course-in-probability-a/P200000003220/9780137618736).
## Literature Review
#### Blitzstein & Hwang, 2019
- [Introduction to Probability, Second Edition](https://doi.org/10.1201/9780429258770)
- Key points:
	- Provides a comprehensive explanation of the Product Rule and its applications in probability theory.
	- Discusses the relationship between the Product Rule and conditional probability.
	- Offers numerous examples and exercises to reinforce understanding of the concept.

#### Ross, 2010
- [A First Course in Probability (8th Edition)](https://www.pearson.com/en-us/subject-catalog/p/first-course-in-probability-a/P200000003220/9780137618736)
- Key points:
	- Presents the Product Rule in the context of fundamental probability concepts.
	- Explores the rule's application in various probability problems and real-world scenarios.
	- Discusses the distinction between dependent and independent events in relation to the Product Rule.

## Related Concepts
- [[Conditional Probability]] #ConditionalProbability
	- The probability of an event occurring given that another event has already occurred, which is a key component of the Product Rule.
- [[Independence (Probability Theory)]] #ProbabilityIndependence
	- When events are independent, the Product Rule simplifies as the conditional probability equals the unconditional probability.
- [[Bayes' Theorem]] #BayesTheorem
	- An important application of the Product Rule that allows for the updating of probabilities based on new evidence.
- [[Chain Rule (Probability)]] #ChainRule
	- An extension of the Product Rule to multiple events, used in complex probability calculations.
