"use client";
import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Data from "@/app/Data.json";
import Footer from "../footer/page";

const CustomButton1 = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "16px 20px",
  color: "white",
  border: "1px solid",
  borderColor: "#009C61",
  lineHeight: 1.5,
  backgroundColor: "#009C61",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "white",
    borderColor: "white",
    boxShadow: "none",
    color: "#5a674c",
  },
  borderRadius: "0",
});

const data = Data.routes.careers;

export default function Careers() {
  return (
    <main>
      <div className="gap h-[120px]"></div>
      <section className="sec1 relative w-full flex flex-wrap">
        <figure className=" w-full h-[300px] relative overflow-hidden">
          <Image
            className=" h-full w-full object-cover"
            layout="reintrinsic"
            height={800}
            width={1200}
            alt={data[0].alt as string}
            src={data[0].backgroundImage as string}
          />
          <span className=" absolute w-full h-full top-0 left-0 bg-black opacity-40"></span>
        </figure>
        <div className=" absolute w-full h-full top-0 left-0 flex  justify-center lg:justify-start lg:ml-20 xl:ml-28 2xl:ml-32  items-center">
          <h1 className=" text-white font-passion text-[35px] md:text-[60px] lg:text-[80px]">
            {data[0].heading}
          </h1>
        </div>
      </section>

      <section className="sec2 flex flex-wrap *:w-full justify-center content-center bg-[#e7e7e796]">
        <span className=" text-[18px] flex justify-center mx-4 pt-24 xl:pt-40  text-lightGreen text-center ">
          {data[1].subHeading}
        </span>
        <h1 className=" text-[30px] flex justify-center pb-4 px-4 mx-4 mt-4 text-center ">
          {data[1].heading}
        </h1>
        <p className=" text-center flex justify-center pb-24 px-8  mx-4 xl:pb-40 xl:px-28 2xl:px-32 2xl:text-[20px]">
          {data[1].paragraph}
        </p>
      </section>

      <section
        style={{
          backgroundImage: `url(${data[2].backgroundImage as string})`,
        }}
        className="sec3 bg-repeat w-full flex flex-wrap lg:flex-nowrap xl:justify-between justify-center items-center bg-lightGreen"
      >
        <div className=" flex flex-wrap  justify-center  w-full lg:w-[50%]">
          <h1 className="  my-2 text-white  w-full text-[40px] font-bold text-center xl:text-start mx-4 md:mx-8 mt-12  xl:mt-20 2xl:mt-30 ">
            {data[2].heading}
          </h1>
          <figure className=" h-[450px] md:h-[600px] xl:h-[750px] 2xl:h-[950px] flex w-full m-4 md:m-8 overflow-hidden rounded-[10px] mb-12 md:mb-16">
            <Image
              className="object-cover w-full h-full hover:scale-110 duration-500 filter contrast-125"
              src={data[2].image as string}
              alt={data[2].alt as string}
              layout="reintrinsic"
              height={800}
              width={1200}
            />
          </figure>
        </div>
        <div className="flex flex-wrap m-4 md:m-8 w-full lg:w-[50%] my-12 md:my-14 xl:my-20 2xl:my-30 ">
          <input
            className=" focus:outline  font-pts  rounded-none w-full border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
            type={data[2].form?.inputs[0].type as string}
            id={data[2].form?.inputs[0].id as string}
            name="name"
            placeholder={data[2].form?.inputs[0].placeholder as string}
          />
          <input
            className=" focus:outline  font-pts  rounded-none w-full border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
            type={data[2].form?.inputs[1].type as string}
            id={data[2].form?.inputs[1].id as string}
            name="gmail"
            placeholder={data[2].form?.inputs[1].placeholder as string}
          />
          <input
            className=" focus:outline  font-pts  rounded-none w-full border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
            type={data[2].form?.inputs[2].type as string}
            id={data[2].form?.inputs[2].id as string}
            name="number"
            placeholder={data[2].form?.inputs[2].placeholder as string}
          />
          <input
            className=" focus:outline  font-pts  rounded-none w-full border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
            type={data[2].form?.inputs[3].type as string}
            id={data[2].form?.inputs[3].id as string}
            name="address"
            placeholder={data[2].form?.inputs[3].placeholder as string}
          />
          <input
            className=" focus:outline  font-pts  rounded-none w-full border-2 text-white  hover:text-black px-10 bg-orang border-orang hover:bg-white hover:border-white duration-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
            type={data[2].form?.inputs[4].type as string}
            name="resume"
            id={data[2].form?.inputs[4].id as string}
          />
          <textarea
            rows={14}
            className=" w-full font-pts focus:outline border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
            id={data[2].form?.textarea.id as string}
            name="message"
            placeholder={data[2].form?.textarea.placeholder as string}
          ></textarea>
          <CustomButton1 className=" w-full font-rubik">
            {data[2].form?.button.label as string}
          </CustomButton1>
        </div>
      </section>

      <Footer />
    </main>
  );
}
