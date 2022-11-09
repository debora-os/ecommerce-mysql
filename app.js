const express = require("express");
const app = express();
const db = require("./models/db");
const User = require("./models/User");

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Página inicial");
});
app.post("/cadastrar", async (req, res) => {

  await User.create(req.body)

    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Usuario Cadastrado",
      });
    })
    .catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuario não Cadastrado",
          });
    });

});

app.listen(3000, () => {
  console.log("Server in port 3000: http://localhost:3000");
});
