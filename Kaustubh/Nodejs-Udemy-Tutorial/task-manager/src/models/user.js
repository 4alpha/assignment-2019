const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
// Let's define schema to define a middleware function
/**
 * Middleware (also called pre and post hooks) are functions which are passed control
 *  during execution of asynchronous functions. Middleware is specified on the schema level
 *  and is useful for writing plugins.
 */

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
    }
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
    const isMatchedPassword = bcrypt.compare(password, getUser.password);
    if (!isMatchedPassword)
        throw new Error('Unable to login'); //We've kept both error messages same as we won't expose much details to annonymous user

    return getUser;
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