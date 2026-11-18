<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>eoekzmarchive</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        :root { color-scheme: light; }
        * { box-sizing: border-box; }
        html, body { margin: 0; min-height: 100%; }
        body { font-family: 'Inter', sans-serif; background: #fff; color: #111; }
        /* [LOCKED] Marquee motion is driven by the MARQUEE ENGINE script (requestAnimationFrame). Do not add CSS animation/transition here. */
        .marquee-track { display:flex; width:max-content; will-change:transform; transform:translate3d(0,0,0); }
        .marquee-group { display:flex; flex:0 0 auto; align-items:flex-end; gap:1rem; padding-right:1rem; box-sizing:border-box; }
        .marquee-photo { display:block; width:auto; height:var(--marquee-photo-height, 110px); max-width:min(24vw, 260px); object-fit:contain; background:#fff; border:1px solid #111; flex:0 0 auto; }
        .marquee-photo.is-portrait { --marquee-photo-height:150px; }
        .marquee-photo.is-landscape, .marquee-photo.is-square { --marquee-photo-height:100px; }
        .archive-grid { width:min(100%, 776px); margin:0 auto; display:grid; grid-template-columns:repeat(2,minmax(0,380px)); justify-content:center; align-items:end; column-gap:16px; row-gap:24px; }
        .archive-grid button { align-self:end; min-width:0; width:100%; display:flex; flex-direction:column; justify-content:flex-end; }
        .archive-photo { width:100%; height:auto; aspect-ratio:auto; object-fit:contain; display:block; cursor:pointer; background:#fff; }
        .archive-caption { display:block; min-height:1.25rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .lightbox-fade { animation:fadeIn .2s ease-out forwards; }
        @keyframes fadeIn { from { opacity:0; transform:scale(.98); } to { opacity:1; transform:scale(1); } }

        /* HOME: one-viewport composition, tuned separately for desktop and phone. */
        body { min-height:100svh; }
        #siteHeader { height:58px; flex:0 0 58px; padding:0 clamp(16px,3vw,40px); }
        /* Keep the four header links floating at the top while Archive scrolls. */
        #siteHeader { position:sticky; top:0; z-index:40; background:rgba(255,255,255,.88); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); border:0; outline:0; box-shadow:none; }

        #homeView { min-height:calc(100svh - 58px); height:calc(100svh - 58px); display:flex; flex-direction:column; justify-content:space-between; overflow:hidden; }
        #homeView > main { flex:1 1 auto; min-height:0; display:flex; align-items:center; justify-content:center; padding:clamp(8px,1.8vh,22px) clamp(16px,3vw,40px); }
        #productGrid { width:min(100%,1040px); height:100%; max-height:calc(100svh - 270px); display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); align-items:center; justify-items:center; gap:clamp(12px,3vw,48px); }
        .product-card { width:100%; height:100%; min-height:0; display:flex; align-items:center; justify-content:center; }
        .product-frame { width:100%; height:100%; max-height: min(39vw, calc(100svh - 290px)); aspect-ratio:1 / 1; display:flex; align-items:center; justify-content:center; padding:clamp(8px,1.5vw,24px); overflow:hidden; }
        .product-frame img { width:100%; height:100%; object-fit:contain; }
        #marqueeSection { flex:0 0 auto; position:relative; top:-16px; padding:clamp(6px,1vh,12px) 0; max-height:min(24vh,210px); }
        #marqueeSection .marquee-group { align-items:flex-end; }
        #marqueeSection .marquee-photo { max-width:min(24vw,260px); }
        #archiveView { min-height:calc(100svh - 58px); }
        #archiveView > div:first-child { width:min(100%, 776px); margin-left:auto; margin-right:auto; }
        @media (min-width:768px) {
            #productGrid { max-height:calc(100svh - 275px); }
            #marqueeSection .marquee-photo { max-width:min(24vw,260px); }
        }
        @media (max-width:767px) {
            #siteHeader { height:52px; flex-basis:52px; padding:0 16px; font-size:12px; }
            #siteHeader nav { gap:14px; }
            #homeView { min-height:calc(100svh - 52px); height:calc(100svh - 52px); }
            #homeView > main { padding:8px 12px 4px; }
            #productGrid { width:100%; max-height:none; grid-template-columns:repeat(2,minmax(0,1fr)); gap:6px; }
            .product-frame { max-height: min(48vw, calc(100svh - 220px)); padding:4px; }
            #marqueeSection { top:-8px; padding:6px 0 max(6px, env(safe-area-inset-bottom)); max-height:22vh; }
            #marqueeSection .marquee-group { gap:10px; padding-right:10px; }
            #marqueeSection .marquee-photo { max-width:42vw; }
            #marqueeSection .marquee-photo.is-portrait { --marquee-photo-height:clamp(90px, 16.5vh, 120px); }
            #marqueeSection .marquee-photo.is-landscape, #marqueeSection .marquee-photo.is-square { --marquee-photo-height:clamp(60px, 11vh, 80px); }
            #archiveView { padding:22px 14px 36px; }
            #archiveView > div:first-child { width:100%; }
            .archive-grid { width:100%; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:10px; row-gap:24px; }
            #lightbox { padding: max(16px,env(safe-area-inset-top)) 12px max(16px,env(safe-area-inset-bottom)); }
            #lightboxImg { max-height:72svh; }
        }
        @media (max-height:650px) and (min-width:768px) {
            #siteHeader { height:48px; flex-basis:48px; }
            #homeView { min-height:calc(100svh - 48px); height:calc(100svh - 48px); }
            #productGrid { max-height:calc(100svh - 180px); }
            #marqueeSection { max-height:22vh; }
            #marqueeSection .marquee-photo.is-portrait { --marquee-photo-height:clamp(110px, 19.53vh, 150px); }
            #marqueeSection .marquee-photo.is-landscape, #marqueeSection .marquee-photo.is-square { --marquee-photo-height:clamp(73px, 13.02vh, 100px); }
            .product-detail { inset:48px 16px 16px; }
        }

        /* Dedicated archive is a separate view, not an anchor below the home page. */
        #archiveView { display:block; }
        #archiveView.hidden { display:none; }
        #homeView.hidden { display:none; }

        /* Standard shopping-cart drawer */
        .cart-overlay { position:fixed; inset:0; z-index:80; background:rgba(20,20,20,.24); opacity:0; visibility:hidden; backdrop-filter:blur(5px); -webkit-backdrop-filter:blur(5px); transition:opacity .28s ease, visibility .28s ease; }
        .cart-overlay.is-open { opacity:1; visibility:visible; }
        .cart-drawer { position:fixed; z-index:81; top:0; right:0; width:min(440px,92vw); height:100dvh; background:#fff; box-shadow:-12px 0 40px rgba(0,0,0,.10); transform:translateX(102%); transition:transform .32s cubic-bezier(.2,.75,.25,1); display:flex; flex-direction:column; padding:clamp(20px,3vw,32px); padding-top:max(clamp(20px,3vw,32px),env(safe-area-inset-top)); padding-bottom:max(clamp(20px,3vw,32px),env(safe-area-inset-bottom)); }
        .cart-drawer.is-open { transform:translateX(0); }
        .cart-drawer-header { display:flex; align-items:center; justify-content:center; padding-bottom:22px; border-bottom:1px solid #ededed; }
        .cart-close { width:100%; min-height:34px; display:flex; align-items:center; justify-content:center; border:0; border-radius:0; background:transparent; padding:0; font:inherit; font-size:18px; font-weight:400; line-height:1; cursor:pointer; }
        .cart-contents { flex:1; min-height:0; overflow:auto; }
        .cart-empty { min-height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:30px 8px; }
        .cart-continue { border:1px solid #171717; background:#171717; color:#fff; padding:12px 20px; font-size:11px; letter-spacing:.04em; cursor:pointer; transition:opacity .2s; }
        .cart-continue:hover { opacity:.8; }
        .cart-drawer-footer { border-top:1px solid #ededed; padding-top:18px; }
        .cart-subtotal { display:flex; justify-content:space-between; align-items:center; font-size:13px; }
        .cart-subtotal strong { font-size:14px; font-weight:500; }
        .cart-checkout { width:100%; border:0; padding:15px; background:#171717; color:#fff; font-size:11px; letter-spacing:.08em; cursor:pointer; }
        .cart-checkout:disabled { background:#e7e7e7; color:#999; cursor:not-allowed; }
        .cart-items { padding:18px 0; }
        .cart-item { display:grid; grid-template-columns:76px 1fr auto; gap:13px; padding:14px 0; border-bottom:1px solid #eee; }
        .cart-item img { width:76px; height:92px; object-fit:contain; background:transparent; display:block; }
        .cart-item-title { font-size:12px; font-weight:500; margin:2px 0 7px; }
        .cart-item-price { font-size:11px; color:#777; }
        .cart-item-controls { display:flex; align-items:center; gap:10px; margin-top:12px; }
        .cart-item-controls button { border:0; background:none; padding:2px 5px; color:#555; cursor:pointer; }
        .cart-item-remove { align-self:start; border:0; background:none; color:#999; font-size:18.7px; line-height:1; cursor:pointer; }
        @media (max-width:767px) { .cart-drawer { width:min(420px,94vw); } }


        /* Background music toggle (single icon: play <-> pause) */
        .bgm-toggle { width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; border:0; background:none; padding:0; color:inherit; cursor:pointer; transition:opacity .2s; }
        .bgm-toggle:hover { opacity:.6; }
        .bgm-toggle svg { width:14px; height:14px; }
        .bgm-toggle .bgm-icon-pause { display:none; }
        .bgm-toggle.is-playing .bgm-icon-play { display:none; }
        .bgm-toggle.is-playing .bgm-icon-pause { display:block; }

        /* Archive photos shown at 85% of the original layout size */
        .archive-grid { width:min(100%, 660px); grid-template-columns:repeat(2,minmax(0,323px)); }
        #archiveView > div:first-child { width:min(100%, 660px); }
        @media (max-width:767px) {
            .archive-grid { width:85%; }
            #archiveView > div:first-child { width:85%; }
        }

        /* Bottom toast notification (e.g. "item added") */
        .toast { position:fixed; left:50%; bottom:max(24px, env(safe-area-inset-bottom)); z-index:90; transform:translate(-50%, 16px); background:#111; color:#fff; padding:12px 22px; font-size:12px; letter-spacing:.04em; opacity:0; visibility:hidden; pointer-events:none; transition:opacity .25s ease, transform .25s ease, visibility .25s ease; }
        .toast.is-visible { opacity:1; visibility:visible; transform:translate(-50%, 0); }

        /* Minimal product detail pages */
        .product-card { border:0; padding:0; background:transparent; }
        .product-detail { position:fixed; inset:58px 16px 16px; z-index:70; background:#fff; border:1px solid #222; padding:clamp(18px,3vw,42px); overflow:auto; }
        .product-detail.hidden { display:none; }
        .detail-back { border:0; background:none; padding:0; font:inherit; font-size:12px; cursor:pointer; }
        .detail-layout { min-height:calc(100% - 28px); display:grid; grid-template-columns:minmax(0,1.25fr) minmax(260px,.75fr); align-items:center; gap:clamp(24px,6vw,90px); max-width:1200px; margin:0 auto; }
        .detail-image-wrap { width:100%; height:min(68vh,720px); display:flex; align-items:center; justify-content:center; }
        .detail-image-wrap img { width:100%; height:100%; object-fit:contain; }
        .detail-info { max-width:360px; }
        .detail-info h1 { font-size:clamp(30px,4vw,52px); line-height:1.08; letter-spacing:-.055em; font-weight:400; margin:0 0 12px; }
        .detail-price { font-size:16px; margin:0 0 46px; }
        .detail-add { width:100%; max-width:180px; height:48px; border:0; background:#050505; color:#fff; font-size:27px; line-height:1; cursor:pointer; }
        .detail-add:hover { background:#292929; }
        .detail-add:disabled { opacity:.4; cursor:not-allowed; }
        @media (max-width:767px) {
            .product-detail { inset:52px 8px 8px; padding:18px; }
            .detail-layout { grid-template-columns:1fr; grid-template-rows:minmax(0,1fr) auto; gap:12px; }
            .detail-image-wrap { height:min(52svh,480px); }
            .detail-info { max-width:none; padding-bottom:12px; }
            .detail-info h1 { font-size:30px; }
            .detail-price { margin-bottom:20px; }
            .detail-add { max-width:none; }
        }

    </style>
</head>
<body class="min-h-screen flex flex-col justify-between bg-white text-neutral-900 select-none">

    <!-- Header -->
    <header id="siteHeader" class="w-full flex justify-between items-center text-sm">
        <div class="flex items-center gap-2">
            <a href="https://www.instagram.com/eoekzm/" target="_blank" rel="noopener noreferrer" class="font-medium tracking-tight hover:underline underline-offset-4">@eoekzm</a>
            <button type="button" id="bgmToggle" class="bgm-toggle" aria-label="Play music" aria-pressed="false">
                <svg class="bgm-icon-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>
                <svg class="bgm-icon-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/></svg>
            </button>
            <audio id="bgm" src="audio/bgm.mp3" loop preload="auto"></audio>
        </div>
        <nav class="flex items-center gap-6" aria-label="Main navigation">
            <a href="#home" id="homeLink" class="hover:opacity-75 transition">Home</a>
            <a href="#archive" id="archiveLink" class="hover:opacity-75 transition">Archive</a>
            <button type="button" id="cartOpen" class="hover:opacity-75 transition" aria-haspopup="dialog" aria-controls="cartDrawer">Cart (<span id="cartCount">0</span>)</button>
        </nav>
    </header>

    <div id="homeView">
    <!-- Main Content Area: Product Showcase (T-shirts) -->
    <main>
        <div id="productGrid">
            <!-- Products are rendered from photos.js (images/products/) -->
        </div>
    </main>

    <!-- Bottom Marquee Gallery -->
    <section id="marqueeSection" class="w-full overflow-hidden marquee-container relative" aria-label="Moving photo gallery">
        <div class="marquee-track cursor-pointer" id="marqueeTrack">
            <!-- Photos will be dynamically populated via JavaScript to ensure seamless infinite looping -->
        </div>
    </section>
    </div>

    <!-- Dedicated Archive Gallery -->
    <main id="archiveView" class="hidden w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-sm font-medium tracking-wide">Archive</h1>
            <span class="text-xs text-neutral-400" id="archivePhotoCount"></span>
        </div>
        <div id="archiveGrid" class="archive-grid"></div>
    </main>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm hidden flex flex-col justify-between p-6 md:p-10" role="dialog" aria-modal="true" aria-label="Photo viewer">
        <!-- Top bar with Close button -->
        <div class="w-full flex justify-between items-center max-w-7xl mx-auto">
            <span class="text-xs text-neutral-400 font-mono" id="imageCounter"></span>
            <button type="button" id="closeLightbox" class="text-xs uppercase tracking-widest font-medium px-3 py-1.5 border border-neutral-200 rounded hover:bg-neutral-100 transition">
                Close ×
            </button>
        </div>

        <!-- Center Image and Nav Arrows -->
        <div class="relative flex-grow flex items-center justify-center max-w-5xl mx-auto w-full my-4">
            <!-- Left Arrow -->
            <button type="button" id="prevBtn" aria-label="Previous photo" class="absolute left-0 md:-left-12 z-10 p-3 text-neutral-800 hover:scale-125 transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
            </button>

            <!-- Lightbox Image -->
            <div class="lightbox-fade max-h-[75vh] flex items-center justify-center">
                <img id="lightboxImg" src="" alt="Archive Fullscreen" class="max-h-[75vh] max-w-full object-contain rounded shadow-sm">
            </div>

            <!-- Right Arrow -->
            <button type="button" id="nextBtn" aria-label="Next photo" class="absolute right-0 md:-right-12 z-10 p-3 text-neutral-800 hover:scale-125 transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
            </button>
        </div>

        <!-- Bottom spacer for balance -->
        <div class="w-full h-6"></div>
    </div>

    <!-- Product detail view for the two test products -->
    <div id="productDetail" class="product-detail hidden" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
        <button type="button" class="detail-back" onclick="closeProductDetail()">← Back</button>
        <div class="detail-layout">
            <div class="detail-image-wrap"><img id="detailImage" src="" alt=""></div>
            <div class="detail-info">
                <h1 id="detailTitle"></h1>
                <p id="detailPrice" class="detail-price"></p>
                <button type="button" id="detailAdd" class="detail-add" aria-label="Add to cart">+</button>
            </div>
        </div>
    </div>

    <!-- Cart drawer: right-side panel with blurred backdrop -->
    <div id="cartOverlay" class="cart-overlay" aria-hidden="true"></div>
    <aside id="cartDrawer" class="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart" aria-hidden="true" inert>
        <div class="cart-drawer-header">
            <button type="button" id="cartClose" class="cart-close" aria-label="Close cart">x</button>
        </div>
        <div id="cartContents" class="cart-contents">
            <div id="cartEmpty" class="cart-empty">
                <p class="text-sm mb-5">Your cart is empty</p>
                <button type="button" id="cartContinue" class="cart-continue">Continue shopping</button>
            </div>
            <div id="cartItems" class="cart-items hidden"></div>
        </div>
        <div class="cart-drawer-footer">
            <div class="cart-subtotal"><span>Subtotal</span><strong id="cartSubtotal">0원</strong></div>
            <button type="button" id="cartCheckout" class="cart-checkout" disabled>Checkout</button>
        </div>
    </aside>

    <!-- Toast notification -->
    <div id="toast" class="toast" role="status" aria-live="polite"></div>

    <!--
        ============================================================
        [LOCKED] MARQUEE ENGINE — 수정 금지 (DO NOT MODIFY)
        ------------------------------------------------------------
        고정 요구사항:
          1. 사진들이 끊김 없이 무한 루프로 왼쪽으로 흐른다.
          2. 마우스를 올리면 "그 위치 그대로" 즉시 멈춘다.
          3. 마우스를 떼면 멈춘 위치에서 그대로 이어서 움직인다.
        구현 원칙:
          - 움직임은 오직 이 스크립트(requestAnimationFrame)가 담당한다.
            CSS animation / transition / :hover 로 마키를 제어하지 말 것.
          - 위치(offset)는 JS 변수로 보관하므로 리렌더/리사이즈/이미지 로드
            후에도 위치가 유지된다.
          - 다른 코드는 window.marqueeLoop.mount(groupHTML) 만 호출한다.
        ============================================================
    -->
    <script>
        (function () {
            'use strict';
            const SPEED_PX_PER_SEC = 45;   // 흐르는 속도
            const MAX_FRAME_SEC = 0.05;    // 탭 전환 후 순간이동 방지

            const section = document.getElementById('marqueeSection');
            const track = document.getElementById('marqueeTrack');

            let offset = 0;      // 현재 왼쪽으로 이동한 거리(px)
            let period = 0;      // 그룹 1개의 실제 폭(=루프 주기, px)
            let paused = false;  // 마우스가 올라가 있는지
            let lastTime = null;

            // 그룹 간 실제 간격으로 루프 주기를 잰다(gap/padding 변경에도 안전).
            function measure() {
                const groups = track.children;
                period = groups.length >= 2 ? groups[1].offsetLeft - groups[0].offsetLeft : 0;
                if (period > 0) offset = ((offset % period) + period) % period;
            }

            // 화면 폭 + 1주기를 덮을 만큼 그룹을 복제한다.
            function fill() {
                const first = track.firstElementChild;
                if (!first) return;
                const groupWidth = first.getBoundingClientRect().width;
                const viewWidth = section.clientWidth;
                const need = groupWidth < 50 || viewWidth === 0
                    ? 2
                    : Math.max(2, Math.ceil(viewWidth / groupWidth) + 1);
                while (track.children.length < need) {
                    const clone = first.cloneNode(true);
                    clone.setAttribute('aria-hidden', 'true');
                    track.appendChild(clone);
                }
                while (track.children.length > need) track.lastElementChild.remove();
                measure();
            }

            // 이미지 로드/화면 크기 변화 시 다시 계산(위치는 유지).
            const resizeObserver = new ResizeObserver(fill);
            window.addEventListener('resize', fill);

            // 마우스가 올라가면 그 자리에서 정지, 벗어나면 그 자리에서 재개.
            section.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') paused = true; });
            section.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') paused = false; });

            function frame(now) {
                if (lastTime === null) lastTime = now;
                const dt = Math.min((now - lastTime) / 1000, MAX_FRAME_SEC);
                lastTime = now;
                if (!paused && period > 0) {
                    offset += SPEED_PX_PER_SEC * dt;
                    if (offset >= period) offset -= period;
                }
                track.style.transform = 'translate3d(' + (-offset) + 'px,0,0)';
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);

            window.marqueeLoop = {
                // groupHTML: 사진 한 세트의 HTML. 복제/루프는 엔진이 처리한다.
                mount(groupHTML) {
                    resizeObserver.disconnect();
                    track.innerHTML = '';
                    const group = document.createElement('div');
                    group.className = 'marquee-group';
                    group.innerHTML = groupHTML;
                    track.appendChild(group);
                    resizeObserver.observe(group);
                    resizeObserver.observe(section);
                    fill();
                }
            };
        })();
    </script>

    <!-- Background music: tries to autoplay; if the browser blocks it, starts on the first click/key.
         The toggle button next to @eoekzm plays/pauses and swaps its icon. -->
    <script>
        (function () {
            const audio = document.getElementById('bgm');
            const btn = document.getElementById('bgmToggle');
            let userPaused = false;
            function sync() {
                const playing = !audio.paused;
                btn.classList.toggle('is-playing', playing);
                btn.setAttribute('aria-pressed', String(playing));
                btn.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
            }
            function tryPlay() { return audio.play().catch(() => {}); }
            function startOnFirstInteraction(e) {
                if (btn.contains(e.target)) return;   // the button handles itself
                removeFirstInteraction();
                if (!userPaused && audio.paused) tryPlay();
            }
            function removeFirstInteraction() {
                document.removeEventListener('pointerdown', startOnFirstInteraction);
                document.removeEventListener('keydown', startOnFirstInteraction);
            }
            btn.addEventListener('click', () => {
                removeFirstInteraction();
                if (audio.paused) { userPaused = false; tryPlay(); }
                else { userPaused = true; audio.pause(); }
            });
            audio.addEventListener('play', sync);
            audio.addEventListener('pause', sync);
            document.addEventListener('pointerdown', startOnFirstInteraction);
            document.addEventListener('keydown', startOnFirstInteraction);
            tryPlay();
            sync();
        })();
    </script>

    <!-- Product names and prices, plus fallback photo lists, live in photos.js. -->
    <script src="photos.js"></script>

    <!-- JavaScript Logic -->
    <script>
        // photos.js keeps product metadata and fallback lists; live photos are discovered from GitHub folders.
        const SITE = window.SITE_PHOTOS || {};
        function resolveImage(file, folder) {
            if (!file) return '';
            return /^https?:\/\//.test(file) ? file : 'images/' + folder + '/' + encodeURIComponent(file);
        }
        function toPhotoList(list, folder) {
            return (list || []).map((item, i) => ({ id: i + 1, file: item.file, url: resolveImage(item.file, folder), title: item.title || '' }));
        }
        let photos = toPhotoList(SITE.archive, 'archive');     // Archive page
        let loopPhotos = toPhotoList(SITE.loop, 'loop');        // Bottom marquee
        const products = {};                                    // Main page products
        (SITE.products || []).forEach((item, i) => {
            const id = item.id || 'product-' + (i + 1);
            products[id] = { id, name: item.name || 'Item', price: Number(item.price) || 0, image: resolveImage(item.file, 'products') };
        });
        let lightboxList = photos;   // list currently shown in the lightbox

        let currentIndex = 0;
        const track = document.getElementById('marqueeTrack');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const imageCounter = document.getElementById('imageCounter');
        const closeLightbox = document.getElementById('closeLightbox');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const homeView = document.getElementById('homeView');
        const archiveView = document.getElementById('archiveView');
        const archiveGrid = document.getElementById('archiveGrid');
        const archivePhotoCount = document.getElementById('archivePhotoCount');
        const archiveLink = document.getElementById('archiveLink');
        const homeLink = document.getElementById('homeLink');

        // Cart drawer controls. Product data can be connected when prices/SKUs are supplied.
        const cartOpen = document.getElementById('cartOpen');
        const cartClose = document.getElementById('cartClose');
        const cartOverlay = document.getElementById('cartOverlay');
        const cartDrawer = document.getElementById('cartDrawer');
        const cartItemsEl = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        const cartContinue = document.getElementById('cartContinue');
        const cartCheckout = document.getElementById('cartCheckout');
        const cart = [];

        const productDetail = document.getElementById('productDetail');
        const detailImage = document.getElementById('detailImage');
        const detailTitle = document.getElementById('detailTitle');
        const detailPrice = document.getElementById('detailPrice');
        const detailAdd = document.getElementById('detailAdd');

        // Element to return focus to when each overlay closes.
        let cartReturnFocus = null;
        let detailReturnFocus = null;
        let lightboxReturnFocus = null;

        // ---- Shared overlay helpers ----
        function isCartOpen() { return cartDrawer.classList.contains('is-open'); }
        function isDetailOpen() { return !productDetail.classList.contains('hidden'); }
        function isLightboxOpen() { return !lightbox.classList.contains('hidden'); }

        // Lock page scroll while any overlay (cart, product detail, lightbox) is open.
        function updateScrollLock() {
            document.body.style.overflow = (isCartOpen() || isDetailOpen() || isLightboxOpen()) ? 'hidden' : '';
        }

        // Topmost open overlay, in z-index order: cart (81) > detail (70) > lightbox (50).
        function getTopOverlay() {
            if (isCartOpen()) return cartDrawer;
            if (isDetailOpen()) return productDetail;
            if (isLightboxOpen()) return lightbox;
            return null;
        }

        function restoreFocus(el) {
            if (el && document.contains(el) && typeof el.focus === 'function') el.focus();
        }

        // Keep Tab / Shift+Tab inside the topmost overlay.
        function trapFocus(event, container) {
            const focusables = Array.from(container.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'))
                .filter(el => el.getClientRects().length > 0);
            if (!focusables.length) { event.preventDefault(); return; }
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (!container.contains(document.activeElement)) { event.preventDefault(); first.focus(); return; }
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }

        // ---- Toast ----
        const toast = document.getElementById('toast');
        let toastTimer = null;
        function showToast(message) {
            toast.textContent = message;
            toast.classList.add('is-visible');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 1800);
        }

        // ---- Cart ----
        function openCart() {
            cartReturnFocus = document.activeElement;
            cartOverlay.classList.add('is-open');
            cartDrawer.classList.add('is-open');
            cartOverlay.setAttribute('aria-hidden', 'false');
            cartDrawer.setAttribute('aria-hidden', 'false');
            cartDrawer.inert = false;
            updateScrollLock();
            cartClose.focus();
        }
        function closeCart() {
            cartOverlay.classList.remove('is-open');
            cartDrawer.classList.remove('is-open');
            cartOverlay.setAttribute('aria-hidden', 'true');
            cartDrawer.setAttribute('aria-hidden', 'true');
            cartDrawer.inert = true;
            updateScrollLock();
            restoreFocus(cartReturnFocus || cartOpen);
        }
        function formatWon(value) { return new Intl.NumberFormat('ko-KR').format(value) + '원'; }
        function renderCart() {
            const quantity = cart.reduce((total, item) => total + item.quantity, 0);
            const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
            document.getElementById('cartCount').textContent = quantity;
            document.getElementById('cartSubtotal').textContent = formatWon(subtotal);
            cartEmpty.classList.toggle('hidden', cart.length > 0);
            cartItemsEl.classList.toggle('hidden', cart.length === 0);
            cartCheckout.disabled = cart.length === 0;
            cartItemsEl.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <p class="cart-item-title">${item.name}</p>
                        <p class="cart-item-price">${formatWon(item.price)}</p>
                        <div class="cart-item-controls">
                            <button type="button" aria-label="Decrease quantity" onclick="changeCartQuantity(${index},-1)">−</button>
                            <span>${item.quantity}</span>
                            <button type="button" aria-label="Increase quantity" onclick="changeCartQuantity(${index},1)">+</button>
                        </div>
                    </div>
                    <button type="button" class="cart-item-remove" onclick="removeCartItem(${index})" aria-label="Remove item">x</button>
                </div>`).join('');
        }
        // Adds a product to the cart without opening the drawer. Returns true on success.
        window.addToCart = function(product) {
            if (!product || !product.id || product.price == null || !Number.isFinite(Number(product.price))) return false;
            const existing = cart.find(item => item.id === product.id);
            if (existing) existing.quantity += 1;
            else cart.push({ id: product.id, name: product.name || 'Item', price: Number(product.price), image: product.image || '', quantity: 1 });
            renderCart();
            return true;
        };
        window.changeCartQuantity = function(index, delta) {
            if (!cart[index]) return;
            cart[index].quantity += delta;
            if (cart[index].quantity <= 0) cart.splice(index, 1);
            renderCart();
        };
        window.removeCartItem = function(index) { cart.splice(index, 1); renderCart(); };
        cartOpen.addEventListener('click', openCart);
        cartClose.addEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);
        cartContinue.addEventListener('click', closeCart);
        // Payment is not connected yet; let the user know instead of doing nothing.
        cartCheckout.addEventListener('click', () => showToast('Checkout is coming soon'));
        renderCart();

        // ---- Product detail ----
        let selectedProduct = null;
        window.openProductDetail = function(id) {
            selectedProduct = products[id];
            if (!selectedProduct) return;
            detailReturnFocus = document.activeElement;
            detailImage.src = selectedProduct.image;
            detailImage.alt = selectedProduct.name;
            detailTitle.textContent = selectedProduct.name;
            detailPrice.textContent = selectedProduct.price == null ? '가격 문의' : formatWon(selectedProduct.price);
            detailAdd.disabled = selectedProduct.price == null;
            productDetail.classList.remove('hidden');
            updateScrollLock();
            productDetail.querySelector('.detail-back').focus();
        };
        window.closeProductDetail = function(returnFocus = true) {
            if (!isDetailOpen()) return;
            productDetail.classList.add('hidden');
            updateScrollLock();
            if (returnFocus) restoreFocus(detailReturnFocus);
        };
        // "+" adds the item and shows a toast; the user stays on the product page.
        detailAdd.addEventListener('click', () => {
            if (!selectedProduct) return;
            if (window.addToCart(selectedProduct)) showToast('item added');
        });

        // ---- Views ----
        function closeAllPageOverlays() {
            closeProductDetail(false);
            if (isLightboxOpen()) closeLightboxModal(false);
        }

        function showHome() {
            closeAllPageOverlays();
            archiveView.classList.add('hidden');
            homeView.classList.remove('hidden');
            document.body.classList.remove('archive-mode');
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        function showArchive() {
            // Switch views completely: the home marquee is hidden, not scrolled past.
            closeAllPageOverlays();
            homeView.classList.add('hidden');
            archiveView.classList.remove('hidden');
            document.body.classList.add('archive-mode');
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        archiveLink.addEventListener('click', (event) => {
            event.preventDefault();
            showArchive();
            history.pushState({ view: 'archive' }, '', '#archive');
        });

        homeLink.addEventListener('click', (event) => {
            event.preventDefault();
            showHome();
            history.pushState({ view: 'home' }, '', '#home');
        });

        // Keep each image's original aspect ratio while sizing by orientation.
        function classifyMarqueePhoto(img) {
            const ratio = img.naturalWidth / img.naturalHeight;
            img.classList.remove('is-portrait', 'is-landscape', 'is-square');
            if (ratio < 0.95) img.classList.add('is-portrait');
            else if (ratio > 1.05) img.classList.add('is-landscape');
            else img.classList.add('is-square');
        }

        // Render main-page product cards from images/products/.
        function renderProducts() {
            document.getElementById('productGrid').innerHTML = Object.values(products).map(p => `
                <button type="button" class="product-card cursor-pointer" onclick="openProductDetail('${p.id}')" aria-label="View ${p.name}">
                    <div class="product-frame bg-white rounded-lg transition">
                        <img src="${p.image}" alt="${p.name}" class="object-contain">
                    </div>
                </button>
            `).join('');
        }

        // Populate marquee: build ONE group of photos and hand it to the locked marquee engine,
        // which handles duplication, looping and hover-pause.
        function renderMarquee() {
            const groupHTML = loopPhotos.map((photo, idx) => `
                <div class="flex-shrink-0 rounded bg-white cursor-pointer group relative" onclick="openLightbox(${idx}, 'loop')">
                    <img src="${photo.url}" alt="${photo.title}" class="marquee-photo" loading="eager" onload="classifyMarqueePhoto(this)">
                </div>
            `).join('');
            window.marqueeLoop.mount(groupHTML);
        }

        // GitHub Pages cannot list folders itself, so discover all published photos from the repository tree.
        function updatePhotoList(current, files) {
            const available = new Map(files.map(file => [file.name, file]));
            const saved = current.filter(photo => available.has(photo.file)).map(photo => ({ ...photo, url: available.get(photo.file).url }));
            const savedNames = new Set(saved.map(photo => photo.file));
            const added = files.filter(file => !savedNames.has(file.name)).sort((a, b) => a.name.localeCompare(b.name)).map((file, index) => ({
                id: saved.length + index + 1,
                file: file.name,
                url: file.url,
                title: file.name.replace(/\.[^.]+$/, '')
            }));
            return [...added, ...saved];
        }

        function updateProducts(files) {
            const available = new Map(files.map(file => [file.name, file]));
            const saved = (SITE.products || []).filter(item => available.has(item.file));
            const savedNames = new Set(saved.map(item => item.file));
            const added = files.filter(file => !savedNames.has(file.name)).sort((a, b) => a.name.localeCompare(b.name)).map(file => ({ file: file.name }));
            Object.keys(products).forEach(id => delete products[id]);
            [...saved, ...added].forEach(item => {
                const image = available.get(item.file);
                const stem = item.file.replace(/\.[^.]+$/, '');
                const id = item.id || 'product-' + encodeURIComponent(stem);
                products[id] = {
                    id,
                    name: item.name || stem,
                    price: item.price == null ? null : Number(item.price) || 0,
                    image: image.url
                };
            });
        }

        async function loadSitePhotos() {
            try {
                const response = await fetch('https://api.github.com/repos/leviathan050122-commits/archive/git/trees/main?recursive=1');
                if (!response.ok) throw new Error('Could not load photo folders');
                const { tree, truncated } = await response.json();
                if (truncated) throw new Error('Photo folder listing was truncated');
                const listImages = folder => tree.filter(item => item.type === 'blob' && item.path.startsWith(`images/${folder}/`) && /\.(jpe?g|png|webp|gif|avif)$/i.test(item.path)).map(item => {
                    const name = item.path.slice(`images/${folder}/`.length);
                    const encodedPath = item.path.split('/').map(encodeURIComponent).join('/');
                    return { name, url: `https://raw.githubusercontent.com/leviathan050122-commits/archive/main/${encodedPath}` };
                });
                photos = updatePhotoList(photos, listImages('archive'));
                loopPhotos = listImages('loop').sort((a, b) => a.name.localeCompare(b.name)).map((file, index) => ({ id: index + 1, file: file.name, url: file.url, title: file.name.replace(/\.[^.]+$/, '') }));
                updateProducts(listImages('products'));
            } catch (error) {
                console.warn('Using the saved photo lists:', error);
            }
            renderProducts();
            renderMarquee();
            renderArchiveGrid();
        }

        // Render the full archive as a two-column grid.
        function renderArchiveGrid() {
            archivePhotoCount.textContent = `${photos.length} photos`;
            archiveGrid.innerHTML = photos.map((photo, idx) => `
                <button type="button" class="block text-left" onclick="openLightbox(${idx}, 'archive')" aria-label="Open ${photo.title}">
                    <img src="${photo.url}" alt="${photo.title}" class="archive-photo" loading="lazy">
                    <span class="archive-caption mt-2 text-xs text-neutral-500">${photo.title}</span>
                </button>
            `).join('');
        }

        // ---- Lightbox ----
        window.openLightbox = function(index, listName = 'archive') {
            lightboxList = listName === 'loop' ? loopPhotos : photos;
            if (!lightboxList[index]) return;
            lightboxReturnFocus = document.activeElement;
            currentIndex = index;
            updateLightboxContent();
            lightbox.classList.remove('hidden');
            updateScrollLock();
            closeLightbox.focus();
        }

        // Update Lightbox Image and Counter
        function updateLightboxContent() {
            lightboxImg.src = lightboxList[currentIndex].url;
            lightboxImg.alt = lightboxList[currentIndex].title;
            imageCounter.textContent = `${currentIndex + 1} / ${lightboxList.length}`;
        }

        function showPrevPhoto() {
            currentIndex = (currentIndex - 1 + lightboxList.length) % lightboxList.length;
            updateLightboxContent();
        }
        function showNextPhoto() {
            currentIndex = (currentIndex + 1) % lightboxList.length;
            updateLightboxContent();
        }

        // Close Lightbox
        function closeLightboxModal(returnFocus = true) {
            lightbox.classList.add('hidden');
            updateScrollLock();
            if (returnFocus) restoreFocus(lightboxReturnFocus);
        }

        closeLightbox.addEventListener('click', () => closeLightboxModal());

        // Navigation in Lightbox
        prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrevPhoto(); });
        nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNextPhoto(); });

        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightboxModal();
        });

        // Single keyboard handler: only the topmost overlay reacts.
        document.addEventListener('keydown', (e) => {
            const top = getTopOverlay();
            if (!top) return;
            if (e.key === 'Escape') {
                e.preventDefault();
                if (top === cartDrawer) closeCart();
                else if (top === productDetail) closeProductDetail();
                else closeLightboxModal();
                return;
            }
            if (e.key === 'Tab') { trapFocus(e, top); return; }
            if (top === lightbox && e.key === 'ArrowLeft') showPrevPhoto();
            if (top === lightbox && e.key === 'ArrowRight') showNextPhoto();
        });

        // Initialize
        function syncViewFromUrl() {
            if (window.location.hash === '#archive') showArchive();
            else showHome();
        }
        window.addEventListener('hashchange', syncViewFromUrl);
        window.addEventListener('popstate', syncViewFromUrl);

        renderProducts();
        renderMarquee();
        renderArchiveGrid();
        loadSitePhotos();
        syncViewFromUrl();
    </script>
</body>
</html>
