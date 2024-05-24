// JSON Handling

const randomData = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
        },
        isActive: true,
    },
    
    
];

const stringifyObj = JSON.stringify(randomData);
console.log("Stringify Data",stringifyObj);
console.log("###############################################################");
const parsedObj = JSON.parse(stringifyObj)
console.log("Parsed Data",parsedObj);
