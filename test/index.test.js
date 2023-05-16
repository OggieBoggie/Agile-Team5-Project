const request = require('supertest');
const app = require('../index');

describe('Simple Endpoint tests', () => {
    describe('Redirect When not authenticated', () => {
        it('should redirect if not logged in for home', async () => {
            const response = await request(app).get('/home');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });
        it('should redirect if not logged in for progress', async () => {
            const response = await request(app).get('/progress');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });
        it('should redirect if not logged in for workout', async () => {
            const response = await request(app).get('/workout');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });
        it('should redirect if not logged in for selectWorkout', async () => {
            const response = await request(app).get('/selectworkout');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });
        it('should redirect if not logged in for addGym', async () => {
            const response = await request(app).get('/addGym');
            expect(response.statusCode).toBe(302);
            expect(response.headers.location).toBe('/login');
        });

    });
})
