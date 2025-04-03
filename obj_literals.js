//Object literals are intoduced in ECMAscript 6(ES6), are a set of enhancements to the syntax for defining objects in Javascript.These enhancements make it more convenienr and concise to define object properties and methods.
person=(name,age,hobbies)=>{
    return {
    name,
    age,
    hobbies,
    }
}
console.log(person("Hux",20,["Coding","Reading","Sleeping"]));
//In object literal if the parameters and the keys used in the object inside the function are same then we can only write the name of the parameters they will automatically make it key and the arguments passed while calling the function as the values of the keys.
//Challenge 1
let a=1
let b=2
let c=3
value=(a,b,c)=>{
    return{
        a,
        b,
        c,
    }
}
console.log(value(a,b,c));

//Challenge 2
const lib={
    sum:(a,b)=> a+b,
    mult:(a,b)=>a*b,
}
console.log(lib.sum(2,3));
console.log(lib.mult(2,3));

//Challenge 3
multiply=(a,b=3)=>a*b;
console.log(multiply(2)); //6 as b=3 is given as default value of b but if we pass a value to b then it will overide 3


