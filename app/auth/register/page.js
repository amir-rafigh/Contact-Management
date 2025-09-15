"use client"
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import registerAction from "./registeraction";
import { ToastContainer, toast } from 'react-toastify';
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

import Link from "next/link";
const initialState = {error:null , message:"" , values:null}

export default function Register() {
    const [state , formAction] = useActionState(registerAction , initialState)
    const router = useRouter()
    const [showpass, setShowpass] = useState(false);

    useEffect(()=>{
     if(state.error===false){
      toast.success(state.message)
      router.push("/auth/login")
     }
     else if(state.error === true){
      toast.error(state.message)
     }
    },[state])


  return (
    <div className="register_container bg-gradient-to-b from-[#5222d0] to-transparent flex  justify-center items-center h-full w-full">

      <div className="mobile_container flex flex-col  w-full md:w-md lg:w-xl justify-center items-center gap-5 p-4">
        <div className="title text-center lalezar text-4xl">
          <h1>مدیریت مخاطب های شما</h1>
        </div>

        <form action={formAction} className="fieldset bg-base-200 border-[#3f3d58]  items-center  rounded-box w-full  border-2 p-4">
               

            <legend className="fieldset-legend text-3xl">ثبت نام</legend>

            <label className="label">نام</label>
            <input type="text" className="input  w-full" name="firstName" placeholder="نام" defaultValue={state.values?.firstName||""}/>

            <label className="label">نام خانوادگی</label>
            <input type="text" className="input  w-full" name="lastName" placeholder="نام خانوادگی" defaultValue={state.values?.lastName || ""} />

            <label className="label">ایمیل</label>
            <input type="email" className="input  w-full" name="email" placeholder="ایمیل" defaultValue={state.values?.email||""} />

            <label className="label">شماره موبایل</label>
            <input type="number" className="input  w-full" name="phoneNumber" placeholder="شماره موبایل" defaultValue={state.values?.phoneNumber||""}/>

            <label className="label">رمز عبور</label>
            <div className="relative w-full">
              <input type={showpass?"text":"password"} className="input  w-full" name="password" placeholder="رمز عبور" defaultValue={state.values?.password||""}/>
              {showpass?<FiEye onClick={()=>setShowpass(!showpass)} size={22}  className="absolute left-2 top-1/3 z-10"/>:<FiEyeOff onClick={()=>setShowpass(!showpass)} size={22}  className="absolute left-2 top-1/3 z-10"/>}

            </div>

            <label className="label"> تکرار رمز عبور</label>
            <div className="relative w-full">
              <input type={showpass?"text":"password"} className="input  w-full" name="rePassword" placeholder="تکرار رمز عبور" defaultValue={state.values?.rePassword||""}/>
              {showpass?<FiEye onClick={()=>setShowpass(!showpass)} size={22}  className="absolute left-2 top-1/3 z-10"/>:<FiEyeOff onClick={()=>setShowpass(!showpass)} size={22}  className="absolute left-2 top-1/3 z-10"/>}
            </div>

            <Submisson/>
            <p className="text-center">قبلا ثبت نام انجام داده اید ؟ <Link href="/auth/login"><span className="text-[#5222d0]  text-sm">وارد شوید</span></Link></p>
        </form>
      </div>



      
      <div className="desktop_container hidden md:block md:flex">
            <Image 
            src="/image/undraw_sign-up_z2ku.svg"
            width={700}
            height={700}
            objectFit="cover"
            alt="register image"
            />
        </div>



    </div>
  );
}

function Submisson(){
  const {pending} = useFormStatus()
  return(
    <button disabled={pending} className="btn btn-neutral mt-4 bg-[#5222d0]">
              {pending?"منتظر باشید ....":"ثبت نام"}
    </button>
  )
}