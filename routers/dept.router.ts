import { Router } from "express"
import DeptController from "../controllers/dept.controller"

const deptRouter = Router()
const controller = new DeptController()

deptRouter.get("/", controller.getAllValues)
deptRouter.post("/", controller.setValues)

export default deptRouter
