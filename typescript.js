// ============================================================
//  TypeScript Mini Assignment — COMPILED JavaScript (ES6)
//  This is what the browser runs after `tsc assignment.ts`
// ============================================================


// ─── 1. PRIMITIVE TYPES ─────────────────────────────────────

let studentName = "Ali Raza";
let studentAge = 21;
let isEnrolled = true;
let uniqueId = null;
let futureScore = undefined;

console.log("=== Primitive Types ===");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Enrolled:", isEnrolled);


// ─── 2. TYPE ALIASES ────────────────────────────────────────
// (Type aliases are erased at compile time — only values remain)

const myResult = {
  course: "TS-101",
  score: 88,
  grade: "A",
};

console.log("\n=== Type Alias ===");
console.log("Result:", myResult);


// ─── 3. INTERFACES ──────────────────────────────────────────
// (Interfaces are erased at compile time — only values remain)

const student1 = {
  id: 1,
  name: "Ali Raza",
  age: 21,
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


// ─── 6. FUNCTIONS ───────────────────────────────────────────

function greetStudent(name, age) {
  return `Hello, ${name}! You are ${age} years old.`;
}

const calculateAverage = (nums) => {
  const total = nums.reduce((sum, n) => sum + n, 0);
  return parseFloat((total / nums.length).toFixed(2));
};

function printStudent(s) {
  console.log(`[${s.id}] ${s.name} | Age: ${s.age} | City: ${s.address.city}`);
}

function getFirstItem(arr) {
  return arr[0];
}

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