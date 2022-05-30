const { suma } = require("../functions");

describe("Functions Test", () => {
  test("Sumando 1 más dos debería de dar 3", () => {
    expect(suma(1, 2)).toBe(3);
  });
});
