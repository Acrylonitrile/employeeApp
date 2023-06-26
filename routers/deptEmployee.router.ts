import { Router } from "express"
import DeptEmpController from "../controllers/deptEmployee.controller"

const employeeRouter = Router()
const controller = new DeptEmpController()

employeeRouter.get("/", controller.getAllValues)
employeeRouter.post("/", controller.setValues)
