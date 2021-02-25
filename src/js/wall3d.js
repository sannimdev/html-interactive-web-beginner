(function () {
    const houseElem = document.querySelector('.house');
    let maxScrollValue = document.body.offsetHeight - window.innerHeight;

    window.addEventListener(
        'scroll',
        function () {
            /* 
                Window 인터페이스의 pageYOffset 읽기 전용 속성은 scrollY의 다른 이름으로, 
                문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환합니다.
                https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset
            */
            // console.log(pageYOffset / maxScrollValue);
            const zMove = (pageYOffset / maxScrollValue) * 980 - 490;
            houseElem.style.transform = `translateZ(${zMove}vw)`;
        },
        false
    );
})();

/*
    🧙‍♂️ Scroll의 범위
        -  스크롤이 남은 영역 전체 문서의 길이(height of body) - 스크롤 영역(화면에 보이는 범위)
            - document.body.offsetHeight - window.innerHeight 
        - 비율 구하기
            - pageYOffset / maxScrollValue(스크롤이 남은 영역) 
*/