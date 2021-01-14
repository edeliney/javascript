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

//bmi calculator
function bmiCalculator(cm, kg) {
    console.log('your bmi is ' + kg / (cm * cm / 10000));
};
//run bmi calculator
// 저체중 : 18.5 미만
// 정상체중 : 18.5 이상 23 미만
// 과체중 : 23이상 25미만
// 경도비만 : 25이상 30미만
// 중도비만 : 30이상 35미만
// 고도비만 : 35이상
bmiCalculator(158, 45);
bmiCalculator(158, 58);
bmiCalculator(158, 60);
bmiCalculator(158, 72);
bmiCalculator(158, 80);

//return example
// interest calculator
function interestCalculator(money, term, rate) {
    return money * term * rate / 100;
};

// 조건 입력 테스트
let myMoney = 1000000; // 맡긴 금액 (원)
let saveTerm = 2; // 맡기는 기간 (년)
let interestRate = 2.5; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');