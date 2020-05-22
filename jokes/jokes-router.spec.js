const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("jokes test", () => {
  user = {username: "pizza", password: "password"}

  beforeEach(async () => {
    await db('users').truncate();
  });

  describe("status", () => {
    test("should return (201) status", async() => {
      let token;
      await request(server)
      .post('/api/auth/register')
      .send(user)
      .then(res => {token = res.body.token});
      console.log(token);

      return await request(server)
      .get('/api/auth/register')
      .set({token})
      .then(res => expect(res.status).toBe(200));
    })
    test("should return (401) status", async () => {

    })
  })
})
