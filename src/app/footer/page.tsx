"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Data from "@/app/Data.json";

export default function Footer() {
  const data = Data.routes.footer;

  return (
    <footer className=" flex flex-wrap *:w-full justify-cente  items-center overflow-hidden w-full bg-black ">
      <section
        style={{
          backgroundImage: `url(${data[0].backgroundImage as string})`,
        }}
        className=" flex  w-full *:w-full  *:xl:w-auto  flex-wrap xl:flex-nowrap bg-footbg  bg-repeat"
      >
        <figure className=" xl:hidden !w-[200px] md:!w-[400px] flex px-1 md:px-6  mt-8 ">
          <Image
            className=" object-cover"
            src={data[0].logoImage as string}
            alt={data[0].logoAlt as string}
            layout="responsive"
            height={800}
            width={1200}
          />
        </figure>
        <ul className="text-white  px-4 md:px-10 xl:px-8 mt-6 flex  flex-wrap *:w-full xl:my-16">
          <li className=" font-rubik text-[20px]">{data[1].heading}</li>
          {data[1].links?.map((para) => (
            <li
              key={(para as { id: string }).id}
              className=" mt-2 text-[15px] text-slate-200"
            >
              <Link href={para.link as string}>{para.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="text-white  px-4 md:px-10 xl:px-8 mt-6 flex  flex-wrap *:w-full xl:my-16">
          <li className="font-rubik text-[20px]">{data[2].heading}</li>
          {data[2].links?.map((para) => (
            <li
              key={(para as { id: string }).id}
              className="mt-2 text-[15px] text-slate-200"
            >
              <Link href={para.link as string}>{para.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="text-white  px-4 md:px-10 xl:px-8 mt-6 flex  flex-wrap *:w-full xl:my-16">
          <li className=" font-rubik text-[20px]">{data[3].heading}</li>
          <li className=" mt-2 text-[15px] text-slate-200">
            {data[3].address}
          </li>
          <li className=" mt-2 text-[15px] text-slate-200">{data[3].phone}</li>
          <li className=" mt-2 mb-4 flex">
            <Link
              className=" flex  items-center "
              href={data?.[3].Links?.[0].link as string}
            >
              <i className="fa-brands fa-facebook-f  hover:text-orange-900 duration-300  text-orang text-[20px] "></i>
            </Link>
            <Link
              className=" flex  items-center ml-4"
              href={data?.[3].Links?.[1].link as string}
            >
              <i className="fa-brands fa-instagram   hover:text-orange-900 duration-300 text-orang text-[20px]"></i>
            </Link>
            <Link
              className=" flex  items-center ml-4"
              href={data?.[3].Links?.[2].link as string}
            >
              <i className="fa-brands fa-x-twitter   hover:text-orange-900 duration-300 text-orang text-[20px]"></i>
            </Link>
            <Link
              className=" flex  items-center ml-4"
              href={data?.[3].Links?.[3].link as string}
            >
              <i className="fa-brands fa-linkedin-in hover:text-orange-900 duration-300  text-orang text-[20px]"></i>
            </Link>
          </li>
        </ul>
        <figure className=" hidden xl:flex  xl:!w-[400px]  2xl:!w-[250px]   my-16 xl:px-8">
          <Image
            className=" w-full h-full object-cover"
            src={data[0].logoImage as string}
            alt={data[0].logoAlt as string}
            layout="responsive"
            height={800}
            width={1200}
          />
        </figure>
      </section>
      <div className=" w-full  bg-[#181818] flex flex-wrap xl:flex-nowrap xl:justify-between *:w-full *:xl:w-fit">
        <span className=" p-4 xl:px-6 md:px-10 h-full flex items-center font-mono  text-slate-200">
          {data[4].text}
        </span>
        <span className=" p-4 xl:px-6 md:px-10 h-full flex items-center font-mono  text-slate-200">
          {data[4].text2}
          <a
            className=" text-orang text-[20px] hover:text-orange-900 duration-300 "
            target="balank"
            href={data[4].link as string}
          >
            {data[4].name}
          </a>
        </span>
      </div>
    </footer>
  );
}
