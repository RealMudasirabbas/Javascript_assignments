// // Question No 1
// Make an array of numbers that are doubles of the first array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumsArray = nums.map((num) => {
    return num * 2;
});

console.log(newNumsArray);

// Question no 2

// Take an array of numbers and make them strings

const numbers = [1, 22, 33, 44, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map((num) => {
    return num.toString();
});

console.log(newNumbers);

// Question no 3

// Capitalize each of an array of names

const names = ["ali", "shariq", "bilal", "shoaib", "tariq"];

const capitalizedNames = names.map((name) => {
    let slicedName = name.slice(1);
    return name[0].toUpperCase().concat(slicedName);
});

console.log(capitalizedNames);

// Question 4

// Square the value of every element in the array

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumsArray = numbersArray.map((num) => {
    return num ** 2;
});

console.log(squaredNumsArray);

// Question no 5

// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

function sumOfPositiveNums(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let total = arr.reduce((sum, num) => {
        if (num < 0) {
            return sum;
        }
        let totalSum = sum + num;
        return totalSum;
    }, 0);

    return total;
}

console.log(sumOfPositiveNums([1, 2, -3, 4, 6]));

// Question no 6

// Calculate the mean and median values of the number elements from the input array.

function CalculateMeanAndMedian(arr) {
    let mean = 0;
    let median = 0;
    let total = 0;

    arr.map((num) => {
        return (total += num);
    });

    mean = total / arr.length;

    let sortedArr = arr.sort((a, b) => a - b);

    let middleIndex = Math.floor(sortedArr.length / 2);

    if (length % 2 == 0) {
        median = (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
        median = Math.floor(sortedArr[middleIndex]);
    }

    return [mean, median];
}

console.log(CalculateMeanAndMedian(numbersArray));

// Question no 7

// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

function returnInitials(str) {
    let splitedStr = str.split(" ");

    let abbreviatedStr = splitedStr.map((str) => {
        let slicedStr = str.slice(0, 1);
        let abbreviatedString = slicedStr.toUpperCase();
        return abbreviatedString;
    });

    return abbreviatedStr.join("");
}

console.log(returnInitials("shariq abdullah"));

// Question no 8

// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

function findAgeDifference(old, young) {
    let ageDifference = old - young;
    return `The age difference between family members is ${ageDifference} and the old and young family members are ${old} and ${young} years old respectively `;
}

console.log(findAgeDifference(55, 30));

// Question no 9

// Any array of numbers, return a new array that has only the numbers that are 5 or greater.

function returnNumbersArr(arr) {
    let result = arr.filter((num) => {
        return num >= 5;
    });

    return result;
}

console.log(returnNumbersArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Question no 10

// Any array of numbers, return a new array that only includes the even numbers.

function returnEvenNumbersArr(arr) {
    let result = arr.filter((num) => {
        return num % 2 === 0;
    });

    return result;
}

console.log(returnEvenNumbersArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Question no 11

// Any array of strings, return a new array that only includes those that are 5 characters or fewer in length

function returnStringArr(arr) {
    let result = arr.filter((str) => {
        if (str.length <= 5) {
            return str;
        }
    });

    return result;
}

console.log(returnStringArr(["tariq", "abdullah", "aqib", "mudasir"]));

// Question no 12

// 1. a)create an array of colors and iterate it using map() . b) if color is red, show it in the browser.

const colors = ["blue", "green", "yellow", "red", "pink"];

const body = document.getElementById("body");

function colorsArr(arr) {
    let result = arr.map((color) => {
        if (color === "red") {
            body.style.backgroundColor = "red";
        }
        return color;
    });

    return result;
}

// colorsArr(colors)

// Question no 13

// 2. create an array of objects.

// a) iterate it with map() and print the last names in the browser. b) Add Mr  with the last name and show it in the console.

const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" },
];

const personsDiv = document.getElementById("persons");

let result = persons.map((person) => {
    console.log("Mr", person.lastname);
    personsDiv.innerHTML += "Mr " + person.lastname + "<br>" + "<br>";
});

// Question no 14

// 3. create an array i.e. array = ['javaScript' , 'CSS', 'HTML' , 'react js' , 'data structures and algorithms']. a) first iterate the array with map(). b) check if react js is present in the array or not using filter().

const mixedDataArr = [
    "javaScript",
    "CSS",
    "HTML",
    "react js",
    "data structures and algorithms",
];

let resultArrWithMap = mixedDataArr.map((lang) => {
    return lang;
});

// console.log(resultArrWithMap)

let resultArrWithFilter = mixedDataArr.filter((library) => {
    if (library === "react js") {
        return library;
    }
    return;
});

// console.log(resultArrWithFilter);

// Question no 15

// 4. arary  = ['rameen' , 'rashid', 'ali' , 'alina' , 'aliya' , 'mahnoor' , 'mehwish' , 'sana' , 'tahira' , 'taimoor'']. a) iterate the array elements with map(). b) create a search field and enter some value (i.e. any name). if search matches any name in the array then only that name must be visible.

const namesArr = [
    "rameen",
    "rashid",
    "ali",
    "alina",
    "aliya",
    "mahnoor",
    "mehwish",
    "sana",
    "tahira",
    "taimoor",
    "parveen"
];

const searchInput = document.getElementById("search-name");
const nameText = document.getElementById("name-text");
const searchBtn = document.getElementById("search-Btn");

let namesMappedArr = namesArr.map((name) => {
    
        return name
    });
    
    nameText.innerHTML = namesMappedArr
    console.log(namesMappedArr);
    
    searchInput.addEventListener("input", () => {
        
        let searchVal = searchInput.value;
    let names = namesMappedArr.filter((name) => {
        return name.includes(searchVal.toLowerCase())
    })
    nameText.innerHTML = names

});
