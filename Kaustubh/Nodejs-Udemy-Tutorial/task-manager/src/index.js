const express = require('express');
//Include Mongoose to conncect to DB
require("./db/mongoose");

// Exporting port number to .env file
// A simple node program for executing commands
//  using an environment from an env file.
const portNumber = process.env.PORT;
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