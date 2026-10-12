const user = {
  name: "Teja",
  age: 25,
  sex: "male",
  skills:{
    backend:"java",
    frontend:"react"
  }
};

const {name,age:privateAge,skills:{backend:primarySkills}}=user;
console.log(name,privateAge,primarySkills);

const privateData={
    userName:user.name,
    priAge:user.age,
    primSkill:user.skills.backend
}
console.log(privateData)

// 2. Array Destructuring
const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const [,workingday1,workingday2,workingday3,workingday4,workingday5,]=days;
console.log(workingday1,workingday2,workingday3,workingday4,workingday5);

// 3. Spread Operator (...) for Objects and Arrays
const defaults={notification:true,theme:"dark"}
const userSettings={...defaults,notification:false,fontsize:"16px"};
console.log(userSettings)

const naturalNum=[1,2,3];
const wholeNums=[...naturalNum,4,5,6];
console.log(wholeNums)