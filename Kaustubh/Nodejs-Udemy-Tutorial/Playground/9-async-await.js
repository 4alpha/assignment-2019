//async always returns promise
// const doWork=async ()=>{
// return 'Kaustubh';
// }
// console.log(doWork());

// const doWork=async ()=>{
//     throw new Error('Something went wrong');
//     // return 'Kaustubh';
// }

// doWork().then((res)=>console.log('Returned value is ',res)
// ).catch((e)=>console.log('Error is ',e)
// )

const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0)
            return reject('Number is negative');
            else
            resolve(a+b);
        },3000)
    })
}

const doWork=async ()=>{
    const sum=await add(9,-91);
    const sum2=await add(sum,50);
    const sum3=await add(sum2,3);
    return sum3;
}

doWork().then((res)=>console.log('Returned value is ',res)
).catch((e)=>console.log('Error is ',e)
)