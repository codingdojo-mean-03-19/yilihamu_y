    
class Bike {
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo = () => {
        return console.log("Price is $" + this.price + ", max speed is " + this.max_speed + ", miles is " + this.miles);
    }
    ride = () => {
        this.miles = this.miles + 10;
        console.log("Riding");
        return this;
    }
    reverse = () => {
        if (this.miles >= 5) {
            this.miles = this.miles - 5;
        }
        console.log("Reversing");
        return this;
    }
}

let bike1 = new Bike(200, "25mph");
let bike2 = new Bike(210, "30mph");
let bike3 = new Bike(190, "20mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();

// all three methods can do "return this" to allow chain methods.