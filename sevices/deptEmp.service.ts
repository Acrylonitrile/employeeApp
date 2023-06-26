import db from "../models/employeetabes"
const DeptEmpTable = db.DeptEmpTable

class DeptEmpService {
  getAllValues = async () => {
    const [result] = await DeptEmpTable.findAll()
    return result
  }
  setValues = async (
    emp_no: number,
    dept_no: string,
    from_date: string,
    to_date: string
  ) => {
    await DeptEmpTable.create({ emp_no, dept_no, from_date, to_date })
    console.log("created")
  }
}

export default DeptEmpService
