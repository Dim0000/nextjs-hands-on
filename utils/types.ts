import type { NextApiRequest, NextApiResponse } from "next"
import { Types } from "mongoose"

export interface ItemDataType {
  title: string
  description: string
  name: string
  email: string
  createDate: string
  updateDate: string
}

export interface UserDataType {
  name: string
  email: string
  password: string
}

export interface DecodedType {
  name: string
  email: string
}

export interface ExtendNextApiRequestAuth extends NextApiRequest {
  headers: {
    authorization: string
  }
  body: {
    name: string
    email: string
  }
}

export interface ResMessageType {
  message: string
  token?: string
}

export interface ExtendNextApiRequestUser extends NextApiRequest {
  body: UserDataType
}

export interface SavedUserDataType extends UserDataType {
  _id: Types.ObjectId
}

export interface SavedItemDataType extends ItemDataType {
  _id: Types.ObjectId
}

export interface ResReadAllType {
  message: string
  allItems?: SavedItemDataType[]
}

export interface ExtendNextApiRequestItem extends NextApiRequest {
  body: ItemDataType
}

export interface ResReadSingleType {
  message: string
  singleItem?: SavedItemDataType
}

export interface ReadSingleDataType {
  singleItem: {
    _id: string
    title: string
    description: string
    name: string
    email: string
    createDate: string
    updateDate: string
  }
}

export interface ReadAllDataType {
  allItems: {
    _id: string
    title: string
    description: string
    name: string
    email: string
    createDate: string
    updateDate: string
  }[]
}
