import { Router } from "express"
import DeptManagerController from "../controllers/deptManager.controller"

const employeeRouter = Router()
const controller = new DeptManagerController()

employeeRouter.get("/", controller.getAllValues)
employeeRouter.post("/", controller.setValues)
