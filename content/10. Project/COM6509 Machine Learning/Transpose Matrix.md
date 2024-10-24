---
tags:
  - Mathematics
  - LinearAlgebra
  - DataScience
  - public
Habitus:
  - "[[◦ Knowledge]]"
persona:
  - "[[🔥 Analysist]]"
  - "[[🔥 Programmer]]"
aliases:
  - 전치 행렬
---


**전치 행렬 (Transpose Matrix)** 는 **원래의 행렬에서 행과 열을 바꾼 행렬**임. 예를 들어, 주어진 행렬 $A$가 있다면, 그 **전치 행렬** $A^T$는 $A$의 행을 열로, 열을 행으로 바꾼 행렬을 의미함.

전치 행렬의 특징:
- 만약 $A$가 $m \times n$ 크기의 행렬이라면, $A^T$는 $n \times m$ 크기의 행렬이 됨.
- 전치 행렬은 선형 대수학에서 여러 가지 중요한 용도로 사용됨. 예를 들어, **내적**이나 **행렬 곱** 등을 계산할 때 전치 행렬을 사용하여 계산을 쉽게 하기도 함.

### 예시

행렬 $A$가 다음과 같다고 하자:

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}$$

이 행렬의 전치 행렬 $A^T$는 다음과 같음:

$$A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}$$

즉, 행과 열을 서로 바꾼 형태로, 기존 행의 요소들이 전치 행렬에서는 열의 요소로 바뀌었음.

### 전치 행렬의 활용

전치 행렬은 **[[Linear Regression]]** 이나 **벡터 연산**에서 필수적으로 사용됨. 예를 들어, OLS에서 **정규 방정식**을 계산할 때 **행렬 곱을 정의**하기 위해 전치 행렬을 활용함.

결국, 이 모든 과정에서 행렬 곱(`@` 기호)과 전치 행렬은 **OLS** 회귀 분석에서 최적의 파라미터를 구하는 데 매우 중요한 역할을 함.