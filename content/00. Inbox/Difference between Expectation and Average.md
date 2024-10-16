---
tags:
  - ProbabilityTheory
  - Statistics
  - Expectation
  - Average
  - RandomVariables
  - public
aliases:
  - Difference between expectation and average
  - Expectation vs average
date_created: 2024-10-16
related:
  - "[[Expectations]]"
---

## What's the Difference Between Expectation and Average?

- **[[Expectations]] (Expected Value)**: In probability theory, the expectation is the theoretical mean of a random variable over an infinite number of trials. It's calculated as the sum of all possible values each multiplied by its probability of occurrence.
- **Average (Arithmetic Mean)**: In statistics, the average is the sum of observed values divided by the number of observations. It's an empirical measure of central tendency based on actual data.

## **Key Definitions**
- **Expectation (Expected Value)**:
	- **Random Variable**: A variable whose possible values are numerical outcomes of a random phenomenon.
	- **Probability Distribution**: A function that describes the likelihood of obtaining the possible values that a random variable can assume.

- **Average (Arithmetic Mean)**:
	- **Sample Data**: A set of data collected from a population by a defined procedure.
	- **Central Tendency**: A central or typical value for a probability distribution.

## **Examples**

- **Expectation**: The expected value of rolling a fair six-sided die is calculated as $E[X] = (1×1/6) + (2×1/6) + (3×1/6) + (4×1/6) + (5×1/6) + (6×1/6) = 3.5$.

- **Average**: If you roll a die 5 times and get the results ${2, 3, 5, 6, 4}$, the average is $(2+3+5+6+4)/5 = 4$

- **Linking Both**: As the number of observations increases, the average of the observed data tends to approach the expected value due to the Law of Large Numbers.

## Critical Thinking Analysis

- **Thesis**:
	- FACT: Expectation is a theoretical measure calculated using the probability distribution of a random variable, considering all possible outcomes and their probabilities.
	- REASONING: It provides **a prediction of the long-term average** outcome of a random process, essential for probabilistic modeling.

- **Antithesis**:
	- FACT: Average is an empirical measure derived from actual data collected from experiments or observations.
	- REASONING: It summarizes observed data but may not accurately reflect the underlying probability distribution, especially with limited or biased samples.

- **Synthesis**:

    - FACT: Both expectation and average aim to quantify central tendency but differ in their approaches—one is theoretical, and the other is empirical.

    - REASONING: Understanding their differences is crucial for interpreting statistical results and making accurate predictions based on data.

## Literature Review

#### Weiss, N.A. (2018)

- [Introductory Statistics (10th Edition), Weiss, N.A., 2018](https://www.pearson.com/us/higher-education/product/Weiss-Introductory-Statistics-10th-Edition/9780321989178.html)
- **Key Points**:

    - Differentiates between population parameters (expectation) and sample statistics (average).
    - Explains how sample means converge to expected values with larger sample sizes.
    - Emphasizes the importance of understanding the underlying distribution when interpreting averages.

#### Ross, S.M. (2014)

- [Introduction to Probability Models (11th Edition), Ross, S.M., 2014](https://www.elsevier.com/books/introduction-to-probability-models/ross/978-0-12-407948-9)
- **Key Points**:
    - Provides a comprehensive explanation of expected value and its properties.
    - Discusses the distinction between expected value and sample mean in probabilistic terms.
    - Explores practical applications where expectation plays a critical role in modeling.

## Related Concepts
- [[Law of Large Numbers]] #ProbabilityTheory
    - FACT: States that as the number of trials increases, the sample average converges to the expected value.
    - REASONING: It explains why averages from large samples are good estimates of the expected value.

- [[Variance]] #Statistics
    - FACT: Measures the dispersion of a set of values relative to their mean (expected value).
    - REASONING: Variance provides insight into the reliability of the expected value as a measure of central tendency.

- [[Central Limit Theorem]] #ProbabilityTheory
    - FACT: Indicates that the distribution of sample means approximates a normal distribution as the sample size becomes large.
    - REASONING: It justifies the use of normal probability models in statistical inference, linking sample averages to expectations.
