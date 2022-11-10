const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("ecommerce", "root", "Dragonite1@", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log("Sucesso")
}).catch(function(){
    console.log("erro conecção")
})

module.exports = sequelize; 