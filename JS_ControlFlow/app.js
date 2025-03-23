// Condirionals
// if (conditon) {....}
// else if (condition) {...}
// else {....}
let password="gobaby";

if (password.length === 8){
    console.log("Welsome");
    
}
else if (password.length < 8){
    console.log("Password is too short");
    
}
else if (password.length > 8){
    console.log("Password is too long");
    console.log("Password should only have 8 characters");
}
else{
    console.log("Create a new password");
    
}
//  SWTCH Statements
// switch (expression){
// case --:
 //.....
 //case --:
  //......
//default:
 //...
// }
let fruit="banana";
switch (fruit){
    case "banana":
        console.log("banana is good for health");
        break;
    case "apple":
        console.log("An appke a day keeps a doctor away");
        break;
    case "orange":
        console.log("Orange provides vitamin c to the body");
        break;
    default:
        console.log("I have never heard of this fruit");
}
// LOOPS
// FOR
// for (initilexp;condition;updation){.....}
for(let i=2;i<=10;i+=2){
    console.log(i);
    
}
// WHILE
// while (condition) {...}
let j=1;
while  (j<=10){
    console.log(j);
    j++;
    
}
// DO WHILE
// do{.....}while(condition)
do{
   console.log(j);
   
   j++;

}while(j<=20)



