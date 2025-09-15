import user from "@/models/user";
import Connect from "@/utils/connectDB";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json();
  const { phoneNumber, code } = res;
  if (!code) {
    return Response.json({ error: true, message: "ابتدا کد را وارد نمایید " });
  }
  await Connect();
  const isUser = await user.findOne({ phoneNumber });
  if (code !== isUser.code) {
    return Response.json({ error: true, message: "کد درست نیست" });
  }
  if (new Date().getTime() > isUser.time) {
    return Response.json({ error: true, message: "کد منقضی شده است " });
  }
  const token = jwt.sign(
    { email: isUser.email, id: isUser._id.toString() },
    process.env.secret_key,
    { expiresIn: "2d" }
  );
  const res_cookies = NextResponse.json({error:false , message:"ورود با موفقیت"})
  res_cookies.cookies.set("auth_token" , token , {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 2,
  })



  return res_cookies;
}
