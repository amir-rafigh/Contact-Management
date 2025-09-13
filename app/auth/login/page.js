"use client";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import loginAction from "./loginaction";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from 'react-toastify';


const initialState = { error: null, message: "" };

export default function Login() {
  const [loginmethod, setLoginmethod] = useState(false);
  const [logincode, setLogincode] = useState(false);
  const [showpass, setShowpass] = useState(true);

  const [state, formAction] = useActionState(loginAction, initialState);
  useEffect(()=>{
    if(state.error){
      toast.error(state.message)
    }
    if(!state.error){
      toast.success(state.message)
    }
  },[state])

  return (
    <div className="login_container flex justify-center bg-gradient-to-b from-[#5222d0] to-transparent items-center gap-5 w-full h-full">
      <div className="mobile_container w-full md:w-lg lg:w-2xl">
        <div className="title text-center lalezar text-4xl">
          <h1>ورود به پنل کاربری</h1>
        </div>

        <div className="login_method flex justify-center gap-5 my-4 px-4">
          <button
            onClick={() => setLoginmethod(false)}
            className={
              loginmethod ? "cursor-pointer" : `bg-[#5222d0] text-white p-2 rounded-lg cursor-pointer`
            }
          >
            ورود با نام کاربری
          </button>

          <button
            onClick={() => setLoginmethod(true)}
            className={
              loginmethod ? `bg-[#5222d0] text-white p-2 rounded-lg cursor-pointer` : "cursor-pointer"
            }
          >
            ورود با شماره موبایل
          </button>
        </div>

        <form action={formAction} className="fieldset rounded-box p-4">
          {loginmethod ? (
            <>
              {logincode ? (
                <>
                  <label className="label">کد تایید :</label>
                  <input
                    type="number"
                    className="input w-full py-6 md:w-lg lg:w-2xl"
                    name="phoneNumber"
                    placeholder="کد 4 رقمی"
                  />
                  <button className="p-2 rounded-2xl bg-[#5222d0] text-white text-lg md:w-lg lg:w-2xl">
                    ورود
                  </button>
                </>
              ) : (
                <>
                  <label className="label">شماره موبایل :</label>
                  <input
                    type="number"
                    className="input w-full py-6 md:w-lg lg:w-2xl"
                    name="phoneNumber"
                    placeholder="شماره موبایل"
                  />
                  <button
                    onClick={() => setLogincode(true)}
                    className="p-2 rounded-2xl bg-[#5222d0] text-white text-lg md:w-lg lg:w-2xl cursor-pointer"
                  >
                    دریافت کد
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <label className="label t">ایمیل</label>
              <input
                type="email"
                className="input w-full py-6 md:w-lg lg:w-2xl"
                name="email"
                placeholder="ایمیل"
                defaultValue={state.values?.email||""}
              />
              <label className="label">رمز عبور</label>
              
              <div className="relative w-full">
                <input
                  type={showpass ? "text" : "password"}
                  className="input w-full py-6 md:w-lg lg:w-2xl"
                  name="password"
                  placeholder="رمز عبور"
                  defaultValue={state.values?.password||""}
                  />
                {showpass?<FiEye onClick={()=>setShowpass(!showpass)} size={22}  className="absolute left-2 top-1/3 z-10 cursor-pointer"/>:<FiEyeOff onClick={()=>setShowpass(!showpass)} size={22}  className="absolute left-2 top-1/3 z-10 cursor-pointer" />}
              </div>
                
              
              <button className="p-2 rounded-2xl bg-[#5222d0] text-white text-lg md:w-lg lg:w-2xl cursor-pointer">
                ورود{" "}
              </button>
              <Link href="/auth/register">
                <p className="text-center text-[#5222d0]">
                  هنوز ثبت نام نکرده اید ؟
                </p>
              </Link>
            </>
          )}
        </form>
      </div>

      <div className="desktop_container hidden md:block">
        <Image
          src="/image/undraw_access-account_aydp (2).svg"
          width={700}
          height={700}
          objectFit="cover"
          alt="login image"
        />
      </div>
    </div>
  );
}
