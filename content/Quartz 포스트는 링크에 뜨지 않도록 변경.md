---
tags:
  - ProgrammingTools
  - SoftwareDevelopment
  - PluginExtension
  - public
aliases: 
date_created: 2024-10-13
Habitus:
  - "[[◦ Knowledge]]"
  - "[[◦ Linguistic]]"
persona:
  - "[[🔥 Programmer]]"
  - "[[🔥 Knowledge Management Specialist]]"
---

## 1. 배경 및 목적

Quartz 디지털 가든 시스템에서 위키링크 처리 방식을 개선하고자 새로운 transformer 플러그인을 구현하게 되었습니다. 이 프로젝트의 주요 목표는 다음과 같습니다:

- 모듈화와 응집성 향상: 기존 시스템의 구조를 최대한 활용하면서 위키링크 처리를 위한 독립적이고 응집도 높은 모듈을 만들고자 했습니다.

- 사용자 경험 개선: 기존 시스템에서는 존재하지 않는 컨텐츠에 대한 링크도 활성화되어 있어, 사용자가 이를 클릭하면 404 오류가 발생했습니다. 이를 개선하여 존재하지 않는 컨텐츠에 대한 링크는 일반 텍스트로 표시하고자 했습니다.

- 적절한 처리 시점 선택: Quartz의 빌드 프로세스 중 가장 적절한 시점에 위키링크 처리를 수행하고자 했습니다.

## Quartz WikiLinks 플러그인 구현 전략

### 1. 빌드 프로세스 분석
Quartz의 빌드 프로세스는 `quartz/build.ts`에서 시작됩니다. 여기서 모든 파일의 슬러그를 수집합니다:
```typescript
const allFiles = await glob("**/*.*", argv.directory, cfg.configuration.ignorePatterns)
const fps = allFiles.filter((fp) => fp.endsWith(".md")).sort()
const filePaths = fps.map((fp) => joinSegments(argv.directory, fp) as FilePath)
ctx.allSlugs = allFiles.map((fp) => slugifyFilePath(fp as FilePath))
```
- 이 `ctx` 객체는 전체 파일 리스트를 `slugs`로 가지고 있어, 이후 프로세스에서 활용할 수 있습니다.

### 2. 트랜스포머 플러그인 구현
- `quartz/processors/parse.ts`의 `createProcessor` 함수에서 트랜스포머 플러그인이 적용됩니다:
```typescript
export function createProcessor(ctx: BuildCtx): QuartzProcessor {
const transformers = ctx.cfg.plugins.transformers

return unified()
	.use(remarkParse)
	.use(
		transformers
			.filter((p) => p.markdownPlugins)
			.flatMap((plugin) => plugin.markdownPlugins!(ctx)),
	)
	// … 다른 처리 단계들
}
```
- 이 구조를 활용하여 WikiLinks 트랜스포머 플러그인을 구현했습니다.

### 3. WikiLinks 플러그인 구현
- `quartz/plugins/transformers/wikilinks.ts`에 새로운 플러그인을 구현했습니다:
  ```typescript
  const WikiLinksTransformer = () => {
    // WikiLinks 처리 로직
  };
  ```
- 이 플러그인은 다음과 같은 작업을 수행합니다:
  1. `ctx.allSlugs`를 사용하여 모든 유효한 파일 슬러그 목록을 가져옵니다.
  2. 마크다운 AST의 모든 텍스트 노드를 순회하며 위키링크 패턴 (`[[…]]`)을 찾습니다.
  3. 위키링크를 발견하면, 해당 링크가 유효한지 확인합니다.
  4. 유효한 링크는 실제 링크 노드로 변환하고, 유효하지 않은 링크는 일반 텍스트로 남깁니다.

### 접근 방식의 장점
- **타입 안정성**: `ctx` 객체를 통해 타입이 보장된 방식으로 `allSlugs`에 접근합니다.
- **모듈성**: 위키링크 처리를 위한 독립적인 플러그인을 만들어 코드의 관심사를 분리했습니다.
- **유연성**: 필요에 따라 이 플러그인을 쉽게 활성화하거나 비활성화할 수 있습니다.


## 3. 구현 세부사항
#### 1. 플러그인 구조 설정
먼저, Quartz의 트랜스포머 플러그인 구조에 맞추어 `WikiLinks` 함수를 정의합니다. 이 함수는 플러그인의 이름을 `"WikiLinks"`로 지정하고, `markdownPlugins` 함수를 통해 마크다운을 처리하는 로직을 제공합니다.

```typescript
export const WikiLinks: QuartzTransformerPlugin = () => {
  return {
    name: "WikiLinks",
    markdownPlugins(ctx) {
      // 마크다운 처리 로직이 들어갑니다.
    },
  }
}
```

#### 2. 유효한 슬러그 목록 생성
`ctx.allSlugs`에서 모든 파일의 슬러그를 가져오고, 각 슬러그에서 파일 이름만 추출하여 확장자를 제거합니다. `Set` 자료구조를 사용하여 중복을 제거하고, 이 슬러그 목록을 추출해 위키링크 유효성 검사를 할 준비를 합니다.

```typescript
const allSlugs = new Set(
  ctx.allSlugs.map((slug) => path.basename(slug, path.extname(slug))),
)
console.log("allSlugs", allSlugs)
```

#### 3. 마크다운 AST 순회
`unist-util-visit` 라이브러리를 사용하여 마크다운 AST 내 모든 텍스트 노드를 순회합니다. 각 텍스트 노드에서 위키링크 패턴을 탐색합니다.

```typescript
visit(tree, "text", (node: Text, index, parent) => {
  if (!parent || index === undefined) return

  const regex = /\[\[(.*?)\]\]/g
  const parts = node.value.split(regex)
  
  // 위키링크가 포함된 경우 처리 로직을 이어서 진행합니다.
})
```

#### 4. 위키링크 패턴 찾기 및 분할
[[Regular Expressions|regex]]을 사용하여 텍스트 내 `[[…]]` 형태의 위키링크 패턴을 찾습니다. 해당 텍스트를 위키링크와 일반 텍스트로 분할합니다.

```typescript
const regex = /\[\[(.*?)\]\]/g
const parts = node.value.split(regex)
```

#### 5. 링크 처리
분할된 각 부분을 순회하며 일반 텍스트와 위키링크를 구분하여 처리합니다. 위키링크는 `|`로 구분된 링크와 라벨을 분리하고, `allSlugs`에 포함된 링크인지 확인하여 유효성 검사를 수행합니다.

```typescript
const newNodes: PhrasingContent[] = parts.flatMap((part, i): PhrasingContent[] => {
  if (i % 2 === 0) {
    // 일반 텍스트
    return part ? [{ type: "text", value: part }] : []
  } else {
    // 위키링크 처리
    const [link, label] = part.split("|")
    const displayText = label || link
    const linkWithoutExtension = path.basename(link, path.extname(link))

    if (allSlugs.has(linkWithoutExtension)) {
      // 유효한 링크
      return [
        {
          type: "link",
          url: link,
          children: [{ type: "text", value: displayText }],
        },
      ]
    } else {
      // 존재하지 않는 링크
      return [{ type: "text", value: displayText }]
    }
  }
})
```

#### 6. AST 업데이트
최종적으로, 원래의 텍스트 노드를 새로 생성한 노드들로 대체하여 AST를 업데이트합니다. 이 과정에서 존재하는 파일에 대한 링크는 링크 노드로 변환되고, 존재하지 않는 파일에 대한 링크는 일반 텍스트로 남겨집니다.

```typescript
parent.children.splice(index, 1, …newNodes)
```


## 마치며

![](https://i.imgur.com/cnjBrxc.png)
실제 블로그를 build해서 보면, 핑크색으로 [[크론탭(Crontab)]] 링크가 잘 연결 된 것을 볼 수 있습니다. 이 외에 존재하지 않는 링크는 이제 블로그에서 보이지 않습니다. 

### 새로 배운 점 
>~ 작성 중
- 프로젝트 구조
	- 엄청 깔끔하다…. 읽다보니까 이해가 되는 구조,,,
	- 그래서 개발 할 때 편했다. build → transformers → emittor 이렇게 전개 되니까 보기 편함
-  [[추상 구문 트리 (Abstract Syntax Tree)]] 
	- 프로그래밍 언어론 시간에 배웠던 토큰 단위로 쪼개서 처리하는게 실제로 적용 되는 것을 보니까 흥미롭다. 
	- 좀 더 공부하고 싶은게, AST로 처리를 하니까 나처럼 wikilink를 처리하고 싶은 경우에 딱 그 부분만 쏙 빼서 처리 할 수 있다
	- 이래서 자료구조가 중요하군,,,


### Code
아래는 위 설명에 따른 전체 코드입니다:

```typescript
import { QuartzTransformerPlugin } from "../types"
import { Root, Text, Link, PhrasingContent } from "mdast"
import { visit } from "unist-util-visit"
import path from "path"

export const WikiLinks: QuartzTransformerPlugin = () => {
  return {
    name: "WikiLinks",
    markdownPlugins(ctx) {
      return [
        () => (tree: Root, file) => {
          const allSlugs = new Set(
            ctx.allSlugs.map((slug) => path.basename(slug, path.extname(slug))),
          )
          console.log("allSlugs", allSlugs)

          visit(tree, "text", (node: Text, index, parent) => {
            if (!parent || index === undefined) return

            const regex = /\[\[(.*?)\]\]/g
            const parts = node.value.split(regex)

            if (parts.length > 1) {
              const newNodes: PhrasingContent[] = parts.flatMap((part, i): PhrasingContent[] => {
                if (i % 2 === 0) {
                  return part ? [{ type: "text", value: part }] : []
                } else {
                  const [link, label] = part.split("|")
                  const displayText = label || link
                  const linkWithoutExtension = path.basename(link, path.extname(link))

                  if (allSlugs.has(linkWithoutExtension)) {
                    return [
                      {
                        type: "link",
                        url: link,
                        children: [{ type: "text", value: displayText }],
                      },
                    ]
                  } else {
                    return [{ type: "text", value: displayText }]
                  }
                }
              })

              parent.children.splice(index, 1, …newNodes)
            }
          })
        },
      ]
    },
  }
}
```

이 플러그인은 마크다운 내의 위키링크를 탐색하여 처리하며, 유효한 링크는 실제 링크 노드로, 그렇지 않은 경우 일반 텍스트로 변환하여 표시합니다.