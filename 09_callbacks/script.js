const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const body = document.getElementById("body")

btn1.addEventListener("click",() => {
    let counter = 0
    counter = counter + 1
    console.log(counter);
})

btn2.addEventListener("click",() => {
    alert("I am a Button")
})
btn3.addEventListener("click",() => {
    body.style.backgroundColor = "aqua"
})