//Getting the current date and time
const currentDt=new Date()
console.log(currentDt);
//Specifying our own date and time
const currentdate= new Date(2024,5,29,5,45,0,0)
console.log(currentdate);
//date to string
console.log(currentDt.toDateString()); //gives only date in string format
console.log(currentDt.toISOString()); //gives the same as current dt but in string
console.log(currentDt.toLocaleString()); //gives the local date and time (the best)
//Getting everything separately
const year=currentDt.getFullYear();
const month=currentDt.getMonth();
const date=currentDt.getDate();
const day=currentDt.getDay();
const hours=currentDt.getHours();
const minutes=currentDt.getMinutes();
const milliseconds=currentDt.getMilliseconds();
console.log(`Year:${year}`);
console.log(`Month:${month}`);
console.log(`Date:${date}`);
console.log(`Day:${day}`);
console.log(`Hour:${hours}`);
console.log(`Minute:${minutes}`);
console.log(`Milliseconds:${milliseconds}`);
// Making changes
currentDt.setMonth(currentDt.getMonth()+1) //adds a month
console.log(currentDt);









