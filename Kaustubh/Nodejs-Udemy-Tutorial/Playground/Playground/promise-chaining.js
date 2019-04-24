require('../src/db/mongoose');
const car=require('../src/models/cars')

//Remove a car by ID and return a count of cars that are not available
// car.createNewCar.findByIdAndDelete( '5ca5a84e2c65b12000e02f45')
// .then((deletedCar)=>{
//     //If car not found by ID
//     if(!deletedCar)
//     console.log('Car not found');
//     else
//     {
//         console.log('Number of car(s) deleted ',deletedCar);
//         return car.createNewCar.countDocuments({carAvailable: false});
//     }
// }).then((carsAvailable)=>{console.log('Unavailable Cars are ',carsAvailable)
// }).catch((error)=>console.log('Something went wrong ',error))

const deleteAndCount= async(id)=>{
    //below you can also use only await by await car.createNewCar.findByIdAndDelete(id);
    //variable deletedCar is only taken so that we can use it later
    const deletedCar=await car.createNewCar.findByIdAndDelete(id);
    const count=await car.createNewCar.countDocuments({carAvailable: false});
    return count;
}

deleteAndCount('5ca5d5b2db736d2c57fe1235').then((totalCount)=>{
    console.log('Total Count of car(s) ',totalCount);    
}).catch((err)=>console.log('Error is ',err)
);
