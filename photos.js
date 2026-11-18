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
        { id: "img-4303",   file: "IMG_4303.jpeg",  name: "IMG_4303",   price: 40200000 },
        { id: "product-02", file: "product-02.png", name: "Product 02", price: 30000 },
    ],

    // 하단 흐르는 사진 (images/loop/)
    loop: [
        { file: "DSC00526.JPG", title: "DSC00526" },
        { file: "DSC00532.JPG", title: "DSC00532" },
        { file: "DSC00543.JPG", title: "DSC00543" },
        { file: "DSC00546.JPG", title: "DSC00546" },
        { file: "DSC00568.JPG", title: "DSC00568" },
        { file: "DSC00577.JPG", title: "DSC00577" },
        { file: "DSC00586.JPG", title: "DSC00586" },
        { file: "DSC00602.JPG", title: "DSC00602" },
        { file: "DSC00609.JPG", title: "DSC00609" },
        { file: "IMG_4106.jpeg", title: "IMG_4106" },
        { file: "IMG_4123.jpeg", title: "IMG_4123" },
        { file: "IMG_4169.jpeg", title: "IMG_4169" },
        { file: "IMG_4170.jpeg", title: "IMG_4170" },
        { file: "IMG_4171.jpeg", title: "IMG_4171" },
        { file: "IMG_4191.jpeg", title: "IMG_4191" },
        { file: "IMG_4224.jpeg", title: "IMG_4224" },
    ],

    // Archive 페이지 사진 (images/archive/) — 생성일 기준 최신 사진이 맨 위
    archive: [
        { file: "DSC00608.JPG", title: "DSC00608" },
        { file: "DSC00602.JPG", title: "DSC00602" },
        { file: "DSC00600.JPG", title: "DSC00600" },
        { file: "DSC00577.JPG", title: "DSC00577" },
        { file: "IMG_4170.jpeg", title: "IMG_4170" },
        { file: "DSC00560.JPG", title: "DSC00560" },
        { file: "DSC00509.JPG", title: "DSC00509" },
        { file: "IMG_3938.jpeg", title: "IMG_3938" },
        { file: "IMG_3834.jpeg", title: "IMG_3834" },
        { file: "DSC00273.JPG", title: "DSC00273" },
        { file: "DSC00256.JPG", title: "DSC00256" },
        { file: "IMG_3535.jpeg", title: "IMG_3535" },
        { file: "IMG_3391.JPG", title: "IMG_3391" },
        { file: "IMG_3315.jpeg", title: "IMG_3315" },
        { file: "DSC00103.JPG", title: "DSC00103" },
        { file: "DSC00028.JPG", title: "DSC00028" },
        { file: "IMG_2176.JPG", title: "IMG_2176" },
        { file: "IMG_1892.JPG", title: "IMG_1892" },
        { file: "IMG_1567.JPG", title: "IMG_1567" },
    ],
};
