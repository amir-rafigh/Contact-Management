import mongoose from "mongoose";
export default async function Connect() {
  if (mongoose.connection.readyState === 1) {
    console.log("already connected");
    return;
  }
  try{

    await mongoose.connect(process.env.connecting_db);
    console.log("DB successfully connected");
    return;
  }catch(err){
    console.log(err.message);
    
  }
}
