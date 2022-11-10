const express = require("express");
const db = require("./models/db");

const signup = require('./routes/users/signup');

const app = express();
app.use(express.json());

app.use(signup);

app.listen(3000, () => {
  console.log("Server in port 3000: http://localhost:3000");
});
