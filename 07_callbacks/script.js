function get_user(func) {
    window.setTimeout(function () {
        const person = {
            name: "John",
        };
        func(person);
    }, 1000);
}

function greet_user(user) {
    console.log("Hi " + user.name + ", how are you?");
}

get_user(greet_user);
