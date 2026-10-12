// 1. Function Scope (var) vs Block Scope (let/const)
function testScope() {
  if (true) {
    var functionScopedVar = "I am var";
    let blockScopedLet = "I am let";
    const blockScopedConst = "I am const";
  }

  console.log(functionScopedVar); // Output: "I am var" (var leaks out of if-block)
  
  try {
    console.log(blockScopedLet); // Throws ReferenceError
  } catch (err) {
    console.log("Error accessing let outside block:", err.message);
  }
}

testScope();

// 2. Hoisting and Temporal Dead Zone (TDZ)
console.log("\n--- Hoisting Demo ---");

console.log("varBefore:", varBefore); // Output: undefined
var varBefore = "Assigned now";
//console.log("varBefore:", varBefore); // Output: Assigned now
try {
  console.log("letBefore:", letBefore); // Throws ReferenceError (TDZ)
  let letBefore = "Assigned now";
} catch (err) {
  console.log("TDZ Error for let:", err.message);
}