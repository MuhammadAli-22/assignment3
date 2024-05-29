// Assignment 01 !
// Create an array named students to store information about several students
var students = [
    { name: "Ali", isSenior: true, hasCompletedAssignments: true },
    { name: "Bilal", isSenior: false, hasCompletedAssignments: true },
    { name: "Ayan", isSenior: true, hasCompletedAssignments: false },
    { name: "David", isSenior: true, hasCompletedAssignments: true },
    { name: "Hamza", isSenior: false, hasCompletedAssignments: false }
];
// Function to find senior students who have completed their assignments
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
// Function to update the class list by removing students who haven't completed their assignments
function updateClassList(students) {
    return students.filter(function (student) { return !student.isSenior || student.hasCompletedAssignments; });
}
// Find and log senior students who have completed their assignments
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed their assignments:", seniorStudentsWithAssignments);
// Update and log the class list
var updatedClassList = updateClassList(students);
console.log("Updated class list:", updatedClassList);
