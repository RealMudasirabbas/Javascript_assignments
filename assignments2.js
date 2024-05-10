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
let randomNum = generateArandomNumber();


userButton.addEventListener('click', (e) => {
    if (inputText.value == randomNum) {
        console.log('Good work! ' + 'The random number is: ', randomNum);
    } else {
        console.log(
            'The random Number does not match the guess Number',
            randomNum,
        );
    }
    answer.innerText = "Correct Answer: " + randomNum;
    answer.style.display = "block";
    randomNum = generateArandomNumber();
});



// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).


// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
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
