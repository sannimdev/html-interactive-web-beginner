# DOM SCRIPT (Dom Object Model)

## DOM에서 element 뽑아보기

```js
const 일분이 = document.querySelector('.a');
const 일분이들 = document.querySelectorAll('.ilbuni');
const 둘째 = document.querySelector('.ilbuni:nth-child(2)');
```

-   `querySelector`는 document에서 만나는 첫 번째 element만 반환한다. (IE8부터 지원)
-   `querySelectorAll`: document에서 해당하는 클래스 이름을 가진 elements를 배열로 반환한다.

> TMI: 과거에는 querySelector보다는 getElementById나 getElementsByClassName을 이용했다.

## 커스텀 속성 (`data-`) 사용하기

-   필요에 따라 임의로 추가할 수 있음(HTML5)

```js
const char = document.querySelector('.characters');
char.setAttribute('data-id', 123);
char.getAttribute('data-id'); // 123
```

## element를 추가/제거하기

```js
const pElem = document.createElement('p');
pElem.innerHTML = '<a href="#">안녕?</a>';
const charactersElem = document.querySelector('.characters');
charactersElem.appendChild(pElem); // charactersElemd의 막내 자식으로(마지막) 붙이기.
charactersElem.removeChild(document.querySelector('.b'));

const ilbuni = document.querySelector('.ilbuni');
ilbuni.classList.add('special'); // 클래스를 하나 더 추가하기
ilbuni.className = 'special'; // 현재 클래스 정의를 덮어씌운다. (special 클래스 속성 하나만 가짐)
ilbuni.classList.remove('ilbuni');
ilbuni.classList.toggle('ilbuni'); // 없으면 적용하고 있으면 제거하고
```
