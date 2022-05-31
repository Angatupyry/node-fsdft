const request = require("supertest");
const app = require("../app");

describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).post("/users").send({
      username: "crolon",
      password: "test",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
    // expect(res.body.data).toHaveLength(1);
    expect(res.body).toHaveProperty("success", true);
  });
});
