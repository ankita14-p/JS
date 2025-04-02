function intro(){
    console.log(`Hello I am ${user.name} and I am ${user.age} years old`);
    
}
const user={
    name:"Annn",
    age:"19",
    intro, //used as a reference and is mandatory
}
user.intro()

//Another way(MAIN)
const person={
    name:"Huxn",
    age:20,
    greet:function greet(){
        return `My name is ${person.name} and age is ${person.age}`
    }
}
console.log(person.greet());
