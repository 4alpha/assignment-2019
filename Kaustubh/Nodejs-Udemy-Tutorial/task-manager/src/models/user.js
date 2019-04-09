const mongoose=require('mongoose');
const validator=require('validator');

//To define a model
const User=mongoose.model('User',{
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
        validate(value){
            if(value<0){
                //throw requires to be included in { ..}
            throw new error('Age cannot be negative');
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Invalid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(val){
            // Below can also be used to check the length of password
            // if(val.length<6){
            //     throw new Error('Password length must be greater than 6')
            // }
            if(val.toLowerCase().includes('password')){
                throw new Error('Keyword \"password\" must not be included in Password');
            }
        }
    }
})
const findUser=((name)=>{
    console.log(name);
    
    User.findOne({
        name: name
    },(error,result)=>{
        if(error){
            return console.log("Error occured, something went wrong",error);
        }
        return result;
    })
})

module.exports= {
    newUser: User,
    findUser: findUser,   
}