/** Tip 1: toBe() is like equality operator (===) and not useful in comparing two objects
 *  Tip 2: --runInBand in package.json
     Run all tests serially in the current process,
 *  rather than creating a worker pool of child processes that run tests
 *  Tip 3: boolean value should not be in quotes (' ')
 * */
const request = require('supertest');

// Import car module

const cars = require('../src/models/cars');

// Import  app

const app = require('../src/app');

// Import db where database configuration is made

const {
    userOne,
    userOneId,
    setupDatabase,
    userTwo,
    userTwoId,
    carOne,
    carTwo,
    carThree,
    carFour
} = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create a car for user', async () => {
    const response = await request(app)
        .post('/cars')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            carName: 'Audi',
            carPrice: 20000,
            carAvailable: 'true'
            // owner: {
            //     _id: userOneId
            // }
        })
        .expect(201)

    const isNewCar = await cars.createNewCar.findById(response.body._id);
    expect(isNewCar).not.toBeNull();

    expect(isNewCar.carAvailable).toEqual(true);
})

// Getting cars for User

test('Should get all cars for user', async () => {
    const response = await request(app).get('/cars')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    //  console.log(response.body[0],response.body[1]);

    const allCars = await cars.createNewCar.find({
        owner: response.body[0].owner
    });
    // // console.log(allCars);

    expect(allCars).toHaveLength(2);

    // It can be done in following way also in more optimized way
    // expect(response.body.length).toEqual(2);
})

test('Should not delete car by unauthorized user', async () => {
    const response = await request(app).delete(`/cars/${carOne._id}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404)
    // console.log(response.body);

    const isCarPresent = await cars.createNewCar.findById(carOne._id);
    expect(isCarPresent).not.toBeNull();
})

// A test to delete car owned by User
test('Should delete car owned by user',async()=>{
    const response=await request(app).delete(`/cars/${carOne._id}`)
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)

    // Let's check if car is deleted and result is null
    // const isCarDeleted=await cars.createNewCar.findById(carOne._id);
    // expect(isCarDeleted).toBeNull();
})