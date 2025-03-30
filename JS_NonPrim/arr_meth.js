// 1.concat => Join two or more arrays and return sa result
let num1=[12,78,2,3,47,89]
let num2=[5,6,7,8]
console.log(num1.concat(num2));
// 2.includes => Check if an array contains a particular element
console.log(num1.includes(2));
// 3.push => adds a new element at the end of an array and returns the new length of an array
console.log(num1.push(0)); //Return the length of the new array in this case 5
console.log(num1); //[1,2,3,4,0]
// 4.unshift => adds a new element to the beginning of the array and returns the new length of the array
console.log(num2.unshift(1));
console.log(num2);
//  5.pop => Removes the last element of an array and returns the removed element
console.log(num1.pop()); //0
// 6.shift => Removes the first element of an array and returns the removed element
console.log(num1.shift());
// 7.sort => sorts the elements alphabetically in strings and in ascending order
console.log(num1.sort());
//  8.slice => Selects the new part of an array and returns the new array
console.log(num1.slice(1,3)); //the index 3 will not be included
console.log(num1[0]); //2
// 9.join => it joins the elements of an array using the character specified
console.log(num1.join('-'));
// 10.reverse => reverses the given array
console.log(num1.reverse());











