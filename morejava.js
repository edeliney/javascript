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

let p = 9
console.log(p > 23 || !(p > 8));

//console.log(i > 23 || !(i > 8));
//console.log(9 > 23 || !(i > 8));
//console.log(false || !(i > 8));
//console.log(false || !(9 > 8));
//console.log(false || !true);
//console.log(false || false);
// = false

//typeof
console.log(typeof 23);
console.log(typeof 23.0);
console.log(typeof '23');
console.log(typeof "23");
console.log(typeof `23`);
console.log(typeof 'Hi');
console.log(typeof false);

let hi = "Hi";

function sayHi() {
    console.log('Hi');
};

console.log(typeof hi);
console.log(typeof sayHi);

console.log(typeof 'Hi' + '!'); //string!
console.log(typeof 23 - 0); // Nan --> not a number
console.log(typeof('Hi' + '!'));
console.log(typeof(23 - 0));

//precedence

//type conversion

//String, Number, Boolean
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

//number -> string
let l = 23;
console.log(l);
console.log(String(l));
console.log(typeof l);
console.log(typeof String(l));

//boolean -> string
let ll = true;
console.log(ll);
console.log(String(ll));
console.log(typeof ll);
console.log(typeof String(ll));

//string -> boolean
let a = 'string';
console.log(a);
console.log(Boolean(a));
console.log(typeof a);
console.log(typeof Boolean(a));

//number -> boolean
let aa = 23;
console.log(aa);
console.log(Boolean(aa));
console.log(typeof aa);
console.log(typeof Boolean(aa));


console.log(Boolean("false"));
console.log(Boolean(6 % 2));
console.log(Boolean(NaN) || Boolean('0'));
console.log(Boolean(typeof false));
// '',0,Nan = false

// +. -, *, /, %, **
console.log(23 + '0');
console.log(23 + 0);
console.log(23 - true);
console.log(23 * false);
console.log(23 / '1');
console.log('23' ** true);
console.log(23 & 'one');