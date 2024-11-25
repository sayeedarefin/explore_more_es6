const products = [
    {id:1, name: 'lenovo', price: 70000},
    {id:2, name: 'dell', price: 60000},
    {id:3, name: 'toshiba', price: 170000},
    {id:4, name: 'hp', price: 90000}
]
const names = products.map(product => product.name)
console.log(names);
const prices = products.map(p => p.price)
console.log(prices);

products.forEach(i =>console.log(i.id));

//expensive
const expensive = products.filter(q=> q.price>69000)
console.log(expensive)

const affordable = products.find(p=>p.price<69000)
console.log(affordable)

const total = products.reduce((previous, current)=> previous+current.price, 0);
console.log(total)


//6 ways to loop through an array

//1. for loop
// 2. do-while
// 3. while
// 4. for...of
// 5. map()
// 6. forEach()