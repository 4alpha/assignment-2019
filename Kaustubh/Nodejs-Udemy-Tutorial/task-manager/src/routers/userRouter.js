const express = require('express');


// Importing Mongoose model for User
const User = require('../models/user');
//Creating a new router
const router = new express.Router();

// Import authentication file
// Not to add for Login and signup
// Add authentication as 2nd argument in route handler functions
const auth=require('../middleware/auth');

router.get('/test', (req, res) => {
    res.send("Test route for User");
});

router.post('/users', async (req, res) => {   
    try {
        const user = new User.newUser(req.body);
        await user.save();

        // Let's get token to authenticate
        const token=await user.generateAuthToken();
        
        // To send user and token details        
        res.status(201).send({user,token});
        // res.status(201).send(user);
        //The below can also work
        //  const newUser= await user.save();
        // res.status(201).send(newUser);
        } catch (error) {
        res.status(400).send('Error details\n' + error);
    }
});

//Creating a route to return user details based on user name
// We send ID as request parameters
router.get('/users/me',auth, async (req, res) => {
    // try {
    //     const users = await User.newUser.find({});
    //     res.status(201).send(users);
    // } catch (error) {
    //     res.status(400).send('Error while getting Users ' + error);
    // }
    res.send(req.user);
})

//A route to update User details using  ID by PATCH method
// In next phase, we're not going to use ID to update
router.patch('/users/me',auth, async (req, res) => {
    try {
        // To avoid or to send flawed status code even when not updated from schema, we add certain filters
        const updates = Object.keys(req.body);
        const validUpdates = ['name', 'age', 'email', 'password'];

        const isValidUpdates = updates.every((update) => validUpdates.includes(update));

        if (!isValidUpdates)
            return res.status(400).send('No field present in model');
        //In optional part, new=true ensures that returned document must be updated
        //  rather than original document
        // Default value is false
        // runValidators=true allows updated value should be according to schema

        //  A simple query (given below) can bypass middleware function
        // In order to avoid that, we do the following
        //  const userUpdatedData=await User.newUser.findByIdAndUpdate(req.params.id,req.body,{new: true,runValidators: true});
        
        // The following won't be required as we're using auth as middleware
        // const userUpdatedData = await User.newUser.findById(req.params.id);

        // To update user
        updates.forEach((update) => req.user[update] = req.body[update])
        // To save data
        await req.user.save();

        // As middleware will surely return valid ID, there won't be necessity of below code
        // if (!userUpdatedData)
        //     return res.status(404).send('User not found by ID');
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send("Server error while updating User data" + error);
    }
})

//An endpoint to delete user by ID
// In next phases, we don't delete by ID
// Here if auth is not satisfied, it'll not execute next async function
router.delete('/users/me',auth, async (req, res) => {

    try {
        // const beforeDeleteCount = await User.newUser.countDocuments();
        // //Here req.user is returned by auth and it's ID is used to delete 
        // const userDetails = await User.newUser.findByIdAndDelete(req.user._id);
        // if (!userDetails)
        //     return res.status(404).send('No User found by ID');
        // const afterDeleteCount = await User.newUser.countDocuments();
        // res.status(200).send('User Deleted successfully\nTotal Users (Before deletion): ' + beforeDeleteCount + '\t (After deletion): ' + afterDeleteCount);

        // Let's use remove method of Mongoose

        await req.user.remove();
        res.send(req.user);
    } catch (error) {
        res.status(500).send('Error occured check your Input' + error);
    }
})

//  Creating a new route to login

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.newUser.findByCredentials(req.body.email, req.body.password);
          
        // Let's get token to authenticate
        const token=await user.generateAuthToken();
        
        // To send user and token details
        res.send({user,token});
    } catch (error) {
        res.status(400).send('Error occured ' + error);
    }
})

// A route to logout
router.post('/users/logout',auth,async (req,res)=>{
     try {
        //  Let's filter token array by removing authToken we've used to login
        // Here we've already fetched user in auth (using req.user=user)
        // Let's fetch token array of user
        req.user.tokens=req.user.tokens.filter((token)=> token.token !== req.token);
        await req.user.save();
        res.send();
     } catch (error) {
         res.status(500).send('');
     }
})

// A route to logout from all

router.post('/users/logoutall',auth,async(req,res)=>{
    // Let's empty token array
    try
    {
    req.user.tokens=[];
    await req.user.save();

    res.status(200).send('Successfully logged out from all');
    }
    catch(e){
        res.status(500).send({error: 'Error occured during logging out from all'});
    }
})
module.exports = router;