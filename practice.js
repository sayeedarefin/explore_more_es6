// Example-1
const name = "sayeed";
const age = 24;
const message= `Hi! Name is ${name}, I am ${age} years old`;
console.log(message);

// Example-2
const poem =`Roses are red
violets are blue
js is fun,
and so are you`;
console.log(poem);

//example-3
const num1 = 12;
const num2 = 23;
const sum = `The sum of ${num1} and ${num2} is ${num1+ num2}`;
console.log(sum);

//example-4
const person={
    name: "sayeed",
    age: 34,
    passion: "coding",
    food:{
        rice: "biriyani",
        drinks: "borhani",
        desert: "jorda"
    }
};
const numbers = [12,23,45];
console.log(`Hi my name is ${person.name} I am ${person.age} years old and my passion is ${person.passion}. 
    my favorite food is ${person.food.rice} with cold ${person.food.drinks} and last ${person.food.desert}`);

const accessLevel  = person.age >20? "Full" : "Limited";
console.log(`${person.name} has ${accessLevel} access`);


// example-5
const moreNumbers = [...numbers, 100,2000];
const combinedNumbers  = `The updated numbers are: ${moreNumbers}`;
console.log(combinedNumbers);

// example-6
const greet = name => `Hello ${name}`;
console.log(greet("sayeed"));
console.log(greet("itmam"));
console.log(greet("nafis"));
console.log(greet("sarwar"));

//Write a program using template literals to display:

// 1. A greeting with a user’s name.
// 2. A calculated result (e.g., age after 5 years).
// 3. The contents of an array, formatted as a list.

const data = { name: "Sayeed", age: 23 };
const hobbies = ["Reading", "Writing", "Coding"];
const output = `Hi! My name is ${data.name}, I am ${data.age}.
My hobbies are as follows:
- ${hobbies.join("\n- ")}`;

console.log(output);