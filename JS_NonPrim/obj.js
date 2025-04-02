//Creating empty object
const obj1={}
console.log(obj1);
//Creating non-empty object
const obj2={
    name:'Bar',
    age:20,
    vote:true,
    addr:["Gwalior","Goa","Bihar"],

}
console.log(obj2);
console.log(typeof(obj2)); //object
console.log(typeof(obj2.addr)); //object

console.log(typeof (obj2.name)); //string
let arr=[1,3,8]
console.log(typeof(arr)); //object
//Accessing items from object
console.log(obj2.name); //first way
console.log(obj2["addr"]); //second way
// Use either based on situation
//For Eg:-
const obj3={
    10:"Hello",
}
// console.log(obj3.10); //throws syntax error
console.log(obj3["10"]); //hello
//Can add other items in object outside of object
obj3.ph_no=123; //this will be included in obj3
console.log(obj3); 
//Deleting items from object
delete obj2.age; //age will be deleted
console.log(obj2); //age is deleted


// Problem Solution
const car={
    type:"Maruti",
    model:"Ignis",
    color:"Blue",
};
console.log(typeof(car));
car.type="Toyota"
car.wheels=4
console.log(car);








