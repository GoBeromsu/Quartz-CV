---
tags:
  - MachineLearning
  - DataScience
  - ModelEvaluation
  - StatisticalLearning
  - PredictiveModeling
  - terminology
  - ModelComplexity
  - public
aliases:
  - Overfitting
  - 과적합
CMDS:
  - "[[📚 013 Terminologies]]"
date_created: 2024-10-01
---
## Overfitting
#### What is Overfitting
- Overfitting is a phenomenon where a model excessively fits the training data, resulting in decreased predictive performance on new data. This occurs when the model learns the noise in the training data, leading to reduced generalization performance[(Hawkins, 2004)](https://doi.org/10.1016/j.chemolab.2004.03.003).
- Overfitting refers to the situation where a model learns specific patterns in the training dataset too accurately, including meaningless patterns that don't generalize well[(Dietterich, 1995)](https://doi.org/10.1145/212094.212114).
#### Examples
- When a decision tree's depth is increased to perfectly classify all samples in the training data, its performance on new data may deteriorate.
- In neural networks, setting too many epochs during training can lead to overfitting as the model learns noise in the training data.
- In polynomial regression, setting the degree too high can result in a model that fits the training data well but has poor predictive power on new data, indicating overfitting.

## Literature Review
#### Hawkins, 2004
- [The Problem of Overfitting](https://doi.org/10.1016/j.chemolab.2004.03.003)
	- Source: Journal of Chemometrics
- Key points:
	- Provides a detailed explanation of the definition and causes of overfitting.
	- Introduces various techniques to prevent overfitting.
	- Emphasizes the importance of considering overfitting in model evaluation and selection processes.

#### Dietterich, 1995
- [Overfitting and undercomputing in machine learning](https://doi.org/10.1145/212094.212114)
	- Source: ACM Computing Surveys
- Key points:
	- Compares and explains the concepts of overfitting and underfitting in machine learning.
	- Presents various strategies to prevent overfitting.
	- Emphasizes the importance of finding a balance between model complexity and generalization performance.

## Related Concepts
- [[Cross-validation]] #ModelValidation
	- Cross-validation is a technique used to prevent overfitting and evaluate a model's generalization performance.
- [[Regularization]] #ModelComplexity
	- Regularization is a technique that limits model complexity to prevent overfitting.
- [[Bias-Variance Tradeoff]] #ModelPerformance
	- Overfitting occurs in models with low bias and high variance, and finding a balance between these two factors is crucial.
- [[Ensemble Learning]] #ModelCombination
	- Ensemble techniques combine multiple models to reduce overfitting and improve generalization performance.

