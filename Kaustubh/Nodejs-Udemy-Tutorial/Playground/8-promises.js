const doWorkPromise=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        //resolve([7,4,1])
        reject('This is a rejection')
        reject('Error 2');
    },2000);
})
//In callback, we've to define error and result message
//It'll be hectic for complex application to write in callback to notify error or success message
//Also Sucess and failure callback can be called back to back
//This causes severe problems in development
//Promises overcomes this by not executing reject after resolve or viceversa
doWorkPromise.then((result)=>{
    console.log('Result is ',result);
}).catch((error)=>{
console.log('The error is ',error);
});