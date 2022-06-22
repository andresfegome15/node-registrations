
const {Employee} = require('../models/employee.model');

const getEmployees = async (req, res) =>{
    try {
        const user = await Employee.findAll()
        res.status(200).json({
            user
        })
    } catch (error) {
        console.log(error);
    }
};

const getEmployeesbyId = async (req, res) =>{
    const {id} = req.params;
    const employee = await Employee.findOne({where:{id}});
    res.status(200).json({
        status: 'sucess',
        employee,
    })
}

const createEmployee = async(req, res) =>{
    try {
        /* const {entranceTime, exitTime} = req.body; */
        const entranceTime = Date.now()
        const exitTime = Date.now()
        const newEmployee = await Employee.create({entranceTime:entranceTime, exitTime:exitTime})

        res.status(201).json({
            status: 'sucess',
            newEmployee,
        });
        
    } catch (error) {
        console.log(error);
    }
}

const updateExit = async(req, res)=>{
    try {
        const {id} = req.params;
        const exitTime = Date.now();
        const status = 'inactive';
        const upEmployee = await Employee.findOne({where: {id}});
        if(!upEmployee){
            return res.status(404).json({
                status:'error',
                message:'Employee no register'
            })
        }
        await upEmployee.update({exitTime:exitTime, status:status})
        res.status(200).json({
            status:'sucess',
            upEmployee
        });
    } catch (error) {
        console.log(error);
    } 
 };

const cancelEmployee = async(req, res)=>{
    try {
       const {id} = req.params;
        const exitTime = Date.now();
        const status = 'cancel'

        const delitEmployee = await Employee.findOne({where:{id}});

        if(!delitEmployee){
            return res.status(404).json({
                status:'error',
                message:'Employee not fount'
            })
        }

        await delitEmployee.update({exitTime:exitTime, status:status})
        res.status(200).json({
            status:'sucess',
            delitEmployee
        })  
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {getEmployees, getEmployeesbyId, createEmployee, updateExit, cancelEmployee}