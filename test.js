const request = require('supertest');
const app = require('./index');

describe('Server Launch', () => {
    it('should respond with a status code of 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});