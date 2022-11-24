//----------REQUERIMIENTOS-------------------------------------
const express = require("express"); //Traigo la libreria express
const app = express(); //Utilizo express
const path = require("path"); //traigo path
const methodOverride = require('method-override'); //utilizar el metodo put y delete 
const session = require('express-session');
const auditoriaUnoMiddleware = require('./src/middlewares/auditoriaUNO'); //importo middleware
const multer= require("multer");
const {check} = require("express-validator");
//-------------------------IMPORTACION ENRUTADORES------------------------------------------------------
const productsRouter = require("./src/routes/productosRouters"); //se trae el enrutador
const usersRouters = require("./src/routes/usersRouters"); //se trae el enrutador
const cookieParser = require("cookie-parser");
//----------------MIDDLEWARES-----------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, './public')));//vuelve publica la carpeta public
app.use(express.urlencoded({extended:false})); // utilizar el metodo POST
app.use(express.json()); // utilizar el mtodo post
app.use(methodOverride('_method')); //utilizar el metodo put y delete 
app.use(session( {secret: "Este es mi secreto"} )); 
app.use(cookieParser());
app.use(auditoriaUnoMiddleware); //utilizo middleware
//-------------TEMPLATE ENGINE--------------------------------------------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views")); // Define la ubicación de la carpeta de las Vistas
//-------------------------RUTAS------------------------------------------------------
app.use("/", productsRouter); // ruta global de productos
app.use("/", usersRouters); //ruta global para usuarios
//--------MySQL---//

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});



//-------------------SE CARGA EL PUERTO-------------------------------------------------

app.listen(process.env.PORT || 3000, function () {
  console.log("servidor corriendo en puerto 3000");
});
