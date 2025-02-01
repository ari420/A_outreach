"use client";
import Request from "@/sendRequest/page";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Link from "next/link";
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
  opacity: 1,
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

export default function Services() {
  const data = Data.routes.services;

  const { ref: ref1, inView: InView1 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref2, inView: InView2 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref3, inView: InView3 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref4, inView: InView4 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref5, inView: InView5 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref6, inView: InView6 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref7, inView: InView7 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref8, inView: InView8 } = useInView({
    threshold: 0.5,
  });

  return (
    <main className="">
      <div className="gap h-[120px]"></div>
      <Image
        className=" fixed -z-50 top-[120px] left-0  w-full h-full "
        src={data[0].bgmainImage as string}
        alt={data[0].alt as string}
        layout="reintrinsic"
        height={800}
        width={1200}
      />

      <section className="sec1 relative w-full flex flex-wrap">
        <figure className=" w-full h-[300px] relative overflow-hidden">
          <Image
            className=" w-full  h-full object-cover"
            layout="reintrinsic"
            height={800}
            width={1200}
            alt={data[1].alt as string}
            src={data[1].src as string}
          />
          <span className=" absolute w-full h-full top-0 left-0 bg-black opacity-40"></span>
        </figure>
        <div className=" absolute w-full h-full top-0 left-0 flex  justify-center lg:justify-start lg:ml-20 xl:ml-28 2xl:ml-32  items-center">
          <h1 className=" text-white font-passion text-[35px] md:text-[60px] lg:text-[80px]">
            {data[1].text}
          </h1>
        </div>
      </section>

      <section className="sec2 w-full bg-[#009dffdf] ">
        <div className="main w-full h-full opacity-[1]">
          <div className=" flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
            <figure className="m-4 md:m-8 overflow-hidden rounded-[10px] h-[350px] md:h-[450px] xl:h-[450px] 2xl:h-[650px] transition-transform ">
              <Image
                className=" w-full h-full object-cover"
                src={data?.[2].parts?.[0].src as string}
                alt={data?.[2].parts?.[0].alt as string}
                layout="reintrinsic"
                height={800}
                width={1200}
              />
            </figure>
            <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
              <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
                {data?.[2].parts?.[0].heading}
              </h1>
              <p className=" my-2 text-black font-rubik w-full 2xl:text-[23px]">
                {data?.[2].parts?.[0].description}
              </p>
              <Link
                className=" w-full justify-start mt-8"
                href={data?.[2].parts?.[0].btnroute as string}
              >
                <CustomButton1>{data?.[2].parts?.[0].btntxt}</CustomButton1>
              </Link>
            </div>
          </div>
          {/* {//////////////////////////////////////////////////////////////////////////////} */}
          <div className=" flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
            {/* {/////////////////////////////////animation_emotion1/////////////////////////////////////} */}
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: InView1 ? 1 : 0,
                x: InView1 ? 0 : -50,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className=" order-2 xl:order-1 flex"
            >
              <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
                <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
                  {data?.[2].parts?.[1].heading}
                </h1>
                <p className=" my-2 text-black font-rubik w-full 2xl:text-[23px]">
                  {data?.[2].parts?.[1].description}
                </p>
                <Link
                  className=" w-full justify-start mt-8"
                  href={data?.[2].parts?.[1].btnroute as string}
                >
                  <CustomButton1>{data?.[2].parts?.[1].btntxt}</CustomButton1>
                </Link>
              </div>
            </motion.div>
            {/* {/////////////////////////////////animation_emotion2/////////////////////////////////////} */}
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: InView2 ? 1 : 0,
                x: InView2 ? 0 : 50,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className=" order-1 xl:order-2 flex "
            >
              <figure className=" m-4 md:m-8 overflow-hidden rounded-[10px] h-[350px] md:h-[400px] xl:h-[450px] 2xl:h-[650px] transition-transform ">
                <Image
                  className=" w-full h-full object-cover"
                  src={data?.[2].parts?.[1].src as string}
                  alt={data?.[2].parts?.[1].alt as string}
                  layout="reintrinsic"
                  height={800}
                  width={1200}
                />
              </figure>
            </motion.div>
          </div>
          {/* {////////////////////////////////////////////////////////////////////////////////////////////////////} */}
          <div className=" flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
            {/* {/////////////////////////////////animation_emotion3/////////////////////////////////////} */}
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: InView3 ? 1 : 0,
                x: InView3 ? 0 : -50,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex"
            >
              <figure className="m-4 md:m-8 overflow-hidden rounded-[10px] h-[350px] md:h-[400px] xl:h-[450px] 2xl:h-[650px] transition-transform ">
                <Image
                  className=" w-full h-full object-cover"
                  src={data?.[2].parts?.[2].src as string}
                  alt={data?.[2].parts?.[2].alt as string}
                  layout="reintrinsic"
                  height={800}
                  width={1200}
                />
              </figure>
            </motion.div>
            {/* {/////////////////////////////////animation_emotion4/////////////////////////////////////} */}
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: InView4 ? 1 : 0,
                x: InView4 ? 0 : 50,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex"
            >
              <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
                <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
                  {data?.[2].parts?.[2].heading}
                </h1>
                <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px]">
                  {data?.[2].parts?.[2].description}
                </p>
                <Link
                  className=" w-full justify-start mt-8"
                  href={data?.[2].parts?.[2].btnroute as string}
                >
                  <CustomButton1>{data?.[2].parts?.[2].btntxt}</CustomButton1>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sec3 bg-slate-100 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        {/* {/////////////////////////////////animation_emotion5/////////////////////////////////////} */}
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView5 ? 1 : 0,
            x: InView5 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" order-2 xl:order-1 flex"
        >
          <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
            <p className="  my-2 text-lightGreen font-rubik w-full">
              {data[3].title}
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              {data[3].heading}
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px]">
              {data[3].text}
            </p>
          </div>
        </motion.div>
        {/* {/////////////////////////////////animation_emotion6/////////////////////////////////////} */}
        <motion.div
          ref={ref6}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: InView6 ? 1 : 0,
            x: InView6 ? 0 : 50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" order-1 xl:order-2"
        >
          <figure className=" h-[350px] md:h-[400px] xl:h-[450px] 2xl:h-[650px] m-4 md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              className=" h-full w-full object-cover"
              src={data[3].src as string}
              alt={data[3].alt as string}
              layout="reintrinsic"
              height={800}
              width={1200}
            />
          </figure>
        </motion.div>
      </section>

      <section className="sec4 relative z-10  overflow-hidden bg-[url('/aboutSec4.jpg')] bg-no-repeat bg-cover">
        <div className=" flex flex-wrap xl:flex-none *:lg:w-[50%] content-start">
          {/* {/////////////////////////////////animation_emotion7/////////////////////////////////////} */}
          <motion.div
            ref={ref7}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView7 ? 1 : 0,
              y: InView7 ? 0 : 60,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" flex justify-center  px-12 2xl:px-14 py-12"
          >
            <div className=" h-full w-full  flex flex-wrap  *:w-full  content-start lg:content-center ">
              <span className=" mt-4 text-[18px]  text-white font-rubik  ">
                {data[4].title}
              </span>
              <h1 className=" mt-1 text-[22px] md:text-[35px] text-white font-rubik ">
                {data[4].heading}
              </h1>
              <ul className=" mt-2 list-disc content-center *:text-white *:font-rubik *:text-[16px] *:md:text-[18px]  *:2xl:text-[25px]   *:mx-4 flex flex-wrap *:w-full ">
                {data[4].list?.map((para) => (
                  <li key={para.id} className=" mt-2">
                    {para.txt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* {/////////////////////////////////animation_emotion8/////////////////////////////////////} */}
          <motion.div
            ref={ref8}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView8 ? 1 : 0,
              y: InView8 ? 0 : 60,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="  w-full flex justify-center items-center py-12"
          >
            <figure className=" w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:h-full  lg:w-full  lg:p-16">
              <Image
                layout="reintrinsic"
                height={800}
                width={1200}
                className=" "
                src={data[4].src as string}
                alt={data[4].alt as string}
              />
            </figure>
          </motion.div>
        </div>
        <span className=" w-full h-full absolute top-0 left-0 -z-50 bg-black opacity-50 "></span>
      </section>

      <Request />

      <Footer />
    </main>
  );
}
