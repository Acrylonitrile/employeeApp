import { Router } from "express"
import EmployeeController from "../controllers/employee.controller"

const employeeRouter = Router()
const controller = new EmployeeController()

employeeRouter.get("/", controller.getAllValues)
employeeRouter.post("/", controller.setValues)

export default employeeRouter
