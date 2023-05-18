const request = require('supertest');
const {app, server} = require('../index');
const { describe, afterAll } = require('@jest/globals');


afterAll((done) => {
  server.close(() => {
    done();
  });
});

describe('Simple Endpoint Tests', () => {
    describe('Redirect When not authenticated', () => {
        it('should redirect to /login if not logged in for home', async () => {
            const response = await request(app).get('/home');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });
        it('should redirect to /login if not logged in for progress', async () => {
            const response = await request(app).get('/progress');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });
        it('should redirect to /login if not logged in for workout', async () => {
            const response = await request(app).get('/workout');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });
        it('should redirect to /login if not logged in for selectWorkout', async () => {
            const response = await request(app).get('/selectworkout');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });
        it('should redirect to /login if not logged in for addGym', async () => {
            const response = await request(app).get('/addGym');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });

    });
    describe('Login Page Check', () => {
        it('should return status code 200', async () => {
            const response = await request(app).get('/login');
            expect(response.statusCode).toBe(200);
        });
        it('should return contents of login page (login)', async () => {
            const response = await request(app).get('/login');
            expect(response.text).toContain('<h2>Login</h2>');
        })
        it('should return the inputs for email an password on login page', async () => {
            const response = await request(app).get('/login');
            expect(response.text).toContain('<label for="email">Email</label>')
            expect(response.text).toContain('<label for="password">Password</label>')
        })
    });
    describe('Register Page Check', () => {
        it('should return status code 200', async () => {
            const response = await request(app).get('/register')
            expect(response.statusCode).toBe(200);
        });
        it('finds the gym account button on the register page', async () => {
            const response = await request(app).get('/register')
            expect(response.text).toContain('<button id="gymAccountButton">Gym Account</button>')
        });
        it('finds the user account button on the register page', async () => {
            const response = await request(app).get('/register')
            expect(response.text).toContain('<button id="userAccountButton">User Account</button>')
        });
        it('post request test and redirects user to login page', async () => {
            const response = await request(app)
                .post('/register')
                .send({
                    name: 'Lucas Timothy',
                    email: 'lukatim@gmail.com',
                    password: 'xdd',
                    gymAccount: false,
                });

            expect(response.statusCode).toBe(302);
        });
    });
});
