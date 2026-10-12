// 1. Basic Lexical Scope & Closure
function createCounter() {
  let count = 0; // This variable is "enclosed" by the inner function

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// 2. Practical Use Case: Data Privacy / Encapsulation
function createUserProfile(name) {
  let privateAge = 25; // Hidden from direct external access

  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return privateAge;
    },
    celebrateBirthday: function() {
      privateAge++;
      return `Happy Birthday! New age is ${privateAge}`;
    }
  };
}

const user = createUserProfile("Teja");
console.log(user.getName()); // Output: Teja
console.log(user.getAge());  // Output: 25
console.log(user.celebrateBirthday()); // Output: Happy Birthday! New age is 26