// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 1: 
    
Write a code that prints your name in the console by taking the name as an argument to a method
*/

// const getName = (name) => {
//     console.log(name)
// }

// getName('Umair')

// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 2 

Write an arrow function to print your name in a single line of code 
*/

// const getName = name => console.log(name);
// getName('Ashir')

// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 3 

Write an arrow function that takes two arguments as numbers and returns the sum of those two numbers.
(The arrow function should be in a single line)
*/

// const addSum = (a,b) => {
//     return a + b
// }
// console.log(addSum(5,6))

// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 4

Write an arrow function that takes two numbers as parameters and checks if they are equal.
if the condition returns true the console should print "equal" and if the condition is false the
console should write not "equal" 
*/

// const addSum = (a,b) => {
//     if(a === b){
//         console.log('Equal')
//     } else {
//         console.log('Not equal')
//     }
// }

// addSum(11, 11);

// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 5

Refactor the code written in TASK 4 and do the same thing but by using ternary operator and in a single line
*/

// const a = 10;
// const b = 20;

// a === b ? console.log('Equal') : console.log('Not equal')

// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 6

Create an array of names and add a name at the end of the array by using array methods also add name 
at the start of an array 
*/

// const arr = ['Umair', 'Asad']

// arr.push('Ashir')
// arr.unshift('Shahbaz')

// console.log(arr)

// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 7

let arr = ['Umair', 'Asad']; 

Take the array above and print the length of the array to the console
*/

// const arr = ['Umair', 'Asad']

// console.log(arr.length)

// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 8



 Take the above object and print a sentence using template strings as below 

 (My name is Ashir and my profession is Developer)
*/

// let obj = {
//     name: 'Ashir',
//     profession: 'Developer',
//     id: '1'
// }

// console.log(`My name is ${obj.name} My profession is ${obj.profession} `)

// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 9
Create an array of student names and pass it in a function. the function should be an arrow function 
and the functions duty is to check the length of an array and print "too many students" if array length 
is greater than 5. and should print "Add more students" if length is less than 5 

Do the above task with the use of ternary operator
*/

// const students = ["Umair", "Asad", "Shahbaz", "Ashir", "Hamza", "Moomal"];

// const getStudents = students => {
//   students.length > 5
//     ? console.log("Too many students")
//     : console.log("Add more students");
// };

// getStudents(students);
// *****************************************************************************************************
// ******************************************************************************************************
/* TASK NUMBER 10

Write an arrow function that takes two strings as an argument and checks if those strings are equal 

If they are equal the console should print "equal" and if not the console should print "not equal"
*/

// const getStrings = (a, b) => {
//   a === b ? console.log("Equal") : console.log("Not equal");
// };

// getStrings('Umair', 'abcde')