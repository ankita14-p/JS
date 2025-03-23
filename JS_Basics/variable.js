// (resreved keyword) (variable name) = (type of value)
let name= "Ankita";
//  Decalaring a variable
let age;
// Assigning a value
let user="Helloblo";
name="batman";
// Printing the variable
console.log(name);
const city="Gwalior";
// city="Sikkim";  //Throws an error

// NUMBER
let firstfavnum=29;
let secondfavnum=1;
console.log(firstfavnum+secondfavnum);
console.log(firstfavnum-secondfavnum);
console.log(firstfavnum*secondfavnum);
console.log(firstfavnum/secondfavnum);
console.log(firstfavnum%secondfavnum);
console.log(firstfavnum**secondfavnum);

// BOOLEAN
let isTrue=true;
console.log(isTrue);
isTrue=NaN;
console.log(isTrue);
// Falsy values:
// false
// null
// undefined
// 0
// -0
// NaN
// ' '," ",``,(empty quotes)
let num1=9;
console.log(num1 + isTrue);

// Comparison Operators:
// Relational operators
// >,<,=<,<=
// Equality operators
// === (strict equality checks both type and value)
// !== (strict non-equality operator)
// == checks only value
// != checks only value
console.log(10 === '10'); //false
console.log(10 !== '10'); //true
console.log(10 == '10');  //true
console.log(10 != '10');  //false

// STRINGS
 let firstName="Anki";
 let lastName="Nag";
// 1.Concate
console.log(firstName.concat(lastName));
// 2.Append
console.log(firstName+="ta");
// 3.length
console.log(firstName.length);
// 4.Case
console.log(firstName.toLocaleLowerCase());
console.log(lastName.toLocaleUpperCase());
// 5.Slice
console.log(firstName.slice(0,4));
// 6.Split & Join
// console.log(firstName.split("")); // Converts string to an array
// console.log(firstName.split("").join("")); //join converts the converted array back to a string
// 7. Includes
console.log(firstName.includes("j"));
// 8. Trim
lastName="   Nag   "
console.log(lastName.trim());
 console.log(`${firstName} ${lastName.trim()}`);
 

























