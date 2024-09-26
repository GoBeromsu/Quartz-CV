---
tags:
  - SoundEngineering
  - AudioFeedback
  - Acoustics
  - LiveSound
  - SignalProcessing
  - terminology
  - AudioProduction
aliases:
  - Audio Feedback
  - Acoustic Feedback
  - Larsen Effect
CMDS: "[[📚 013 Terminologies]]"
index: "[[🏷 Research Notes]]"
---
## 오디오 피드백 (Audio Feedback)
#### What is Audio Feedback
- 정의 (Definition):
    - 오디오 피드백은 음향 출력(예: 스피커)과 입력(예: 마이크) 사이에 음향 경로가 존재할 때 발생하는 양의 피드백 상황입니다. 이는 스피커에서 나온 소리가 마이크로 다시 입력되어 증폭되는 순환 과정을 만들어 특징적인 '하울링' 소리를 발생시킵니다[(Wikipedia, 2024)](https://en.wikipedia.org/wiki/Audio_feedback).
    - 피드백은 마이크, 앰프, 스피커의 공진 주파수, 공간의 음향 특성, 마이크와 스피커의 방향성 픽업 및 방출 패턴, 그리고 이들 간의 거리에 의해 결정됩니다[(Wikipedia, 2024)](https://en.wikipedia.org/wiki/Audio_feedback).

- 예시 (Examples):
    - 공연장에서 마이크를 스피커에 너무 가까이 가져갔을 때 발생하는 날카로운 소리.
    - 전기 기타를 앰프 가까이에 두어 의도적으로 만들어내는 지속음.
    - 회의실에서 마이크와 스피커 시스템이 부적절하게 설정되어 발생하는 불쾌한 소음.

## Literature Review
#### Clark, 2005
- [What causes feedback in a guitar or microphone?](https://www.scientificamerican.com/article/what-causes-feedback-in-a/)
    - Source: Scientific American
- 주요 내용 (Key points):
    - 피드백은 입력과 출력 사이의 '루프'가 닫힐 때 발생합니다.
    - 게인(증폭 수준)은 피드백 발생에 중요한 요소입니다.
    - 이퀄라이저를 사용하여 문제가 되는 주파수를 조절함으로써 피드백을 제어할 수 있습니다.
    - 악기(예: 기타)의 구조적 진동도 피드백에 영향을 줄 수 있습니다.

#### MediaCollege.com, n.d.
- [How to Eliminate Feedback](https://www.mediacollege.com/audio/howto/feedback.html)
    - Source: MediaCollege.com
- 주요 내용 (Key points):
    - 마이크와 스피커의 위치 조정이 피드백 방지의 핵심입니다.
    - 지향성 마이크 사용, 마이크에 가까이 대고 말하기, 사용하지 않을 때 마이크 끄기 등의 방법을 제안합니다.
    - 이퀄라이저를 사용하여 피드백을 유발하는 주파수를 낮추는 것이 효과적입니다.
    - 노이즈 게이트나 필터 사용, 스피커 출력 낮추기 등의 추가적인 방법도 소개합니다.

## 관련 개념 (Related Concepts)
- [[이퀄라이제이션 (Equalization)]] #AudioProcessing
    - 특정 주파수를 조절하여 피드백을 제어하는 중요한 기술입니다.
- [[음향 게인 (Acoustic Gain)]] #SoundReinforcement
    - 피드백이 발생하기 전에 얻을 수 있는 최대 음량을 결정하는 요소입니다.
- [[마이크 지향성 (Microphone Directionality)]] #MicrophoneTechniques
    - 마이크의 픽업 패턴이 피드백 발생에 영향을 미칩니다.
- [[룸 어쿠스틱스 (Room Acoustics)]] #AcousticDesign
    - 공간의 음향 특성이 피드백 발생에 중요한 역할을 합니다.
- [[피드백 서프레서 (Feedback Suppressor)]] #AudioEquipment
    - 자동으로 피드백을 감지하고 억제하는 장치입니다.
