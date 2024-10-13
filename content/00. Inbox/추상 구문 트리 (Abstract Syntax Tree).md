---
tags:
  - 컴파일러이론
  - 프로그램분석
  - 소스코드변환
  - 트리구조
  - AST
  - CompilerTheory
  - ProgramAnalysis
  - SourceCodeTransformation
  - TreeStructure
  - terminology
  - public
aliases:
  - Abstract Syntax Tree
  - 추상 구문 트리
CMDS:
  - "[[📚 013 Terminologies]]"
index:
  - "[[🏷 Research Notes]]"
author:
  - "[[고범수]]"
---
## 추상 구문 트리 (Abstract Syntax Tree)
#### What is Abstract Syntax Tree (AST)
- 정의 (Definition):
  - AST는 소스 코드의 구조적 표현으로, 컴파일러나 인터프리터가 소스 코드를 분석할 때 사용하는 트리 구조입니다. AST는 원시 코드의 문법적 구조를 표현하며, 각 노드는 프로그램의 구조적 요소(예: 변수, 함수, 연산자 등)를 나타냅니다 [(Aho et al., 2006)](https://doi.org/10.1016/0031-3203(91)90032-B).
  - 컴파일러는 AST를 사용하여 코드 최적화, 오류 탐지, 코드 생성 등의 작업을 수행합니다 [(Grune et al., 2012)](https://doi.org/10.5555/2416961).
  - AST는 소스 코드에서 불필요한 구문 정보(예: 괄호 등)를 제거하고, 순수하게 의미 있는 요소들만 트리 구조로 남깁니다 [(Appel, 1998)](https://doi.org/10.5555/524320).

- 예시 (Examples):
  - 컴파일러가 프로그램 코드를 파싱할 때, 구문 트리와 구분되는 추상 구문 트리를 생성하여, 의미적 분석을 위해 사용합니다.
  - 코드를 분석하거나 변환하는 도구에서 AST를 사용하여 코드 리팩토링을 자동화합니다.
  - 파이썬의 `ast` 모듈을 사용하여 소스 코드를 트리 형태로 변환하고 분석할 수 있습니다.

## Literature Review
#### Aho et al., 2006
- [Compilers: Principles, Techniques, and Tools](https://doi.org/10.1016/0031-3203(91)90032-B)
  - Source: Addison-Wesley
- 주요 내용 (Key points):
  - AST의 개념 및 컴파일러에서의 역할을 설명합니다.
  - 파싱 과정에서 추상 구문 트리를 생성하고 이를 이용해 코드 분석과 최적화를 수행하는 과정이 서술되어 있습니다.

#### Grune et al., 2012
- [Modern Compiler Design](https://doi.org/10.5555/2416961)
  - Source: Springer
- 주요 내용 (Key points):
  - AST가 코드 생성과 최적화 단계에서 어떻게 활용되는지에 대해 설명합니다.
  - AST의 구조적 특성과 그 중요성에 대해 다룹니다.

#### Appel, 1998
- [Modern Compiler Implementation in C](https://doi.org/10.5555/524320)
  - Source: Cambridge University Press
- 주요 내용 (Key points):
  - AST를 기반으로 한 코드 변환 및 최적화 방법을 설명합니다.
  - 컴파일러가 AST를 통해 의미적 오류를 감지하는 과정을 서술합니다.

## 관련 개념 (Related Concepts)
- [[구문 분석 트리 (Parse Tree)]] #ParseTree
  - 구문 분석 트리는 소스 코드의 모든 문법적 요소를 포함하여 코드의 구조를 표현합니다.
- [[컴파일러 (Compiler)]] #Compiler
  - 컴파일러는 AST를 사용하여 소스 코드의 의미적 분석, 최적화 및 기계어 변환을 수행합니다.
- [[파서 (Parser)]] #Parser
  - 파서는 소스 코드를 구문 분석하여 구문 분석 트리 또는 AST를 생성하는 역할을 합니다.
- [[소스 코드 변환 (Source Code Transformation)]] #SourceCodeTransformation
  - AST를 이용하여 코드 리팩토링, 최적화, 분석 등의 작업을 수행합니다.
- [[구문 해석 (Syntax Analysis)]] #SyntaxAnalysis
  - 구문 해석은 코드의 문법적 정확성을 검사하고, AST를 생성하는 과정을 포함합니다.
