import sequelize from "."
import { DataTypes, Sequelize } from "sequelize"

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  EmployeeTable: sequelize.define("employees", {
    emp_no: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      validate: {
        notEmpty: true
      }
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING({ length: 14 }),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING({ length: 16 }),
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM("M", "F"),
      allowNull: false
    },
    hire_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }),

  DeptTable: sequelize.define("departments", {
    dept_no: {
      type: DataTypes.CHAR({ length: 4 }),
      primaryKey: true,
      allowNull: false
    },
    dept_name: {
      type: DataTypes.STRING({ length: 40 }),
      unique: true
    }
  }),

  DeptEmpTable: sequelize.define("dept_emp", {
    emp_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dept_no: {
      type: DataTypes.CHAR({ length: 4 }),
      allowNull: false,
      primaryKey: true
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }),

  DeptManagerTable: sequelize.define("dept_manager", {
    dept_no: {
      type: DataTypes.CHAR({ length: 4 }),
      allowNull: false,
      primaryKey: true
    },
    emp_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  })
}

db.DeptTable.hasMany(db.DeptManagerTable)
db.DeptTable.hasMany(db.DeptEmpTable)
db.EmployeeTable.hasMany(db.DeptEmpTable)
db.EmployeeTable.hasMany(db.DeptManagerTable)

db.DeptManagerTable.belongsTo(db.DeptTable)
db.DeptManagerTable.belongsTo(db.EmployeeTable)
db.DeptEmpTable.belongsTo(db.DeptTable)
db.DeptEmpTable.belongsTo(db.EmployeeTable)

export default db
