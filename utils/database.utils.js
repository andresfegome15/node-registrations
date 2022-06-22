const {Sequelize, DataTypes} = require('sequelize')

//conexión a base de datos

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'acuario1',
    port: 5432,
    database: 'entregable1',
    logging:false
});
module.exports = {db, DataTypes};