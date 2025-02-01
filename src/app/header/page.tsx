"use client";
import React, { useState } from "react";
import "../globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Image from "next/image";
import Data from "@/app/Data.json";

export default function Header() {
  const data = Data.routes.header;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" fixed  z-50 w-full h-[120px]  bg-vividGreen  flex">
      <div className="mainHed relative w-full h-[100%]  flex justify-center">
        <div className="Top top-0  absolute  h-[75%] w-[90%] flex justify-center xl:justify-between items-center">
          <figure className=" hidden xl:flex h-[90px] w-[250px] items-center justify-center ">
            <Image
              className=" object-cover w-full h-full"
              src={data[0].logo as string}
              alt={data[0].Alt as string}
              layout="reintrinsic"
              height={800}
              width={1200}
            />
          </figure>
          <div className="mail h-full flex items-center mx-1 md:mx-4">
            <span className=" xl:hidden h-full flex items-center p-2">
              <i className="fa-solid fa-envelope text-orang text-[20px] md:text-[25px]"></i>
            </span>
            <Link
              className=" xl:hidden flex flex-wrap  text-white font-roboto h-full content-center p-1 cursor-pointer"
              href="#"
            >
              <span className=" w-full ">{data[0].lableEmail}</span>
              <span className=" w-full  text-[12px] text-slate-200">
                {data[0].email}
              </span>
            </Link>
          </div>
          <div className="call  h-full flex   items-center mx-1 md:mx-4">
            <span className=" xl:hidden h-full flex items-center p-2">
              <i className="fa-solid fa-phone text-orang text-[20px] md:text-[25px]"></i>
            </span>
            <Link
              className=" xl:hidden flex  flex-wrap text-white font-roboto h-full  items-center content-center p-1 cursor-pointer"
              href="#"
            >
              <span className=" w-full ">{data[0].lablePhone}</span>
              <span className=" w-full  text-[12px] text-slate-200">
                {data[0].phone}
              </span>
            </Link>
          </div>
          <div className="icon hidden xl:flex h-full items-center ">
            <div className="mail  h-full flex items-center">
              <span className=" hidden xl:flex h-full  items-center p-2">
                <i className="fa-solid fa-envelope text-orang text-[25px]"></i>
              </span>
              <Link
                className=" hidden xl:flex flex-wrap  text-white font-roboto h-full content-center p-1 cursor-pointer"
                href="#"
              >
                <span className=" w-full">{data[0].lableEmail}</span>
                <span className=" w-full text-[12px] text-slate-200">
                  {data[0].email}
                </span>
              </Link>
            </div>
            <div className="call h-full flex  items-center ">
              <span className=" hidden xl:flex h-full items-center p-2">
                <i className="fa-solid fa-phone text-orang text-[25px]"></i>
              </span>
              <Link
                className=" hidden xl:flex flex-wrap text-white font-roboto h-full  items-center content-center p-1 cursor-pointer"
                href="#"
              >
                <span className=" w-full">{data[0].lablePhone}</span>
                <span className=" w-full text-[12px] text-slate-200">
                  {data[0].phone}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="Bott bottom-0 shadow-top-sm  absolute bg-lightGreen h-[50%] w-[90%] translate-y-[50%] bg-[url('/cartographer.png')] bg-repeat">
          <div className="smMd flex justify-between items-center xl:hidden w-full h-full">
            <figure className="flex h-full w-[150px] justify-center items-center ">
              <Image
                className=" h-full w-full object-cover"
                src={data[0].logo as string}
                alt={data[0].Alt as string}
                layout="reintrinsic"
                height={800}
                width={1200}
              />
            </figure>
            <div
              className="menu  relative w-[40px] h-[40px] mr-2 flex justify-center items-center"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars text-white absolute text-[20px] md:text-[25px]"></i>
            </div>
          </div>
          <div className="xliixl hidden xl:flex justify-between h-full w-full">
            <ul className=" flex justify-center items-center h-full">
              <li className=" text-white h-full flex mx-2">
                <Link
                  className=" flex h-full text-[15px] font-roboto justify-center items-center p-2"
                  href={data?.[1].menuItems?.[0].link as string}
                >
                  {data?.[1].menuItems?.[0].text}
                </Link>
              </li>
              <li className=" text-white h-full flex mx-2">
                <Link
                  className=" flex h-full text-[15px] font-roboto justify-center items-center p-2"
                  href={data?.[1].menuItems?.[1].link as string}
                >
                  {data?.[1].menuItems?.[1].text}
                </Link>
              </li>
              <li className="text-white h-full flex mx-2 relative ">
                <Link
                  className=" flex h-full text-[15px] font-roboto justify-center items-center p-2"
                  href={data?.[1].menuItems?.[2].link as string}
                >
                  {data?.[1].menuItems?.[2].text}
                </Link>
                <span className=" flex justify-center items-center h-full">
                  <i className="fa-solid fa-angle-down text-orang text-[20px]"></i>
                </span>
                <ul className=" absolute left-0 top-[100%]  w-[300px]  flex-wrap cursor-pointer ">
                  <li className=" flex flex-wrap  w-full items-center justify-center bg-khaki">
                    <Link
                      className="link1 w-full h-[50px] border-b-2 border-border"
                      href={
                        data?.[1].menuItems?.[2].submenu?.[0].link as string
                      }
                    >
                      <p className="p1 text-[12px] w-full h-full flex justify-center items-center font-rubik">
                        {data?.[1].menuItems?.[2].submenu?.[0].text}
                        <i className="fa-solid fa-angle-down text-orang ml-2 text-[20px]"></i>
                      </p>
                    </Link>
                    <ul className="  flex flex-wrap justify-center  ">
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-border  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[0].submenu?.[0]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[0].submenu?.[0]
                              .text
                          }
                        </Link>
                      </li>
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-border  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[0].submenu?.[1]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[0].submenu?.[1]
                              .text
                          }
                        </Link>
                      </li>
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-border  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[0].submenu?.[2]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[0].submenu?.[2]
                              .text
                          }
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className=" flex flex-wrap  w-full items-center justify-center bg-khaki">
                    <Link
                      className="link1 w-full h-[50px] border-b-2 border-border"
                      href={
                        data?.[1].menuItems?.[2].submenu?.[1].link as string
                      }
                    >
                      <p className="p1 text-[12px] w-full h-full flex justify-center items-center font-rubik">
                        {data?.[1].menuItems?.[2].submenu?.[1].text}
                        <i className="fa-solid fa-angle-down text-orang ml-2 text-[20px]"></i>
                      </p>
                    </Link>
                    <ul className="  flex flex-wrap justify-center  ">
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-Bdroop  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[1].submenu?.[0]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[1].submenu?.[0]
                              .text
                          }
                        </Link>
                      </li>
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-Bdroop  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[1].submenu?.[1]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[1].submenu?.[1]
                              .text
                          }
                        </Link>
                      </li>
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-Bdroop  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[1].submenu?.[2]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[1].submenu?.[2]
                              .text
                          }
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className=" flex flex-wrap  w-full items-center justify-center bg-khaki">
                    <Link
                      className="link1 w-full h-[50px] border-b-2 border-border"
                      href={
                        data?.[1].menuItems?.[2].submenu?.[2].link as string
                      }
                    >
                      <p className="p1 text-[12px] w-full h-full flex justify-center items-center font-rubik">
                        {data?.[1].menuItems?.[2].submenu?.[2].text}
                        <i className="fa-solid fa-angle-down text-orang ml-2 text-[20px]"></i>
                      </p>
                    </Link>
                    <ul className="  flex flex-wrap justify-center  ">
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-Bdroop  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[2].submenu?.[0]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[2].submenu?.[0]
                              .text
                          }
                        </Link>
                      </li>
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-Bdroop  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[2].submenu?.[1]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[2].submenu?.[1]
                              .text
                          }
                        </Link>
                      </li>
                      <li className=" w-full flex justify-center items-center">
                        <Link
                          className=" hover:bg-Bdroop duration-300  flex p-2 justify-center items-center bg-khaki mx-4 border border-Bdroop  text-[12px] font-roboto w-full h-[50px]"
                          href={
                            data?.[1].menuItems?.[2].submenu?.[2].submenu?.[2]
                              .link as string
                          }
                        >
                          {
                            data?.[1].menuItems?.[2].submenu?.[2].submenu?.[2]
                              .text
                          }
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className=" text-white h-full flex mx-2">
                <Link
                  className=" flex h-full text-[15px] font-roboto justify-center items-center p-2"
                  href={data?.[1].menuItems?.[3].link as string}
                >
                  {data?.[1].menuItems?.[3].text}
                </Link>
              </li>
              <li className=" text-white h-full flex mx-2">
                <Link
                  className=" flex h-full text-[15px] font-roboto justify-center items-center p-2"
                  href={data?.[1].menuItems?.[4].link as string}
                >
                  {data?.[1].menuItems?.[4].text}
                </Link>
              </li>
              <li className=" text-white h-full flex mx-2">
                <Link
                  className=" flex h-full text-[15px] font-roboto justify-center items-center p-2"
                  href={data?.[1].menuItems?.[5].link as string}
                >
                  {data?.[1].menuItems?.[5].text}
                </Link>
              </li>
            </ul>
            <Link
              href={data[0].Qrout as string}
              className="ress  flex justify-center items-center bg-orang text-white text-[15px] px-6 font-roboto"
            >
              {data[0].Quet}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`hambergur xl:hidden fixed z-40 w-full h-[100vh] bg-vividGreen transition-all duration-300 ${
          isMenuOpen ? "left-0" : "left-[100%]"
        }`}
      >
        <ul className=" w-full h-full flex flex-wrap   justify-center">
          <li className=" text-white flex justify-between p-6  text-[20px]  md:text-[30px]  w-full ">
            <Link
              onClick={toggleMenu}
              className=" flex  items-center  w-full "
              href={data?.[1].menuItems?.[0].link as string}
            >
              {data?.[1].menuItems?.[0].text}
            </Link>
            <span
              className=" pr-6 text-[20px] md:text-[30px] cursor-pointer flex h-full items-center px-6 justify-center"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-xmark flex  absolute text-[20px] md:text-[25px]"></i>
            </span>
          </li>
          <li className=" text-white flex justify-start   p-6  text-[20px]  md:text-[30px]  w-full ">
            <Link
              onClick={toggleMenu}
              className=" flex  items-center  w-full  "
              href={data?.[1].menuItems?.[1].link as string}
            >
              {data?.[1].menuItems?.[1].text}
            </Link>
          </li>
          <li className=" text-white flex justify-start   p-6  text-[20px]  md:text-[30px]  w-full ">
            <Link
              onClick={toggleMenu}
              className=" flex  items-center  w-full  "
              href={data?.[1].menuItems?.[2].link as string}
            >
              {data?.[1].menuItems?.[2].text}
            </Link>
          </li>
          <li className=" text-white flex justify-start   p-6  text-[20px]  md:text-[30px]  w-full ">
            <Link
              onClick={toggleMenu}
              className=" flex  items-center  w-full  "
              href={data?.[1].menuItems?.[3].link as string}
            >
              {data?.[1].menuItems?.[3].text}
            </Link>
          </li>
          <li className=" text-white flex justify-start   p-6  text-[20px]  md:text-[30px]  w-full ">
            <Link
              onClick={toggleMenu}
              className=" flex  items-center  w-full  "
              href={data?.[1].menuItems?.[4].link as string}
            >
              {data?.[1].menuItems?.[4].text}
            </Link>
          </li>
          <li className=" text-white flex justify-start   p-6  text-[20px]  md:text-[30px]  w-full ">
            <Link
              onClick={toggleMenu}
              className=" flex  items-center  w-full  "
              href={data?.[1].menuItems?.[5].link as string}
            >
              {data?.[1].menuItems?.[5].text}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
