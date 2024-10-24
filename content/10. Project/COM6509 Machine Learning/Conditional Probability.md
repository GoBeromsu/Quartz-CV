---
tags: [MSc, public]
aliases: [조건부 확률]
date_created: 2024-10-05
---
$$
P(A | B) = \frac{P(B | A) P(A)}{P(B)}
$$

the conditional probability, which describes **the probability of an event occurring given that another event has already occurred**.

The conditional probability of event $A$ given event $B$ is denoted as $P(A | B)$
- Example: $P(J = true | W = true)$ represents the probability of event $J$ being true, given that event $W$ is true.
## **Mathematical Definition**
The conditional probability is given by the formula:
 $$
 P(A | B) = \frac{P(A \cap B)}{P(B)}
 $$
 $P(A \cap B)$ is the joint probability of A and $B$, and $P(B)$ is the probability of event $B$.


- **Key Characteristics**:
	- Focuses on the relationship between two events.
	- The occurrence of one event affects the likelihood of the other.
	- Only defined when $P(B) > 0$

- **[[Bayesian statics|Bayesian Approach]]**: Conditional probability plays a central role in Bayesian statistics. Using Bayes' Theorem, we update our beliefs about the likelihood of events based on new evidence:
