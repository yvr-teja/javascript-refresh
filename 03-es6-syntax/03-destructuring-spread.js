// 1. Object Destructuring & Renaming
const user = {
  name: "Teja",
  role: "Frontend Engineer",
  location: "India",
  skills: {
    primary: "React",
    secondary: "TypeScript"
  }
};

// Extracting properties, renaming 'role' to 'jobTitle', and accessing nested objects
const { name, role: jobTitle, skills: { primary } } = user;
console.log("--- Object Destructuring ---");
console.log(`${name} is a ${jobTitle} specializing in ${primary}.\n`);

// 2. Array Destructuring
const colors = ["red", "green", "blue", "yellow"];
const [firstColor, , thirdColor] = colors; // Skipping the second item using a comma
console.log("--- Array Destructuring ---");
console.log(`First color: ${firstColor}, Third color: ${thirdColor}\n`);

// 3. Spread Operator (...) for Objects and Arrays
const defaults = { theme: "dark", notifications: true };
const userSettings = { ...defaults, notifications: false, fontSize: "16px" }; 
console.log("--- Spread Operator (Objects) ---");
console.log("Merged Settings:", userSettings); // notifications is overridden to false

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log("\n--- Spread Operator (Arrays) ---");
console.log("Combined Array:", moreNumbers);

// 4. Rest Operator (...) in Functions
function sumAll(multiplier, ...numbers) {
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  return total * multiplier;
}

console.log("\n--- Rest Operator ---");
console.log("Rest Sum Result:", sumAll(2, 10, 20, 30)); // (10 + 20 + 30) * 2 = 120