"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login_client() {
  const route = useRouter();
  const [loginmethod, setLoginmethod] = useState(false);
  const [logincode, setLogincode] = useState(false);
  const [showpass, setShowpass] = useState(false);
  const [phonevalue, setPhonevalue] = useState({
    phoneNumber:"",
    code:""
  });

  let second = "120"
  useEffect(()=>{
    if(second>0){
      setInterval(() => {
        second--
      }, 1000);
    }
    
  },[second])
  

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log(data);

    if (data.error) {
      toast.error(data.message);
    } else if (!data.error) {
      toast.success(data.message);
      route.replace("/dashboard");
      setLogincode(true);
    }
  };
  


  //login phone method

  const phoneLoginmethod = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/phoneLogin", {
      method: "POST",
      headers: { "Contetn-Type": "application/json" },
      body: JSON.stringify(phonevalue),
    });
    const data = await res.json();
    if (data.error) {
      toast.error(data.message);
    } else if (!data.error) {
      toast.success(data.message);
      setLogincode(true);
    }
  };

  const pushdata = async (e) => {
    setPhonevalue({
      ...phonevalue,
      [e.target.name]: e.target.value,
    });
  };

  //code handler
  const codehandler = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/validcode", phonevalue, {
      headers: { "Content-Type": "application/json" },
    });
    const data = res.data;
    if(data.error){
      return toast.error(data.message)
    }
    else if(!data.error){
      toast.success(data.message)
      route.replace("/dashboard")
      return
    }
  };

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
              loginmethod
                ? "cursor-pointer"
                : `bg-[#5222d0] text-white p-2 rounded-lg cursor-pointer`
            }
          >
            ورود با نام کاربری
          </button>

          <button
            onClick={() => setLoginmethod(true)}
            className={
              loginmethod
                ? `bg-[#5222d0] text-white p-2 rounded-lg cursor-pointer`
                : "cursor-pointer"
            }
          >
            ورود با شماره موبایل
          </button>
        </div>

        <form onSubmit={handlesubmit} className="fieldset rounded-box p-4">
          {loginmethod ? (
            <>
              {logincode ? (
                <>
                <div className="top_info_code flex justify-between">
                  <label className="label">کد تایید :</label>
                  <span onClick={()=>setLogincode(false)} className="cursor-pointer text-black hover:text-purple-900">مرحله قبل</span>
                </div>
                  <input
                    type="number"
                    className="input w-full py-6 md:w-lg lg:w-2xl"
                    name="code"
                    placeholder="کد 4 رقمی"
                    onChange={pushdata}
                    value={phonevalue.code}
                  />
                  <p className="text-center text-md">ارسال مجدد کد پس از {second} </p>
                  <button
                    type="button"
                    onClick={codehandler}
                    className="p-2 rounded-2xl bg-[#5222d0] text-white text-lg md:w-lg lg:w-2xl"
                  >
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
                    onChange={pushdata}
                    value={phonevalue.phoneNumber}
                  />
                  <button
                    type="button"
                    onClick={phoneLoginmethod}
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
              />
              <label className="label">رمز عبور</label>

              <div className="relative w-full">
                <input
                  type={showpass ? "text" : "password"}
                  className="input w-full py-6 md:w-lg lg:w-2xl"
                  name="password"
                  placeholder="رمز عبور"
                />
                {showpass ? (
                  <FiEye
                    onClick={() => setShowpass(!showpass)}
                    size={22}
                    className="absolute left-2 top-1/3 z-10 cursor-pointer"
                  />
                ) : (
                  <FiEyeOff
                    onClick={() => setShowpass(!showpass)}
                    size={22}
                    className="absolute left-2 top-1/3 z-10 cursor-pointer"
                  />
                )}
              </div>

              <button className="p-2 rounded-2xl bg-[#5222d0] text-white text-lg md:w-lg lg:w-2xl cursor-pointer">
                ورود
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
