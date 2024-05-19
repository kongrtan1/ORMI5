// 문자열 병합
// console.log('Hello' + 'wolrd');
// console.log('3' + 3); // number -> string
// console.log(typeof ('3' + 3)); // number -> string
// console.log('3' + 5 + 8);
// console.log(3 + 5 + '8');

// let x = 10;
// let y = 20;
// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);
// console.log(9 % 2);

// let number = prompt('숫자를 입력 해주세요!');
// if (number % 2 == 1) {
//   alert('홀수 입니다!');
// } else {
//   alert('짝수 입니다!');
// }

// let result = x + y;
// console.log('x: ', x);
// console.log('y: ', y);
// console.log('result: ', result);

// let a = 30;
// let b = '30';
// console.log(a !== b);
// console.log(a != b);

// let x = 10;
// let y = 20;
// // x = x + y;
// x += y;
// console.log(x);
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   // sum = sum + 1;
//   sum += i;
//   console.log(`${i} 번째 sum=${sum}`);
// }

// let x = false;
// let y = true;
// console.log(x && y); // 모두 true 일때 true, 그 외 false
// console.log(x || y); // 둘 중 하나라도 true 이면 true, 나머지 false
// console.log(!x); // 둘 중 하나라도 true 이면 true, 나머지 false

let number = 7;
let message = number % 2 === 1 ? '홀수입니다.' : '짝수입니다.';
// if (number % 2 === 1) {
//   message = '홀수입니다.';
// } else {
//   message = '짝수입니다.';
// }
console.log(message);
