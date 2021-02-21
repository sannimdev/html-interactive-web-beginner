# setTimeout

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

# setInterval

-   setTimeout과 유사하지만 한 번만 실행되는 setTimeout과는 달리 일정 주기마다 계속 실행된다.
-   취소하기 위해서는 마찬가지로 `clearInterval`을 사용하면 된다.
