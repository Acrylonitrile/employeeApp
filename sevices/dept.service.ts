import db from "../models/employeetabes"
const DeptTable = db.DeptTable

class DeptService {
  getAllValues = async (page?: number, pageSize?: number) => {
    if (page && pageSize) {
      const result = await DeptTable.findAll({
        limit: pageSize,
        offset: page * pageSize
      })
      return result
    } else return await DeptTable.findAll()
  }
  setValues = async (dept_no: string, dept_name: string) => {
    await DeptTable.create({ dept_no, dept_name })
    console.log("created")
  }
}

export default DeptService
