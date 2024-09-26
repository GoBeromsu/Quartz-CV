---
tags:
- AudioEngineering
- SignalProcessing
- SoundDesign
- Equalization
- FrequencyResponse
- terminology
- HighPassFilter
aliases:
- High-Pass Filter
- HPF
- Low-Cut Filter
CMDS: "[[📚 013 Terminologies]]"
index: "[[🏷 Research Notes]]"
---
## 하이패스 필터 (High-Pass Filter)
#### What is High-Pass Filter
- 정의 (Definition):
	- 하이패스 필터(HPF)는 설정된 차단 주파수(cutoff frequency) 아래의 모든 주파수를 감쇠시키는 이퀄라이제이션 도구입니다. 즉, 고주파는 통과시키고 저주파는 제거합니다[(Mathias, n.d.)](https://audiouniversityonline.com/audio-high-pass-filters/).
	- 하이패스 필터는 오디오 기술의 거의 모든 응용 분야에서 사용되며, 믹싱 콘솔, 디지털 오디오 워크스테이션(DAW), 일부 마이크로폰에 내장되어 있습니다[(Mathias, n.d.)](https://audiouniversityonline.com/audio-high-pass-filters/).
- 예시 (Examples):
	- 남성 보컬에서 80Hz 이하의 불필요한 저주파를 제거하기 위해 하이패스 필터를 사용합니다[(Mathias, n.d.)](https://audiouniversityonline.com/audio-high-pass-filters/).
	- 라이브 사운드에서 마이크 핸들링 노이즈를 줄이기 위해 하이패스 필터를 적용합니다[(Mathias, n.d.)](https://audiouniversityonline.com/audio-high-pass-filters/).
	- 킥 드럼과 베이스 기타의 주파수 충돌을 방지하기 위해 하이패스 필터로 주파수 대역을 조절합니다[(Mathias, n.d.)](https://audiouniversityonline.com/audio-high-pass-filters/).

## Literature Review
#### Mathias, n.d.
- [What Are Audio HIGH PASS FILTERS & How to Use Them](https://audiouniversityonline.com/audio-high-pass-filters/)
	- Source: Audio University Online
- 주요 내용 (Key points):
	- 하이패스 필터의 기본 개념과 작동 원리를 설명합니다.
	- 하이패스 필터의 주요 설정인 차단 주파수(cutoff frequency)와 기울기(slope/Q)에 대해 상세히 설명합니다.
	- 하이패스 필터의 9가지 주요 사용 사례를 제시하고 각각에 대해 설명합니다.

#### Fox, n.d.
- [Audio EQ: What Is A High-Pass Filter & How Do HPFs Work?](https://mynewmicrophone.com/audio-eq-what-is-a-high-pass-filter-how-do-hpfs-work/)
	- Source: My New Microphone
- 주요 내용 (Key points):
	- 하이패스 필터의 기술적 측면과 주파수 응답 특성을 자세히 설명합니다.
	- 다양한 오디오 장비와 소프트웨어에서 하이패스 필터의 구현 방식을 다룹니다.
	- 하이패스 필터의 실제 적용 사례와 팁을 제공합니다.

## 관련 개념 (Related Concepts)
- [[로우패스 필터 (Low-Pass Filter)]] #LowPassFilter
	- 하이패스 필터와 반대로 작동하며, 설정된 차단 주파수 위의 주파수를 감쇠시킵니다.
- [[밴드패스 필터 (Band-Pass Filter)]] #BandPassFilter
	- 특정 주파수 대역만 통과시키고 나머지는 감쇠시키는 필터로, 하이패스와 로우패스 필터의 조합으로 볼 수 있습니다.
- [[노치 필터 (Notch Filter)]] #NotchFilter
	- 특정 주파수 대역만을 제거하는 필터로, 하이패스 필터와 함께 사용하여 더 정밀한 주파수 조절이 가능합니다.
- [[파라메트릭 EQ (Parametric Equalizer)]] #ParametricEQ
	- 하이패스 필터를 포함한 여러 유형의 필터를 조합하여 사용할 수 있는 고급 이퀄라이제이션 도구입니다.
- [[크로스오버 (Crossover)]] #Crossover
	- 스피커 시스템에서 하이패스 필터와 로우패스 필터를 사용하여 주파수 대역을 분할하는 기술입니다.
