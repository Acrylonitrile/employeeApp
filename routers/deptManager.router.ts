import { Router } from "express"
import DeptManagerController from "../controllers/deptManager.controller"

const deptManagerRouter = Router()
const controller = new DeptManagerController()

deptManagerRouter.get("/", controller.getAllValues)
deptManagerRouter.post("/", controller.setValues)

export default deptManagerRouter
