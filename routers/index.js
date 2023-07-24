const  express = require("express");
const  autores = require("./autor_route.js");
const  categorias = require("./categoria_route.js");
const  editoriales = require("./editorial_route.js");
const  estados = require("./estado_libro_route.js");
const  libros = require ("./libros_route.js");
const  prestamos = require("./prestamos_route.js");
const  reservas = require("./reserva_route.js");
const  usuarios = require("./usuarios_route.js");

function routerApi(app){

  const router = express.Router();
  app.use('/api/v1', router)

  router.use('/autores',autores);
  router.use('/categorias',categorias);
  router.use('/editoriales',editoriales);
  router.use('/estados',estados);
  router.use('/libros',libros);
  router.use('/prestamos',prestamos);
  router.use('/reservas',reservas);
  router.use('/usuarios',usuarios);
};


module.exports = routerApi;
