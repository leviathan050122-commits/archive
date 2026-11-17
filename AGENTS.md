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
