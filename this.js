class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const sayeed= new person('sayeed', 24);
console.log(sayeed);

sayeed.sleep();
const singara = new person('tsc', 23)
singara.sleep();

const lazy = sayeed.sleep();
lazy()