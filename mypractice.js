age = 25;
if (age >= 18) {
    console.log('Eligible for DL');

} else {
    console.log('Not Eligible for DL');

}

// wap to print grade on the basis of marks
hindi = 90;
eng = 50;
maths = 15;
total = hindi + eng + maths;
if (total >= 270) {
    console.log('A');

}
else if (total >= 210) {
    console.log('B');

}
else if (total >= 150) {
    console.log('C');

}
else {
    console.log('Fail');

}
// same with another method
let marks = 90;
if (marks >= 90) {
    console.log('A');

}
else if (marks >= 70) {
    console.log('B');

}
else if (marks >= 30) {
    console.log('C');

} else {
    console.log('Fail');

}

// WAP to print grade on the basis of marks
marks = 60;
if (marks >= 90 && marks <= 100) {
    console.log('Grade A');
} else if (marks >= 70 && marks < 90) {
    console.log('Grade B');
} else if (marks >= 50 && marks < 70) {
    console.log('Grade C');
} else if (marks >= 0 && marks < 50) {
    console.log('Fail');
} else {
    console.log('Invalid marks');
}





// wap to check if number ia divisible by both 7 and 11
num = 21;
if (num % 7 == 0 && num % 11 == 0) {
    console.log('This number is divisible by both');

} else {
    console.log('Not divisible by both');

}
// typeof practise
p = true;
console.log(typeof p);

console.log(1 + '1');
console.log('2' / '2' * '8');
console.log(2 == '2');
console.log();

// wap to print fabonacci series
let a = 0;
let b = 1;
let n = 10;
console.log('Fibonacci Series');
for (let i = 0; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next
}

// wap to reverse a number










