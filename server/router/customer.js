const express = require("express");
const RetailData = require("../data/customerData");
const customerRouter = express.Router();

// Rest APIs
customerRouter.get("/", function (req, res) {
  res.json({ RetailData });
});

module.exports = customerRouter;
