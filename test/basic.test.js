const test = require("node:test");
const assert = require("node:assert");
const { formatPrice } = require("../src/cart");
const { searchProducts } = require("../src/products");
const { greet } = require("../src/users");

test("formatPrice shows pounds with two decimals", () => {
  assert.strictEqual(formatPrice(5), "£5.00");
});

test("searchProducts finds an exact name", () => {
  const results = searchProducts("Laptop");
  assert.ok(results.some((p) => p.name === "Laptop"));
});

test("greet welcomes a user by name", () => {
  assert.strictEqual(greet({ name: "Sam" }), "Welcome back, Sam!");
});
