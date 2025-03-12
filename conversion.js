// let score="33abc"
// console.log(typeof (score));

// let scoreInNumber=Number(score);


// console.log(typeof scoreInNumber);

// console.log(scoreInNumber); //If "44"/"any number" the this will  give number but if it as a combination like "33abc" it will give NaN
let score=undefined;
console.log(typeof (score));

let scoreInNumber=Number(score);


console.log(typeof scoreInNumber);

console.log(scoreInNumber); //null will give zero after conversion to number
// NUMBER conversion
//string=>number if only number then number if combination then NaN
//null=>number gives 0
//bolean to number=> true->1 and false->0
//undefined to number=> gives NaN

let isLoggedIn=90;
let booleanisLoggedIn=Boolean(isLoggedIn);
console.log(typeof (booleanisLoggedIn));

console.log(isLoggedIn);
//BOOLEAN CONVERSION
//1=>true & 0=>false
//""=>false & "anki"=>true
//number=>number
//null=>null
//undefined=>undefined
let password="";
let Stringpassword=String(password);
console.log(typeof (Stringpassword));
console.log(Stringpassword);
//STRING CONVERSION
//""=>
//true=>true & false=>false
//number=>number
//null=>null
//undefined=>undefined