'use strict';

function getGCD(num1, num2) {
    if(num1 <= 0 || num2 <= 0) throw new Error('Number less than 1');
    num1 = Math.round(num1);
    num2 = Math.round(num2);
    let remainder = num1 % num2;
    if(remainder === 0) return num2;
    return getGCD(num2, remainder);
}

const  number1 = 5;
const  number2 = 12;
const result = getGCD(number1, number2);
console.log(result)

