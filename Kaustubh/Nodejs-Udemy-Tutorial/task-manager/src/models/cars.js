const mongoose=require('mongoose');
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

module.exports={
    createNewCar:Car
}