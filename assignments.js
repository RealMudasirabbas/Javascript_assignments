//Write a function that returns the square of a number

function squareNum(num) {
    const squaredNum = num ** 2;
    console.log('The square of given Number is: ', squaredNum);
    return squaredNum;
}
squareNum(220);

//  Write a function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const convertedTemperature = (9 / 5) * celsius + 32 + ' F';
    console.log(
        'The Temperature converted from Celsius to Fahrenheit is: ',
        convertedTemperature,
    );
    return convertedTemperature;
}
celsiusToFahrenheit(37);

// Write a function to find the area and perimeter of a Circle

function areaAndPerimeterOfaCircle(radius) {
    const area = 3.14 * radius ** 2;
    const perimeter = 2 * 3.14 * radius;
    console.log(
        `The Area of a circle and perimeter are ${area} , ${perimeter} respectively`,
    );
    // console.log(
    //     'The Area of a circle and perimeter are'  , area , perimeter,'respectively'
    // );
}
areaAndPerimeterOfaCircle(7);
// Write a JavaScript function to get the last element of an array.
function getLastElementOfArray(arr) {
    const lastElement = arr.pop();
    console.log(lastElement);
    return lastElement;
}
getLastElementOfArray([1, 2, 3, 4, 5]);

// Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProductOfArrayElements(arr) {
    const sum = arr.reduce((acc, el) => {
        return acc + el;
    }, 0);
    const multipliedElements = arr.reduce((acc, el) => {
        return acc * el;
    }, 1);
    console.log(
        `The sum of array elements is ${sum} and product of array elements is: ${multipliedElements}`,
    );
    return [sum, multipliedElements];
}
sumAndProductOfArrayElements([1, 2, 3, 4, 5, 6]);

// We have the following arrays :

    color = ['Blue ', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow '];
        o =     ['th', 'st', 'nd', 'rd'];

// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."

// "2nd choice is Green."

// "3rd choice is Red."

// - - - - - - - - - - - - -

// function displayColors(n) {
//     for (let i = 0; i < color.length; i++) {

//         let ordinal = n % 10;
//         if((n % 10 >= 1 && n % 10 <= 11)){

//         }

//     }
// }

// displayColors();

//  There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
const array1 = [1, 0, 2, 3, 4]; // indices: 0,1,2,3,4
const array2 = [3, 5, 6, 7, 8, 13]; // indices: 0,1,2,3,4,5

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

sumOfArray(array1);
6;
sumOfArray(array2);

