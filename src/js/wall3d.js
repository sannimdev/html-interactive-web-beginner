(function () {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const selectCharacterElem = document.querySelector('.select-character');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = { x: 0, y: 0 };
    let maxScrollValue;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('resize', function () {
        // 창의 크기가 바뀌면(특히 세로) 다시 스크롤의 영역의 크기를 계산해야 함.
        resizeHandler();
    });

    stageElem.addEventListener('click', function (e) {
        new Character({
            xPos: (e.clientX / window.innerWidth) * 100,
            speed: Math.random() * 0.354 + 0.2,
        });
    });

    window.addEventListener('mousemove', function (e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

        stageElem.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`;
    });

    window.addEventListener(
        'scroll',
        function () {
            /*
                🧙‍♂️ Scroll의 범위
                    -  스크롤이 남은 영역 전체 문서의 길이(height of body) - 스크롤 영역(화면에 보이는 범위)
                        - document.body.offsetHeight - window.innerHeight 
                    - 비율 구하기
                    - pageYOffset / maxScrollValue(스크롤이 남은 영역) 
                      Window 인터페이스의 pageYOffset 읽기 전용 속성은 scrollY의 다른 이름으로, 
                      문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환합니다.
                      https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset
            */

            // console.log(pageYOffset / maxScrollValue);
            const scrollPer = pageYOffset / maxScrollValue;
            const zMove = scrollPer * 980 - 490;
            houseElem.style.transform = `translateZ(${zMove}vw)`;

            // progress-bar 제어하기
            barElem.style.width = `${scrollPer * 100}%`;
        },
        false
    );

    selectCharacterElem.addEventListener('click', function (e) {
        const value = e.target.getAttribute('data-char');
        document.body.setAttribute('data-char', value);
    });

    resizeHandler();
})();
