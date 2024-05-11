// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// Selecting Elements

const userButton = document.getElementById('user-submit');
const inputText = document.getElementById('input-text');
const answer = document.getElementById("ans");

// CSS Manipulation
answer.style.display = "none";


// generating a random number

function generateArandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber.toString();
}



userButton.addEventListener('click', (e) => {
    let randomNum = generateArandomNumber();
    if (inputText.value == randomNum) {
        answer.innerText = 'Good work! Random Number matched ' + 'The random number is: ' + randomNum;
        answer.style.display = "block";
    } else {
        answer.innerText = 'The random Number does not match the guess Number: ' + randomNum;
        answer.style.display = "block";
    }
    //answer.innerText = "Correct Answer: " + randomNum;
    
});



// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
const firstNum = document.getElementById("first-num");
const secondNum = document.getElementById("sec-num");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const spanText = document.getElementById("ansText");

function multiplyANumber(num1,num2){
    const multipliedNumbersResult = num1 * num2;
    return multipliedNumbersResult
};


function divideANumber(num1,num2){
    const dividedNumbersResult = num1 / num2;
    return dividedNumbersResult;
};

multiply.addEventListener("click",() => {
    const inputValueNum1 = firstNum.value;
    const inputValueNum2 = secondNum.value;
    const result = multiplyANumber(inputValueNum1,inputValueNum2)
    spanText.innerText = "The result of multiplication is: " + result
    return result
})
divide.addEventListener("click",() => {
    const inputValueNum1 = firstNum.value;
    const inputValueNum2 = secondNum.value;
    const result = divideANumber(inputValueNum1,inputValueNum2)
    spanText.innerText = "The result of division is: " + result
    return result
})


let str = "str"
str.su


// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.


const inputStr = document.getElementById("input-str");
const submitStr = document.getElementById("submit-str");
const ansStr = document.getElementById("ans-str");


function createNewStr(str) {
    if (str.substring(0,2) === "py") {
        return str
    } else {
        return str.padStart(str.length + 2,"py")
    }
}

submitStr.addEventListener("click", () => {
    const inputValue = inputStr.value;
    let newStr =  createNewStr(inputValue);
    ansStr.style.fontSize = "18px";
    ansStr.innerHTML = "Here is modified string: " + newStr;
})




// Remove a character at the specified position of a given string and return the new string

// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

//  Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

//  Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

// Write a JavaScript program to find the largest of three given integers.

// Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
// 1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// 2. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// 3. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
