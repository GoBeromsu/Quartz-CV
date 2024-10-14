---
tags: [MSc, MachineLearning, DataAnalysis, Statistics, public]
aliases: []
date_created: 2024-10-13
link: 
up:
  - "[[COM6509 Machine Learning and Adaptive Intelligence]]"
Habitus:
  - "[[◦ Knowledge]]"
  - "[[◦ Economic]]"
persona:
  - "[[🔥 Analysist]]"
---
## 1. ML Classifier for Cancer Detection

You have built an ML classifier that detects whether a tissue appearing in an image is cancerous or not. Consider the cancerous class as the positive class. The following confusion matrix shows the predicted results obtained in the validation set:

|                     | cancerous (predicted) | healthy (predicted) |
|---------------------|----------------------:|--------------------:|
| cancerous (actual)  |                    30 |                   5 |
| healthy (actual)    |                    15 |                 100 |

Compute the precision, recall and accuracy of your ML classifier.
- [[Confusion Matrix]]
	- [[Precision]]
	- [[Accuracy]]
	- [[Recall]]

### Solution

Based on the confusion matrix:
- True Positive (TP) = 30
- False Positive (FP) = 15
- False Negative (FN) = 5
- True Negative (TN) = 100

Calculated metrics:

1. $Precision = TP / (TP + FP) = 30 / (30 + 15) = 30 / 45 = 2/3$ ≈ 0.6667 or about 66.67%

2. Recall = $TP / (TP + FN) = 30 / (30 + 5) = 30 / 35 = 6/7$ ≈ 0.8571 or about 85.71%

3. Accuracy = $(TP + TN) / (TP + TN + FP + FN) = (30 + 100) / (30 + 100 + 15 + 5) = 130 / 150 = 13/15$ ≈ 0.8667 or about 86.67%

## 2. Student Exam Scores Normalization and Standardization

(*) The table below shows the scores achieved by a group of students on an exam. Using this data, perform the following tasks on the Score feature:

(a). A normalisation in the range [0, 1].

(b). A normalisation in the range [-1, 1].

(c). A standardisation of the data.

| ID    | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|-------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| Score | 42 | 47 | 59 | 27 | 84 | 49 | 72 | 43 | 73 | 59 | 58 | 82 | 50 | 79 | 89 | 75 | 70 | 59 | 67 | 35 |

- [[Normalization]]
- **[0, 1] 범위로 정규화**할 때 사용되는 기본 공식은 다음과 같습니다:
  $$x_{\text{norm}} = \frac{x - x_{\text{min}}}{x_{\text{max}} - x_{\text{min}}}$$

- **[-1, 1] 범위로 정규화**할 때는, 위의 결과에 2를 곱하고 1을 빼서 다음과 같이 변형합니다:
  $$x_{\text{norm}} = 2 \cdot \frac{x - x_{\text{min}}}{x_{\text{max}} - x_{\text{min}}} - 1$$

따라서, (b)번 문제에서 사용한 공식도 Min-Max Normalization의 일종으로, 단순히 변환 범위를 [-1, 1]로 설정한 것입니다.


### Solution

(a) Normalization in range [0, 1]:
   $x_{norm} = \frac{x - min}{max - min} = \frac{x - 27}{89 - 27}$

(b) Normalization in range [-1, 1]:
   $x_{norm} = 2 \cdot \frac{x - min}{max - min} - 1 = 2 \cdot \frac{x - 27}{89 - 27} - 1$

(c) Standardization of the data:
   $x_{std} = \frac{x - mean}{std} = \frac{x - 60.95}{16.97}$

Where:
- $x$ is the original score
- $min = 27$, $max = 89$
- $mean = 60.95$, $std = 16.97$

To apply these formulas, substitute each score for $x$ in the respective equation.
## 3. Bike Rental Prediction Model

(*) We designed a model for predicting the number of bike rentals (y) from two attributes, temperature (x₁) and humidity (x₂),

$$y = 500 \times x_1 + 300 \times x_2.$$

The model was trained **after normalising the training data (between [0,1])**. x₁ had values between −10 and 39 while x₂ had values between 20 and 100. At test time, the model is used to predict the bike rentals for a vector $\mathbf{x}^* = [25, 70]^\top$. What is the value of the prediction y?

- Feature
	- Already normalised
- 데이터 값도 [[Normalization]] 되어서 들어가야 하는구나!

### Solution

1. 먼저 입력 데이터를 [0,1] 범위로 정규화합니다:

   $x_{1_{norm}} = \frac{x_1 - x_{1_{min}}}{x_{1_{max}} - x_{1_{min}}} = \frac{25 - (-10)}{39 - (-10)} = \frac{35}{49}$

   $x_{2_{norm}} = \frac{x_2 - x_{2_{min}}}{x_{2_{max}} - x_{2_{min}}} = \frac{70 - 20}{100 - 20} = \frac{50}{80} = \frac{5}{8}$

2. 정규화된 값을 예측 모델에 적용합니다:

   $y = 500 \times x_{1_{norm}} + 300 \times x_{2_{norm}}$

3. 최종 예측값 계산:

   $y = 500 \times \frac{35}{49} + 300 \times \frac{5}{8}$

이 식을 계산하면 최종 예측값 y를 얻을 수 있습니다.
## 4. Outlier Removal Criterion

A simple criterion to remove outliers from a dataset is to compute the mean, μ, and the standard deviation, σ, of the variable of interest and consider values outside the range $(μ - 3σ, μ + 3σ)$ as outliers.

Applying this criterion to the Scores in Exercise 2, which ones of them can be considered as outliers?

### Solution

1. 데이터 재확인:
   42, 47, 59, 27, 84, 49, 72, 43, 73, 59, 58, 82, 50, 79, 89, 75, 70, 59, 67, 35

2. 평균(μ) 계산:
   μ = (42 + 47 + … + 67 + 35) / 20 = 1219 / 20 = 60.95

3. 표준편차(σ) 계산:
   σ = √[(Σ(x - μ)²) / N] ≈ 16.97

4. 이상치 범위 계산:
   하한: μ - 3σ = 60.95 - 3(16.97) = 10.04
   상한: μ + 3σ = 60.95 + 3(16.97) = 111.86

5. 이상치 판별:
   1.04 < 정상 데이터 < 111.86

모든 점수가 이 범위 내에 있으므로, 이 기준에 따르면 주어진 데이터셋에는 이상치가 없습니다.

가장 낮은 점수(27)와 가장 높은 점수(89)도 이 범위 내에 있어 이상치로 간주되지 않습니다.
## 5. Joint Probability Mass Function Analysis

(**) Suppose the joint probability mass function of two RVs X and Y is given as,

$$P(X = x, Y = y) = \begin{cases}
    1/3, & \text{if } (x = 0, y = 1), (x = 1, y = 0) \text{ or } (x = 2, y = 1) \\
    0,   & \text{otherwise}
\end{cases}$$

- [[Probability Independent]]
- [[Probability Correlation]]
#### (a). Are X and Y Independent?

1. 주변 확률 계산:
	 - P(X = 0) = 1/3, P(X = 1) = 1/3, P(X = 2) = 1/3
	 - P(Y = 0) = 1/3, P(Y = 1) = 2/3
2. 독립성 검증:
	- 만약 X와 Y가 독립이라면, 모든 x와 y에 대해 $P(X = x, Y = y) = P(X = x) * P(Y = y)$가 성립해야 합니다.

$$
P(X = 0, Y = 1) = 1/3 ≠ P(X = 0) * P(Y = 1) = 1/3 * 2/3 = 2/9
$$
$$
P(X = 1, Y = 0) = 1/3 ≠ P(X = 1) * P(Y = 0) = 1/3 * 1/3 = 1/9
$$ $$
P(X = 2, Y = 1) = 1/3 ≠ P(X = 2) * P(Y = 1) = 1/3 * 2/3 = 2/9
$$
따라서 X와 Y는 독립이 아닙니다.

#### (b). Are X and Y Uncorrelated?

1. 기대값 계산:
$$
E[X] = 0*(1/3) + 1*(1/3) + 2*(1/3) = 1
$$
$$
E[Y] = 0*(1/3) + 1*(2/3) = 2/3
$$
1. $E[XY]$ 계산:
$$
E[XY] = 0*1*(1/3) + 1*0*(1/3) + 2*1*(1/3) = 2/3
$$
1. 공분산 계산:
$Cov(X,Y) = E[XY] - E[X]E[Y] = 2/3 - 1*(2/3) = 0$

X와 Y의 공분산이 0이므로, X와 Y는 상관관계가 없습니다(uncorrelated).

결론:
(a) X와 Y는 독립이 아닙니다.
(b) X와 Y는 상관관계가 없습니다(uncorrelated).

## 6. Uncorrelated and Independent Random Variables

(**) Two RVs X and Y are uncorrelated if $σ_{XY} = 0$. Since $σ_{XY} = E[XY] - E[X]E[Y]$, the two RVs are uncorrelated if $E[XY] = E[X]E[Y]$. Show that if the RVs are independent, then they are also uncorrelated.

## 7. Covariance and Correlation of Linear Transformation

(***) Let Y = aX + b, where Y and X are RVs and a and b are constants.

(a). Find the covariance of X and Y.

(b). Find the correlation coefficient of X and Y.

## 8. Information Content of Six-Letter English Words
You need to store a six letter English word. Assume there are 26 possible letters to choose from.

(a). Naively (assuming any combination of letters are equally likely and independent) how many bits of information do the 6 letters contain? [compute the shannon entropy of 6 independent RVs, each of which can take one of 26 possible values].

(b). We know that letters are not really independent of each other. What are the implications for how much entropy is really represented by the 6 letters?

(c). We know there are in fact 22,000 6-letter words. Assuming they are equally likely, how many bits of entropy are there in the word?

(d). Some 6-letter words are more common than others - what does that mean for the entropy?

## 9. RFID Bee Monitoring System

(***) An RFID reader and a microcontroller monitor bees entering a bee-hive. Each second it records how many bees have entered. For example:

| Time | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|------|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|----|----|----|----| 
| Bees | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0  | 0  | 2  | 0  | 1  | 0  | 0  | 0  | 0  | 1  | 0  |

Currently 2 bits are used each second to store the number of bees (0, 1, 2 or 3), but the microprocessor runs out of storage.

The PMF of the number of bees is: 
$$P(\text{Bee} = b) = \begin{cases}
    15/20, & \text{if } b=0 \\
    4/20,  & \text{if } b=1 \\
    1/20,  & \text{if } b=2 \\
    0,     & \text{if } b \geq 3
\end{cases}$$

(a). Suggest an encoding scheme that can store this more efficiently. [Hint: Remember that you need a way to ensure that the decoder knows where one 'message' ends and the next begins].

(b). After 100 seconds, the original storage scheme uses 200 bits of memory. What is the actual entropy in 100 seconds of observations (in bits)? Assume that individual bee arrival times are independent.

(c). How many bits would your encoding scheme need to store 100 seconds of observations (on average)?

## 10. Lab Room Allocation and Entropy

There is a 10% chance that there won't be enough space in the computer lab, if our module is allocated Lab Room 1 $(P(\text{Full} = \text{true}|\text{Lab} = 1) = 0.1)$; and a 30% if allocated Lab Room 2 $P(\text{Full} = \text{true}|\text{Lab} = 2) = 0.3$. If there is an even chance of being allocated either room;

(a). Compute the (marginal) entropy of the Full random variable, i.e. $H[\text{Full}]$.

(b). Compute the conditional entropy $H[\text{Full}|\text{Lab}]$. Confirm it is no greater than $H[\text{Full}]$.
