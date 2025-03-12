const username={ 
    firstname:"ank__9",
    isloggedin:false

};
username.firstname="anki__9" // can be changed even if object is const becausefirstname and isloggedin are treated as primitives only object is const because memory references stays same
username.lastname="Naaa"
console.log(username);
console.log(typeof username);
let anotheruser=[56,"Anki",true]
console.log(anotheruser[0]);
 //Type Conversion
 let value="78abc"
 console.log (Number(value)); //NaN which is also a number
 console.log(1+1+"1");
 console.log("2"+1+1);
 
 
 
 
 
