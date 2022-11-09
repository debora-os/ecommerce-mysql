const express = require('express');
const app = express();
const db = require("./models/db");

app.get("/", async (req, res) => {
    res.send("Página inicial")
});
app.post("/cadastrar", async (req, res) => {
    res.send("Página inicial")
});

app.listen(3000, () => {
    console.log("Server in port 3000: http://localhost:3000");
})