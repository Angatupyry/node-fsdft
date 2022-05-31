const request = require("supertest");
const app = require("../app");

describe("Prueba de get de usuarios", () => {
  it("Debería de registrar usuario", async () => {
    const res = await request(app).post("/users").send({
      username: "crolon",
      password: "pass",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body).toHaveProperty("success", true);
    expect(res.body.data).toHaveLength(1);
  });
});
