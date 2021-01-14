console.log('Hello Edeline');
// console.log(3000*2);
//state
//let a;
//a = 3000;
let a = 3000;
let b = 4000;
let c = 5000;

console.log(a * 2);
console.log(b * 2 + c * 2);
console.log(c * 2 + a);

// let practice

let coffee = 10;
let milk = 150;
let oatmilk = 160;
let syrup = 30;
let whippedCream = 70;

// test
console.log(coffee);
console.log(coffee + milk);
console.log(coffee + oatmilk);
console.log(coffee + milk + syrup);
console.log(coffee + milk + syrup + whippedCream); // 모카(휘핑 추가) 칼로리

//function practice
function sayhello() {
    console.log('안녕하세요');
    console.log('Hello');
    console.log('');
};
//call function
sayhello();

// function chorus 
function chorus() {
    console.log('무궁화 삼천리 화려 강산');
    console.log('대한 사람 대한으로 길이 보전하세');
}

// Korean National anthem 
console.log('1절');
console.log('동해 물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세');
chorus();

console.log('2절');
console.log('남산 위에 저 소나무 철갑을 두른 듯');
console.log('바람서리 불변함은 우리 기상일세');
chorus();

console.log('3절');
console.log('가을 하늘 공활한데 높고 구름 없이');
console.log('밝은 달은 우리 가슴 일편단심일세');
chorus();

console.log('4절');
console.log('이 기상과 이 맘으로 충성을 다하여');
console.log('괴로우나 즐거우나 나라 사랑하세');
chorus();

// parameter
function hello(name) {
    console.log('Hello ' + name + '!');
};
hello('Edeline');
hello('Kim');
hello('Patty');

function square(i) {
    console.log(i + i);
};

square(2);
square(3);
square(4);


// teraToGiga
function teraToGiga(i) {
    console.log(i + "TB는");
    console.log(i * 1024 + "GB 입니다.");
}
//teraToMega
function teraToMega(i) {
    console.log(i + "TB는");
    console.log(i * 1024 * 1024 + "MB 입니다.");
}

// TB->GB 
teraToGiga(3);
// TB->MB
teraToMega(3);

//sum 2 parameters
function sum(i, ii) {
    console.log(i + ii);
};
sum(16, 7);
sum(10, 20);
sum(96, 3)

//Who are you

function whoamI(name, dob, nationality) {
    console.log("What is your name?");
    console.log("I am " + name);
    console.log("What is your date of birth?");
    console.log("It's " + dob);
    console.log("Where are you come from");
    console.log("I am " + nationality);
};

whoamI('Edeline', '18th of May 1996',
    'Korean');