const Students = [
    {
        name: "Shariq Abdullah",
        english: 85,
        urdu: 85,
        chemistry: 62,
        biology: 69,
        physics: 70,
    },
    {
        name: "Mubashir",
        english: 88,
        urdu: 80,
        chemistry: 70,
        biology: 69,
        physics: 70,
    },
    {
        name: "Zeeshan",
        english: 86,
        urdu: 81,
        chemistry: 64,
        biology: 62,
        physics: 70,
    },
    {
        name: "Atta",
        english: 80,
        urdu: 75,
        chemistry: 65,
        biology: 60,
        physics: 63,
    },
    {
        name: "Basheer",
        english: 69,
        urdu: 67,
        chemistry: 54,
        biology: 52,
        physics: 65,
    },
]

// select the table body
// Student array has five objects
// create a function for looping through the array
// iterate through the Student array
// Access objects with array index property
// Access Object properties through dot notation
// Create table tr's and td's
// Add Objects properties to table td's
// calculate students total marks
// calculate percentages
// give students grade based on percentages
// end of assignment

let table = document.getElementById("table-body")
let totalMarks = 520
let obtainedMarks = 0
let percentage = 0

function evaluateGrades(percentage) {
                if (percentage > 70){
                    return "B"
                } else if(percentage > 80){
                    return "A"
                } else if(percentage > 90){
                    return "A+"
                } else {
                    return "C"
                }
            }
            evaluateGrades()

function showStudentResult() {
    for (let i = 0; i < Students.length; i++) {
        obtainedMarks =
            Students[i].biology +
            Students[i].chemistry +
            Students[i].english +
            Students[i].urdu +
            Students[i].physics
            percentage = (obtainedMarks / totalMarks) * 100
            percentage.toFixed(2)
            let grade = evaluateGrades(percentage)
            console.log(grade);





        


        const tableRowsAndData = `
        <tr>
        <td>${Students[i].name}</td>
        <td>${Students[i].english}</td>
        <td>${Students[i].urdu}</td>
        <td>${Students[i].physics}</td>
        <td>${Students[i].chemistry}</td>
        <td>${Students[i].biology}</td>
        <td>${obtainedMarks}</td>
        <td>${totalMarks}</td>
        <td>${percentage.toFixed(2)}%</td>
        <td>${grade}</td>
        </tr>
        `
        
        table.innerHTML += tableRowsAndData
        
        
    }
}

showStudentResult()