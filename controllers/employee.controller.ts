import EmployeeService from "../sevices/employee.service"
import { Request, Response } from "express"

const employeeService = new EmployeeService()

interface ITableInputs {
  emp_no: number
  birth_date: string
  first_name: string
  last_name: string
  gender: "M" | "F"
  hire_date: string
}

class EmployeeController {
  getAllValues = async (req: Request, res: Response) => {
    return await employeeService.getAllValues()
  }
  setValues = async (req: Request, res: Response) => {
    const {
      emp_no,
      birth_date,
      first_name,
      last_name,
      gender,
      hire_date
    }: ITableInputs = req.body
    return await employeeService.setValues(
      emp_no,
      birth_date,
      first_name,
      last_name,
      gender,
      hire_date
    )
  }
}

export default EmployeeController
