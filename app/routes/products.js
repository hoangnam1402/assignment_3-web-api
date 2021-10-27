const { createProducts, getProducts } = require("../controller/products");

module.exports = function (app) {
  app.get("/", getProducts);
  app.post("/", createProducts);
};