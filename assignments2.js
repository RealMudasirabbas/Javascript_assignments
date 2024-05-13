// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// Selecting Elements

const userButton = document.getElementById('user-submit');
const inputText = document.getElementById('input-text');
const answer = document.getElementById('ans');

// CSS Manipulation
answer.style.display = 'none';

// generating a random number

function generateArandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber.toString();
}

userButton.addEventListener('click', (e) => {
    let randomNum = generateArandomNumber();
    if (inputText.value == randomNum) {
        answer.innerText =
            'Good work! Random Number matched ' +
            'The random number is: ' +
            randomNum;
        answer.style.display = 'block';
    } else {
        answer.innerText =
            'The random Number does not match the guess Number: ' + randomNum;
        answer.style.display = 'block';
    }
    //answer.innerText = "Correct Answer: " + randomNum;
});

// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
const firstNum = document.getElementById('first-num');
const secondNum = document.getElementById('sec-num');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const spanText = document.getElementById('ansText');

function multiplyANumber(num1, num2) {
    const multipliedNumbersResult = num1 * num2;
    return multipliedNumbersResult;
}

function divideANumber(num1, num2) {
    const dividedNumbersResult = num1 / num2;
    return dividedNumbersResult;
}

multiply.addEventListener('click', () => {
    const inputValueNum1 = firstNum.value;
    const inputValueNum2 = secondNum.value;
    const result = multiplyANumber(inputValueNum1, inputValueNum2);
    spanText.innerText = 'The result of multiplication is: ' + result;
    return result;
});
divide.addEventListener('click', () => {
    const inputValueNum1 = firstNum.value;
    const inputValueNum2 = secondNum.value;
    const result = divideANumber(inputValueNum1, inputValueNum2);
    spanText.innerText = 'The result of division is: ' + result;
    return result;
});

// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

const inputStr = document.getElementById('input-str');
const submitStr = document.getElementById('submit-str');
const ansStr = document.getElementById('ans-str');

function createNewStr(str) {
    if (str.substring(0, 2) === 'py') {
        return str;
    } else {
        return str.padStart(str.length + 2, 'py');
    }
}

submitStr.addEventListener('click', () => {
    const inputValue = inputStr.value;
    let newStr = createNewStr(inputValue);
    ansStr.style.fontSize = '18px';
    ansStr.innerHTML = 'Here is modified string: ' + newStr;
});

// Remove a character at the specified position of a given string and return the new string

const input_Text = document.getElementById('input_text');
const input_Char = document.getElementById('input-char');
const submit_Text = document.getElementById('submit-text');
const ans_Text = document.getElementById('ans-text');
ans_Text.style.display = 'none';

// let str = "str";

function removeACharacterFromStr(str, character) {
    const findChar = str.indexOf(character);
    let selectChar = str.replace(str[findChar], '');
    return selectChar;
}

// console.log(removeACharacterFromStr("python","t"));

submit_Text.addEventListener('click', () => {
    const inputVal = input_Text.value;
    const inputcharacter = input_Char.value;
    let modifiedStr = removeACharacterFromStr(inputVal, inputcharacter);
    ans_Text.innerText = modifiedStr;
    ans_Text.style.fontSize = '24px';
    ans_Text.style.display = 'block';
    return modifiedStr;
});

// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

const queryInput = document.getElementById('input_str');
const queryBtn = document.getElementById('submit_str');
const queryAns = document.getElementById('ans_text');

function modifyStr(str) {
    let firstChar = str[0];
    let secondChar = str[str.length - 1];
    const slicedStr = str.slice(1, length - 1);

    const modifiedStr = secondChar + slicedStr + firstChar;
    // console.log(modifiedStr)
    return modifiedStr;
}

// console.log(modifyStr("python"))

queryBtn.addEventListener('click', () => {
    const inputVal = queryInput.value;
    let modifiedString = modifyStr(inputVal);
    queryAns.style.fontSize = '18px';
    queryAns.innerText = "Here is the modified word " + modifiedString;
});

// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

const userInput = document.querySelector('#input_char');
const checkNewStr = document.querySelector('#submit_char');
const checkAns = document.querySelector('#char_text');

function createNewStr(str) {
    const splitedStr = str.split(' ');
    const newStr = [str[0] + splitedStr + str[0]];
    const joinedStr = newStr.join();
    return joinedStr;
}

checkNewStr.addEventListener('click', () => {
    const inputValue = userInput.value;
    const result = createNewStr(inputValue);
    checkAns.innerText =  "Here is the new Word: " + result;
    checkAns.style.fontSize = '24px';

    return result;
});

// console.log(createNewStr("python"))

//  Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

const inputNum = document.getElementById('input_num');
const submitNum = document.getElementById('submit_num');
const submitNumAns = document.getElementById('num_text');

function multipleOfANumber(num) {
    if (num < 0) {
        submitNumAns.innerText = 'Please provide a positive Number';
    } else if (num > 0 && num % 3 == 0 && num % 7 == 0) {
        submitNumAns.innerText = 'Yes! It is multiple of 3 and 7';
    } else if (num > 0 && num % 3 == 0) {
        submitNumAns.innerText = 'Yes, It is multiple of : 3';
    } else if (num > 0 && num % 7 == 0) {
        submitNumAns.innerText = 'Yes It is multiple of : 7';
    } else {
        submitNumAns.innerText = 'It is not multiple of either 3 or 7';
    }
}

submitNum.addEventListener('click', () => {
    const inputNumValue = inputNum.value;
    const multiple = multipleOfANumber(inputNumValue);
    return multiple;
});
//  Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

const input_word = document.getElementById('input_word');
const submit_word = document.getElementById('submit_word');
const word_text = document.getElementById('word_text');

function createThreeCharStr(str) {
    const slicedStr = str.slice([-3]);
    const newFormattedStr = slicedStr + str + slicedStr;
    return newFormattedStr;
}

submit_word.addEventListener('click', () => {
    const inputWord = input_word.value;
    const result = createThreeCharStr(inputWord);
    word_text.innerHTML = "Here is the new word: " + result;
    return result;
});

// console.log(createThreeCharStr("python"))

// Write a JavaScript program to find the largest of three given integers.

const inputNumber1 = document.getElementById("input-num1") 
const inputNumber2 = document.getElementById("input-num2")
const inputNumber3 = document.getElementById("input-num3")
const submit_nums = document.getElementById("submit-nums")
const text_nums = document.getElementById("text-nums")


function findLargestNumber(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        return 'Please provide a positive number';
    } else if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    } else if ((num1 == num2) == num3) {
        return 'None of them are larger from each other. They must be equal';
    } else {
        "Please provide some numbers"
    }
}

submit_nums.addEventListener("click", () => {
    const inputVal1 = inputNumber1.value
    const inputVal2 = inputNumber2.value
    const inputVal3 = inputNumber3.value

    const result = findLargestNumber(inputVal1,inputVal2,inputVal3)
    text_nums.innerText = "Here is the largest number: " + result
    return result
})
// console.log(findLargestNumber(1, 1, 1));

// Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
// 1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
// 2. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
// 3. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

const input_marks = document.getElementById("input_marks")
const final_exam = document.getElementById("final-exam")
const submit_marks = document.getElementById("submit_marks")
const marks_text = document.getElementById("marks_text")



function evaluateStudentGrade(marks,finalExam) {

    if(marks >= 90 && marks <=100 && finalExam === "yes"){
        // console.log(1)
        return "A+"
    }
    
    else if (marks >= 89 && marks <= 100 ){
        // console.log(2);
        return "A+"
    } else if (marks >= 80 && marks < 89){
        // console.log(3);
        return "Student pass with A Grade"
    }
    else if (marks >= 70 ) {
        // console.log(4);
        return "Student pass with B Grade"
    } else if (marks >= 60) {
        // console.log(5);
        return "Student pass with C Grade"
    } else {
        // console.log(6);
        return "Student fails"
    }

}

submit_marks.addEventListener("click",() => {
    const inputVal = input_marks.value;
    const final_exams =  final_exam.value;

    const result = evaluateStudentGrade(inputVal,final_exams)
    marks_text.innerText = "Here is the evaluated Student Grade: " + result
    return result;
})




// console.log(evaluateStudentGrade(91,true));
// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.



const inputNumbers1 = document.getElementById("input_number1")
const inputNumbers2 = document.getElementById("input_number2")
const submit_numbers = document.getElementById('submit_numbers');
const numbers_text = document.getElementById('numbers_text');


function sumOfTwoIntegers(nums1, nums2) {
    const parameter1 = parseInt(nums1)
    const parameter2 = parseInt(nums2)
    const result = parameter1 + parameter2
    

    if(result >= 50 && result <= 80){
        let newResult = 65;
        return newResult
    } else {
        let newResult = 80;
        return newResult;
    }
}

submit_numbers.addEventListener("click",() => {
    const inputValueNumber1 = inputNumbers1.value
    const inputValueNumber2 = inputNumbers2.value

    const sum = sumOfTwoIntegers(inputValueNumber1,inputValueNumber2)
    numbers_text.innerText = 'Here is the result : ' + sum;
    return sum
})


// console.log(sumOfTwoIntegers(50,40));