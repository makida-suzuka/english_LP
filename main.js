window.addEventListener('load', function(){
    const ham = document.querySelector('#hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = document.querySelector('#navi'); //js-navの要素を取得し、変数navに格納
    
    ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
        ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
        console.log(ham , nav);
        
    });

    /*左右スライドアニメーション */
    window.addEventListener('scroll', function(){
        // スクロール量を取得
        const scroll = window.scrollY;
        // 画面の高さを取得
        const windowHeight = window.innerHeight; 
        // すべてのreasonコンテンツを取得
        const redContents = document.querySelectorAll('.red-contents');
        
        redContents.forEach(function (content) {
        const distanceToBox = content.getBoundingClientRect().top + window.scrollY;

        if (scroll + windowHeight > distanceToBox + 100) { // 少し余裕を持たせる
            content.classList.add('slide');
        }
    });

    /* ズームインアニメーション */
    window.addEventListener('scroll', function () {
    const zoomItems = document.querySelectorAll('.student-voice');
    const windowHeight = window.innerHeight;
    const scroll = window.scrollY;

    zoomItems.forEach(function (item) {
        const offset = item.getBoundingClientRect().top + scroll;
        if (scroll + windowHeight > offset + 100) {
            item.classList.add('zoom-in');
        }
    });
});

       
});
    
})

/* 参考URL */
/*  https://takechi-web.com/javascript-scroll-fadein/ */