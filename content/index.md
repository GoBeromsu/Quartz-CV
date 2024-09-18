---
title: Welcome to Quartz
up: 
tags: [SecondBrain, InformationOrganization, KnowledgeManagement, effort/on]
aliases: []
Habitus:
  - "[[◦ Knowledge]]"
persona: 
date_created: 2024-09-18
CMDS:
  - "[[📚 041 Tools]]"
  - "[[📚 042 Data Analysis]]"
  - "[[📚 053 Program]]"
---


## Introduction

현대 디지털 환경에서 온라인 프레젠스는 전문가들에게 중요한 요소가 되었습니다. 이러한 맥락에서, 본 프로젝트는 개인의 지식 체계와 전문성을 효과적으로 표현할 수 있는 디지털 CV 구축 방법을 탐구합니다. 구체적으로, Quartz 정적 사이트 생성기와 Obsidian 지식 관리 시스템을 통합하여 상호 연결된 지식 네트워크를 웹 기반 이력서 형태로 구현하는 과정을 다룹니다.

Quartz는 마크다운 문서를 구조화된 웹사이트로 변환하는 기능을 제공하며, Obsidian의 노트 작성 및 연결 기능과 결합하여 단순한 경력 나열을 넘어선 지식 조직 접근 방식을 시각화할 수 있습니다. 이 방법론은 전통적인 이력서 형식의 한계를 극복하고, 개인의 전문 지식과 사고 과정을 더 포괄적으로 표현할 수 있는 가능성을 제시합니다.

본 가이드는 Quartz 블로그 설정부터 GitHub Pages를 통한 배포까지의 기술적 과정을 단계별로 설명합니다. 이는 디지털 지식 관리에 관심 있는 연구자, 전문가, 학생들에게 자신의 지적 자산을 체계적으로 구조화하고 공유하는 새로운 방법을 제공할 것입니다. 궁극적으로 이 접근법은 개인의 전문성과 지식 네트워크를 더욱 효과적으로 커뮤니케이션하는 데 기여할 수 있습니다.

## 프로젝트 클론하기

[Quartz 4 시작하기](https://quartz.jzhao.xyz/#-get-started)

먼저 Quartz 저장소를 클론하고 의존성을 설치합니다:

```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```

처음 블로그를 만들 때, 초기 옵션을 설정할 수 있습니다:

```
┌   Quartz v4.3.1 
│
◆  Choose how to initialize the content in `/Users/beomsu/Documents/quartz/content`
│  ● Empty Quartz
│  ○ Copy an existing folder
◇  Choose how to initialize the content in `/Users/beomsu/Documents/quartz/content`
│  Empty Quartz
│
◇  Choose how Quartz should resolve links in your content. This should match Obsidian's link format.
You can change this later in `quartz.config.ts`.
│  Treat links as shortest path
│
└  You're all set! Not sure what to do next? Try:
  • Customizing Quartz a bit more by editing `quartz.config.ts`
  • Running `npx quartz build --serve` to preview your Quartz locally
  • Hosting your Quartz online (see: https://quartz.jzhao.xyz/hosting)
```

### GitHub 저장소 설정하기

[GitHub 저장소 설정 가이드](https://quartz.jzhao.xyz/setting-up-your-GitHub-repository)

처음 실행하면 다음과 같은 에러가 발생할 수 있습니다:

```bash
❯ npx quartz sync

 Quartz v4.3.1 

Backing up your content
(node:75223) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[v4 38e356f] Quartz sync: Sep 18, 2024, 10:32 PM
 2 files changed, 6 insertions(+)
 delete mode 100644 content/.gitkeep
 create mode 100644 content/index.md
Pulling updates from your repository. You may need to resolve some `git` conflicts if you've made changes to components or plugins.
From https://github.com/jackyzha0/quartz
 * branch            v4         -> FETCH_HEAD
Already up to date.
Pushing your changes
remote: Permission to jackyzha0/quartz.git denied to GoBeromsu.
fatal: unable to access 'https://github.com/jackyzha0/quartz.git/': The requested URL returned error: 403
An error occurred above while pushing to remote origin.
```

이 문제를 해결하려면 GitHub에 자신의 저장소를 등록해야 합니다:

```bash
# 추적 중인 모든 저장소 목록 확인
git remote -v

# 자신의 저장소를 origin으로 설정
git remote set-url origin 당신의_원격_URL
```

그 다음, 현재 로컬 파일을 다음 명령어로 모두 업로드할 수 있습니다:

```bash
npx quartz sync --no-pull
```

성공적으로 변경사항이 푸시되면 다음과 같은 메시지가 표시됩니다:

```bash
❯ npx quartz sync --no-pull

 Quartz v4.3.1 

Backing up your content
(node:75701) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
On branch v4
Your branch is ahead of 'origin/v4' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
Pushing your changes
Enumerating objects: 9604, done.
Counting objects: 100% (9604/9604), done.
Delta compression using up to 14 threads
Compressing objects: 100% (3475/3475), done.
Writing objects: 100% (9604/9604), 7.92 MiB | 540.60 MiB/s, done.
Total 9604 (delta 6017), reused 9599 (delta 6016), pack-reused 0
remote: Resolving deltas: 100% (6017/6017), done.
To https://github.com/GoBeromsu/Quartz-CV.git
 * [new branch]      v4 -> v4
branch 'v4' set up to track 'origin/v4'.
Done!
```

이제 `npx quartz sync`를 실행하면 오류 없이 잘 작동하는 것을 확인할 수 있습니다:

```bash
❯ npx quartz sync

 Quartz v4.3.1 

Backing up your content
(node:75883) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation …` to show where the warning was created)
On branch v4
Your branch is up to date with 'origin/v4'.

nothing to commit, working tree clean
Pulling updates from your repository. You may need to resolve some `git` conflicts if you've made changes to components or plugins.
From https://github.com/GoBeromsu/Quartz-CV
 * branch            v4         -> FETCH_HEAD
Already up to date.
Pushing your changes
branch 'v4' set up to track 'origin/v4'.
Everything up-to-date
Done!
```


## [호스팅](https://quartz.jzhao.xyz/hosting)
이제 로컬에서 한 번 실행해 봅시다.
- [Quartz 빌드하기](https://quartz.jzhao.xyz/build)
    - 실행 관련 문제가 있다면 여기서 참고하면 됩니다.

Quartz를 초기화했다면, 로컬에서 어떻게 보이는지 확인해 봅시다:
```
npx quartz build --serve
```

이 명령어는 컴퓨터에서 Quartz를 실행할 로컬 웹 서버를 시작합니다. 웹 브라우저를 열고 `http://localhost:8080/`에 접속하여 확인할 수 있습니다.

먼저 정적 웹사이트를 생성해야 합니다. GitHub Pages를 이용하려고 합니다.
자신이 만든 GitHub 저장소의 Settings → Pages에서 Source를 GitHub Actions로 선택합니다.

![[Quartz Blog 만들기-20240918225335773.jpg]]

1. 포크한 저장소의 "Settings" 탭으로 가서 사이드바에서 "Pages"를 클릭합니다. "Source" 아래에서 "GitHub Actions"를 선택합니다.
2. `npx quartz sync` 명령어로 이 변경사항을 커밋합니다. 이렇게 하면 사이트가 `<github-username>.github.io/<repository-name>`에 배포됩니다.

여기서 `npx quartz sync`를 실행하면 GitHub Workflows가 작동하는 것을 볼 수 있습니다.

![[Quartz Blog 만들기-20240918225519649.jpg]]

잘 작동하는군요, 아주 보기 좋습니다. [Welcome to Quartz](https://goberomsu.github.io/Quartz-CV/)
![[Quartz Blog 만들기-20240918225630400.jpg]]

### Squarespace에 게시하는 단계
제 경우, [[Digital Garden 꾸미기]]를 보면 Squarespace(Google 도메인 대체재)를 사용하고 있어서, 일단 GitHub Pages에 배포하고 이를 커스텀 도메인으로 옮기면 됩니다.

Obsidian Quartz를 Squarespace에 게시하려면 다음 단계를 따르면 됩니다. Squarespace는 GitHub Pages나 Cloudflare처럼 정적 파일을 직접 호스팅할 수 없기 때문에, 정적 Quartz 사이트를 Squarespace와 통합하는 방법을 사용합니다.

1. **Quartz를 GitHub 또는 Cloudflare에 배포하기**:
    - 먼저 GitHub Pages, Cloudflare 또는 다른 정적 파일 호스팅 서비스를 사용하여 Quartz 사이트를 배포합니다 (예: GitHub Workflows 설정 또는 Cloudflare Pages에 배포).

2. **Squarespace로 커스텀 도메인 사용하기**:
    - **커스텀 도메인 설정**:
        Squarespace 도메인을 Quartz 사이트에 사용하려면, 도메인이 Quartz 사이트가 호스팅된 서비스(예: GitHub Pages 또는 Cloudflare)를 가리키도록 구성합니다.
    - Squarespace의 도메인 설정으로 이동합니다.
    - GitHub Pages나 Cloudflare를 사용하는 경우, Squarespace와 함께 커스텀 도메인을 설정하는 가이드를 따릅니다. 일반적으로 DNS 레코드(CNAME 또는 A 레코드)를 설정하여 Quartz 사이트에 연결해야 합니다.


## Squarespace 도메인과 GitHub Pages 연동: DNS 설정 최적화

도메인 설정 초기 단계에서 "check unsuccessful" 오류가 발생 할 수 있습니다. 이는 DNS 설정의 즉각적인 반영이 이루어지지 않았음을 시사합니다.
![[Quartz Blog 만들기-20240918225905027.jpg]]

DNS 레코드 입력이 불가능하다는 메시지를 해결 하기 위해, [GitHub Pages에서 호스팅된 웹사이트에 Squarespace 도메인 연결하기](https://github.com/orgs/community/discussions/78573)에 관한 GitHub 커뮤니티 토론을 참조하였습니다.

1. **A 레코드 설정**:
   - Squarespace의 DNS 관리 인터페이스에서 `@` 심볼을 사용하여 루트 도메인을 나타냅니다.
   - GitHub Pages의 IP 주소 4개를 개별 A 레코드로 추가하였습니다:
	  - 185.199.108.153
	  - 185.199.109.153
	  - 185.199.110.153
	  - 185.199.111.153

   이 설정은 도메인을 GitHub의 서버로 직접 연결합니다.

2. **CNAME 레코드 설정**:
   - 호스트 이름을 `www`로 설정하고, 값으로 `<username>.github.io`를 입력하였습니다.
   - 이 설정은 'www'로 시작하는 주소를 GitHub Pages 사이트로 리다이렉트합니다.

3. **DNS 전파 대기**: DNS 변경사항의 전파에는 최대 48시간이 소요될 수 있음을 인지하고, 인내심을 가지고 기다렸습니다.

4. **GitHub Pages 설정 확인**: GitHub 저장소의 설정에서 커스텀 도메인을 확인하고, HTTPS 강제 적용을 활성화하였습니다.

이러한 단계를 거쳐 최종적으로 DNS 설정이 성공적으로 이루어졌음을 확인할 수 있었습니다.

![[Quartz Blog 만들기-20240918232302592.jpg]]


## Thinking
- [[2024-09-18]] 22:51 Cloudflare가 뭐지? 여기에 바로 배포도 할 수 있나봄

## Reference

- [[What is apex domain]]