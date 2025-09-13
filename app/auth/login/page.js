"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [loginmethod, setLoginmethod] = useState(false);
  const [logincode, setLogincode] = useState(false);

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
              loginmethod ? "" : `bg-[#5222d0] text-white p-2 rounded-lg`
            }
          >
            ورود با نام کاربری
          </button>

          <button
            onClick={() => setLoginmethod(true)}
            className={
              loginmethod ? `bg-[#5222d0] text-white p-2 rounded-lg` : ""
            }
          >
            ورود با شماره موبایل
          </button>
        </div>

        <form action="" className="fieldset rounded-box p-4">
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
                    className="p-2 rounded-2xl bg-[#5222d0] text-white text-lg md:w-lg lg:w-2xl"
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
              <input
                type="password"
                className="input w-full py-6 md:w-lg lg:w-2xl"
                name="password"
                placeholder="رمز عبور"
              />
              <button className="p-2 rounded-2xl bg-[#5222d0] text-white text-lg md:w-lg lg:w-2xl">
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
