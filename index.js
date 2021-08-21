
//new work (logging something on the console)
//console.log('Hello world');

// 1 VARIABLES
//let firstName = 'Sharoze';
//let lastName = " Khan";
//let age = 20;
//let isApproved  = true;

//console.log(firstName , lastName);

//2 CONSTANTS
//const interestRate = 0.3;
//interestRate = 1
//error will occur because const doesnt allow to change the value
//console.log(interestRate);

// 3 OBJECTS
//let person = {
//    name : 'Sharoze',
//    age : 20
//};
//console.log(person);

// change name through dot notation
//person.name='Mohsin';


//Another way thorugh brackets
//person['name']='Ali';
//console.log(person.name);

// 4 ARRAYS
//let selectedColors = ['red', 'blue' ,'yellow'];
//How to add another element
//selectedColors[3] = 'orange'
//console.log(selectedColors);

// 5 FUNCTIONS
function greet(name , lastName){
    console.log("hello" + name + ' ' + lastName);

}
greet('Sharoze','Khan');
greet('Mohsin','Ayaz');

//calculating the value
function square (number){
    return number * number

}
let  numbeR  = square(2);
console.log(numbeR);
//or
console.log(square(2));