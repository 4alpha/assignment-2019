const express = require('express');
//Include Mongoose to conncect to DB
require("./db/mongoose");

const portNumber = process.env.PORT || 9000;
// Import user's route
const userRouters = require('../src/routers/userRouter');
// Import car's route
const carRouters = require('../src/routers/carRouter');

const app = express();
//Using routes for POST method

//Configure server to parse data in JSON
app.use(express.json());

// The function includes an array of requestHandlers
// app.use((req,res,next)=>{
//     console.log(req.method,req.path);    
//     if(req.method === 'GET')
//     {
//         res.send('GET requests are disabled');
//     }
//     else
//     {
//     next();
//     }
// })

// Let's write a route to show that site's under maintainance
// app.use((req,res,next)=>{
//     // My code is long written, below is optimized code
//     // const methodName=req.method;

//     // switch(methodName){
//     //     case 'POST':
//     //     case 'GET':
//     //     case 'PATCH':
//     //     case 'DELETE':res.status(503).send('Site\'s under maintainance\nTry again later');
//     // }

//     res.status(503).send('Site\'s under maintainance\nTry again later');
// })

//userRouters & carRouters will contain all POST,PATCH,GET & DELETE for Users & Car resp.
app.use(userRouters);
app.use(carRouters);

app.listen(portNumber, () => console.log('Server listening at port ', portNumber))


// const jwt = require('jsonwebtoken');
// const myFunction = async () => {

//     const token = jwt.sign({
//         _id: 'abcd1234'
//     }, 'hellofraands',{expiresIn: '7 days'});
//     console.log(token);
//     const data=jwt.verify(token,'hellofraands');

//     console.log(data);    
// }
// myFunction();
const Car = require('./models/cars');
const User = require('./models/user');
const main = async () => {
    const car = await Car.createNewCar.findById('5cb6b9539c318a3309bdcf3d');

    // Let's derive user details using owner ID from Car model
    // Below is less optimal code (Using await I mean)
    // const userDetails=await User.newUser.findById(car.owner);
    //  console.log('Car Details ',car,'\nalong with User details ',userDetails);    

    //  Mongoose has a more powerful alternative called populate(), which lets you reference
    //  documents in other collections.
    // MongoDB has the join-like $lookup aggregation operator in versions >= 3.2.
    // await car.populate('owner').execPopulate();
    // console.log(car.owner);    

    const userDetails=await User.newUser.findById("5cb5a879a90b0c25740c194a");
    await userDetails.populate('cars').execPopulate();
    console.log(userDetails.cars);    
}

main();