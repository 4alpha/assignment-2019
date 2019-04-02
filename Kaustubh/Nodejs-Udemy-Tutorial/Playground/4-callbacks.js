// setTimeout(()=>{
//     console.log('2 seconds are up');
// },2000)

// const names=['Kaustubh','Dhananjay','Zagade'];

// //Filter function

// /*
// const shortNames=names.filter((name)=> name.length>6
// )

// console.log(shortNames);
// */

// const geoCode=(address,callback)=>{
//    //The below function will not return anything though return is called at the end
//    //This happens because of return statement encoded inside timeout function
//    //In order to overcome this, we use callback (defined in our parameter)
//    //See it on line 27 and line 35
//     setTimeout(()=>{
//     const data={
//         latitude: 0,
//         longitude: 0
//     }
//    // return data;
//    callback(data);
// }
//     ,2000)
// }

// /**Let's execute above script by using callback function pattern */

// //const data=geoCode('Pune');

// //The data that was passed on as argument in above callback method (i.e callback(data)) gets returned in arrow function below
// geoCode('Pune',(data)=>
// {
//     console.log(data);
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add=(x,y,callback)=>{
    setTimeout(()=>{
       /*
       This is common way
        const res=x+y 
        callback(res)
        */

        //The shorthand way is

        callback(x+y)
       }
    ,2000)
   //The callback should not be written here { callback(res)}, remember that
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

const doWorkCallBack=(callback)=>{

    setTimeout(()=>{
        // callback('This is an error message',undefined)
        callback(undefined,'Hurrah, you won')
    },2000);
}

doWorkCallBack((error,result)=>{
    if(error)
    return console.log("Error is ",error);
    console.log('Result is ',result);
});