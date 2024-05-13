// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function evenOddNumbers() {
    for (let num = 0; num <= 15; num++) {
        if (num % 2 === 0) {
            console.log('It is an even number: ', num);
        } else {
            console.log('It is an odd number: ', num);
        }
    }
}

// evenOddNumbers()

// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

function fizzBuzz() {
    for (let int = 0; int <= 100; int++) {
        if (int % 3 === 0 && int % 5 === 0) {
            console.log('FizzBuzz');
        } else if (int % 3 === 0) {
            console.log('Fizz');
        } else if (int % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(int);
        }
    }
}

// fizzBuzz()

// Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

function armsStrongNumbers(num) {
    if (!num < 100) {
        let convertedNum = num.toString();
        let firstNum = convertedNum[0];
        let reconvertedNum1 = parseInt(firstNum);
        let integerNum1 = Math.pow(reconvertedNum1, 3);

        let secondNum = convertedNum[1];
        let reconvertedNum2 = parseInt(secondNum);
        let integerNum2 = Math.pow(reconvertedNum2, 3);

        let thirdNum = convertedNum[2];
        let reconvertedNum3 = parseInt(thirdNum);
        let integerNum3 = Math.pow(reconvertedNum3, 3);

        let sumOfThreeDigits = integerNum1 + integerNum2 + integerNum3;

        if (num === sumOfThreeDigits) {
            console.log('It is an Armstrong Number: ', num);
        } else {
            console.log('It is not an Armstrong Number: ', num);
        }
    }
}

// armsStrongNumbers(371)

// Write a JavaScript program to sum 3 and 5 multiples under 1000.

function sumOfMultiplesOfThreeAndFive() {
    let result = 0;
    for (let int = 1; int <= 1000; int++) {
        if (int % 3 === 0 || int % 5 === 0) {
            result += int;
        }
    }

    console.log("The sum of multiples of 3 and 5 is:",result);
}

// sumOfMultiplesOfThreeAndFive()

//  Calculate the sum of all the numbers in the following array
const numbersArray = [1, 13, 22, 123, 49];

function sumOfAllNumbers(arr) {
    let result = 0;
    for (let int = 0; int < arr.length; int++) {
        let sum = numbersArray[int];
        result += sum;
    }
    console.log("The sum of all numbers in an Array:",result);
}

// sumOfAllNumbers(numbersArray)

// Write a program that determines whether a given number is positive or negative.

function positiveOrNegativeNumber(num) {
    if (num < 0) {
        console.log('It is a Negative Number: ', num);
    } else {
        console.log('It is a Positive Number: ', num);
    }
}

// positiveOrNegativeNumber(5)
// positiveOrNegativeNumber(-5)

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

function calculateTheTicketPrice(age) {
    const price = [5, 10, 20, 15];
    if (age < 12) {
        console.log('The Ticket Price is: ', price[0]);
    } else if (age > 12 && age < 18) {
        console.log('The Ticket Price is: ', price[1]);
    } else if (age > 18 && age < 60) {
        console.log('The Ticket Price is: ', price[2]);
    } else if (age > 60) {
        console.log('The Ticket Price is: ', price[3]);
    }
}

// calculateTheTicketPrice(24)

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

function calculateDiscount(price) {
    let discount
    if (price < 50) {
        discount = 0;
        console.log("There will be no discount for price less than 50 ","Price will be: " + price);
    } else if (price >= 50 && price < 100) {
        discount = 10;
        price = price - discount;
        console.log("There will be discount of 10 rupees ","Price will be: " + price);
    } else if (price >= 100) {
        discount = 20
        price = price - discount;
        console.log("There will be discount of 20 rupees ","Price will be: " + price);
    }
}


// calculateDiscount(120)




// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.



 const arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
 const arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

function sumOfTwoArrays(arr1,arr2) {
    let sumOfArr1 = 0;
    let sumOfArr2 = 0;
    let result = 0

    for (let int = 0; int < arr1.length; int++) {

        sumOfArr1 += (arr1[int])
    }
    
    for (let i = 0; i < arr2.length; i++) {
        
        sumOfArr2 += (arr2[i])
    }
    
    // console.log(sumOfArr1)
    // console.log(sumOfArr2)
    result = sumOfArr1 + sumOfArr2
    console.log("The sum of Two Arrays:",result)
    return result
    
}

// sumOfTwoArrays(arr_1,arr_2)



// Using a for loop output the elements in reverse order

    const arrElement = [43, "what", 9, true, "cannot", false, "be", 3, true];

    function reverseAnArray(arr) {
        for (let element = 0; element < arrElement.length; element++) {
            const reversedArray = arr.reverse()
            console.log(reversedArray[element]);
            
        }
    }

    // reverseAnArray(arrElement)



// Given a number n Calculate the factorial of the number


function factorialOfANumber(num) {
    let result = 1;
    
    for (let i = 2; i <= num; i++) {
        result *= i
    }
    console.log(result);
}

// factorialOfANumber(6)

// let result = 0;

// for (let i = 1; i < 6; i++) {
    //     console.log((result += 6 * (6 - 1)));
//     console.log(6 - 1);

//     // result *= num * (num - i)
// }


