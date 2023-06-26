import { Router } from "express"
import DeptController from "../controllers/dept.controller"

const employeeRouter = Router()
const controller = new DeptController()

employeeRouter.get("/", controller.getAllValues)
employeeRouter.post("/", controller.setValues)
