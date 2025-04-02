//When we provide function as an argument to other function that function is known as callback function
//First way
function greeting(cb){
    console.log("I am greeting function");
    name="Ank"
    cb(name)
    
}
greeting(function callback(name){
    console.log(`Hello! ${name}, I am the callback function`);
    
})
//Second way
function ln(lastname){
    console.log("I am the cb function");
    
    return lastname
    
}
function compname(firstname,ln,lastname){
    
   console.log(`${firstname} ${ln(lastname)}`);
   
}
compname("Huxn",ln,"Dev")

// Challenge
function showCallFunc(fn){
    value=10;
    fn(value)
}
showCallFunc(function cbfn(value){
    console.log(`I am the value ${value} in the callback function`);
    
})