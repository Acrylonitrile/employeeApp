import { Request, Response, NextFunction } from "express"
import { Model } from "sequelize"

const paginateResults =
  (model: Model) => (req: Request, res: Response, next: NextFunction) => {}
