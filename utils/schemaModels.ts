import mongoose from "mongoose"
import { ItemDataType, UserDataType } from "./types"

const Schema = mongoose.Schema

const ItemSchema = new Schema<ItemDataType>({
  title: String,
  description: String,
  name: String,
  email: String,
  createDate: String,
  updateDate: String,
})

const UserSchema = new Schema<UserDataType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
})

export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);
export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);