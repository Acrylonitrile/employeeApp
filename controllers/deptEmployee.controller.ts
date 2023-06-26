import DeptEmpService from "../sevices/deptEmp.service"
import { Request, Response } from "express"

const deptEmpService = new DeptEmpService()

interface ITableInputs {
  dept_no: string
  emp_no: number
  from_date: string
  to_date: string
}

class DeptEmpController {
  getAllValues = async (req: Request, res: Response) => {
    return await deptEmpService.getAllValues()
  }
  setValues = async (req: Request, res: Response) => {
    const { emp_no, dept_no, from_date, to_date }: ITableInputs = req.body
    return await deptEmpService.setValues(emp_no, dept_no, from_date, to_date)
  }
}

export default deptEmpService
