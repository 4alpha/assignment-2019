const mongoose=require('mongoose');
const validator=require('validator');
const connectionURL='mongodb://127.0.0.1:27017';
//Let's concatenate Database name in below connectionURl
mongoose.connect(connectionURL+'/task-manager-api',{
useNewUrlParser: true,
useCreateIndex: true
})
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

//Below is an instance which will be saved inside db
const me= new User({
    name: '  Arjun ',
    //Let's mess up age by giving invalid value
    age: 25,
    email: 'KAU2@GMAIL.COM',   
    password: 'hellopass'
})

//Promise used here
// me.save().then(()=>{
// console.log(me);
// }).catch((error)=>{
// console.log('Error occured while insertion ',error);
// });

//Let's create a new model
//Since db is already created, I'll add only model or document

const Car=mongoose.model('Car',{
    carName: {
        type: String,
        required: true,
        trim: true
    },
    carPrice: {
        type: Number,
        required: true
    },
    carAvailable: {
        type: Boolean,
        default: false
    }
})

// //Let's create a New Car model and add it to db
const Car1=new Car({
    carName: 'BMW',
    carPrice: 2500000,
    // carAvailable: true
})

Car1.save().then(()=>{
    console.log('Car details ',Car1);
}).catch((error)=>{
    console.log('Error occured \n',error);
})