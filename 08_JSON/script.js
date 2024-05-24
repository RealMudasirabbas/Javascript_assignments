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
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 25,
        address: {
            street: "456 Maple Ave",
            city: "Othertown",
            state: "NY",
            zip: "67890",
        },
        isActive: false,
    },
    {
        id: 3,
        name: "Sam Brown",
        email: "sam.brown@example.com",
        age: 40,
        address: {
            street: "789 Oak Dr",
            city: "Sometown",
            state: "TX",
            zip: "13579",
        },
        isActive: true,
    },
];

const stringifyObj = JSON.stringify(randomData);
console.log("Stringify Data",stringifyObj);
console.log("###############################################################");
const parsedObj = JSON.parse(stringifyObj)
console.log("Parsed Data",parsedObj);
