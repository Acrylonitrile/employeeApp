import DeptService from "../sevices/dept.service"
import { Request, Response } from "express"

const deptService = new DeptService()

interface ITableInputs {
  dept_no: string
  emp_no: number
}

class DeptController {
  getAllValues = async (req: Request, res: Response) => {
    return await deptService.getAllValues()
  }
  setValues = async (req: Request, res: Response) => {
    const { dept_no, emp_no }: ITableInputs = req.body
    return await deptService.setValues(dept_no, emp_no)
  }
}

export default DeptController
