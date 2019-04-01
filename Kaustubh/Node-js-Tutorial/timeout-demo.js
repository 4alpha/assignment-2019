/*

//Timeout event
setTimeout(() =>
{
console.log("Timeout for 5s");
},5000);

//Immediate event execution
setImmediate(()=>
{
    console.log("Immediate task");
}
);
*/

//Using setInterval() which starts something and clearInterval() to stop the event
/*
var count=0;

var intervalCount=setInterval(()=>
{
    count++;
    console.log(count,' has passed');

    if(count===5){
        console.log("Exiting now");
        clearInterval(intervalCount);
    }
},1000)
*/

//Let's use setInterval() and clearInterval() for another event

/*
var count=0;

var interval=setInterval(()=>
{
    count++;
    console.log("Hello there ", count);

    if(count==10)
    {
        console.log("Goodbye");
        clearInterval(interval);
    }
},1000);
*/
setTimeout(()=> console.log('0 secs'),0)

setImmediate(()=>console.log('Immediate'))

const fs=require('fs');
fs.readFile(__filename,()=>{
    setTimeout(()=>console.log(__dirname),0)
    setImmediate(()=>console.log('Immediate'))
})