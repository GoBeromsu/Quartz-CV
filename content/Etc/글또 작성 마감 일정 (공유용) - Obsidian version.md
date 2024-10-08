---
tags:
  - Technology
  - Software
  - DataManagement
Habitus:
  - "[[◦ Knowledge]]"
persona:
  - "[[🔥 Knowledge Management Specialist]]"
---

채정님의 [작성 마감 일정(공유용)](https://blcklamb.notion.site/1119e0c67e6c80848eedc354b80b6c4c)을 Obsidian version으로 변환하였습니다! 

## Dataview 기능 설명

[Dataview](https://blacksmithgu.github.io/obsidian-dataview)는 Obsidian에서 메타데이터를 쿼리하고 표시하는 강력한 플러그인입니다. 주요 기능은 다음과 같습니다:

1. 메타데이터 인덱싱: 태그, YAML 프론트매터, 인라인 필드 등을 자동으로 인덱싱합니다.
2. 쿼리 실행: 인덱싱된 데이터를 기반으로 다양한 쿼리를 실행할 수 있습니다.
3. 동적 뷰 생성: 쿼리 결과를 테이블, 리스트, 작업 목록 등 다양한 형태로 표시할 수 있습니다.

## 사용 방법
1. [[Obsidian Plugin - Dataview]]를 설치합니다.
2. 글감 노트에 `#글또/글감` 태그를 추가합니다.
3. 아래 코드 블록을 원하는 노트에 붙여넣습니다:
```dataview
TABLE default(title, "No Title") as "글 제목", default(deadLine, "No date") as "마감일", filter(tags, (t) => t != "글또/글감") as "Tags"
FROM #글또/글감
```


이제 글감이 아래와 같이 dataview에 뜨는 것을 볼 수 있습니다, 제목이 길어서 짤렸지만 Tag도 같이 출력 됩니다 :)

![[글또 작성 마감 일정 (공유용) - Obsidian version-20240930220720257.jpg]]
## 커스터마이징 옵션

Dataview 쿼리를 더욱 개선하고 싶다면 다음과 같은 옵션을 고려해볼 수 있습니다:

1. 정렬: `SORT` 명령어를 사용하여 결과를 정렬할 수 있습니다.
   ```dataview
   TABLE default(title, "No Title") as "글 제목", default(deadLine, "No date") as "마감일", filter(tags, (t) => t != "글또/글감") as "Tags"
   FROM #글또/글감
   SORT deadLine ASC
   ```

2. 필터링: `WHERE` 절을 사용하여 특정 조건에 맞는 결과만 표시할 수 있습니다.
   ```dataview
   TABLE default(title, "No Title") as "글 제목", default(deadLine, "No date") as "마감일", filter(tags, (t) => t != "글또/글감") as "Tags"
   FROM #글또/글감
   WHERE date(deadLine) >= date(today)
   ```

3. 그룹화: `GROUP BY`를 사용하여 결과를 그룹화하고 각 그룹 내의 파일들을 리스트업할 수 있습니다.
   ```dataview
   TABLE 
     rows.file.link AS "글 제목",
     rows.deadLine AS "마감일",
     rows.file.tags AS "Tags"
   FROM #글또/글감
   GROUP BY dateformat(date(deadLine), "yyyy-MM") AS "월"
   SORT 월 ASC
   ```

4. 계산 필드: JavaScript 표현식을 사용하여 계산된 필드를 추가할 수 있습니다.
   ```dataview
   TABLE default(title, "No Title") as "글 제목", default(deadLine, "No date") as "마감일", filter(tags, (t) => t != "글또/글감") as "Tags", date(deadLine) - date(today) as "남은 일수"
   FROM #글또/글감
   ```

더 많은 커스터마이징 옵션과 고급 기능은 [Dataview 공식 문서](https://blacksmithgu.github.io/obsidian-dataview)를 참조하세요. Dataview의 쿼리 언어(DQL)와 JavaScript API를 활용하면 더욱 복잡하고 강력한 데이터 뷰를 만들 수 있습니다.