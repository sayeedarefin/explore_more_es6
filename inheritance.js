class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }

    static comparePrices(product1, product2) {
        if (product1.price > product2.price) {
            console.log(`${product1.name} is more expensive than ${product2.name}.`);
        } else if (product1.price < product2.price) {
            console.log(`${product2.name} is more expensive than ${product1.name}.`);
        } else {
            console.log(`${product1.name} and ${product2.name} have the same price.`);
        }
    }
}

class Electronics extends Product {
    constructor(name, price, brand, warranty) {
        super(name, price);
        this.brand = brand;
        this.warranty = warranty;
    }

    displayInfo() {
        console.log(`Electronics: ${this.brand} ${this.name}, Price: $${this.price}`);
    }

    displayWarranty() {
        console.log(`${this.name} comes with a ${this.warranty}-year warranty.`);
    }
}

// Example Usage
const laptop = new Electronics("Laptop", 1200, "HP", 2);
const phone = new Electronics("Phone", 800, "Samsung", 1);

laptop.displayInfo(); // Electronics: HP Laptop, Price: $1200
phone.displayInfo();  // Electronics: Samsung Phone, Price: $800
laptop.displayWarranty(); // Laptop comes with a 2-year warranty.

Product.comparePrices(laptop, phone); // Laptop is more expensive than Phone.
