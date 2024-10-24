---
aliases: []
tags: [DigitalCraftsman, SoftwareDevelopment, Productivity, public, publish]
Habitus:
  - "[[◦ Knowledge]]"
  - "[[◦ Economic]]"
persona:
  - "[[🔥 Analysist]]"
date_created: 2024-10-24
---
## Regularisation의 정의와 목적

- **Regularisation**은 모델이 **과적합([[Overfitting]])** 되는 것을 방지하기 위해 Penalty를 부여하는 기법
- **비용 함수([[Objective Function|Cost Function]])** 에 추가적인 패널티 항을 도입하여 모델이 복잡해지는 것을 억제하는 방식으로 작동

### Regularisation의 목적

1. **Overfitting 방지**: 훈련 데이터에 너무 맞추는 모델은 새로운 데이터에 대해 예측을 잘 하지 못할 수 있음
	 - Regularisation은 모델이 불필요하게 복잡해지는 것을 방지하여 [[Normalization]] 성능을 향상

2. **[[Generalization|Generalisation]] 성능 개선**: Regularisation은 모델의 복잡성을 조절함으로써 훈련 데이터뿐만 아니라 새로운 데이터에 대한 예측 성능을 높입니다.
	- 즉, 모델이 과도하게 변동하지 않도록 안정적인 구조를 유지

3. **모델 단순화**: Regularisation 기법은 파라미터의 크기를 제한하거나 불필요한 파라미터를 제거함으로써 더 단순한 모델을 만듭니다. 예를 들어, **[[Lasso regression|Lasso 회귀]]** 에서는 일부 파라미터를 0으로 만들어 불필요한 특성을 제거할 수 있습니다.

### Regularisation의 용도

1. **높은 차원의 데이터**: 데이터의 특성(feature) 수가 매우 많거나 복잡할 때, 모델이 모든 특성에 맞추려다 보면 과적합될 가능성이 높습니다. Regularisation은 이러한 경우에도 모델이 과적합하지 않도록 도와줍니다.

2. **모델 복잡성 제어**: **딥러닝([[Deep Learning]])** 처럼 복잡한 모델의 경우, Regularisation은 모델의 복잡성을 적절히 제어하여 과도한 학습을 막고 성능을 향상시킵니다.

3. **선형 회귀와 같은 간단한 모델**: **Ridge 회귀**나 **Lasso 회귀**처럼 간단한 모델에서도 Regularisation을 통해 모델이 특정 데이터에 지나치게 맞추지 않고, 새로운 데이터에 대한 예측력을 높일 수 있습니다.

### Regularisation 기법의 예

1. **Ridge Regression (L2 Regularisation)**: 각 파라미터의 제곱을 패널티로 적용하여 파라미터 값이 너무 커지는 것을 방지합니다.

   $$ R(w) = \sum w_i^2 $$

2. **Lasso Regression (L1 Regularisation)**: 파라미터의 절대값을 패널티로 적용하여 불필요한 파라미터를 0으로 만듭니다.

   $$ R(w) = \sum |w_i| $$

3. **Elastic Net**: Ridge와 Lasso를 혼합하여 사용하는 기법으로, 두 방식의 장점을 모두 취합니다.

Regularisation은 모델이 복잡한 데이터에도 잘 대응하면서 과적합을 방지하는 데 중요한 역할을 합니다. Regularisation이 없다면, 모델은 너무 많은 파라미터를 사용해 데이터를 과도하게 설명하려 할 수 있으며, 이는 모델의 일반화 성능을 떨어뜨릴 수 있습니다.