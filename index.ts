import express from "express"
import db from "./models/employeetabes"
import env from "dotenv"
env.config()

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())

db.sequelize.sync().then(() =>
  app.listen(PORT, () => {
    console.log(`listening to http://localhot${PORT}`)
  })
)
