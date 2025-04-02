// setInterval
const intervalId=setInterval(()=>{
    console.log("This code will run every 2 seconds");
    
},2000)
//setTimeout
setTimeout(function(){
    console.log("this code will run after 10 seconds");
    clearInterval(intervalId) //This will stop the intervalId code from executing so inshort the intervalId code wil stop executing after 10 seconds
    
},10000)
