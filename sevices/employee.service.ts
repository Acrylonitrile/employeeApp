import db from "../models/employeetabes"
const EmployeeTable = db.EmployeeTable

class EmployeeService {
  getAllValues = async () => {
    const [result] = await EmployeeTable.findAll()
    return result
  }
  setValues = async (
    emp_no: number,
    birth_date: string,
    first_name: string,
    last_name: string,
    gender: "M" | "F",
    hire_date: string
  ) => {
    await EmployeeTable.create({
      emp_no,
      birth_date,
      first_name,
      last_name,
      gender,
      hire_date
    })
    console.log("created")
  }
}

export default EmployeeService
