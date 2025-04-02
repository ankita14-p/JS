const person={
    name:"Annie",
    age:20,
    subscribed:true,
    hobbies:["reading","working","sleeping"]
  }
  //JSON properties
  console.log(JSON.stringify(person)); //converts into JSON string
  console.log(JSON.parse(JSON.stringify(person))); //converts JSON string to js object notation
  
  