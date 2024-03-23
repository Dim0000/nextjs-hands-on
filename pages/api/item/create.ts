import type { NextApiResponse } from "next"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"
import { ExtendNextApiRequestItem, ResReadAllType } from "./types"

const createItem = async (req: ExtendNextApiRequestItem, res: NextApiResponse<ResReadAllType>) => {
  try {
    await connectDB()
    connectDB()
    await ItemModel.create(req.body)
    return res.status(200).json({ message: "アイテム作成成功" })
  } catch (err) {
    return res.status(400).json({ message: "アイテム作成失敗" })
  }
}

export default auth(createItem)