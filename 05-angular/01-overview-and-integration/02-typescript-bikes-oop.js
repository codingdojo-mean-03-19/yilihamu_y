var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        var _this = this;
        this.displayInfo = function () {
            return console.log("Price is $" + _this.price + ", max speed is " + _this.max_speed + ", miles is " + _this.miles);
        };
        this.ride = function () {
            _this.miles = _this.miles + 10;
            console.log("Riding");
            return _this;
        };
        this.reverse = function () {
            if (_this.miles >= 5) {
                _this.miles = _this.miles - 5;
            }
            console.log("Reversing");
            return _this;
        };
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    return Bike;
}());
var bike1 = new Bike(200, "25mph");
var bike2 = new Bike(210, "30mph");
var bike3 = new Bike(190, "20mph");
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();
