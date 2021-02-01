### transform

-   하드웨어 가속을 이용하므로(===gpu 사용) 성능이 좋다. (native app 수준으로 부드럽게 움직인다.)
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
