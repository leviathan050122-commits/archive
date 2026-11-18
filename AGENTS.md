# 프로젝트 규칙

## [LOCKED] 마키(Marquee) — 변경 금지

`index.html`의 하단 사진 마키는 아래 동작이 **영구 고정 요구사항**이다.

1. 사진들이 끊김 없이 무한 루프로 흐른다.
2. 마우스를 올리면 **그 위치 그대로** 멈춘다.
3. 마우스를 떼면 멈춘 위치에서 이어서 움직인다.

지켜야 할 것:
- `[LOCKED] MARQUEE ENGINE` 스크립트 블록은 수정하지 않는다.
- 마키 움직임을 CSS `animation` / `transition` / `:hover` 로 제어하지 않는다.
  (`.marquee-track`에 animation을 추가하지 말 것)
- `#marqueeSection`, `#marqueeTrack` id와 `.marquee-group` 구조를 유지한다.
- 마키 내용 변경은 `renderMarquee()`에서 `window.marqueeLoop.mount(groupHTML)` 로만 한다.
- 다른 기능 수정 후에는 마키 루프와 호버 정지가 그대로 동작하는지 확인한다.

## GitHub 자동 업데이트

- 저장소: https://github.com/leviathan050122-commits/archive (branch `main`, remote `origin`)
- 코드를 수정하면 작업 마지막에 항상 다음을 수행한다.
  1. `README.md` 내용을 최신 `index.html` 전체 코드로 동기화한다 (`cp index.html README.md`).
  2. 변경 내용을 요약한 메시지로 커밋한다.
  3. `git push origin main` 으로 푸시한다.
- `.env` 등 `.gitignore` 대상 파일은 커밋하지 않는다.

## Antigravity + GitHub Desktop

- 이 `프로젝트_1` 저장소 폴더를 유일한 작업 폴더로 쓴다. Antigravity와 GitHub Desktop 모두 이 폴더를 연다. 같은 저장소를 다른 경로에 다시 clone해서 번갈아 편집하지 않는다.
- Antigravity에서 편집하고, 한 번에 한 도구만 파일을 바꾼다. GitHub Desktop에서는 변경 파일을 확인한 뒤 커밋하고 `Push origin` 한다. 커밋만 하면 GitHub 웹에는 반영되지 않는다.
- 작업 전에는 GitHub Desktop의 `Fetch origin`을 누르고, 원격 변경이 있으면 먼저 `Pull origin` 한다. 로컬 변경이 감지되면 덮어쓰지 말고 먼저 비교한다.
- 새 마키 사진은 `images/loop/`에 넣는다. 지원 이미지 파일을 커밋하고 푸시한 뒤 웹을 새로고침한다. MP4와 README 복사본은 현재 웹 사진 목록에 사용되지 않는다.
- `ahead/behind`가 함께 표시되거나 푸시가 거절되면 추가 편집을 멈추고 두 이력을 비교한다. `force push`는 사용하지 않는다.

## 이미지 업데이트 ("이미지 업데이트 해줘")

- 사진 폴더: `images/products/`(메인 상품), `images/loop/`(하단 마키), `images/archive/`(아카이브)
- 목록 파일: `photos.js` 의 `window.SITE_PHOTOS.products / loop / archive`
- 요청을 받으면:
  1. 세 폴더의 이미지 파일(jpg, jpeg, png, webp, gif, avif)을 확인한다.
  2. 폴더에 파일이 하나라도 있으면 해당 목록은 폴더 기준으로 맞춘다:
     새 파일은 파일명 순으로 추가(title/name은 파일명에서 생성), 폴더에서 사라진 파일은 목록에서 제거,
     이미 있는 항목의 title/name/price/순서는 유지. 폴더 안 파일이 생기면 Unsplash 예시 항목은 제거한다.
     단, `archive` 목록은 항상 파일 생성일 기준 최신 사진이 맨 위가 되도록 정렬한다.
  3. 파일 이름에 공백/한글/대문자가 있으면 사용자에게 알린다(동작은 하지만 권장하지 않음).
  4. 새 상품은 가격을 모르면 사용자에게 묻는다.
  5. README 동기화 → 커밋 → `git push origin main`.

## 배경음악

- 파일: `audio/bgm.mp3` (헤더 @eoekzm 옆 재생/정지 버튼으로 제어). 곡을 바꿀 때는 이 파일을 교체한다.

## 토큰 절약 (답변·입력·출력)

- 답변은 짧게: 결과와 사용자가 결정할 것만. 했던 설명 반복·전체 요약·장황한 표 금지. 마지막에 위험/미확인 사항 1~2줄.
- 파일은 필요한 부분만 읽는다: `grep -n` 으로 위치 찾고 `sed -n 'a,bp'` 로 범위만. `index.html`/`README.md` 전체 출력 금지.
- 명령 출력은 줄인다: `| tail -n 5`, `--short`, `-q` 사용. 이미지·오디오 등 바이너리 내용 출력 금지.
- 수정은 바뀌는 부분만(작은 패치). 파일 전체 재작성 금지.
- 확인용 재조회 최소화: 성공한 명령 결과를 다시 확인하지 않는다.
- 사용자 입력이 짧아도 된다: "이미지 업데이트 해줘", "커밋해줘" 같은 짧은 요청을 이 문서 규칙대로 처리한다.

## Ponytail

- `.agents/rules/ponytail.md` 규칙(최소 코드, 과잉 구현 금지)을 항상 따른다. 단 [LOCKED] 마키 규칙이 우선한다.
- 스킬: `/ponytail`, `/ponytail-review`, `/ponytail-audit`, `/ponytail-debt`, `/ponytail-gain`, `/ponytail-help` (`.agents/skills/`).
