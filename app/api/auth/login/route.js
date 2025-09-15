import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import user from "@/models/user";
import Connect from "@/utils/connectDB";
import bcrypt from "bcrypt";

export async function POST(req) {
  const data = await req.json();
  const { email, password } = data;
  if (!password || !email) {
    return Response.json({
      error: true,
      message: "ابتدا شما باید فیلد هارا پر کنید ",
    });
  }
  await Connect();
  const isUser = await user.findOne({ email });

  if (!isUser) {
    return Response.json({
      error: true,
      message: "شما هنوز ثبت نام انجام نداده اید ",
    });
  }
  const validPassword = await bcrypt.compare(password, isUser.password);
  if (!validPassword) {
    return Response.json({
      error: true,
      message: "ایمیل یا رمز عبور شما اشتباه هست ",
    });
  }
  const token = jwt.sign({ email:isUser.email, id:isUser._id.toString() }, process.env.secret_key, {
    expiresIn: "2d",
  });
  const res = NextResponse.json({ error: false, message: "ورود موفق" })
  res.cookies.set("auth_token" , token , {
    httpOnly:true,
    sameSite:"strict",
    path:"/",
    maxAge:60*60*24*2

  })
  return res

}
