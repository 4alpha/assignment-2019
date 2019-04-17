const express = require('express');

//Getting instance of Express

// Importing Mongoose model for Car
const Car = require('../models/cars');
//Creating a new router
const router = new express.Router();

// Importing a new auth module

const auth = require('../middleware/auth');

// Creating another route to display Cars and it's details
//  Mongoose has a more powerful alternative called populate(), which lets you reference
//  documents in other collections.
// MongoDB has the join-like $lookup aggregation operator in versions >= 3.2.

// Mongoose populate doesn't behave like conventional SQL joins.
//  When there's no document, story.author will be null.
//  This is analogous to a left join in SQL.

router.post('/cars', auth, async (req, res) => {
    // const newCar = new Car.createNewCar(req.body);
    const newCar = new Car.createNewCar({
        ...req.body,
        owner: req.user._id
    })
    try {
        await newCar.save();
        res.status(201).send(newCar);
    } catch (error) {
        res.send(400).send('Error occured check the following ');
    }
})



//Create an endpoint to fetch all cars

router.get('/cars', auth, async (req, res) => {
    // In next phase, let's retrieve cars owned by individual users
    try {
        // Below is less optimized path
        // const _id=req.user._id;console.log('ID is ',_id);

        // const carDetails = await Car.createNewCar.find({owner: _id});

        // More optimized code below

        await req.user.populate('cars').execPopulate();
        res.status(200).send(req.user.cars);
    } catch (error) {
        res.status(500).send('Error occured at Server side ' + error);
    }
})

//Create an endpoint to fetch car by its ID

router.get('/cars/:id', auth, async (req, res) => {
    // Get details of Car by ID
    const _id = req.params.id;
    try {
        const carDetails = await Car.createNewCar.findOne({
            _id,
            owner: req.user._id
        })
        if (!carDetails)
            // In next phase, we don't    
            // res.status(404).send("No Car found by ID");
            // Here we check if a car exists/owned by an user
            // No need to dend message such as Car not found by ID
            return res.status(404).send('No car exists by such ID which is not owned by User');
        else
            res.status(202).send(carDetails);
    } catch (error) {
        res.status(500).send("Something went wrong while getting your Car by it\'s ID " + error);
    }
})

router.patch('/cars/:id',auth, async (req, res) => {
    // Defining an array of fields in collection    
    const validFieldsInCar = ['carAvailable', 'carName', 'carPrice'];
    //Retrieving parameters in Body of request
    const reqBodyFields = Object.keys(req.body);
    //Let's check for valid fields
    const isValidFields = reqBodyFields.every((carField) => validFieldsInCar.includes(carField))
    if (!isValidFields)
        return res.status(400).send('No field present in Car');
    try {
        // const carDetails = await Car.createNewCar.findById(req.params.id);

        const carDetails=await Car.createNewCar.findOne({_id: req.params.id,owner: req.user._id})
        if (!carDetails)
        return res.status(404).send('No Car found by ID');
        // To update car
        reqBodyFields.forEach((validField) => carDetails[validField] = req.body[validField])
        // To save data
        await carDetails.save();       
        res.status(200).send(carDetails);
    } catch (error) {
        res.status(500).send('Please Check your input\n' + error)
    }
});

// In next phase, we're going to delete Car of individual user
// Here findByIdAndDelete won't be necessary
router.delete('/cars/:id',auth, async (req, res) => {

    try {
        const beforeDeleteCount = await Car.createNewCar.countDocuments({_id: req.params.id,owner: req.user._id});
        // const carDetails = await Car.createNewCar.findByIdAndDelete({_id: req.params.id,owner: req.user._id});
        // Here in above code, findByIdAndDelete() only checks params ID and not owner ID
        // Hence it's going to delete everything that is not owned by User
        const carDetails=await Car.createNewCar.findOneAndDelete({_id: req.params.id,owner: req.user._id})
        if (!carDetails)
            return res.status(404).send('Owner has no such car that has to be discarded');
        const afterDeleteCount = await Car.createNewCar.countDocuments({_id: req.params.id,owner: req.user._id});
        res.status(200).send('Car Deleted successfully\nTotal Cars (Before deletion): ' + beforeDeleteCount + '\t (After deletion): ' + afterDeleteCount);
    } catch (error) {
        res.status(500).send('Error occured check your Input ' + error);
    }
})

module.exports = router