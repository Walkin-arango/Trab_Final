const { DataTypes } = require('sequelize');
const db = require('../databases/connection'); // Asegúrate de tener un archivo que maneje la conexión

// Definición del modelo de usuario
const User = db.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('administrador', 'docente'), // Roles permitidos
    allowNull: false,
  },
});

module.exports = User;
