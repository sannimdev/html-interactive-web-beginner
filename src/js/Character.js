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
    this.init(); // 초기화함수 실행하기
}

Character.prototype = {
    constructor: Character,
    init: function () {
        window.addEventListener('scroll', () => {
            //😁 this가 전역객체를 가리키면 안 된다는 것을 유의하자.
            this.mainElem.classList.add('running');
        });
    },
};
