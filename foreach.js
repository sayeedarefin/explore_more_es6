const numbers = [12,34,5,6,7,77];

const result = numbers.map(n=>n*2);
console.log(result);

// map works on every element and return the result as an array

const result2 = numbers.forEach(n => {
    console.log(n*2)
})
console.log(result2);

// foreach works on every element but returns nothing