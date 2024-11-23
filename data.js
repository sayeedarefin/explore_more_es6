// data access

const data = [{name: 'tania', id:3, address: 'kochukhet'}];

// console.log(data.address) //give an error
console.log(data[0].address);

//second product

const products={
    count:344,
    data: [
        {id: 1, name: 'lenovo', price: 3340000},
        {id: 2, name: 'macbook', price: 30000}
    ]
}
// task: access the macbook price
console.log(products.data[1].price);

//third 
const user = {
    id: 90876,
    address: {
        stree: {
            first: 'uttara bns10',
            second: 'rajbari upojela',
            third: 'kichu ekta'
        },
        city: 'dhaka'
    }
}
// task: access the rajbari upojela
console.log(user.address.stree.second);

//optional change
console.log(user.address.stree?.second);
console.log(user2.address.stree?.second);