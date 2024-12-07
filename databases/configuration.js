const mongoose = require('mongoose');

// Función para conectar a la base de datos
const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'Peliculas_IUDigital_API', // Nombre de la base de datos
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a la base de datos exitosa!');
    } catch (e) {
        console.error('Error al conectar a la base de datos:', e.message);
        throw new Error('Error de conexión a MongoDB');
    }
};

module.exports = { mongoConn };
