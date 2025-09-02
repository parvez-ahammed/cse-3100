const request = require('supertest');
const app = require('../src/index');

describe('Node.js API Tests', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from Simple Node API!');
  });
});