// function sum(a,b)
// {
//     return a+b;
// }

//Using Arrow function
const sum=(a,b) =>{
    return a+b;
} 
// exports.sum1 = function (a,b) {
//     return a+b;
// }
//Using more shorthand Arrow Function
const sums= (a,b)  => a+b;

//Method 1 to export
// exports={
//     sums
// };

//Method 2 to export
exports.sum1=(a,b) => a+b;
exports.add=(a,b) => a+b;
