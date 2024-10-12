---
Habitus:
CMDS:
persona:
link: 
up: 
tags: [개발]
aliases: [null]
date_created: 2023-04-07
tistoryBlogName: berom
tistoryTitle: Resolver error Error Permission denied
  (publickey,gssapi-keyex,gssapi-with-mic 해결
tistoryVisibility: "3"
tistoryCategory: "1087820"
tistorySkipModal: true
tistoryPostId: "127"
tistoryPostUrl: https://berom.tistory.com/127
date_modified: 2023-11-21
tistoryTags: 개발
---
# Resolver Error: Permission Denied (publickey,gssapi-keyex,gssapi-with-mic) 해결

![](https://i.imgur.com/K5s7Twc.png) Visual Studio Code에서 Remote SSH 접속을 시도했으나, SSH 키 권한 문제로 인해 접속이 거부되었다.

## 해결 방법
먼저, 권한 문제를 해결하기 위해 `chmod 777`을 사용했으나, 너무 많은 권한을 부여하여 아래와 같은 에러가 발생했다. ![](https://i.imgur.com/KfOi0rT.png) `chmod 777`은 파일에 너무 많은 권한을 부여하므로, 대신 `chmod 400` 명령을 사용하여 권한을 조정했다.

- `chmod 400` 명령은 파일의 권한을 변경하여 소유자에게만 읽기 권한을 부여하고, 다른 사용자에게는 권한을 부여하지 않는다.
- ![](https://i.imgur.com/mRGXoj8.png)
이렇게 하니, 정상적으로 SSH 접속이 가능해졌다.

## 관련 개념
1. 파일 권한: 파일 권한은 파일 소유자, 그룹, 다른 사용자에 대해 읽기, 쓰기, 실행 권한을 관리합니다. 파일 권한은 `ls -l` 명령을 사용하여 확인할 수 있습니다.
	- `-rw-r--r--  1 user  group  1024 Mar 28 12:34 example.txt`
		- 여기서 첫 번째 열의 `-rw-r--r--`는 파일 권한을 나타냅니다.
	- `-` : 파일 종류를 나타냅니다. `-`는 일반 파일, `d`는 디렉토리, `l`은 링크 파일입니다.
	- `rw-` : 소유자에 대한 권한으로, 이 경우 읽기 및 쓰기 권한이 있습니다.
	- `r--` : 그룹에 대한 권한으로, 이 경우 읽기 권한만 있습니다.
	- `r--` : 다른 사용자에 대한 권한으로, 이 경우 읽기 권한만 있습니다.
2. 권한 수정: 파일 권한을 변경하려면 `chmod` 명령을 사용합니다.
	- 예를 들어, 소유자에게 읽기, 쓰기, 실행 권한을 부여하고 그룹 및 다른 사용자에게 읽기 권한만 부여하려면 다음 명령을 사용합니다.
	- `chmod 744 example.txt`
		- 여기서 숫자는 각 사용자의 권한을 나타냅니다 (소유자: 7, 그룹: 4, 다른 사용자: 4).
3. 소유자 및 그룹 변경: 파일의 소유자 또는 그룹을 변경하려면 `chown` 및 `chgrp` 명령을 사용합니다.
	- `chown newowner example.txt chgrp newgroup example.txt`

### 파일 읽기 권한 문제 해결 방법
1. 파일 권한을 확인하십시오. 소유자, 그룹, 다른 사용자에게 적절한 권한이 있는지 확인합니다.
2. 필요한 경우 `chmod` 명령을 사용하여 파일 권한을 변경합니다. 읽기 권한을 추가하려면 다음과 같이 입력합니다.
	- `chmod +r example.txt`
3. 파일의 소유자 또는 그룹이 잘못되었거나 변경해야 하는 경우 `chown` 및 `chgrp` 명령을 사용하여 파일 소유자와 그룹을 수정합니다.
4. 파일 경로에 대한 권한도 확인하세요. 디렉토리에 대한 실행 권한이 없으면 파일에 액세스할 수 없습니다.
	- 이 문제를 해결하려면 해당 디렉토리에 실행 권한을 부여해야 합니다.
	- 예를 들어, `/home/user/documents` 디렉토리에 액세스할 수 있는지 확인하려면 다음 명령을 사용합니다.
		- `chmod +x /home/user/documents`
5. 사용자 계정에 대한 권한 문제가 있는 경우, 관리자에게 문의하여 문제를 해결할 수 있습니다. 관리자는 일반적으로 더 높은 권한을 가지고 있으므로 파일 또는 디렉토리 권한을 수정할 수 있습니다.
6. SELinux 및 AppArmor와 같은 보안 정책도 파일 접근 문제를 일으킬 수 있습니다. 이 경우 해당 보안 정책을 확인하고, 필요한 경우 조정하거나 관리자에게 도움을 요청해야 합니다.
