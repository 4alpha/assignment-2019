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

app.post('/users',async(req,res)=>{          
       const user=new User.newUser(req.body);
    //    user.save().then(()=>{       
    //     //    201=Created
    //     res.status(201).send(user);
    //    }).catch((error)=>{
    //     //Shorthand expression  
    //     res.status(400).send('Error details\n',error);
    //     //    res.send('Error details\n',error);
    //    });
    try {
        await user.save();
        res.status(201).send(user);
        //The below can also work
        //  const newUser= await user.save();
        // res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send('Error details\n'+error);
    }    
});
// Creating another route to display Cars and it's details
app.post('/cars',async(req,res)=>{
    const newCar=new Car.createNewCar(req.body);

    try {
        await newCar.save();
        res.status(201).send(newCar);
    } catch (error) {
        res.send(400).send('Error occured check the following ');
    }
})

//Creating a route to return user details based on user name
app.get('/users',async(req,res)=>{
   try {
       const users=await User.newUser.find({});
       res.status(201).send(users);
   } catch (error) {
       res.status(400).send('Error while getting Users '+error);
   }
})

// A route for finding user by ID
app.get('/users/:id',async(req,res)=>{               
    // Don't give () next to User.newUser
    
    try {
        const userDetails=await User.newUser.findById(req.params.id);
        if(!userDetails)
        res.status(404).send('No user found by ID');
        else
        res.status(200).send(userDetails);    
    } catch (error) {
        res.status(500).send("Server Error, Invalid url parameter"+error);
    }

})

//A route to update User details using  ID by PATCH method
app.patch('/users/:id',async (req,res)=>{
    try {
        // To avoid or to send flawed status code even when not updated from schema, we add certain filters
        const updates=Object.keys(req.body);
        const validUpdates=['name','age','email','password'];

        const isValidUpdates=updates.every((update)=>validUpdates.includes(update));

        if(!isValidUpdates)
        return res.status(400).send('No field present in model');
        //In optional part, new=true ensures that returned document must be updated
        //  rather than original document
        // Default value is false
        // runValidators=true allows updated value should be according to schema
        const userUpdatedData=await User.newUser.findByIdAndUpdate(req.params.id,req.body,{new: true,runValidators: true});
        if(!userUpdatedData)
        return res.status(404).send('User not found by ID');
        res.status(200).send(userUpdatedData);
    } catch (error) {
        res.status(500).send("Server error while updating User data"+error);
    }
})

//Create an endpoint to fetch all cars

app.get('/cars',async(req,res)=>{
    // Car.createNewCar.find().then((carDetails)=>{
    //     res.status(202).send(carDetails);
    // })
    try {
        const carDetails=await Car.createNewCar.find({});
        if(!carDetails)
        res.status(404).send('No car found by ID');
        else
        res.status(200).send(carDetails);
    } catch (error) {
        res.status(500).send('Error occured at Server side '+error);
    }
})

//Create an endpoint to fetch car by its ID

app.get('/cars/:id',async(req,res)=>{    
    // Get details of Car by ID
    try
    {
    const carDetails=await Car.createNewCar.findById(req.params.id);
    if(!carDetails)
    res.status(404).send("No Car found by ID");
    else
        res.status(202).send(carDetails);
    }
    catch(error){
        res.status(500).send("Something went wrong while getting your Car by it\'s ID "+error);
    }
})
app.listen(portNumber, () => console.log('Server listening at port ',portNumber))