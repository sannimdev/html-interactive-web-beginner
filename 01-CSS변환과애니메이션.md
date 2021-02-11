### transform

-   transform의 translate3d의 경우 하드웨어 가속(GPU 사용)을 사용하는데 성능이 좋다. (6.2. 3개의 문(2) - 4분경)
    -   그런데 이는 브라우저 버전 및 특성별로 다르기 때문에 정확하게 단정짓기는 어렵다.
    -   그런데 translate3d를 이용하면 거의 하드웨어 가속을 사용하므로 애플 웹사이트에서는 이 속성을 지정한다고 한다.
-   CSS3를 지원하지 않는 브라우저는 해당 강의에서 배제하고 진행한다.

```css
.box:hover {
    /* 
        브라우저가 다시 그려내는 과정(duo metry: reflow)에서는
        해당 객체만 그려내면 된다. (밀어내는 객체가 없음)
    */
    /* 키우기, 기울이기 transform: scale(2) rotate(15deg); */
    /* 비틀기 transform: skewY(-30deg); */
    /* transform: translate(30px, 10px); x축, y축 */
    /* transform: translateX(30px); */
    /* transform: translateY(30px); */
    transform: scale(1.5);
    /* 기준점 바꾸기 */
    /* background-position에서 사용하던 속성 값을 그대로 사용할 수 있다. */
    /* top, bototm, left, right, % 다 가능하다 */
    transform-origin: 100% 100%;
    transform: rotate(30deg);
}
```

### animation

#### 속성 정리

-   animation-name: 애니메이션 이름
-   animation-duration: 지속 시간
-   animation-iteration-count: 반복 횟수 (infinite/무한)
-   animation-directive: alternative (왔다갔다)
-   animation-play-state
    -   running: 자동 재생
    -   paused: 일시 정지
-   animation-fill-mode
    -   forwards: 애니메이션을 재생한 후 최종 시점에서 정지

##### 보충설명

> background-position에서 음수(-) 부호를 붙이는 이유는 다음과 같다.
> div가 있는 위치를 기준으로 배경화면의 위치가 가로 0, 세로 0으로 고정되어 있다면 배경화면은 왼쪽으로 움직여야 한다.
> div 자체가 움직이는 것이 아닌 배경화면을 기준으로 배경화면이 div를 기준으로 움직이는 것이라는 것을 감안하면 왜 음수 부호가 붙었는지 이해할 수 있다.
