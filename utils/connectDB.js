import mongoose from "mongoose";
export default async function Connect() {
  if (mongoose.connection.readyState === 1) {
    console.log("already connected");
    return;
  }
  await mongoose.connect("mongodb://localhost:27017/Contact-management");
  console.log("DB successfully connected");
  return;
}
