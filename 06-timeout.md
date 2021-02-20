# 타임아웃(timeout)

-   일련의 작업을 지연하고자 할 때 사용한다.

```js
function sample() {
    console.log('sample!');
}

let timeId = setTimeout(sample, 1000); // 해당 setTimeout의 번호를 반환한다.
console.log(timeId);
clearTimeout(timeId); // 취소하기
```

-   1000ms 후 첫 번째 매개변수로 넘긴 함수를 실행
