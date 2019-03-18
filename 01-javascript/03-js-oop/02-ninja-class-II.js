function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

    this.kick = function(ninja){
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        return this;
    }

}

Ninja.prototype.punch = function(ninja){
    ninja.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    return this;
}

Ninja.prototype.sayName = function(){
    console.log("My name is " + this.name);
    return this;
}
Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

const blue_ninja = new Ninja("Goemon");
const red_ninja = new Ninja("Bill Gates");

blue_ninja.punch(red_ninja);
red_ninja.kick(blue_ninja);

blue_ninja.showStats();
red_ninja.showStats();