const express = require("express");

const employeeRouter = express.Router();

const {
  getEmployees,
  getEmployeesbyId,
  createEmployee,
  updateExit,
  cancelEmployee,
} = require("../controller/employee.contoller");

employeeRouter.get("/employee", getEmployees);

employeeRouter.get("/employee/:id", getEmployeesbyId);

employeeRouter.post("/employee", createEmployee);

employeeRouter.patch("/employee/:id", updateExit);

employeeRouter.delete("/employee/:id", cancelEmployee);

module.exports = { employeeRouter };
