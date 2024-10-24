---
tags:
  - MachineLearning
  - Optimization
  - ModelTraining
  - LossFunctions
  - CostFunctions
  - terminology
  - ObjectiveFunctions
  - ModelPerformance
  - GradientDescent
  - public
aliases:
  - Loss Function
  - Cost Function
CMDS:
  - "[[📚 013 Terminologies]]"
date_created: 2024-10-01
---
## Objective Function (Machine Learning)
#### What is Objective Function
- Definition:
    - An objective function in [[Machine Learning]] is a mathematical function that quantifies the performance of a model, which the learning algorithm aims to optimize (minimize or maximize) during the training process [(Kronosapiens Labs, 2017)](http://kronosapiens.github.io/blog/2017/03/28/objective-functions-in-machine-learning.html).
    - It provides a formal specification of the problem and guides the model towards optimal parameters [(MathWorks, n.d.)](https://www.mathworks.com/discovery/machine-learning-models.html).
- Examples:
    - [[Mean Squared Error]] (MSE) for [[Regression]]on problems: Measures the average squared difference between predicted and actual values.
    - Cross-Entropy Loss for [[Classification]] problems: Quantifies the difference between predicted probability distributions and actual class labels.
    - Hinge Loss for Support Vector Machines: Measures the margin violation in classification tasks.

## Literature Review
#### Kronosapiens Labs, 2017
- [Objective Functions in Machine Learning](http://kronosapiens.github.io/blog/2017/03/28/objective-functions-in-machine-learning.html)
    - Source: Kronosapiens Labs Blog
- Key points:
    - Describes objective functions as a fundamental component of machine learning problems.
    - Explains how objective functions provide a formal specification of the problem to be solved.
    - Discusses the relationship between objective functions and optimization in machine learning.

#### MathWorks, n.d
- [Machine Learning Models](https://www.mathworks.com/discovery/machine-learning-models.html)
    - Source: MathWorks
- Key points:
    - Discusses various types of machine learning models and their associated objective functions.
    - Explains how objective functions are used to evaluate and optimize model performance.
    - Provides examples of objective functions for different machine learning tasks.

## Related Concepts
- [[Gradient Descent]] #GradientDescent
    - An optimization algorithm commonly used to minimize the objective function by iteratively adjusting model parameters.
- [[Model Evaluation (Model Evaluation)]] #ModelEvaluation
    - The process of assessing a model's performance, often using metrics derive
