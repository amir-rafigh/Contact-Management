import user from "@/models/user"
import Connect from "@/utils/connectDB"
import axios from "axios"
import { headers } from "next/headers"
export async function POST(req){
    const code = Math.floor(Math.random()*9000 + 1000)
    const time = new Date().getTime() + 120000
    const data = await req.json()
    const{phoneNumber} = data
    
    await Connect()
    const isUser = await user.findOne({phoneNumber})
    if(!isUser){
        return Response.json({error:true , message:"لطفا ابتدا ثبت نام نمایید"})
    }

    if(!phoneNumber){
        return Response.json({error:true , message:"لطفا شماره موبایل را وارد کنید"})
    }
    const phoneRegex = /^09\d{9}$/;
    if(!phoneRegex.test(phoneNumber)){
        return Response.json({error:true , message:"لطفا شماره موبایل معتبری وارد نمایید"})
    }
    try{

        await axios.post("https://api.sms.ir/v1/send/likeToLike",
            {
                lineNumber: "30002108003898",
                MessageTexts: [
                    `کد تایید شما برای سایت ${code} next1code.ir`              
                ],
                Mobiles: [
                    `${phoneNumber}`           
                ],
                SendDateTime: null
            },
            {headers: {
                'Content-Type': 'application/json',
                'ACCEPT' : "application/json",
                'X-API-KEY': process.env.X_API_KEY
            }},
        )  
        await user.findByIdAndUpdate(isUser._id , {code , time})
       return Response.json({error:false , message:"کد برای شما ارسال شد"})
        
        
    }catch(error){
        if (error.response) {
            // Server responded with a status other than 2xx
            console.log("Response error:", error.message);
            return Response.json({error:true , message:"مشکل در سرور"})
        } else if (error.request) {
            // No response was received
            console.log("Request error:", error.message);
            return Response.json({error:true , message:"مشکل در سرور"})
        } else {
            // Something went wrong setting up the request
           console.log("Error:", error.message);
            return Response.json({error:true , message:"مشکل در سرور"})
        }
    }

}

