//the rest parameter syntax allows a function to accept an indefinite number of arguments
//as an array, providing a way to represent variadic functions in javascript

person=(fname,lname, ...hobbies)=>{ //if we use the rest parameter before other parameters it will throw an error so we use it after other parameters
    console.log(`I am ${fname} ${lname} and my hobbies are ${hobbies}`);
    
}

person("ank","n","coding","sleeping","programming");

