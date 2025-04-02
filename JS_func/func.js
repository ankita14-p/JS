// Function Declaration
function greeting(name){
    console.log( `Good morning! ${name}`);
   
    
}
//Calling the function 
greeting("Huxn")

//Challenge
//Calling the function before declaring it works in this case
let sqofnum=square(20)
console.log(sqofnum);
function square(x){
     return x*x
}

// message("Huxn") calling the function message before declaring will throw error in this case because message is becoming a function after the function expression statement
//Function Expression
const message = function (username){
    console.log(`Hello! ${username}`)
    
    
}
message("John")
