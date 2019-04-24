const request = require('supertest');

// Import app module defined in app.js

const app = require('../src/app');

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
// creating a new user

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
const User = require('../src/models/user');
// beforeEach() afterEach() are lifecycle method
// As the name suggests, it'll be called before and after each test
// async- await is added as method below is asynchronous
//  and will take time to return result.
// deleteMany() is added to empty database
beforeEach(async () => {
    await User.newUser.deleteMany();
    await new User.newUser(userOne).save();
})

afterEach(() => {
    console.log("AfterEach called");
})

test('should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Kaustubh',
        email: 'kaustubh@example.com',
        password: 'Helloworld123'
    }).expect(201)

    // Assert that the db (state) was changed
    // Getting user by passing id from response.body
    const newUser = await User.newUser.findById(response.body.user._id);
    expect(newUser).not.toBeNull();

    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Kaustubh',
            email: 'kaustubh@example.com'
        },
        token: newUser.tokens[0].token
    })

    // Let's check that the password we enter is not equal to password we receive as a response
    expect(newUser.password).not.toBe('Helloworld123');
});

// Test for logging in User
// In next phase of test, we validate for new token
test('Should login user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    //We've to get user,first 
    const user = await User.newUser.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token)
})

// Test for login failure

test('Should not login non existent user', async () => {
    await request(app).post('/users/login').send({
        email: 'abc@example.com',
        password: 'hellothere1234'
    }).expect(400)
})

// Getting profile for User using authentication key

test('Should get user profile using authentication', async () => {
    await request(app)
        .get('/users/me') //Below we need to set header so that request is processed through an authorization
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
})

// Getting no profile for not authenticating

test('Should not get user profile using unauthorized key', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

// Test for deleting an account

test('Should delete an user account', async () => {
    const response = await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
        // Here, we're logging in as userOne
        const deletedUser=await User.newUser.findById(userOneId);
        expect(deletedUser).toBeNull();
})

// Test for not deleting user profile on unauthorized request

test('Should not delete an user profile on unauthorized request', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})
// afterEach(()=>console.log(userOne));