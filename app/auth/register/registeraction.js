"use server";

import user from "@/models/user";
import Connect from "@/utils/connectDB";
import bcrypt from "bcrypt"
import { redirect } from "next/navigation";

export default async function registerAction(prevState, formData) {
  
  const values = Object.fromEntries(formData.entries());
  const { firstName, lastName, email, phoneNumber, password , rePassword ,role } = values;

  if( !firstName || !lastName || !email || !phoneNumber || !password || !rePassword){
    return {error:true , message:"شما باید همه فیلد ها پرکنید" , values}
  }
  if (lastName.length < 3 || firstName.length < 3) {
    return { error: true, message: "اسم یا فامیل خیلی کوچک هست" , values};
  }
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { error: true, message: "ایمیل نامعتبر هست" , values};
  }

  const phoneRegex = /^09\d{9}$/;
  if(!phoneRegex.test(phoneNumber)){
    return {error:true , message:"شماره موبایل نامعتبر هست" , values}
  }

  if(password !== rePassword){
    return {error:true , message:"رمز عبور باهم تشابه ندارند" , values}
  }

  await Connect();
  const isUser = await user.findOne({email})
  if(isUser){
    return {error:true , message:"این کاربر قبلا ثبت نام کرده است " , values}
  }
  const hash_pass = await bcrypt.hash(password , 10)
  const count_user = await user.countDocuments()
  await user.create({...values , password:hash_pass , role:count_user>0?"user":"admin"})

  return { error: false, message: "ثبت نام شما با موفقیت انجام شد " , values:{} };
}

