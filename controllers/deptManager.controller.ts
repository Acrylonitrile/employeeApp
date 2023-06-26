import DeptManagerService from "../sevices/deptManager.service"
import { Request, Response } from "express"

const deptManagerService = new DeptManagerService()

interface ITableInputs {
  dept_no: string
  emp_no: number
  from_date: string
  to_date: string
}

class DeptManagerController {
  getAllValues = async (req: Request, res: Response) => {
    return await deptManagerService.getAllValues()
  }
  setValues = async (req: Request, res: Response) => {
    const { dept_no, emp_no, from_date, to_date }: ITableInputs = req.body
    return await deptManagerService.setValues(
      dept_no,
      emp_no,
      from_date,
      to_date
    )
  }
}

export default DeptManagerController
