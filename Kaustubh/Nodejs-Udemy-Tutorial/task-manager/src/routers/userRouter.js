const express = require('express');


// Importing Mongoose model for User
const User = require('../models/user');
//Creating a new router
const router = new express.Router();

// Import authentication file
// Not to add for Login and signup
// Add authentication as 2nd argument in route handler functions
const auth = require('../middleware/auth');

// Importing a new module for uploading file to server
// Multer is a node.js middleware for handling multipart/form-data,
//  which is primarily used for uploading files
const multer = require('multer');

/**
 * convert large images in common formats to smaller, web-friendly
 *  JPEG, PNG and WebP images of varying dimensions.
 */

const sharp = require('sharp');

//  Let's import sendEmail module which sends an email

const {
    sgSendWelcomeEmail,
    sgCancellationEmail
} = require('../emails/account');

router.get('/test', (req, res) => {
    res.send("Test route for User");
});

router.post('/users', async (req, res) => {
    try {
        const user = new User.newUser(req.body);
        await user.save();

        // function sending an email
        sgSendWelcomeEmail(user.email, user.name);
        // Let's get token to authenticate
        const token = await user.generateAuthToken();

        // To send user and token details        
        res.status(201).send({
            user,
            token
        });
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
router.get('/users/me', auth, async (req, res) => {
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
router.patch('/users/me', auth, async (req, res) => {
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
// In next phase, we're going to delete cars as well that are associated with user
router.delete('/users/me', auth, async (req, res) => {

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
        // Sending an email after user account has been deleted
        sgCancellationEmail(req.user.email, req.user.name);
        res.send('The profile of ' + req.user.name + ' is deleted successfully');
    } catch (error) {
        res.status(500).send('Error occured check your Input' + error);
    }
})

//  Creating a new route to login

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.newUser.findByCredentials(req.body.email, req.body.password);

        // Let's get token to authenticate
        const token = await user.generateAuthToken();

        // To send user and token details
        res.send({
            user,
            token
        });
    } catch (error) {
        res.status(400).send('Error occured ' + error);
    }
})

// A route to logout
router.post('/users/logout', auth, async (req, res) => {
    try {
        //  Let's filter token array by removing authToken we've used to login
        // Here we've already fetched user in auth (using req.user=user)
        // Let's fetch token array of user
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
        await req.user.save();
        res.status(200).send(req.user.name + ' logged out successfully');
    } catch (error) {
        res.status(500).send('');
    }
})

// A route to logout from all

router.post('/users/logoutall', auth, async (req, res) => {
    // Let's empty token array
    try {
        req.user.tokens = [];
        await req.user.save();

        res.status(200).send('Successfully logged out from all');
    } catch (e) {
        res.status(500).send({
            error: 'Error occured during logging out from all'
        });
    }
})

// A new route to upload picture for Profile
// Setting up an upload directory

const upload = multer({
    // Destination folder (Not useful when uploading it to server, hence we delete below)

    // An object specifying the size limits
    // Specifying the limits can help protect your site against denial of service (DoS) attacks..
    limits: {
        fileSize: 1000000 //Here it's 1MB i.e 1*10^6
    },
    // Set this to a function to control which files
    //  should be uploaded and which should be skipped. 
    // cb for callback
    fileFilter(req, file, cb) {
        // File information
        // originalname =>	Name of the file on the user's computer
        // Filter for PDF files
        // if (!file.originalname.toLowerCase().endsWith('.pdf')) {
        // Let's use Regex below
        // Do not give space after pdf or before jpg
        // It'll not match string
        if (!file.originalname.toLowerCase().match(/\.(jpeg|jpg|png)$/)) {
            return cb(new Error('Please upload a jpeg , jpg or png file'));
        }

        cb(undefined, true);
    }
})

// Here upload.single() will act as middleware
// Now we'll handle error which will send JSON as a response 
// Auth for authorization of user
// The reason behind using shape is convert images of higher resolutions into smaller size 
// i.e. dimensions and convert it into png format
router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    // File is where  image will be stored in buffer
    // req.user.avatar=req.file.buffer;
    // Convert image into buffer format
    // Firstly we resize image by width and height and then convert it to png format
    const buffer = await sharp(req.file.buffer).resize({
        width: 250,
        height: 250
    }).png().toBuffer();
    req.user.avatar = buffer;

    await req.user.save();
    res.status(200).send('Image added to ' + req.user.name + ' profile');
}, ((err, req, res, next) => {
    res.status(400).send({
        error: 'Error details \n' + err.message
    });
}))


/**
 * The above is an error handling middleware
 *  Error-handling middleware always takes four arguments.
 *  You must provide four arguments to identify it as an error-handling middleware function.
 *  Even if you don’t need to use the next object, you must specify it to maintain the signature.
 *  Otherwise, the next object will be interpreted as regular middleware
 *  and will fail to handle errors.
 */
// A router to delete user avatar

router.delete('/users/me/avatar', auth, async (req, res) => {
    try {
        // Tried to delete picture by following, didn't worked out
        // await req.user.updateOne({_id:req.user._id},{avatar: undefined},{new: true, runValidators: true})
        req.user.avatar = undefined;
        await req.user.save();
        res.status(200).send('Avatar deleted successfuly');
    } catch (error) {
        res.status(400).send({
            error: 'Error occured while deleting profile picture'
        });
    }
})

// A router which serves file
// See the result in browser by copying link in address bar of browser
router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.newUser.findById(req.params.id);

        // Let's see if User's avatar is undefined
        if (user.avatar === undefined || user === undefined)
            throw new Error('Problem occured while fetching user');

        // Let's set respone header using res.set
        // Here we want to send an image, hence value should be image/jpg
        res.set('Content-Type', 'image/png');
        res.send(user.avatar);
    } catch (error) {
        res.status(404).send({
            error: error.message
        });
    }
})
module.exports = router;