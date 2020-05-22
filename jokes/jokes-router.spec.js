const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("jokes test", () => {
  user = {username: "pizza", password: "password"}

  beforeEach(async () => {
    await db('users').truncate();
  });

  describe("status", () => {
    beforeEach(async () => {
      await request(server)
      .post('/api/auth/register')
      .send(user)
    });
    beforeEach(async () => {
    await request(server)
    .post("/api/auth/login")
    .send(user)
    .then(res => {token = res.body.token});
    });

    let token;

    test("should return (200) status", async() => {

      return await request(server)
      .get('/api/jokes')
      .set({authorization: token})
      .then(res => expect(res.status).toBe(200));
    })
    test("should return (401) status", async () => {
      return await request(server)
      .get('/api/jokes')
      .set({authorization: 42})
      .then(res => expect(res.status).toBe(401));

    })
    test("should return (400) status", async () => {
      return await request(server)
      .get('/api/jokes')
      .set({})
      .then(res => expect(res.status).toBe(400));

    })
  })
})
