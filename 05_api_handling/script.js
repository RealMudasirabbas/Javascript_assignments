// Question No 1

const data = [{ id: 0, name: "Ahmed", hobbies: ["cricket", "football"] }];

const interest = document.getElementById("interest");
const hobbies = data[0].hobbies;

for (let i = 0; i < hobbies.length; i++) {
    interest.innerHTML += "Hobbies: " + hobbies[i] + "<br>";
}

// Question No 2

const mixedData = [
    ["apple", "banana", "mango"],
    ["carrot", "ginger", "garlic"],
    ["blue", "green", "maroon"],
];

const mixedDataDiv = document.getElementById("mixedData");
mixedDataDiv.innerHTML += "It is called Nested Array" + "<br>";

for (let i = 0; i < mixedData.length; i++) {
    for (let j = 0; j < mixedData.length; j++) {
        console.log("All elements:", mixedData[i][j]);
    }
}
console.log("############################");

for (let i = 0; i < mixedData.length; i++) {
    for (let j = 0; j < mixedData.length; j++) {
        if (mixedData[i][j] == "ginger") {
            mixedData[i][j] = "tomato";
        }
        console.log("After replace:", mixedData[i][j]);
    }
}

// Question No 3

const subjects = ["Math", "English", "Stats"];

subjects.push("discrete mathematics");
console.log("After adding a new element",subjects);
subjects[1] = "chemistry";9
console.log("After replacing an element",subjects);
subjects.shift();
console.log("After removing an element from start",subjects);
subjects.pop();
console.log("After removing the element from the end",subjects);
subjects.unshift("Calculus");
console.log("After adding a new element in the begining", subjects);
const slicedArr = subjects.slice(1, 3);
console.log("The original array",subjects);
console.log("The new array",slicedArr);
// Question No 4

// const startBtn = document.getElementById("start");
// let bool = false;

// startBtn.addEventListener("click", (e) => {
//     bool = true
//     while (bool) {
//         console.log("I am a While Loop");
//          if(bool) {break;}
//     }

    
// });



// Display the user

const inputUser = document.getElementById("input-text");

    
    inputUser.addEventListener("input", (e) => {
        console.log(e.target.value);
    })

