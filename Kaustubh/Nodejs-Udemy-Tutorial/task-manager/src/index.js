const express = require('express');
//Include Mongoose to conncect to DB
require("./db/mongoose");
// Importing User
const User=require('./models/user');
//Importing Cars
const Car=require('./models/cars');
const portNumber=process.env.PORT || 9000;

const app = express();

//Configure server to parse data in JSON
app.use(express.json());
//Using routes for POST method

app.post('/users',(req,res)=>{
       // console.log(req.body);         
       const user=new User.newUser(req.body);
       user.save().then(()=>{       
        //    201=Created
        res.status(201).send(user);
       }).catch((error)=>{
        //Shorthand expression  
        res.status(400).send('Error details\n',error);
        //    res.send('Error details\n',error);
       });    
});
// Creating another route to display Cars and it's details
app.post('/cars',(req,res)=>{
    const newCar=new Car.createNewCar(req.body);
    newCar.save().then(()=>{
        //201=Created
        res.status(201).send(newCar);
    }).catch((error)=>{
        res.send(400).send('Error occured check the following ',error);
    })
})

// A route for finding user by ID
app.get('/users/:id',(req,res)=>{
    if(!req.params.id)
    res.status(400).send("Please insert ID");
    else
    {
        // const result=User.findUserById(req.params.id);
        // if(result===404)
        // res.status(result).send("No user found");
        // else if(result===500)
        // res.status(result).send("Error at server");
        // else
        // res.status(202).send(result);
        // Don't give () next to newUser
       User.newUser.findById(req.params.id).then((userDetails)=>{
            if(!userDetails)
            res.status(404).send("No User found");
            else{
                res.status(202).send(userDetails);
            }
        }).catch((err)=>{
            res.status(500).send("Server side error Invalid string provided");
            console.log(err);
            
        })
    }
})


//Creating a route to return user details based on user name
app.get('/users',(req,res)=>{
    if(!req.body)
    res.status(400).send("Please insert username");
    else
    {
        const userName=req.body;
        const fetchUser=User.findUser(userName);
        if(fetchUser===undefined)
        {
            res.status(404).send("No result found");
        }
        else
        {
            res.send(fetchUser);
        }
    }
})

//Create an endpoint to fetch all cars

app.get('/cars',(req,res)=>{
    Car.createNewCar.find().then((carDetails)=>{
        res.status(202).send(carDetails);
    })
})

//Create an endpoint to fetch car by its ID

app.get('/cars/:id',(req,res)=>{
    Car.createNewCar.findById(req.params.id).then((carDetails)=>{
        if(!carDetails)
        res.status(404).send("No car found by this ID");
        else
        res.status(202).send(carDetails);
    }).catch(()=>{
        res.status(500).send("Check your Car ID in URL");
    })
})
app.listen(portNumber, () => console.log('Server listening at port ',portNumber))