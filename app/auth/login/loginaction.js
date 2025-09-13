"use server"

import user from "@/models/user";
import Connect from "@/utils/connectDB"
import bcrypt from "bcrypt"

export default async function loginAction(prevState , formData ){
    
    const values = Object.fromEntries(formData.entries())
    const {password , email} = values
    await Connect();
    const isUser = await user.findOne({email})
    
    if(!isUser){
        return {error:true , message:"شما هنوز ثبت نام انجام نداده اید " ,values}
    }
    const validPassword = await bcrypt.compare(password , isUser.password)
    if(!validPassword){
        return{error:true , message:"ایمیل یا رمز عبور شما اشتباه هست " , values}
    }

    return {error:false , message:"شما با موفقیت ورود کردید" , values}

}