"use client";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import axios from "axios";

export default function Addcontact_clinet({ user }) {
  // console.log(user);
  const [sidebar, setSidebar] = useState(false);



  const addcontact_handler = async (e) => {
    e.preventDefault();
    const form_Data = new FormData(e.target);
    const formData = Object.fromEntries(form_Data.entries());
    // const {age , firstName , lastName , phoneNumber} = formData
    formData.user_id = user.id
    
    
    const res = await axios.post("api/addcontact" , formData )
    const data = await res.data
    console.log(data);
    
    
  };

  return (
    <div className="container_add_contact w-full min-h-screen">
      <header className="">
        <div
          className={`${
            sidebar ? "bg-white " : ""
          } sidebar_dashboard fixed h-full `}
        >
          <span
            className=" block text-3xl pt-5 pr-4 md:hidden"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <IoMdClose /> : <FaBars />}
          </span>
          <aside
            className={`${
              sidebar ? "block inset-0 z-40 w-64" : "hidden"
            } md:block sidebar  bg-white shadow-lg h-full `}
          >
            <nav className="pr-4">
              <h2 className="text-4xl font-semibold mb-4 lalezar whitespace-nowrap px-2">
                مدیریت مخاطبین
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/dashboard"
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                  >
                    پروفایل
                  </a>
                </li>
                <li>
                  <a
                    href="/addcontact"
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                  >
                    اضافه کردن مخاطب
                  </a>
                </li>
                <li>
                  <a
                    href="/contacts"
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                  >
                    لیست مخاطبین
                  </a>
                </li>
                <li className="absolute bottom-0">
                  <a
                    href="/contacts"
                    className="block py-2 px-3 rounded hover:bg-gray-100"
                  >
                    خروج
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
        <div className="title">
          <h1 className=" text-center lalezar text-3xl pt-4">
            اضافه کردن مخاطبین{" "}
          </h1>
        </div>
      </header>
      <main className="bg-red-500 min-h-screen flex justify-center items-center">
        <form
          onSubmit={addcontact_handler}
          className="fieldset bg-base-200 border-[#3f3d58]  items-center  rounded-box w-[500px]  border-2 p-4"
        >
          <legend className="fieldset-legend text-3xl">اضافه کردن مخاطب</legend>

          <label className="label">نام</label>
          <input
            type="text"
            className="input  w-full"
            name="firstName"
            placeholder="نام"
          />

          <label className="label">نام خانوادگی</label>
          <input
            type="text"
            className="input  w-full"
            name="lastName"
            placeholder="نام خانوادگی"
          />

          <label className="label">سن</label>
          <input
            type="number"
            className="input  w-full"
            name="age"
            placeholder="سن"
          />

          <label className="label">شماره موبایل</label>
          <input
            type="number"
            className="input  w-full"
            name="phoneNumber"
            placeholder="شماره موبایل"
          />

          <Submisson />
          <p className="text-center">
            قبلا ثبت نام انجام داده اید ؟{" "}
            <Link href="/auth/login">
              <span className="text-[#5222d0]  text-sm">وارد شوید</span>
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
function Submisson() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-neutral mt-4 bg-[#5222d0]">
      {pending ? "منتظر باشید ...." : "ثبت "}
    </button>
  );
}
