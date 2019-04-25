// Import mongoose module

const mongoose=require('mongoose');

// Import JWT

const jwt=require('jsonwebtoken');

// Import User module

const User=require('../../src/models/user');

// Import Car module

const Car=require('../../src/models/cars');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'Vaishnavi',
    email: 'vaishnavi1995@gmail.com',
    password: 'Vaishnavi1234',
    tokens: [{
        token: jwt.sign({
            _id: userOneId
        }, process.env.JWT_SECRET_KEY)
    }]
}

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    name: 'Pranjan',
    email: 'pranjan1996@gmail.com',
    password: 'Pranjan1234',
    tokens: [{
        token: jwt.sign({
            _id: userTwoId
        }, process.env.JWT_SECRET_KEY)
    }]
}

// A new car

const carOne={
    _id: new mongoose.Types.ObjectId,
    carName: 'Audi',
    carAvailable: true,
    carPrice: 200000,
    owner: userOne._id //Don't use userOneId
}

const carTwo={
    _id: new mongoose.Types.ObjectId,
    carName: 'Ferrari',
    carAvailable: true,
    carPrice: 400000,
    owner: userTwo._id //Don't use userTwoId
}

const carThree={
    _id: new mongoose.Types.ObjectId,
    carName: 'Mercedes Benz',
    carAvailable: true,
    carPrice: 300000,
    owner: userTwo._id //Don't use userTwoId
}

const carFour={
    _id: new mongoose.Types.ObjectId,
    carName: 'Porsch',
    carAvailable: true,
    carPrice: 350000,
    owner: userOne._id //Don't use userOneId
}

const setupDatabase=async()=>{
    // Clearing database at the beginning of testing
    await User.newUser.deleteMany();
    await Car.createNewCar.deleteMany();
    // Save  default users
    await new User.newUser(userOne).save();
    await new User.newUser(userTwo).save();
    // Save  default car
    await new Car.createNewCar(carOne).save();
    await new Car.createNewCar(carTwo).save();
    await new Car.createNewCar(carThree).save();
    await new Car.createNewCar(carFour).save();
}

module.exports={
    userOneId,
    userOne,
    setupDatabase,
    userTwoId,
    userTwo,
    carOne,
    carTwo,
    carThree,
    carFour
}