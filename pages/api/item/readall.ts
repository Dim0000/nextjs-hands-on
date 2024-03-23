import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
import { SavedItemDataType, ResReadAllType } from "./types"

const getAllItems = async (req: NextApiRequest, res: NextApiResponse<ResReadAllType>) => {
    try {
        await connectDB()
        const allItems: SavedItemDataType[] = await ItemModel.find()
        return res.status(200).json({ message: "アイテム読み取り成功（all）", allItems: allItems })
    } catch (err) {
        return res.status(400).json({ message: "アイテム読み取り失敗（all）" })
    }
}

export default getAllItems