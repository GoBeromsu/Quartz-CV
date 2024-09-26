---
tags:
  - AudioEngineering
  - SignalProcessing
  - SoundQuality
  - NoiseReduction
  - AudioMeasurement
  - terminology
  - SNR
aliases:
  - Signal-to-Noise Ratio
CMDS:
  - "[[📚 013 Terminologies]]"
---
## 신호 대 잡음비 (Signal-to-Noise Ratio)
#### What is Signal-to-Noise Ratio (SNR)
- 정의 (Definition):
    - SNR은 원하는 신호의 레벨과 배경 잡음 레벨 사이의 비율을 나타내는 측정값입니다. 일반적으로 데시벨(dB) 단위로 표현됩니다[(Sound On Sound, n.d.)](https://www.soundonsound.com/glossary/t).
    - 신호 대 잡음비는 오디오 시스템의 품질과 성능을 평가하는 중요한 지표로, 높을수록 더 깨끗하고 명확한 소리를 의미합니다[(RØDE, n.d.)](https://rode.com/en/about/news-info/what-is-signal-to-noise-ratio).
    - SNR은 (신호 전력 / 잡음 전력)의 비율로 계산되며, 로그 스케일로 표현됩니다[(Cadence PCB Solutions, 2020)](https://resources.pcb.cadence.com/blog/2020-what-is-signal-to-noise-ratio-and-how-to-calculate-it).

- 예시 (Examples):
    - 고품질 오디오 인터페이스는 일반적으로 100dB 이상의 SNR을 가집니다.
    - 전문가용 마이크로폰의 경우, 70-80dB 이상의 SNR이 일반적입니다.
    - 디지털 오디오 시스템에서 16비트 오디오의 이론적 최대 SNR은 약 96dB입니다.

## Literature Review
#### RØDE, n.d.
- [What Is Signal-to-noise Ratio?](https://rode.com/en/about/news-info/what-is-signal-to-noise-ratio)
    - Source: RØDE Official Website
- 주요 내용 (Key points):
    - SNR의 기본 개념과 중요성을 설명합니다.
    - 내부(전자) 노이즈와 외부(환경) 노이즈의 차이를 설명합니다.
    - 마이크 배치가 SNR에 미치는 영향을 시각적으로 보여줍니다.

#### Cadence PCB Solutions, 2020
- [What is Signal to Noise Ratio and How to calculate it?](https://resources.pcb.cadence.com/blog/2020-what-is-signal-to-noise-ratio-and-how-to-calculate-it)
    - Source: Cadence PCB Solutions Blog
- 주요 내용 (Key points):
    - SNR 계산 방법을 자세히 설명합니다.
    - SNR과 채널 용량의 관계를 Shannon의 법칙을 통해 설명합니다.
    - 무선 네트워크에서의 SNR 중요성을 강조합니다.

## 관련 개념 (Related Concepts)
- [[다이나믹 레인지 (Dynamic Range)]] #DynamicRange
    - 다이나믹 레인지는 시스템이 처리할 수 있는 최소 신호 레벨과 최대 신호 레벨의 차이를 나타냅니다. SNR과 밀접한 관련이 있지만, 다이나믹 레인지는 주로 왜곡 없이 처리할 수 있는 신호의 범위를 의미합니다.

- [[노이즈 플로어 (Noise Floor)]] #NoiseFloor
    - 노이즈 플로어는 시스템에 존재하는 배경 잡음의 레벨을 나타냅니다. SNR을 개선하기 위해서는 노이즈 플로어를 낮추는 것이 중요합니다.

- [[비트 뎁스 (Bit Depth)]] #BitDepth
    - 디지털 오디오에서 비트 뎁스는 SNR과 직접적인 관련이 있습니다. 비트 뎁스가 높을수록 이론적으로 더 높은 SNR을 얻을 수 있습니다.

- [[프리앰프 게인 (Preamp Gain)]] #PreampGain
    - 프리앰프의 게인 설정은 입력 신호의 레벨을 높이는 동
