// Problem 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)      // Tesla
// console.log(otherRandomCar) // Mercedes
// ========================================================
// Problem 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);      // Reference error
// console.log(otherName); // Elon
// ========================================================
// Problem 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);      // 12345
// console.log(hashedPassword);// Undefined
// ========================================================
// Problem 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;         // 2
// const [,,,second] = numbers;      // 5
// const [,,,,,,,,third] = numbers;  // 2
// //Predict the output
// console.log(first == second);     // false 
// console.log(first == third);      // ture 
// ========================================================
// Problem 5
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;           // value
// const { secondKey } = lastTest;     // [1, 5, 1, 8, 3, 3]
// const [ ,willThisWork] = secondKey; // 5
// //Predict the output
// console.log(key);                   // value
// console.log(secondKey);             // [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]);          // 1
// console.log(willThisWork);          // 5
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: ['20500'],
        },
        {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};
const { addresses: [{zipcode:[x]}] } = person;
console.log(x);
const person1 = [
    'Bob',
    'Marley',
    'bob@marley.com',
    'sekureP@ssw0rd9',
    'barley',
    [
        {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: {v1:'20500',v2:555},
        },
        {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
        }
    ],
    1543945177623
];
const [,,,,,[{zipcode:{v1}}]] = person1
console.log(v1)