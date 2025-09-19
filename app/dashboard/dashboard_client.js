"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Dashboard_client({ isuser }) {
  console.log(isuser);
  
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="dashboard_container w-full min-h-screen ">
    
    <header className=" w-full ">
      <div
        className={`${sidebar ? "bg-white " : ""} sidebar_dashboard fixed h-full `}
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
                  href="/settings"
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
        <h1 className=" text-center lalezar text-3xl pt-4">وبسایت مدیریت مخاطبین </h1>
      </div>
    </header>
    <main className=" min-h-screen h-full flex justify-center item-center">
      <section className="flex justify-center items-center">

      <dl  style={{
    boxShadow: `
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset
    `
  }} className=" grid grid-cols-2 gap-x-3 border-2 p-4 rounded-2xl text-2xl">
        <dt>نام :</dt>
        <dd>{isuser.firstName}</dd>

        <dt>نام خانوادگی :</dt>
        <dd>{isuser.lastName}</dd>

        <dt>ایمیل :</dt>
        <dd>{isuser.email}</dd>

        <dt>شماره تماس :</dt>
        <dd>{isuser.phoneNumber}</dd>

      </dl>

          
        
      </section>
          
    </main>
    </div>
    
  );
}
