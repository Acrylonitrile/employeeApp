import db from "../models/employeetabes"
const DeptTable = db.DeptTable

class DeptService {
  getAllValues = async () => {
    const [result] = await DeptTable.findAll()
    return result
  }
  setValues = async (dept_no: string, emp_no: number) => {
    await DeptTable.create({ dept_no, emp_no })
    console.log("created")
  }
}

export default DeptService
