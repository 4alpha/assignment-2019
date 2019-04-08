// const doWorkPromise=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         //resolve([7,4,1])
//         reject('This is a rejection')
//         reject('Error 2');
//     },2000);
// })
// //In callback, we've to define error and result message
// //It'll be hectic for complex application to write in callback to notify error or success message
// //Also Sucess and failure callback can be called back to back
// //This causes severe problems in development
// //Promises overcomes this by not executing reject after resolve or viceversa
// doWorkPromise.then((result)=>{
//     console.log('Result is ',result);
// }).catch((error)=>{
// console.log('The error is ',error);
// });


// const add=function(a,b){
//  return   new Promise((resolve,reject)=>{
//         const sum=a+b;
//         if(typeof sum==='number')
//         resolve (sum);
//         else
//         reject(new Error('Something went Wrong'));

// }).then((resolve1)=>{
//    console.log(resolve1);
//    return resolve1;
// }).then((resolve2)=>{
//     console.log(resolve2*4);
// }).catch((reject)=>{
//     console.log('Error details ',reject);
// })
// }

const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        },3000)
    })
}
// One way to use promises
// add(2,3).then((sum)=>{
// console.log('Sum is ',sum);

// add(sum,4).then((sum1)=>{
//     console.log('Sum1 is ',sum1);    
// }).catch((error)=>console.log('Another error is ',error))
// }).catch((error)=>console.log(error)
// )
// console.log('The result after addition, multiplying twice is ',add('A',3));

add(2,3).then((sum)=>{
    console.log('Sum is ',sum);
   return add(sum,5); 
    }).then((sum2)=>console.log('New sum is',sum2)
    ).catch((error)=>console.log(error)
    )
    