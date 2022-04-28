require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT;
app.get("/", (req, res) => {
  return res.json({ success: "OK" });
});

app.post("/bfhl", (req, res) => {
  const bodyData = req.body.data;
  const response = {};
  const validNumbers = bodyData.filter(Number);
  const result = [];

  bodyData.forEach(function (item) {
    let alpha = item.replace(/[^a-zA-Z]+/g, "");
    result.push(alpha);
  });
  const alphabets = result.filter((e) => e);
  response.is_success = true;
  response.userId = "john_doe_17091999";
  response.email = "john@xyz.com";
  response.roll_number = "ABCD123";
  response.numbers = validNumbers;
  response.alphabets = alphabets;

  return res.json({ response });
});

app.listen(PORT, (req, res) => {
  console.log("Server is running on port " + PORT);
});
