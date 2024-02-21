const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it('responds with "Hello World"', async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Hello World");
    expect(response.status).toBe(200);
  });
});