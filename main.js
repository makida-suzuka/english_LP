window.addEventListener('load', function(){
    const ham = document.querySelector('#hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = document.querySelector('#navi'); //js-navの要素を取得し、変数navに格納
    
    ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
        ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
        console.log(ham , nav);
        
    });

})

