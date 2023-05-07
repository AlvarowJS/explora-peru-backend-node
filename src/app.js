//* Dependencias
const express = require("express");
// const passport = require("passport");
// const path = require('path')

// Archivos de rutas\
const noticiasRouter = require('./noticias/noticias.router').router;


// BD
const { db } = require('./utils/database')

// COnfiguracion inicial
const app = express();

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch(err => console.log(err))

app.use("/api/v3/noticias", noticiasRouter)

app.listen(8001, () => {
    console.log("Server started at port 8001");
  });

exports.default = app
exports.app = app
module.exports = app