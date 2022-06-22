const {app} = require('./app')

// Utilidades

const {db} = require('./utils/database.utils');

db.authenticate()
    .then(()=> console.log("conexion"))
    .catch(error=> console.log(error))

    db.sync()
    .then(()=>console.log("db async"))
    .catch(error => console.log(error))

    app.listen(4000, ()=>{
        console.log("express...");
    })