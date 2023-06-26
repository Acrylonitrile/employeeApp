import { resolveTxt } from "dns"
import DeptService from "../sevices/dept.service"
import { Request, Response } from "express"

const deptService = new DeptService()

interface ITableInputs {
  dept_no: string
  dept_name: string
}

class DeptController {
  getAllValues = async (req: Request, res: Response) => {
    const page = req.query.page
    const pageSize = req.query.pageSize
    console.log(page, pageSize)
    if (page && pageSize) {
      const paginatedResult = await deptService.getAllValues(
        parseInt(page as string),
        parseInt(pageSize as string)
      )
      res.status(201).send(paginatedResult)
      return
    }
    const result = await deptService.getAllValues()
    res.status(201).send(result)
  }
  setValues = async (req: Request, res: Response) => {
    const { dept_no, dept_name }: ITableInputs = req.body
    await deptService.setValues(dept_no, dept_name)
    res.status(201).send("created")
  }
}

export default DeptController
