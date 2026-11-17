/*
 * ============================================================
 *  사진 목록 (아카이브 + 하단 흐르는 사진)
 * ------------------------------------------------------------
 *  사진 바꾸는 법
 *   1. 사진 파일을 images 폴더에 넣는다.
 *      - 파일 이름은 영어 소문자/숫자/-(하이픈)만 권장 (예: 2026-summer-01.jpg)
 *      - 대소문자를 구분하므로 아래 file 값과 정확히 같아야 한다.
 *   2. 아래 목록에 한 줄씩 { file: "파일이름", title: "사진 이름" } 을 적는다.
 *      - 위에서부터 적은 순서대로 화면에 나온다.
 *      - 줄 끝의 쉼표(,)를 잊지 말 것.
 *   3. 저장 후 GitHub에 올리면 사이트에 반영된다.
 *
 *  file 에 https:// 로 시작하는 주소를 적으면 인터넷 이미지를 그대로 쓴다.
 * ============================================================
 */
window.ARCHIVE_PHOTOS = [
    { file: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop", title: "Nature & Greenery" },
    { file: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop", title: "Foggy Balcony View" },
    { file: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop", title: "Dense Forest Canopy" },
    { file: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop", title: "Minimal Texture" },
    { file: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop", title: "Courtyard Architecture" },
    { file: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop", title: "City Lights at Night" },
    { file: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop", title: "Mountain Canyon" },
    { file: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop", title: "Industrial Glow" },
    { file: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1000&auto=format&fit=crop", title: "Tree Textures" },
    { file: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1000&auto=format&fit=crop", title: "Winter Frost" },

    // 예시: images 폴더에 넣은 사진 (맨 앞의 // 를 지우면 사용됨)
    // { file: "my-photo-01.jpg", title: "My First Photo" },
];
