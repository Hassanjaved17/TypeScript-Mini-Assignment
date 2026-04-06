"use strict";
// ============================================================
//  TypeScript Mini Assignment
//  Covers: Primitive Types, Type Aliases, Interfaces,
//          Arrays, Objects, Functions with Strong Types
// ============================================================
// ─── 1. PRIMITIVE TYPES ─────────────────────────────────────
let studentName = "Hassan Javed";
let studentAge = 21;
let isEnrolled = true;
let uniqueId = null;
let futureScore = undefined;
console.log("=== Primitive Types ===");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Enrolled:", isEnrolled);
const myResult = {
    course: "TS-101",
    score: 88,
    grade: "A",
};
console.log("\n=== Type Alias ===");
console.log("Result:", myResult);
const student1 = {
    id: 1,
    name: "Hassan Javed",
    age: 20,
    enrolled: true,
    address: { city: "Karachi", country: "Pakistan" },
    courses: ["TypeScript", "React", "Node.js"],
    grade: "A",
};
console.log("\n=== Interface ===");
console.log("Student:", student1);
// ─── 4. ARRAYS ──────────────────────────────────────────────
const scores = [85, 92, 78, 95, 88];
const subjects = ["Math", "English", "Physics"];
const results = [
    { course: "TS-101", score: 88, grade: "A" },
    { course: "JS-202", score: 74, grade: "B" },
    { course: "PY-303", score: 60, grade: "C" },
];
console.log("\n=== Arrays ===");
console.log("Scores:", scores);
console.log("Subjects:", subjects);
console.log("Results:", results);
// ─── 5. OBJECTS ─────────────────────────────────────────────
const course = {
    id: "TS-101",
    title: "TypeScript Fundamentals",
    credits: 3,
};
console.log("\n=== Object ===");
console.log("Course:", course);
// ─── 6. FUNCTIONS WITH STRONG TYPES ─────────────────────────
// a) Basic typed function
function greetStudent(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}
// b) Arrow function with return type
const calculateAverage = (nums) => {
    const total = nums.reduce((sum, n) => sum + n, 0);
    return parseFloat((total / nums.length).toFixed(2));
};
// c) Function accepting an interface type
function printStudent(s) {
    console.log(`[${s.id}] ${s.name} | Age: ${s.age} | City: ${s.address.city}`);
}
// d) Generic function (bonus)
function getFirstItem(arr) {
    return arr[0];
}
// e) Function with optional & default parameters
function enrollStudent(name, course = "General") {
    return `${name} has been enrolled in ${course}.`;
}
console.log("\n=== Functions ===");
console.log(greetStudent(studentName, studentAge));
console.log("Average Score:", calculateAverage(scores));
printStudent(student1);
console.log("First Subject:", getFirstItem(subjects));
console.log("First Score:", getFirstItem(scores));
console.log(enrollStudent("Sara"));
console.log(enrollStudent("Ahmed", "TypeScript Advanced"));
