import { Router } from "express"
import DeptEmpController from "../controllers/deptEmployee.controller"

const deptEmpRouter = Router()
const controller = new DeptEmpController()

deptEmpRouter.get("/", controller.getAllValues)
deptEmpRouter.post("/", controller.setValues)

export default deptEmpRouter
