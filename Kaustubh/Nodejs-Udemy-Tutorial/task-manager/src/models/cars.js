const mongoose=require('mongoose');

const carSchema=new mongoose.Schema({
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
const Car=mongoose.model('Car',carSchema)

module.exports={
    createNewCar:Car
}