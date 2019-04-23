const request = require('supertest');

// Import app module defined in app.js

const app = require('../src/app');

test('should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Kaustubh',
        email: 'kaustubh@example.com',
        password: 'Helloworld123'
    }).expect(201)
});