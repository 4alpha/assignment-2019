const express = require('express');
//Include Mongoose to conncect to DB
require("./db/mongoose");

const portNumber=process.env.PORT || 9000;
// Import user's route
const userRouters=require('../src/routers/userRouter');
// Import car's route
const carRouters=require('../src/routers/carRouter');

const app = express();
//Using routes for POST method

//Configure server to parse data in JSON
app.use(express.json());

//userRouters & carRouters will contain all POST,PATCH,GET & DELETE for Users & Car resp.
app.use(userRouters);
app.use(carRouters);



app.listen(portNumber, () => console.log('Server listening at port ',portNumber))

// const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const myFunction=async ()=>{
    // const password='Imceobitch';
    // const hashedPassword=await bcrypt.hash(password,8);

    // console.log('Original text password is ',password);
    // console.log('Hashed password is ',hashedPassword);
    // // Let's match password
    // // const isMatched=await bcrypt.compare('Imceobitch1',hashedPassword);
    // // console.log(isMatched?'Password matched':'Password mismatch');    
    // console.log(await bcrypt.compare('Imceobitch1',hashedPassword)?'Password matched':'Password mismatch'); 
    const token=jwt.sign({_id: 'abcd1234'},'hellofraands');
    console.log(token);    

}
myFunction();