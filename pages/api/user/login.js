import jwt from "jsonwebtoken"
import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

const secret_key = "nextdiary"

const loginUser = async (req, res) => {
  try {
    await connectDB()
    const savadUserData = await UserModel.findOne({ email: req.body.email })
    if (savadUserData) {
      if (req.body.password == savadUserData.password) {
        const payload = {
          name: savadUserData.name,
          email: req.body.email,
        }
        const token = jwt.sign(payload, secret_key, { expiresIn: "23h" })
        return res.status(200).json({ message: "ログイン成功", token: token })
      } else {
        return res.status(400).json({ message: "ログイン失敗:パスワードが違います" })
      }
    } else {
      return res.status(400).json({ message: "ログイン失敗:ユーザが未登録です" })
    }
  } catch (err) {
    return res.status(400).json({ message: "ログイン失敗" })
  }
}

export default loginUser