const numbers = [2,3,5,6,7,88];

//old method
const doubled = [];

for (const num of numbers) {
    const double = num*2;
    doubled.push(double);
}
console.log(doubled);

//using map

function doubleIt(num){
    console.log('num Now' , num)
    return num*2;
}

const result = numbers.map(doubleIt);
console.log(result);
 // map  loops through each element of the array and do the operation thst you passed in the call back function and hold the result from each operation in an array and finally returns you the Aarray

 // using arrow function

 const double2= num => num*2;
 const result2 = numbers.map(double2);
console.log(result);

//more short
const double3 = numbers.map(num => num*2);
console.log(double3);

//more about map

const values = [2,5,10,12,13,15,20];
const doubled_value = values.map(value => value*2);
console.log(doubled_value);

const fiveBonus = values.map(value => value+5);
console.log(fiveBonus);

const halfBonus = values.map(value => value/2);
console.log(halfBonus);

// map through array
const friends = ['tom', 'jerry', 'bulldog', 'oggy', 'hatori'];
const lengths = friends.map(friend => friend.length);
console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);