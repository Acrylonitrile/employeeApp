import db from "../models/employeetabes"
const DeptManagerTable = db.DeptManagerTable

class DeptManagerService {
  getAllValues = async () => {
    const [result] = await DeptManagerTable.findAll()
    return result
  }
  setValues = async (
    dept_no: string,
    emp_no: number,
    from_date: string,
    to_date: string
  ) => {
    await DeptManagerTable.create({ dept_no, emp_no, from_date, to_date })
    console.log("created")
  }
}

export default DeptManagerService
