// 1. 숫자형
// 거듭제곱
console.log(3 ** 3);

// 나머지
console.log(7 % 3);

// 몫
const i = Math.trunc(7 / 3);
console.log(typeof i, i);

// 덧셈
console.log(2 + 8);

// 뺄셈
console.log(4 - 5);

// 곱셈
console.log(4 * 5);

// 나눗셈
console.log(10 / 3);

// 2. 문자열
console.log('안녕하세요~');

console.log("I said, \"I don't belong here\"");
console.log('I said, "I don\'t belong here"');
console.log("I said, \"I don\'t belong here\"");
console.log('I said, \"I don\'t belong here\""');
console.log(`I said "I don't belong here"`);
console.log('Hi' + 'How are you?');
console.log('2' + '3');

//example
console.log(`I read about the book called 'Harry Potter'.`);
console.log("My mother said \"You should not trust boys.\" and I believe her.\"");
console.log('The popular line I think in \'Harry Potter\' is \"Shut up, Malfoy\".');
console.log("The popular line I think in \'Harry Potter\' is \"Shut up, Malfoy\".");
console.log("The popular line I think in 'Harry Potter' is \"Shut up, Malfoy\".");


// 3. Boolean
console.log(3 > 2);
console.log(3 < 5);
console.log(5 >= 1);
console.log(6 <= 9);
console.log(2 === 2);


//AND &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//OR ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//NOT !
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

// Mix
console.log(3 < 1 && 'Me' !== 'Me');
console.log(23 !== 23 || 7 < 9);

let i = 9
console.log(i > 23 || !(i > 8));

//console.log(i > 23 || !(i > 8));
//console.log(9 > 23 || !(i > 8));
//console.log(false || !(i > 8));
//console.log(false || !(9 > 8));
//console.log(false || !true);
//console.log(false || false);
// = false