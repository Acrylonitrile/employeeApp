import { Router } from "express"
import deptRouter from "./dept.router"
import deptEmpRouter from "./deptEmployee.router"
import deptManagerRouter from "./deptManager.router"
import employeeRouter from "./employee.router"

const mainRouter = Router()

mainRouter.use("/dept", deptRouter)
mainRouter.use("/deptemp", deptEmpRouter)
mainRouter.use("/deptmanager", deptManagerRouter)
mainRouter.use("/deptemployee", employeeRouter)

export default mainRouter
