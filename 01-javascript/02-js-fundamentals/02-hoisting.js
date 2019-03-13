1. 
console.log(hello);                                   
var hello = 'world'; 
// rewrite
var hello;
console.log(hello);                                   
hello = 'world'; // output: undefined; same with predict

2. 
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// rewrite
var needle;
test();
function test(){
    var needle;
    needle = 'magnet';
	console.log(needle);
}
needle = 'haystack'; //output: 'magnet'; same with predict.

3.
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//rewrite
var brendan;
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); //output: 'super cool'; predict is 'undefined'.

4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//rewrite
var food;
console.log(food);
eat();
function eat(){
    var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
}
food = 'chicken';//output: 'chicken' 'half-chicken'; predict: 'chicken' 'gone'. 

5.
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//rewrite
var mean;
mean();
console.log(food);
mean = function() {
    var food;
	food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);// output: mean is not a function. predict: error.

6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//rewrite
var genre;
console.log(genre);
rewind();
function rewind() {
    var genre;
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
genre = "disco";
console.log(genre);// undefined, 'rock', 'r&b', 'disco'. predict is same.

7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//rewrite
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);// output: 'san jose', 'seatle', 'burbank', 'san jose'. predict is same.

8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
//rewrite 
//const do not get hoisted and we cannot reassign value to const.
