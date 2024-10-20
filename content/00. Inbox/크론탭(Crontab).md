---
Habitus: 
up: 
tags:
  - Crontab
  - Scheduling
  - Automation
  - Linux
  - TaskManagement
  - terminology
  - public
aliases:
  - Cron
  - Crontab Commands
CMDS:
  - "[[📚 013 Terminologies]]"
author:
  - "[[고범수]]"
date_created: 2024-08-17
---
## 크론탭(Crontab)
#### What is Crontab
- 정의(Definition):
	- **Crontab**은 Unix 및 Linux 시스템에서 정기적인 작업을 자동으로 실행하도록 스케줄링하는데 사용되는 프로그램입니다. 크론탭 파일은 작업을 실행할 시간과 명령어를 포함하고 있으며, 시스템이 이 파일을 참조하여 작업을 수행합니다[(Vixie, 1993)](https://doi.org/10.1007/BF02986074).
	- 사용자는 `crontab` 명령어를 사용하여 크론탭 파일을 편집, 추가, 삭제할 수 있습니다. 각 작업은 일정에 따라 자동으로 실행됩니다.

- 예시(Examples):
	- 매일 오전 3시에 `/home/user/backup.sh` 스크립트를 실행하여 백업을 수행합니다.
	- 매월 1일 오전 12시에 로그 파일을 삭제하는 명령어를 실행합니다.
#### 명령어 옵션 (Command Options)
- `crontab -l`: 현재 사용자에 대한 Crontab의 내용을 출력합니다.
- `crontab -e`: Crontab 파일을 편집할 수 있는 편집기를 엽니다.
- `crontab -r`: 현재 사용자에 대한 Crontab 파일을 삭제합니다.
- `crontab -u [사용자명]`: 특정 사용자의 Crontab을 관리할 수 있습니다. (관리자 권한 필요)

#### 시간 설정 (Time Setting)
Crontab 시간 설정은 다음과 같은 5개의 필드를 사용합니다:
1. **분 (Minute)**: 0-59 (예: `0`은 정각을 의미)
2. **시간 (Hour)**: 0-23 (예: `14`는 오후 2시를 의미)
3. **일 (Day of the Month)**: 1-31 (예: `15`는 매월 15일을 의미)
4. **월 (Month)**: 1-12 (예: `7`은 7월을 의미)
5. **요일 (Day of the Week)**: 0-7 (0 또는 7은 일요일, 1은 월요일, 6은 토요일을 의미)

### 예시 (Examples)
- `0 5 * * *`: 매일 오전 5시에 작업 실행.
- `30 14 1 * *`: 매월 1일 오후 2시 30분에 작업 실행.
- `0 0 * * 0`: 매주 일요일 자정에 작업 실행.
- `*/10 * * * *`: 매 10분마다 작업 실행.
- `0 8-17 * * 1-5`: 월요일부터 금요일까지 매일 오전 8시부터 오후 5시 사이에 매 정각에 작업 실행.
- **잘못된 예시 (Incorrect Example):** `*/480 * * * *`
	- 설명: `*/480` 표현은 유효하지 않습니다. 분 필드는 0에서 59 사이의 값만 허용됩니다.
	- 480분마다 작업을 실행하려면 시간을 기준으로 설정해야 합니다. 예를 들어, 매 8시간마다 실행하려면 `0 */8 * * *`로 설정해야 합니다.
## Literature Review
#### Vixie, 1993
- [Vixie Cron](https://doi.org/10.1007/BF02986074)
	- Source: Usenix Proceedings
- 주요 내용(Key points):
	- Crontab의 원리와 사용 방법에 대해 설명하며, Unix 시스템에서 정기 작업을 자동화하는 크론 시스템의 기초를 설명합니다.
	- Crontab 파일의 형식과 각 필드의 역할을 구체적으로 설명합니다.

#### Ray, 2020
- [Crontab and Cron Jobs Explained](https://www.techtarget.com/searchdatacenter/definition/cron-job)
	- Source: TechTarget
- 주요 내용(Key points):
	- Crontab의 기본 개념부터 고급 사용법까지 단계별로 설명하여, 다양한 환경에서 작업 스케줄링을 최적화하는 방법을 제시합니다.
	- Crontab을 활용한 자동화 작업의 실제 사례를 통해 업무 효율성을 높이는 방법을 설명합니다.

## 관련 개념(Related Concepts)
- [[자동화 (Automation)]] #Automation
	- Crontab을 사용하여 반복적인 작업을 자동화함으로써, 수동으로 수행할 필요 없이 작업이 자동으로 수행되도록 할 수 있습니다.
- [[스케줄링 (Scheduling)]] #Scheduling
	- Crontab은 시간 기반의 스케줄링을 통해 작업을 지정된 시간에 자동으로 실행할 수 있도록 합니다.
- [[백업 스크립트 (Backup Scripts)]] #BackupScripts
	- 정기적인 데이터 백업을 위해 Crontab을 사용하여 스크립트를 일정한 시간에 실행할 수 있습니다.
- [[로그 관리 (Log Management)]] #LogManagement
	- 시스템 로그 파일을 관리하기 위해 Crontab을 사용하여 정기적으로 로그 파일을 회전하거나 삭제할 수 있습니다.
- [[시스템 유지 관리 (System Maintenance)]] #SystemMaintenance
	- Crontab을 통해 시스템 업데이트, 파일 정리 등 주기적인 유지 관리 작업을 자동으로 수행할 수 있습니다.
