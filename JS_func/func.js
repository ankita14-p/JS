// function greeting(name="User"){ //if name not provided as an argument while calling the function then Jia will be the name else the given name will be printed
//     console.log(`Hello! ${name}`);
    
// }
// // greeting("Ank")
// function orderTea(teaType){
//     return `Making ${teaType}`
// }
// let teaorder=orderTea('Green Tea')
// console.log(teaorder);
function orderTea(teatype){
    function confirmorder(){
        return 'Order confirmed for chai'
    }
    return confirmorder()
}
let orderconfirm=orderTea('green tea')
console.log(orderconfirm);

// Arrow Function
const calculateOrder=(price,quantity)=>
{
    return price*quantity
}
let totalBill=calculateOrder(40,100)
console.log(totalBill);
// Higher Order Function
function makeTea(typeofTea){
    return `Making ${typeofTea}` //this value will be return the control to line 32
}
function processTeaOrder(teafunc){ //as makeTea is passed as arguments so makeTea now becomes the parameter
    return teafunc('earl grey')  //from here the control goes to line 28 and the return will give the control to line 34
}
let processedTeaOrder=processTeaOrder(makeTea) //From here the control of the program goes to line 31
console.log(typeof(processedTeaOrder));  //string as it returns a string

console.log(processedTeaOrder);

// Another example of higher order function that will take unknown function and return a value or string
function createTeaMaker(){
    return function (teaType){
        console.log('hello');
        return `Making ${teaType}`
    }
}
let teaMaker=createTeaMaker(); //tea maker now becomes a function
console.log(typeof(teaMaker)); //function as afunction is returned and since the returned function has no name so now teaMaker becomes the name of the function
console.log(teaMaker('green tea')); //if this line is not executed the function defined within createTeaMaker is not called hence not executed
// In this example the createTeaMaker() func is called which return the function definition to the variable teaMaker thus making it a function but the function defined within the createTeaMaker is not called hence the bloxk of code inside the inner function definition is not executed
// As the func after returning is stored in teaMaker which is now a function have to be called to execute the code within the func defined inside the createTeaMaker so when line 46 is executed the control passes on to line 40 and then line 41 passes the control again to line 46 now when line 48 is executed the control again now moves to line 41 there by executing the block of code inside the unnamed(now teaMaker) function after returning the value/string the control again moves to line 48








