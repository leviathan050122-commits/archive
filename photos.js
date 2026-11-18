/*
 * ============================================================
 *  사진 목록
 * ------------------------------------------------------------
 *  폴더 구분
 *   images/products/  → 메인 화면 상품 사진   (아래 products)
 *   images/loop/      → 하단 흐르는 사진(루프) (아래 loop)
 *   images/archive/   → Archive 페이지 사진   (아래 archive)
 *
 *  사용법
 *   - 각 폴더에 사진을 넣고 "이미지 업데이트 해줘"라고 하면
 *     이 파일 목록을 폴더 내용에 맞춰 갱신하고 GitHub에 올린다.
 *   - 사진 이름(title), 상품 이름(name), 가격(price)은 여기서 직접 바꾸면 된다.
 *   - 위에서부터 적힌 순서대로 화면에 나온다.
 *   - file 은 해당 폴더 안의 파일 이름. https:// 주소를 적으면 인터넷 이미지를 쓴다.
 *   - 파일 이름은 영어 소문자/숫자/-(하이픈) 권장. 대소문자를 구분한다.
 * ============================================================
 */
window.SITE_PHOTOS = {

    // 메인 화면 상품 (images/products/)
    products: [
        { id: "damaged", file: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=88", name: "Damaged Beyond Repair", price: 55000 },
        { id: "fear",    file: "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=1200&q=88", name: "Fear and Glory",        price: 55000 },
    ],

    // 하단 흐르는 사진 (images/loop/)
    loop: [
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
    ],

    // Archive 페이지 사진 (images/archive/)
    archive: [
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
    ],
};
