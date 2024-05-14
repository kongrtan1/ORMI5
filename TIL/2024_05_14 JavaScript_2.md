# 함수

```jsx
function 함수이름(parameter1, parameter2...) { // 함수의 선언
    // 실행코드...
    return 반환값
}

함수이름(argument1, argument2...) // 함수의 호출
```

| 용어      | 번역                 | 의미                             |
| --------- | -------------------- | -------------------------------- |
| Parameter | 매개변수             | 함수와 메서드에 입력 변수 이름   |
| Argument  | 전달인자, 인자, 인수 | 함수와 메서드에 실제 입력되는 값 |

### 함수의 활용 - 함수의 아규먼트에 따른 반환값

함수에 전달되는 아규먼트 즉 **인자**는 매개변수보다 적거나 많아도 에러가 발생하지 않습니다.

```jsx
function 함수1(a, b, c) {
  return a + b + c;
}

// 콘솔창의 기능이에요. 마지막 라인에 한하여 console.log()를 찍지 않아도 return값을 console창에 출력해줍니다.
함수1(10, 20, 30);
함수1(10, 20, 50);

// 다음 실행 값은?
console.log(함수1(10, 20, 30));
console.log(함수1(10, 20, 50));

// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40); // Error를 뿜지 않습니다. 60

// 필요 이하의 아규먼트를 넣었을 때
함수1(10, 20);

/*
function 함수1 (a, b, c){
    return a + b + String(c)
}
함수1(10, 20) // '30undefined'
*/
```

## 함수를 선언하는 여러가지 방법

1. 함수 선언문과 함수 표현식

```jsx
// 함수 선언문
function sum(x, y) {
  return x + y;
}

// 함수 표현식
let sumXY = function (x, y) {
  return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));
```

<aside>
💡 **구문(Statement)과 표현식(Expression)**
**구문**은 자바스크립트 명령문으로, 어떤 작업을 수행하기 위한 코드 블록이라 할 수 있습니다. 예를 들어 우리가 뒤에서 배울 if문, switch문, for문 등이 여기에 포함됩니다.
**표현식**은 값으로 평가될 수 있는것을 의미합니다. 숫자나 문자열 같은 값 자체나 5 < 3 와 같은 비교 연산자등이 여기에 해당합니다. 위에서 함수표현식이라 함은 함수를 값 처럼 사용하기 때문에 그렇게 표현합니다.

</aside>

1. 화살표함수

함수는 선언 시 function 키워드를 화살표 기호로 대체하여 표현할 수 있습니다. 화살표 함수는 선언 시 제목을 정할 수 없기 때문에 표현식으로 사용해야 합니다.

```jsx
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
  return x + y;
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y;

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = (x) => x + 10;

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = (x) => x + 10;

let 결과 = 함수3(2);

console.log(결과);
```

<aside>
🤔 이런 방식의 익명 함수 표현식을 다른 언어에서는 람다식이라고 부른답니다!

</aside>

1. 즉시실행함수 (IIFE, Immediately Invoked Function Expression)

함수를 정의함과 동시에 즉시 실행하는 방법을 말합니다.

```jsx
(function () {
  console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();

(function () {
  document.querySelector('.btn').addEventListener('click', function () {
    console.log('click!');
  });
})();
```

또한 즉시실행함수는 코드를 캡슐화하여 모듈화된 코드를 작성할 수 있게 합니다. 이 내용은 함수 심화 과정에서 자세히 다루도록 하겠습니다.

---

## 1. 조건문

조건문은 조건에 따라 실행되는 코드를 말합니다. 조건식이 참(`Truthy`)인 값이나 거짓(`Falsy`)인 값을 반환하는지에 따라 코드를 수행할지 말지 판단합니다.

### 1.1 if문

조건에 따라 실행되는 조건문 중 if문은 가장 많이 사용되는 문법입니다.

아래는 기본적인 if문의 예시입니다.

```jsx
/**
if (조건식) {
  // 조건식이 참일 때 실행될 코드
}
*/

let test = 5;
if (test < 10) {
  //codes
}
```

- **if-else 문**

if문은 조건이 참일 때만 실행되기 때문에, 그 밖의 상황인 조건이 거짓일 때 실행할 코드가 필요한 경우도 필요합니다. 이때 사용하는 것이 else문입니다.

```jsx
let x = 3;
let y = 7;

if (x == y) {
  console.log('if문으로 실행되었습니다.');
} else {
  console.log('else문으로 실행되었습니다.');
}
```

### 1.2 **삼항연산자 (Conditional ternary operator)**

```jsx
조건식 ? 조건식이 참일 때 실행될 코드 : 조건식이 거짓일 때 실행될 코드
```

```jsx
let item = true ? 100 : 200;
console.log(item);
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e8f11927-b70c-4524-9227-a3efac08e7aa/02ebf516-6ab3-4f12-a054-17d448e2fcc5/Untitled.png)

### 1.3 s**witch문**

if-else 조건문 외에도, switch 문을 사용하여 여러 조건에 대한 실행 코드를 작성할 수 있습니다. switch case 문은 하나의 변수를 여러 값과 비교하여 실행 코드를 결정하는 조건문입니다.

아래는 switch case 문의 기본 구조입니다.

```jsx
switch (표현식) {
  case 값1:
    // 값1에 대한 실행 코드
    break;
  case 값2:
    // 값2에 대한 실행 코드
    break;
  ...
  default:
    // 모든 case에 해당하지 않을 때 실행될 코드
    break;
}
```

---

## 2. 반복문

```jsx
for (초기화식; 조건식; 증감식) {
  실행문;
}
```

<aside>
💡 `for문` 구성요소 선택적 사용시 주의사항

- 초기화식, 조건식, 증감식을 구분하는 사이의 세미콜론 `;`은 생략이 불가합니다.
- 따라서 모든 구성 요소 생략시, 세미콜론은 반드시 2개 모두 포함되어야 합니다.
</aside>

### **2.2 while 문**

```jsx
while (조건식) {
  // 조건식이 참일 때 실행될 코드
}

let num = 0;

while (num < 11) {
  document.write(num, '<br>');
  num += 1;
}
```

- **do-while 반복문**

```jsx
let num = 0;

do {
  document.write(num, '<br>');
  num += 1;
} while (num < 11);
```

### **2.3 반복문의 break & continue**

```jsx
// 예시 1
let num = 0;
while (num < 11) {
  num++;
  document.write(num, '<br>');
  if (num > 5) {
    break;
  }
}

// 예시 2
let i = 0;
while (i < 100) {
  i++;
  if (i === 14) {
    console.log(i + '살 부터 중학생이 됩니다.');
    break;
  }
}
console.log('중학교 입학을 축하합니다');
```
