const express = require('express');

//Rutas

const {employeeRouter}= require('./routes/employee.routes')


const app = express();
app.use(express.json())

app.use('/', employeeRouter)


module.exports = {app}