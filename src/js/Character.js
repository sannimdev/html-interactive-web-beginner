function Character(info) {
    // 캐릭터 만들기
    this.mainElem = document.createElement('div');
    this.mainElem.classList.add('character');
    this.mainElem.innerHTML = `
    <div class="character-face-con character-head">
        <div class="character-face character-head-face face-front"></div>
        <div class="character-face character-head-face face-back"></div>
    </div>

    <div class="character-face-con character-torso">
        <div class="character-face character-torso-face face-front"></div>
        <div class="character-face character-torso-face face-back"></div>
    </div>

    <div class="character-face-con character-arm-right character-arm">
        <div class="character-face character-arm-face face-front"></div>
        <div class="character-face character-arm-face face-back"></div>
    </div>

    <div class="character-face-con character-arm-left character-arm">
        <div class="character-face character-arm-face face-front"></div>
        <div class="character-face character-arm-face face-back"></div>
    </div>

    <div class="character-face-con character-leg-right">
        <div class="character-face character-leg-face face-front"></div>
        <div class="character-face character-leg-face face-back"></div>
    </div>

    <div class="character-face-con character-leg-left">
        <div class="character-face character-leg-face face-front"></div>
        <div class="character-face character-leg-face face-back"></div>
    </div>`;
    // 캐릭터 삽입하기
    document.querySelector('.stage').appendChild(this.mainElem);
    // 캐릭터 위치 조정하기
    // console.log(info.xPos); // xPos가 넘어온다.
    this.mainElem.style.left = `${info.xPos}%`;
    //스크롤 여부
    this.scrollState = false;
    // 바로 전 스크롤 위치
    this.lastScrollTop = 0;
    this.xPos = info.xPos;
    this.speed = 0.3;
    this.direction;
    // 좌우 이동 여부
    this.runningState = false;
    this.init(); // 초기화함수 실행하기
}

Character.prototype = {
    constructor: Character,
    init: function () {
        window.addEventListener('scroll', () => {
            //😁 this가 전역객체를 가리키면 안 된다는 것을 유의하자.
            clearTimeout(this.scrollState);

            if (!this.scrollState) {
                this.mainElem.classList.add('running');
                console.log('running 클래스 붙었음');
            }

            this.scrollState = setTimeout(() => {
                this.scrollState = false;
                this.mainElem.classList.remove('running');
            }, 500);

            // 💡 이전 스크롤 위치와 현재 스크롤 위치 비교하기
            // console.log('이전', this.lastScrollTop);
            // console.log('현재', pageYOffset);
            if (this.lastScrollTop > pageYOffset) {
                // 이전 스크롤 위치가 크다면 (후진)
                this.mainElem.setAttribute('data-direction', 'backward');
            } else {
                // 현재 스크롤 위치가 크다면 (전진)
                this.mainElem.setAttribute('data-direction', 'forward');
            }

            this.lastScrollTop = pageYOffset;
        });

        window.addEventListener('keydown', (e) => {
            if (this.runningState) return;

            if (e.keyCode === 37) {
                this.direction = 'left';
                this.mainElem.setAttribute('data-direction', 'left');
                this.mainElem.classList.add('running');
                this.run();
            } else if (e.keyCode === 39) {
                this.direction = 'right';
                this.mainElem.setAttribute('data-direction', 'right');
                this.mainElem.classList.add('running');
                this.run();
            }
            this.mainElem.style.left = `${this.xPos}%`;
        });

        window.addEventListener('keyup', (e) => {
            this.mainElem.classList.remove('running');
            cancelAnimationFrame(this.rafId);
            this.runningState = false;
        });
    },
    run: function () {
        if (this.direction === 'left') {
            this.xPos -= this.speed;
        } else if (this.direction === 'right') {
            this.xPos += this.speed;
        }

        // 캐릭터 범위 제한하기
        if (this.xPos < 2) {
            this.xPos = 2;
        } else if (this.xPos > 88) {
            this.xPos = 88;
        }

        this.mainElem.style.left = `${this.xPos}%`;
        this.rafId = requestAnimationFrame(this.run.bind(this));
        this.runningState = true;
    },
};
