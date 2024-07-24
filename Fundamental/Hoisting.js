// Example 1:
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;                 // Declaration
// console.log(example);        // logs undefined
// example = "I'm the example!";// Initialization 
// ==============================================================
// Example 2:
// console.log(example);
// let example = "I'm the example!";    
// AFTER HOISTING BY THE INTERPRETER
// console.log(example);              // logs refrence error (Undeclared variable)
// let example = "I'm the example!"; // Declaring and Initialization 
// ==============================================================
// Example 3:
// console.log(hello);                                   
// var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
// var hello;          // Declaration
// console.log(hello); // logs undefined (variable is not initialized)
// hello = 'world';    // Initialization
// ==============================================================
// Example 4:
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// AFTER HOISTING BY THE INTERPRETER
// var needle;                // Declaration
// function test(){           // Hoisting the function
//     var needle = 'magnet'; // Ceate local variable
//     console.log(needle);   // logs magnet (local variable)
// }
// needle = 'haystack';     // Initialization
// test();                  // Call the function
// ==============================================================
// Example 5:
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan); 
// }
// console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan;                 // Declaration
// function print(){            // Hoisting the function
//     brendan = 'only okay';   // Initialize a value for the global variable
//     console.log(brendan);    // logs only okay (if we call the function)
// }
// brendan = 'super cool';      // Initialize a value for the global variable  
// console.log(brendan);        // logs super cool (we don't call the print function)
// ==============================================================
// Example 6:
// var food = 'chicken';
// console.log(food); 
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// AFTER HOISTING BY THE INTERPRETER
// var food;                  // Declaration
// function eat(){            // Hoisting the function
//     var food;              // Declaration (Local variable)
//     food = 'half-chicken'; // Initialize a value for the local variable  
//     console.log(food);     // logs half-chicken
//     var food = 'gone';     // Reassign a value for the local variable  
// }
// food = 'chicken';          // Initialize a value for the global variable  
// console.log(food);         // logs chicken (global variable)
// eat();                     // Call the function
// ==============================================================
// Example 7:
// mean();
// console.log(food); 
// var mean = function() {
//     food = "chicken";
//     console.log(food); 
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean;                // Declaration (as a variable)
// mean();                  // logs mean is not a function error (and stop here)
// console.log(food);       // logs refrence error (Undeclared variable)
// var mean = function() {
//     var food;            //  Declaration (as a local variable)
//     food = "chicken";    // Initialize a value for the local variable 
//     console.log(food);   // logs chicken
//     food = "fish";       // Reassign a value for the local variable
//     console.log(food);   // logs fish
// }
// console.log(food);       // logs refrence error (Undeclared variable)
// ==============================================================
// Example 8:
// console.log(genre); 
// var genre = "disco"; 
// rewind(); 
// function rewind() {
//     genre = "rock";
//     console.log(genre); 
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;              // Declaration
// function rewind() {     // Hoisting the function
//      var genre;         // Declaration for a local variable 
//     genre = "rock";     // Initialize a value for the local variable 
//     console.log(genre); // logs rock
//     var genre = "r&b";  // Reassign a value for the local variable
//     console.log(genre); // logs r&b
// }
// console.log(genre);     // logs Undefined (global variable)
// genre = "disco";        // Initialize a value for the global variable 
// rewind();               // Call the function
// console.log(genre);     // logs disco (global variable)
// ==============================================================
// Example 9:
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo); 
//     var dojo = "burbank";
//     console.log(dojo); 
// }
// console.log(dojo);    
// AFTER HOISTING BY THE INTERPRETER
// var dojo;                 // Declaration 
// function learn() {        // Hoisting the function
//     var dojo;             // Declaration a local variable 
//     dojo = "seattle";     // Initialize a value for the local variable 
//     console.log(dojo);    // logs seattle (local variable)
//     var dojo = "burbank"; // Reassign a value for local variable
//     console.log(dojo);    // logs burbank (local variable)
// }
// dojo = "san jose";        // Initialize a value for the global variable 
// console.log(dojo);        // logs san jose (global variable)
// learn();                  // Call the function
// console.log(dojo);         // logs san jose (global variable)
// ==============================================================
// Example 10:
// console.log(makeDojo("Chicago", 65)); // This call will work correctly 
// console.log(makeDojo("Berkeley", 0)); // This will give us an error because const is immutable and we try to reassign it
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now"; // logs TypeError: Assignment to constant variable.
//     }
//     return dojo;
// }