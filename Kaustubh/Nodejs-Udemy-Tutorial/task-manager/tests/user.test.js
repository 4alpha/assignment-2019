/** Tip 1: toBe() is like equality operator (===) and not useful in comparing two objects
 *  Tip 2: --runInBand in package.json
 *  Run all tests serially in the current process,
 *  rather than creating a worker pool of child processes that run tests
 * */

const request = require('supertest');

// Import app module defined in app.js

const app = require('../src/app');


// creating a new user

const User = require('../src/models/user');

const {
    userOne,
    userOneId,
    setupDatabase
} = require('./fixtures/db');
// beforeEach() afterEach() are lifecycle method
// As the name suggests, it'll be called before and after each test
// async- await is added as method below is asynchronous
//  and will take time to return result.
// deleteMany() is added to empty database
// All above changes are added in new file db.js
beforeEach(setupDatabase);

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
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    // Here, we're logging in as userOne
    const deletedUser = await User.newUser.findById(userOneId);
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

// Test for uploading picture for user avatar

test('Should upload a picture for user avatar', async () => {

    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        // to send/upload an image or other file in test environment, we use attach
        .attach('avatar', './tests/fixtures/womens-day.jpg')
        //Don't use  send() after attach()
        .expect(200)

    // Let's fetch an user by ID
    const modifiedUser = await User.newUser.findById(userOneId);
    // expect({}).toBe({}) won't return equal result
    /**Compared values have no visual difference.
     *  Note that you are testing for equality with the stricter `toBe` matcher
     *  using `Object.is`. For deep equality only, use `toEqual` instead. */

    expect(modifiedUser.avatar).toEqual(expect.any(Buffer))
})

// A test for updating user fields

test('Should update user for valid fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Vaishnavi Kulkarni'
        })
        .expect(200)
    // Verifying if user has been updated

    const updatedUser = await User.newUser.findById(userOneId);
    expect(updatedUser.name).toEqual('Vaishnavi Kulkarni')
})

// A test for not updating user for invalid fields

test('Should not update user for invalid fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Jalgaon'
        })
        .expect(400)
})