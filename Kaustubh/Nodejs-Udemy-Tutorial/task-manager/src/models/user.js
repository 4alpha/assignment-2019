const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
// To define authentication tokens, JSONWebToken module is used
const jwt = require('jsonwebtoken');

const Car = require('./cars');
// Let's define schema to define a middleware function
/**
 * Middleware (also called pre and post hooks) are functions which are passed control
 *  during execution of asynchronous functions. Middleware is specified on the schema level
 *  and is useful for writing plugins.
 */

//  Adding a new fields "timestamps" which will save time and Date of user creation
// This will be added as an option to Schema constructor
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
        //Below is wrong way to trim data
        //     validate(name){
        //         trim(name)
        //    }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                //throw requires to be included in { ..}
                throw new error('Age cannot be negative');
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(val) {
            // Below can also be used to check the length of password
            // if(val.length<6){
            //     throw new Error('Password length must be greater than 6')
            // }
            if (val.toLowerCase().includes('password')) {
                throw new Error('Keyword \"password\" must not be included in Password');
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    // To store an image in schema
    avatar:{
        type: Buffer//To store binary image data, we use buffer
    }
}, {
    timestamps: true
});
// To validate/filter schema before saving data
// Here we don't want to use => function as the function involves use of 'this' operator
// => doesn't support 'this'
userSchema.pre('save', async function (next) {
    const user = this;
    // Below, let's check whether if password is first time created or updated
    if (user.isModified('password'))
    // console.log('Just before saving:');
    {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
})
// Virtuals are document properties that you can get and set
//  but that do not get persisted to MongoDB.
//  The getters are useful for formatting or combining fields,
//  while setters are useful for de-composing a single value into multiple values for storage.
userSchema.virtual('cars', {
    ref: 'Car',
    localField: '_id',
    foreignField: 'owner'
});

// Define a function which deletes an user and all its cars

userSchema.pre('remove', async function (next) {
    const user = this;
    await Car.createNewCar.deleteMany({
        owner: user._id
    });
    next();
})
// Let's define a function to retrieve user's login credentials
userSchema.statics.findByCredentials = async (email, password) => {
    //Getting document using findOne provided email as an attribute
    const getUser = await User.findOne({
        email
    });
    if (!getUser) {
        throw new Error('Unable to login');
    }
    // Let's match password
    // forgot to add await, causing wrong password to return correct message
    // Ismatched  Promise { <pending> } is the result getting returned
    // Unable to fulfill conditions or Promise
    const isMatchedPassword = await bcrypt.compare(password, getUser.password);
    // console.log('Ismatched ',!isMatchedPassword);
    
    if (!isMatchedPassword)
        throw new Error('Unable to login'); //We've kept both error messages same as we won't expose much details to annonymous user

    return getUser;
}

// Writing a new method to generate auth tokens
// Here methods will work as instance methods

userSchema.methods.generateAuthToken = async function () {
    const user = this;

    const token = jwt.sign({
        _id: user._id.toString()
    }, process.env.JWT_SECRET_KEY);

    user.tokens = user.tokens.concat({
        token
    })
    await user.save();
    return token;
}

// Writing a new method to return only important details back to user
// Converts data into JSON format
userSchema.methods.toJSON = function () {

    const user = this;
    // Documents have a toObject method which converts the mongoose document
    //  into a plain javascript object.    
    const userObject = user.toObject();
    // Delete parameters such as password and tokens
    // Deletin user avatar also
    delete userObject.password;
    delete userObject.tokens;
    delete userObject.avatar;
    return userObject;
}

//To define a model
const User = mongoose.model('User', userSchema)

const findUser = ((name) => {
    console.log(name);

    User.findOne({
        name: name
    }, (error, result) => {
        if (error) {
            return console.log("Error occured, something went wrong", error);
        }
        return result;
    })
})

module.exports = {
    newUser: User,
    findUser: findUser,
}