---
tags:
  - InformationTheory
  - ProbabilityTheory
  - DataCompression
  - DataScience
  - MachineLearning
  - Mathematics
  - public
aliases: 
date_created: 2024-10-10
Habitus:
  - "[[◦ Knowledge]]"
persona:
  - "[[🔥 Knowledge Management Specialist]]"
  - "[[🔥 Analysist]]"
---
# What is Entropy?

Entropy is a fundamental concept in [[Information Theory]] that measures the **uncertainty** or **unpredictability** of a random variable. It quantifies the expected amount of **information** or **"surprise"** inherent in the possible outcomes of the variable.

## Definition of Entropy

For a discrete random variable $X$ with possible outcomes $x_1, x_2, \ldots, x_n$ occurring with probabilities $P(X = x_i)$, the **entropy** $H(X)$ is defined as:

$$
H(X) = -\sum_{i=1}^n P(X = x_i) \log P(X = x_i)
$$

- **$H(X)$**: Entropy of the random variable $X$.
- **$P(X = x_i)$**: Probability that $X$ takes the value $x_i$.
- **$\log$**: Logarithm function (commonly base 2 for bits or base $e$ for nats).

This formula calculates the expected value of the information content of the outcomes.

### Information Content ($I(x)$)

The **information content** (or **self-information**) of an outcome $x$ is given by:

$$
I(x) = -\log P(X = x)
$$

- Represents the amount of "surprise" associated with the occurrence of $x$.
- Lower probability events yield higher information content.

- Why Use the Logarithm?
	- **Monotonic Decrease**: As probability increases, information content decreases logarithmically.
	- **Additivity**: Logarithms convert multiplication into addition, which is essential for combining independent events.

## Derivation of Entropy

Entropy is the **expected information content** across all possible outcomes of $X$:

$$
H(X) = E[I(X)] = \sum_{i=1}^n P(X = x_i) \cdot I(x_i)
$$

Substituting $I(x_i)$:
$$
H(X) = -\sum_{i=1}^n P(X = x_i) \log P(X = x_i)
$$
$$
   = \sum_{i=1}^n (-\log P(X = x_i)) P(X = x_i)
$$

This formula sums the product of each outcome's probability and its information content.

## Why Use Logarithms in Entropy?

### Properties of the Logarithm in Entropy

#### 1. Log Converts Multiplication into Addition

For independent events $A$ and $B$:

$$
\log[P(A) \times P)] = \log P(A) + \log P(B)
$$

- **Additivity of Information**: The total information content of independent events is the sum of their individual information contents.

#### 2. Logarithm Reflects Information Content

- **Lower Probabilities Yield Higher Logs**: Rare events provide more information when they occur.
- **Continuous Scale**: Logarithms provide a smooth and continuous measure of information content.

### Handling Independent Events

For independent events, the joint probability is the product of individual probabilities:

$$
P(A, B) = P(A) \times P(B)
$$

Using logarithms:

$$
I(A, B) = -\log[P(A) \times P(B)] = -\log P(A) - \log P(B) = I(A) + I(B)
$$

- **Additive Information**: This property aligns with our intuitive understanding that knowing two independent events provides the sum of their individual information.

### Measuring Surprise

- **Logarithmic Scale**: Captures the diminishing returns of additional information from more probable events.
- **Consistency**: Provides a consistent method to quantify information across different probability distributions.

## Interpretation of Entropy

- **High Entropy**: Indicates a high level of uncertainty or unpredictability in the outcomes.
- **Low Entropy**: Indicates that the outcomes are more predictable or certain.

Entropy answers the question:

> *"How surprised should we expect to be about the outcome of an event?"*

## Real-World Examples

### 1. Coin Toss

Consider a fair coin toss:

- **Possible Outcomes**: Heads ($H$) or Tails ($T$).
- **Probabilities**: $P(H) = 0.5$, $P(T) = 0.5$.

Entropy calculation:

$$
\begin{align*}
H(X) &= -[P(H) \log P(H) + P(T) \log P(T)] \\
&= -[0.5 \log 0.5 + 0.5 \log 0.5] \\
&= -[0.5 \times (-1) + 0.5 \times (-1)] \\
&= 1 \text{ bit}
\end{align*}
$$

So, Each toss provides 1 bit of information.
#### Biased Coin Toss with Biased Coin Toss with 80% Probability of Heads

- Toss a biased coin **4 times**.
- **Objective**: Determine how many bits are needed to store the outcome on average, and demonstrate with an example encoding that uses **fewer than 4 bits** on average.

Consider a biased coin where:
- $p(\text{heads}) = 0.8$
- $p(\text{tails}) = 0.2$


$$
E[-\log p(X)] = -\sum_{i=1}^N p(x_i) \log_2 p(x_i)
$$

For this biased coin:
$$
-(0.8 \times \log_2(0.8) + 0.2 \times \log_2(0.2))
$$

Calculating each term:
- $\log_2(0.8) \approx -0.32193$
- $\log_2(0.2) \approx -2.32193$

Substitute the values:
$$
-(0.8 \times -0.32193 + 0.2 \times -2.32193) \approx 0.72 \text{ bits}
$$
- The entropy for a single toss with $p(\text{heads}) = 0.8$ is $0.72$ bits.
- Assuming independence, the total entropy for 4 tosses is:
	- Entropy for tossing independently 4 times

$$
4 \times 0.72 = 2.89 \text{ bits}
$$

This means we can reduce the number of bits, actually to less than 4 bits!


- If all outcomes are heads, send a **single bit ‘1’**.
- If any toss is tails, send **‘0’** followed by **four additional bits** to record the exact sequence (where heads = 1, tails = 0).

Examples:
- $H H H H \rightarrow [1] \text{ (uses just 1 bit)}$
- $H T H H \rightarrow [0, 1, 0, 1, 1] \text{ (uses 5 bits)}$
- $T H T H \rightarrow [0, 0, 1, 0, 1] \text{ (uses 5 bits)}$

1. The probability of **all heads** is $0.8^4$:
   $$
   0.8^4 = 0.41
   $$

2. For **all heads**, we use **1 bit**.

3. For **any other sequence**, we use **5 bits**.

4. The expected number of bits is:
   $$
   0.41 \times 1 + (1 - 0.41) \times 5
   $$
   Simplifying this expression:
   $$
   = 0.41 + 0.59 \times 5 = 0.41 + 2.95 = 3.36 \text{ bits}
   $$

Therefore, on average, we only need **3.36 bits** to encode the outcome of the 4 tosses, which is fewer than 4 bits. 2.89 bits is just theoretical information underline.

### 2. Weather Forecast

Suppose the probability of it raining on a given day is $P(\text{Rain}) = 0.1$, and not raining is $P(\text{No Rain}) = 0.9$.

Entropy calculation:

$$
\begin{align*}
H(X) &= -[P(\text{Rain}) \log P(\text{Rain}) + P(\text{No Rain}) \log P(\text{No Rain})] \\
&= -[0.1 \log 0.1 + 0.9 \log 0.9] \\
&\approx -[0.1 \times (-1) + 0.9 \times (-0.0458)] \\
&\approx -[-0.1 - 0.0412] \\
&\approx 0.469 \text{ bits}
\end{align*}
$$

- **Interpretation**: There's less uncertainty because one outcome is much more likely.

### 3. Language Text Compression

In English text:

- The letter "e" appears frequently, with a high probability.
- The letter "z" appears less frequently, with a low probability.

Entropy helps in designing compression algorithms:

- **High-frequency letters**: Less information per occurrence, can be encoded with shorter codes.
- **Low-frequency letters**: More information per occurrence, require longer codes.

## Conclusion

Entropy is a crucial concept that quantifies the expected amount of information or surprise from a random variable's outcomes. By using logarithms, we can:

- **Add Information Content**: Simplify the calculation of combined information from independent events.
- **Reflect Uncertainty**: Accurately represent how likely or surprising an event is.

Understanding entropy and its properties is essential for fields like information theory, data compression, communication systems, and machine learning.