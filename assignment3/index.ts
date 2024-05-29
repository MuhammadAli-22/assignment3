// Assignment 01 !

// Define an object named people containing an empty array called friends
// let people = {
//     friends : []
// };
// Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id
// let friend1 = {
//     firstName: "Muhammad",
//     lastName: "Ali",
//     id: 1
// };
// let friend2 = {
//     firstName: "Aneeq",
//     lastName: "Hussain",
//     id: 2
// };
// let friend3 = {
//     firstName: "Ashad",
//     lastName: "Faisal",
//     id: 3
// };
// Add these friend objects to the friends array within the people object
// people.friends.push(friend1, friend2, friend3);
// Output the entire people object to the console, displaying your information and your friend list
// console.log(people);

// Assignment 02 !

// const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

// // Convert non-strings (booleans, numbers) to strings if needed
// const stringArray = scrambledArray.map(element => element.toString());

// // Create a new array with elements in the desired order
// const orderedArray: string[] = [];

// // Rearrange the elements using array methods
// orderedArray.push(stringArray.pop()!);  // "I"
// orderedArray.push(stringArray.splice(4, 1)[0]);  // "am"
// orderedArray.push(stringArray.splice(2, 1)[0]);  // "a"
// orderedArray.push(stringArray.shift()!);  // "student"
// orderedArray.push(stringArray.shift()!);  // "of"
// orderedArray.push(stringArray.pop()!);  // "GIAIC"

// // Combine elements back into a single string
// const result = orderedArray.join(" ");

// // Output the result
// console.log(result);  // "I am a student of GIAIC"


// Assignment 03 !

// Define an array named inventory to store product information
// let inventory: { name: string, model: string, cost: number, quantity: number }[] = [];

// // Create three separate objects, each representing a product, with properties like name, model, cost, and quantity
// let product1 = {
//     name: "Laptop",
//     model: "XPS 13",
//     cost: 999.99,
//     quantity: 10
// };

// let product2 = {
//     name: "Smartphone",
//     model: "Galaxy S21",
//     cost: 799.99,
//     quantity: 15
// };

// let product3 = {
//     name: "Headphones",
//     model: "WH-1000XM4",
//     cost: 349.99,
//     quantity: 25
// };

// // Add these product objects to the inventory array using an appropriate array method
// inventory.push(product1, product2, product3);

// // Access and log the quantity property of a specific product (e.g., third product) in the inventory array
// console.log(`Quantity of the third product: ${inventory[2].quantity}`);

// // Explore adding and accessing more elements within the inventory array
// let product4 = {
//     name: "Tablet",
//     model: "iPad Pro",
//     cost: 1099.99,
//     quantity: 5
// };

// inventory.push(product4);

// // Log the updated inventory to the console
// console.log("Updated inventory:");
// console.log(inventory);

// // Access and log the name and model of each product in the inventory
// inventory.forEach(product => {
//     console.log(`Product: ${product.name}, Model: ${product.model}`);
// });


// Assignment 04 !

// Define the Student interface
interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
}

// Create an array named students to store information about several students
let students: Student[] = [
    { name: "Ali", isSenior: true, hasCompletedAssignments: true },
    { name: "Bilal", isSenior: false, hasCompletedAssignments: true },
    { name: "Ayan", isSenior: true, hasCompletedAssignments: false },
    { name: "David", isSenior: true, hasCompletedAssignments: true },
    { name: "Hamza", isSenior: false, hasCompletedAssignments: false }
];

// Function to find senior students who have completed their assignments
function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

// Function to update the class list by removing students who haven't completed their assignments
function updateClassList(students: Student[]): Student[] {
    return students.filter(student => !student.isSenior || student.hasCompletedAssignments);
}

// Find and log senior students who have completed their assignments
const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed their assignments:", seniorStudentsWithAssignments);

// Update and log the class list
const updatedClassList = updateClassList(students);
console.log("Updated class list:", updatedClassList);
