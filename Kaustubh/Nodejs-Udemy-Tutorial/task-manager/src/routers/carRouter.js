const express = require('express');

//Getting instance of Express

// Importing Mongoose model for Car
const Car = require('../models/cars');
//Creating a new router
const router = new express.Router();



// Creating another route to display Cars and it's details
router.post('/cars', async (req, res) => {
    const newCar = new Car.createNewCar(req.body);

    try {
        await newCar.save();
        res.status(201).send(newCar);
    } catch (error) {
        res.send(400).send('Error occured check the following ');
    }
})



//Create an endpoint to fetch all cars

router.get('/cars', async (req, res) => {
    // Car.createNewCar.find().then((carDetails)=>{
    //     res.status(202).send(carDetails);
    // })
    try {
        const carDetails = await Car.createNewCar.find({});
        if (!carDetails)
            res.status(404).send('No car found by ID');
        else
            res.status(200).send(carDetails);
    } catch (error) {
        res.status(500).send('Error occured at Server side ' + error);
    }
})

//Create an endpoint to fetch car by its ID

router.get('/cars/:id', async (req, res) => {
    // Get details of Car by ID
    try {
        const carDetails = await Car.createNewCar.findById(req.params.id);
        if (!carDetails)
            res.status(404).send("No Car found by ID");
        else
            res.status(202).send(carDetails);
    } catch (error) {
        res.status(500).send("Something went wrong while getting your Car by it\'s ID " + error);
    }
})

router.patch('/cars/:id', async (req, res) => {
    // Defining an array of fields in collection
    try {
        const validFieldsInCar = ['carAvailable', 'carName', 'carPrice'];
        //Retrieving parameters in Body of request
        const reqBodyFields = Object.keys(req.body);
        //Let's check for valid fields
        const isValidFields = reqBodyFields.every((carField) => validFieldsInCar.includes(carField))
        if (!isValidFields)
            return res.status(400).send('No field present in Car');
        // Using await here 
        // const carDetails=await Car.createNewCar.findByIdAndUpdate(req.params.id,req.body,{new: true,runValidators: true})
        const carDetails = await Car.createNewCar.findById(req.params.id);

        // To update car
        reqBodyFields.forEach((validField) => carDetails[validField] = req.body[validField])
        // To save data
        await carDetails.save();
        if (!carDetails)
            return res.status(404).send('No Car found by ID');
        res.status(200).send(carDetails);
    } catch (error) {
        res.status(500).send('Please Check your input\n' + error)
    }
});

router.delete('/cars/:id', async (req, res) => {

    try {
        const beforeDeleteCount = await Car.createNewCar.countDocuments();
        const carDetails = await Car.createNewCar.findByIdAndDelete(req.params.id);
        if (!carDetails)
            return res.status(404).send('No Car found by ID');
        const afterDeleteCount = await Car.createNewCar.countDocuments();
        res.status(200).send('Car Deleted successfully\nTotal Cars (Before deletion): ' + beforeDeleteCount + '\t (After deletion): ' + afterDeleteCount);
    } catch (error) {
        res.status(500).send('Error occured check your Input ' + error);
    }
})

module.exports = router