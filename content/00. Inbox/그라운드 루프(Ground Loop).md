---
tags: [AudioEngineering, ElectricalEngineering, SoundQuality, NoiseReduction, SignalProcessing, terminology, GroundLoop, AudioNoise, public]
aliases: [Ground Loop, 그라운드 루프]
CMDS:
  - "[[📚 013 Terminologies]]"
Habitus:
  - "[[◦ Knowledge]]"
persona:
  - "[[🔥 Sound]]"
date_created: 2024-09-26
---
## 그라운드 루프 (Ground Loop)
#### What is Ground Loop
- 정의 (Definition):
	- 그라운드 루프는 오디오 시스템에서 발생하는 전기적 간섭 현상으로, 두 개 이상의 장치가 서로 다른 접지점을 통해 연결될 때 발생합니다[(Ballou, 2015)](https://www.routledge.com/Handbook-for-Sound-Engineers/Ballou/p/book/9780415842938).
	- 이는 시스템 내에서 원치 않는 전류가 흐르게 되어 오디오 신호에 노이즈나 험(hum)을 유발합니다[(White & Louie, 2005)](https://www.routledge.com/The-Audio-Dictionary-Third-Edition-Revised-and-Expanded/White-Louie/p/book/9780295984988).
	- 그라운드 루프는 일반적으로 60Hz(미국) 또는 50Hz(유럽, 아시아 등) 주파수의 험으로 나타납니다[(Huber & Runstein, 2013)](https://www.routledge.com/Modern-Recording-Techniques/Huber-Runstein/p/book/9780240821573).

- 예시 (Examples):
	- 믹싱 콘솔과 파워 앰프가 서로 다른 전원 콘센트에 연결되어 있을 때 그라운드 루프가 발생할 수 있습니다.
	- 컴퓨터의 오디오 인터페이스와 외부 프리앰프 사이에 그라운드 루프가 형성되어 녹음 시 험이 들리는 경우.
	- 비디오 프로젝터와 오디오 시스템이 연결된 홈 시어터 설치에서 화면에 노이즈 라인이 보이고 스피커에서 험이 들리는 현상.


#### 그라운드 루프의 발생 원인
- **다중 접지 지점:** 여러 장치가 서로 다른 접지 지점을 사용하여 연결될 때, 접지 간 전위 차이로 인해 그라운드 루프가 형성될 수 있습니다.
- **비균형 전원 공급:** 전력 공급 장치가 완전히 접지되지 않았거나, 접지 임피던스가 높을 경우 전위 차이가 발생할 수 있습니다.
- **케이블 배치:** 오디오 케이블이 전원 케이블과 가까이 배치되거나, 장비 간 케이블 길이가 상이할 경우 간섭이 증가할 수 있습니다.
- **전자기 간섭 (EMI):** 외부 전자기장이 시스템 내의 접지 루프에 영향을 미쳐 노이즈를 유발할 수 있습니다.

#### 그라운드 루프의 영향
- **오디오 품질 저하:** 험 소리, 윙윙거리는 소리, 또는 기타 잡음이 오디오 신호에 섞여 음질을 저하시킵니다.
- **장비 손상:** 지속적인 불필요한 전류 흐름은 오디오 장비의 성능 저하 또는 손상을 초래할 수 있습니다.
- **신호 왜곡:** 신호 경로에 간섭이 발생하여 원래의 오디오 신호가 왜곡될 수 있습니다.

#### 그라운드 루프의 진단 방법
- **험 소리 확인:** 오디오 시스템에서 지속적인 험 소리가 발생하는지 확인합니다.
- **장비 분리 테스트:** 모든 장비를 하나씩 분리하여 험 소리가 사라지는 장비를 찾습니다.
- **접지 점 점검:** 시스템 내의 모든 접지 지점을 점검하고, 접지 연결이 올바르게 이루어져 있는지 확인합니다.
- **케이블 검토:** 오디오 케이블이 전원 케이블과 물리적으로 간섭되지 않도록 재배치합니다.

#### 그라운드 루프 해결 방안
- **갈바닉 절연 (Galvanic Isolation):**
	- 갈바닉 절연 장치를 사용하여 두 회로 간의 전기적 연결을 차단함으로써 그라운드 루프를 방지합니다. 이는 트랜스포머 기반 아이솔레이터나 광학 아이솔레이터를 통해 구현할 수 있습니다.
- **균형 잡힌 오디오 연결 (Balanced Audio Connections):**
	- XLR 케이블과 같은 균형 잡힌 케이블을 사용하여 노이즈를 상쇄시키고, 신호의 무결성을 유지합니다
- **단일 접지 점 사용 (Single Ground Point):**
	- 시스템 내의 모든 장비를 단일 접지 지점으로 연결하여 전위 차이를 최소화합니다.
- **접지 루프 브레이커 (Ground Loop Breakers):**
	- 접지 루프 브레이커를 설치하여 불필요한 전류 흐름을 차단하고, 험 소리를 제거합니다.
- **전원 필터링 및 차단:**
	- 전원 공급 장치에 필터를 추가하거나, 노이즈를 차단하는 차단기를 사용하여 간섭을 줄입니다.
## Literature Review
#### Ballou, 2015
- [Handbook for Sound Engineers](https://www.routledge.com/Handbook-for-Sound-Engineers/Ballou/p/book/9780415842938)
	- Source: Routledge
- 주요 내용 (Key points):
	- 그라운드 루프의 원인과 메커니즘에 대한 상세한 설명을 제공합니다.
	- 다양한 오디오 시스템에서 그라운드 루프를 식별하고 해결하는 방법을 논의합니다.
	- 그라운드 루프 방지를 위한 시스템 설계 및 설치 가이드라인을 제시합니다.

#### Huber & Runstein, 2013
- [Modern Recording Techniques](https://www.routledge.com/Modern-Recording-Techniques/Huber-Runstein/p/book/9780240821573)
	- Source: Focal Press
- 주요 내용 (Key points):
	- 레코딩 스튜디오 환경에서 발생하는 그라운드 루프 문제를 다룹니다.
	- 그라운드 루프로 인한 노이즈를 제거하기 위한 실용적인 기술과 도구를 소개합니다.
	- 균형 잡힌(balanced) 오디오 연결의 중요성과 그라운드 루프 방지에 미치는 영향을 설명합니다.

## 관련 개념 (Related Concepts)
- [[험 (Hum)]] #AudioNoise
	- 그라운드 루프로 인해 발생하는 가장 일반적인 형태의 오디오 노이즈로, 주로 전원 주파수(50/60Hz)와 관련이 있습니다.
- [[갈바닉 절연 (Galvanic Isolation)]] #ElectricalEngineering
	- 두 회로 사이의 전기적 연결을 차단하여 그라운드 루프를 방지하는 기술입니다.
- [[디퍼렌셜 시그널링 (Differential Signaling)]] #SignalProcessing
	- 균형 잡힌(balanced) 오디오 연결에서 사용되는 기술로, 그라운드 루프로 인한 노이즈를 상쇄시키는 데 도움이 됩니다.
- [[접지 (Grounding)]] #ElectricalSafety
	- 올바른 접지 기술은 그라운드 루프 형성을 방지하고 전기 안전을 보장하는 데 중요합니다.

