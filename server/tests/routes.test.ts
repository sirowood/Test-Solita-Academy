import request from 'supertest';
import app from '../src/app';

const api = request(app);

describe("Health and unknown end point", () => {
  it('GET /health should return "ok" with status code 200', async () => {
    const response = await api.get('/health');

    expect(response.status).toBe(200);
    expect(response.text).toEqual('ok');
  });

  it ('GET /unknowendpoint should return an object with status code 404', async () => {
    const response = await api.get('/unknownendpoint');
    
    expect(response.status).toBe(404);
    expect(response.body.error).toEqual('Unknown endpoint');
  })
})