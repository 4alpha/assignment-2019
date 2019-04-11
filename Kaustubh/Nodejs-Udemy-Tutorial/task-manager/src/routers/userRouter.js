const express=require('express');


// Importing Mongoose model for User
const User=require('../models/user');
//Creating a new router
const router=new express.Router();
router.get('/test',(req,res)=>{
    res.send("Test route for User");
});

router.post('/users',async(req,res)=>{          
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

//Creating a route to return user details based on user name
router.get('/users',async(req,res)=>{
    try {
        const users=await User.newUser.find({});
        res.status(201).send(users);
    } catch (error) {
        res.status(400).send('Error while getting Users '+error);
    }
 })
 
 // A route for finding user by ID
 router.get('/users/:id',async(req,res)=>{               
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
 router.patch('/users/:id',async (req,res)=>{
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

        //  A simple query (given below) can bypass middleware function
        // In order to avoid that, we do the following
        //  const userUpdatedData=await User.newUser.findByIdAndUpdate(req.params.id,req.body,{new: true,runValidators: true});
        const userUpdatedData=await User.newUser.findById(req.params.id);

        // To update user
        updates.forEach((update)=> userUpdatedData[update]=req.body[update])
        // To save data
        await userUpdatedData.save();
         if(!userUpdatedData)
         return res.status(404).send('User not found by ID');
         res.status(200).send(userUpdatedData);
     } catch (error) {
         res.status(500).send("Server error while updating User data"+error);
     }
 })
 
 //An endpoint to delete user by ID
 
 router.delete('/users/:id',async(req,res)=>{
 
     try {
         const beforeDeleteCount=await User.newUser.countDocuments();
         const userDetails=await User.newUser.findByIdAndDelete(req.params.id);
         if(!userDetails)
         return res.status(404).send('No User found by ID');
         const afterDeleteCount=await User.newUser.countDocuments();
         res.status(200).send('User Deleted successfully\nTotal Users (Before deletion): '+beforeDeleteCount+'\t (After deletion): '+afterDeleteCount);
     } catch (error) {
      res.status(500).send('Error occured check your Input'+error);   
     }
 })

//  Creating a new route to login

router.post('/users/login',async (req,res)=>{
    try {
        const user=await User.newUser.findByCredentials(req.body.email,req.body.password);
        res.send(user);
    } catch (error) {
        res.status(400).send('Error occured '+error);
    }
})
module.exports=router;