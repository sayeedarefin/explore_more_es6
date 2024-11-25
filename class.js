const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    startEngine() { // No need for `function` keyword
        console.log("Engine started!");
    }
};

car.startEngine(); // Output: Engine started!
