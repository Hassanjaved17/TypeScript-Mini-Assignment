// ============================================================
//  TypeScript Mini Assignment
//  Covers: Primitive Types, Type Aliases, Interfaces,
//          Arrays, Objects, Functions with Strong Types
// ============================================================


// ─── 1. PRIMITIVE TYPES ─────────────────────────────────────

let studentName: string = "Hassan Javed";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let uniqueId: null = null;
let futureScore: undefined = undefined;

console.log("=== Primitive Types ===");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Enrolled:", isEnrolled);


// ─── 2. TYPE ALIASES ────────────────────────────────────────

type Grade = "A" | "B" | "C" | "D" | "F";          // Union literal type
type CourseID = string;
type Score = number;

type Result = {
  course: CourseID;
  score: Score;
  grade: Grade;
};

const myResult: Result = {
  course: "TS-101",
  score: 88,
  grade: "A",
};

console.log("\n=== Type Alias ===");
console.log("Result:", myResult);


// ─── 3. INTERFACES ──────────────────────────────────────────

interface Address {
  city: string;
  country: string;
}

interface Student {
  id: number;
  name: string;
  age: number;
  enrolled: boolean;
  address: Address;          // nested interface
  courses: string[];         // typed array inside interface
  grade?: Grade;             // optional property
}

const student1: Student = {
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

const scores: number[] = [85, 92, 78, 95, 88];
const subjects: Array<string> = ["Math", "English", "Physics"];
const results: Result[] = [
  { course: "TS-101", score: 88, grade: "A" },
  { course: "JS-202", score: 74, grade: "B" },
  { course: "PY-303", score: 60, grade: "C" },
];

console.log("\n=== Arrays ===");
console.log("Scores:", scores);
console.log("Subjects:", subjects);
console.log("Results:", results);


// ─── 5. OBJECTS ─────────────────────────────────────────────

const course: { id: CourseID; title: string; credits: number } = {
  id: "TS-101",
  title: "TypeScript Fundamentals",
  credits: 3,
};

console.log("\n=== Object ===");
console.log("Course:", course);


// ─── 6. FUNCTIONS WITH STRONG TYPES ─────────────────────────

// a) Basic typed function
function greetStudent(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

// b) Arrow function with return type
const calculateAverage = (nums: number[]): number => {
  const total = nums.reduce((sum, n) => sum + n, 0);
  return parseFloat((total / nums.length).toFixed(2));
};

// c) Function accepting an interface type
function printStudent(s: Student): void {
  console.log(`[${s.id}] ${s.name} | Age: ${s.age} | City: ${s.address.city}`);
}

// d) Generic function (bonus)
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

// e) Function with optional & default parameters
function enrollStudent(name: string, course: string = "General"): string {
  return `${name} has been enrolled in ${course}.`;
}

console.log("\n=== Functions ===");
console.log(greetStudent(studentName, studentAge));
console.log("Average Score:", calculateAverage(scores));
printStudent(student1);
console.log("First Subject:", getFirstItem<string>(subjects));
console.log("First Score:", getFirstItem<number>(scores));
console.log(enrollStudent("Sara"));
console.log(enrollStudent("Ahmed", "TypeScript Advanced"));