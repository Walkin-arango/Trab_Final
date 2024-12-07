// Importación de módulos
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { mongoConn } = require("./databases/configuration");

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la app
const app = express();

// Conexión a la base de datos
(async () => {
  try {
    await mongoConn();
    console.log("Conexión exitosa a la base de datos.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
    process.exit(1); // Detener la aplicación si no hay conexión
  }
})();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*", // Cambiar a un dominio específico en producción
  })
);

// Rutas
const generos = require("./routes/genero");
const directores = require("./routes/director");
const medias = require("./routes/media");
const productoras = require("./routes/productora");
const tipos = require("./routes/tipo");

app.use("/api/v1/generos", generos);
app.use("/api/v1/directores", directores);
app.use("/api/v1/medias", medias);
app.use("/api/v1/productoras", productoras);
app.use("/api/v1/tipos", tipos);

// Exportar la app
module.exports = app;
