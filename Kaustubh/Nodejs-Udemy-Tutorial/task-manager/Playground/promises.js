require("../src/db/mongoose");

const User=require('../src/models/user');

// 5ca5a481fe1fb91e831ada56
//Mongoose methods allowing promises chain

// Here, the age is updated by 1
User.newUser.findByIdAndUpdate('5ca5a481fe1fb91e831ada56',{age: 1}).then((user)=>{
    console.log(user);    
    // Count the documents who having age=1
    return User.newUser.countDocuments({age: 1})
}).then((result)=>{
    console.log(result);    
}).catch((error)=>console.log(error)
)