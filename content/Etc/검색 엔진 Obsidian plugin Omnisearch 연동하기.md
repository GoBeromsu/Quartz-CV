---
tags:
  - Omnisearch
  - 검색엔진
  - Obsidian
  - Browser
  - 연결
  - article
  - post/tistory
aliases: 
Habitus:
  - "[[◦ Knowledge]]"
  - "[[◦ Economic]]"
up: 
date_created: 2024-09-14
---
# 검색엔진 Obsidian Plugin Omnisearch 연동하기

Omnisearch는 Obsidian의 강력한 검색 플러그인으로, 다음과 같은 특징을 가지고 있습니다:

- **다양한 파일 형식 지원**: 노트, Office 문서, PDF, 이미지 등을 빠르게 검색
- **오타 저항성**: 검색어의 오타에도 관련 결과를 찾아냄
- **필터링 기능**: 다양한 파일 형식별 필터링 가능
- **키보드 중심 워크플로우**: 효율적인 검색 및 탐색 지원
- **외부 접근성**: 로컬 HTTP 서버를 통해 Obsidian 외부에서도 쿼리 가능


Omnisearch를 브라우저와 연동하면 다음과 같은 이점을 얻을 수 있습니다:

1. **통합 검색 경험**: 웹 검색과 개인 노트 검색을 동시에 수행
2. **지식 연결**: 외부 정보와 개인 지식을 쉽게 연결
3. **맥락 이해 향상**: 검색 결과의 맥락을 더욱 풍부하게 이해
4. **노트 활용도 증가**: 개인 노트의 활용 빈도와 가치 상승
5. **시간 절약**: 여러 플랫폼을 오가며 검색할 필요 없이 한 곳에서 모든 정보 접근
6. **아이디어 발견**: 웹 정보와 개인 노트를 동시에 보며 새로운 연결점 발견 가능

이 가이드에서는 Omnisearch를 브라우저와 연동하는 방법을 단계별로 안내하여, 사용자가 이러한 장점들을 최대한 활용할 수 있도록 돕습니다.

## Omnisearch를 Google/Kagi에 연결하는 방법

1. [Omnisearch](https://obsidian.md/plugins?search=Omnisearch)의 최신 버전을 Obsidian에 설치하고, 설정에서 HTTP 서버를 활성화합니다.
   ![[검색엔진ObsidianpluginOmnisearch연동하기-20240914104958688.jpg]]

2. 브라우저에 [Tampermonkey](https://www.tampermonkey.net/) (또는 다른 userscript 관리자)를 설치합니다.
   ![[검색엔진ObsidianpluginOmnisearch연동하기-20240914105040210.jpg]]

1. 브라우저의 Developer Mode를 활성화합니다. 브라우저별 확장 프로그램 페이지 링크:
   - Chrome: [chrome://extensions/](chrome://extensions/)
   - Arc: [arc://extensions/](arc://extensions/)

   각 브라우저에서 "개발자 모드" 또는 "Developer Mode" 토글을 찾아 활성화합니다. Chrome과 Arc는 오른쪽 상단, Edge는 왼쪽 하단에 있습니다.

4. 이 작업을 통해 Tampermonkey를 통해 userScripts API를 사용할 수 있게 됩니다.

선호하는 검색 엔진에 해당하는 userscript를 설치합니다, extension을 설치하고 아래 링크에 접속하면 Tampermonkey가 접근 가능하도록 할 것이냐 물어봅니다
- [Kagi](https://github.com/scambier/userscripts/raw/master/dist/obsidian-omnisearch-kagi.user.js)
- [Google](https://github.com/scambier/userscripts/raw/master/dist/obsidian-omnisearch-google.user.js)
- [DuckDuckGo](https://github.com/scambier/userscripts/raw/master/dist/obsidian-omnisearch-ddg.user.js)
- [Bing](https://github.com/scambier/userscripts/raw/master/dist/obsidian-omnisearch-bing.user.js)


![[검색엔진ObsidianpluginOmnisearch연동하기-20240914110149235.jpg]]

다음은 experimental Javascript feature를 실행시켜야 합니다

1. Experimental JavaScript features를 활성화합니다. 브라우저별 설정 페이지 링크:
   - Chrome: [chrome://flags/#enable-experimental-web-platform-features](chrome://flags)
   - Arc: [arc://flags/#enable-experimental-web-platform-features](arc://flags)

   각 브라우저에서 "Experimental Web Platform features"를 찾아 "Enabled"로 설정합니다.
![[검색엔진ObsidianpluginOmnisearch연동하기-20240914110433209.jpg]]
![[검색엔진ObsidianpluginOmnisearch연동하기-20240914110620403.jpg]]

이제 처음 구글 search를 하면, 아래와 같이 권한을 요구합니다. 여기서 Allow를 누르시면 사용하실 수 있습니다
![[검색엔진ObsidianpluginOmnisearch연동하기-20240914110223756.jpg]]

## 궁금증
### 왜 Developer Mode를 활성화해야 하나요?

Developer Mode는 userscript의 두 단계 사용자 권한 부여를 위해 필요합니다: userScripts 권한과 Developer Mode 옵션입니다. userScripts 권한만으로는 설치 시 사용자 경고를 트리거하지 않습니다. 따라서 이 추가 단계는 사용자가 Userscripts를 사용하는 확장 프로그램을 실행하는 데 있어 신중한 결정을 내리도록 하기 위한 Google의 의도를 반영합니다.

## Omnisearch와 브라우저 연동의 동작 원리

1. **로컬 HTTP 서버**: Omnisearch 플러그인은 Obsidian 내에서 로컬 HTTP 서버를 실행합니다. 이 서버는 외부 애플리케이션(이 경우 브라우저)에서 Obsidian 노트를 검색할 있게 해줍니다.
2. **Userscript**: Tampermonkey를 통해 설치된 userscript는 브라우저의 검색 결과 페이지에 삽입됩니다. 이 스크립트는 사용자의 검색 쿼리를 감지합니다.
3. **API 요청**: userscript는 감지한 검색 쿼리를 사용하여 Omnisearch의 로컬 HTTP 서버에 API 요청을 보냅니다.
4. **결과 처리**: Omnisearch 서버는 요청을 처리하고, Obsidian 노트에서 관련된 결과를 찾아 반환합니다.
5. **결과 표시**: userscript는 받은 결과를 처리하여 브라우저의 검색 결과 페이지에 Obsidian 노트의 검색 결과를 삽입합니다.
