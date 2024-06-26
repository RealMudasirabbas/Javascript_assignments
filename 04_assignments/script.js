// // Display Numbers From 1 to 3
function displayNumbers() {
    let num = 1;
    while (num < 4) {
        console.log(num);
        num++;
    }
}

// // Display Numbers from 3 to 1 ( do while)
function displayNums() {
    let newNum = 3;
    do {
        console.log(newNum);
        newNum--;
    } while (newNum > 0);
}
// // Write a javascript function to print Even numbers in given array

let evenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 22, 23, 43];

function checkEvenWhile() {
    let i = 0;
    while (i < evenNums.length) {
        let num = evenNums[i];
        if (num % 2 == 0) {
            console.log("Even: " + num);
        }

        i++;
    }
}

// Write a javascript function to find the power of a number using while loop

function calculatePowerOfANum(number, power) {
    let num = 0;
    while (num < power) {
        let calculatedPower = number ** power;
        console.log(calculatedPower);
        num++;
        return calculatedPower;
    }
}

function findDigitsOfANumber(number) {
    let num = 0;
    const convertedNum = number.toString();
    let totalDigits = 0;
    while (num < convertedNum.length) {
        totalDigits++;
        num++;
    }
    // console.log("This number has number of digits", totalDigits);
    console.log("This number has number of digits", totalDigits);
    return totalDigits;
}

findDigitsOfANumber(89444);

// Write a javascript function to find the no of digits in a number using while loop.

// function findDigitsOfANumber(number) {
//     let num = 0;
//     while (num < number) {
//         let convertedNum = number.toString();
//         let totalDigits = convertedNum.length;
//         console.log("This number has number of digits", totalDigits);
//         num++;
//         return totalDigits
//     }
// }

// findDigitsOfANumber(8977777)

// for (let a = 0; a < 3; a++) {
//     console.log("Parent loop count: ", a);

//     for (let a = 0; a < 3; a++) {
//         console.log("Child loop count: ", a);
//     }
// }

const person = {
    name: "Mudasir",
    age: 19,
    education: "Fs.c pre-medical",
    [Symbol.iterator]() {
        const obj = Object.entries(this);
        let index = 0;

        return {
            next() {
                if (index < obj.length) {
                    const [key, value] = obj[index++];
                    return { value: { key, value }, done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

for (let prop of person) {
    console.log(prop);
}
