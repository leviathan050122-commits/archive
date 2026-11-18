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
