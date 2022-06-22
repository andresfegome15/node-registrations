const {db, DataTypes } = require('../utils/database.utils')


// creacion de modelo empleado

const Employee = db.define('employee', {
    id:{primaryKey:true,type:DataTypes.INTEGER,autoIncrement:true,allowNull:false},
    entranceTime:{type:DataTypes.DATE, allowNull:false},
    exitTime:{type:DataTypes.DATE, allowNull:true},
    status:{type:DataTypes.STRING, allowNull:false,  defaultValue: 'active'}
});

module.exports = {Employee};