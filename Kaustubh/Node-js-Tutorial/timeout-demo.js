setTimeout(() =>
{
console.log("Timeout for 5s");
},5000);

setImmediate(()=>
{
    console.log("Immediate task");
}
);