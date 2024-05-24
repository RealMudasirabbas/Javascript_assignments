// question no 1

function findElementAtIndex(arr, index) {
    try {
        for (let i = 0; i < arr.length; i++) {
            if (index > arr.length) {
                throw new Error("Index is out of bound");
            }

            if (index == i) {
                return arr[index];
            }
        }
    } catch (error) {
        return error.message;
    }
}

console.log(findElementAtIndex([4, 5, 3, 7, 9], 10));

// class InvalidAgeError extends Error {
//     constructor(message) {
//         super(message);
//         this.message = message;
//     }
// }

// function checkAge(age) {
//     try {
//         if (age <= 0 || age >= 120) {
//             throw new InvalidAgeError(
//                 "Invalid Age Error. Please give a resonable age",
//             );
//         }

//         if (age > 0 || age < 120) {
//             return "You are alive!";
//         }
//     } catch (error) {
//         return error.message;
//     }
// }

// console.log(checkAge(22));

function divideTwoNums(num1, num2) {
    try {
        if (num2 == 0) {
            throw new Error(
                "Zero division Error. Please provide number other than zero"
            );
        }
        let divide = num1 / num2;
        return divide;
    } catch (error) {
        return error.message;
    }
}

console.log(divideTwoNums(1,5))