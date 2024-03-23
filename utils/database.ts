import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Success: Connected to MongoDB")
  } catch (err) {
    console.log("Failure: Unconected to MongoDB")
    throw new Error()
  }

}

export default connectDB