//The spread  operator is a new additionn to the set of operators in JS ES6
//It takes in an (iterable) and expands it into individual elements
//The spread operators is used to make shallow copies of JS objects
//Using this operator makes the code concise and enhances its readability


//Using Function
colorsprint=(a,b,c,d)=>{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
const color=["red","blue","purple","teal"]
colorsprint(color) //this will only pass the array to the parameter a and not distribute it to all the parameters because for doing so we use separators
colorsprint(...color) //this will distribute all the colors to all the parameters

//Using Arrays
const morecolors=["green","yellow","white","black"]
const  concat=[...color,...morecolors] //it will concat both the arrays
const  concat1=["Indigo",color,...morecolors] //it will display color as the separate array
console.log(concat);


//Using object
const obj1={x:1,y:2,}
const obj2={z:3}
const obj3={...obj1,...obj2}
console.log(obj3);
const obj4={ //Nested object
    obj5:{
        u:0,
    },
    obj6:{ 
        j:9,
    },
}
console.log(obj4);
const obj7={...obj4} //Cloning the obj4
console.log(obj7);

