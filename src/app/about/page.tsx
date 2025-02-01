"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Request from "@/sendRequest/page";
import Data from "@/app/Data.json";
import Footer from "../footer/page";

export default function About() {
  const data = Data.routes.aboutUs;

  const { ref: ref1, inView: InView1 } = useInView({
    threshold: 0.4,
  });

  const { ref: ref2, inView: InView2 } = useInView({
    threshold: 0.4,
  });

  const { ref: ref3, inView: InView3 } = useInView({
    threshold: 0.3,
  });

  const { ref: ref4, inView: InView4 } = useInView({
    threshold: 0.3,
  });

  const { ref: ref5, inView: InView5 } = useInView({
    threshold: 0.4,
  });

  const { ref: ref6, inView: InView6 } = useInView({
    threshold: 0.4,
  });

  const { ref: ref7, inView: InView7 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref8, inView: InView8 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref9, inView: InView9 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref10, inView: InView10 } = useInView({
    threshold: 0.2,
  });

  return (
    <main>
      <div className="gap h-[120px]"></div>
      <section className="sec1 relative w-full flex flex-wrap">
        <figure className=" w-full overflow-hidden relative">
          <Image
            className=" h-[300px] w-full  object-cover"
            layout="reintrinsic"
            height={800}
            width={1200}
            alt={data[0].bgImgAlt as string}
            src={data[0].backgroundImage as string}
          />
          <span className=" absolute w-full h-full top-0 left-0 bg-black opacity-40"></span>
        </figure>
        <div className=" absolute w-full h-full top-0 left-0 flex  justify-center lg:justify-start lg:ml-20 xl:ml-28 2xl:ml-32  items-center">
          <h1 className=" text-white font-passion text-[35px] md:text-[60px] lg:text-[80px]">
            {data[0].title}
          </h1>
        </div>
      </section>

      <section
        className="sec2 relative z-10  bg-repeat flex flex-wrap py-12 xl:py-20 2xl:py-28  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden"
        style={{
          backgroundImage: `url(${data[1].background as string})`,
        }}
      >
        <figure className=" h-[500px] md:h-[800px] xl:h-[800px] 2xl:h-[1000px] m-4 md:m-8 overflow-hidden rounded-[10px] transition-transform ">
          <Image
            layout="reintrinsic"
            height={800}
            width={1200}
            className=" h-full w-full object-cover"
            src={data[1].image as string}
            alt=""
          />
        </figure>
        <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
          <p className="  my-2 text-lightGreen font-rubik w-full">
            {data[1].title}
          </p>
          <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
            {data[1].subtitle}
          </h1>
          {data[1].content?.map((para) => (
            <p
              key={para.id}
              className="  my-2 text-black font-rubik w-full 2xl:text-[23px]"
            >
              {para.txt}
            </p>
          ))}
          <span className=" w-full h-full absolute top-0 left-0 -z-50 bg-white opacity-60"></span>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${data[2].background as string})`,
        }}
        className="sec3 relative z-10 bg-no-repeat bg-cover flex flex-wrap py-24 md:py-32 xl:py-40  2xl:py-52  xl:flex-nowrap  overflow-hidden"
      >
        {/* {/////////////////////////////////animation_emotion1/////////////////////////////////////} */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: InView1 ? 1 : 0,
            x: InView1 ? 0 : 50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" w-full xl:w-[50%] flex"
        >
          <div className=" flex flex-wrap  *:flex content-center m-4 md:m-8  ">
            <p className="  my-2 text-lightGreen font-rubik w-full">
              {data[2].title}
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              {data[2].subtitle}
            </h1>
            {data[2].content?.map((para) => (
              <p
                key={para.id}
                className="  my-2 text-black font-rubik w-full 2xl:text-[23px]"
              >
                {para.txt}
              </p>
            ))}
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
          className="w-full xl:w-[50%] flex "
        >
          <figure className=" h-[350px] md:h-[500px] xl:h-[600px] 2xl:h-[800px] w-full m-4 md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              layout="reintrinsic"
              height={800}
              width={1200}
              className=" h-full  w-full object-cover"
              src={data[2].image as string}
              alt={data[2].alt as string}
            />
          </figure>
        </motion.div>
        <span className=" w-full h-full absolute top-0 left-0 -z-50 bg-white opacity-90 "></span>
      </section>

      <section
        style={{
          backgroundImage: `url(${data[3].background as string})`,
        }}
        className="sec4 relative z-10  overflow-hidden bg-no-repeat bg-cover "
      >
        <div className=" flex flex-wrap xl:flex-none *:lg:w-[50%] content-start">
          {/* {/////////////////////////////////animation_emotion3/////////////////////////////////////} */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView3 ? 1 : 0,
              y: InView3 ? 0 : 60,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" flex justify-center  px-12 2xl:px-14 py-12"
          >
            <div className=" h-full w-full  flex flex-wrap  *:w-full  content-start lg:content-center ">
              <span className=" mt-4 text-[18px]  text-white font-rubik  ">
                {data[3].title}
              </span>
              <h1 className=" mt-1 text-[22px] md:text-[35px] text-white font-rubik ">
                {data[3].subtitle}
              </h1>
              <ul className=" mt-2 list-disc content-center *:text-white *:font-rubik *:text-[16px] *:md:text-[18px]  *:2xl:text-[25px]   *:mx-4 flex flex-wrap *:w-full ">
                {data[3].content?.map((para) => (
                  <li key={para.id} className="  mt-2">
                    {para.txt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* {/////////////////////////////////animation_emotion4/////////////////////////////////////} */}
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView4 ? 1 : 0,
              y: InView4 ? 0 : 60,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" w-full flex justify-center items-center py-12"
          >
            <figure className=" w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:h-full  lg:w-full  lg:p-16">
              <Image
                layout="reintrinsic"
                height={800}
                width={1200}
                className=" w-full h-full object-cover"
                src={data[3].logoImage as string}
                alt={data[3].alt as string}
              />
            </figure>
          </motion.div>
        </div>
        <span className=" w-full h-full absolute top-0 left-0 -z-50 bg-black opacity-50 "></span>
      </section>

      <section className="sec5 bg-lightGreen flex flex-wrap py-8 2xl:py-12  *:w-full overflow-hidden">
        <p className="my-2 mt-8 text-black font-rubik flex justify-center text-center items-center">
          {data[4].title}
        </p>
        <h1 className=" my-2 mb-8 text-white font-rubik flex justify-center text-center items-center text-[40px]">
          {data[4].subtitle}
        </h1>
        {/* {/////////////////////////////////animation_emotion5/////////////////////////////////////} */}
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView5 ? 1 : 0,
            x: InView5 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" xl:w-[50%] flex"
        >
          <figure className=" h-[350px] md:h-[500px] xl:h-[600px] 2xl:h-[800px] w-full m-4 md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              layout="reintrinsic"
              height={800}
              width={1200}
              className=" h-full  w-full object-cover"
              src={data[4].image as string}
              alt={data[4].alt as string}
            />
          </figure>
        </motion.div>
        {/* {/////////////////////////////////animation_emotion6/////////////////////////////////////} */}
        <motion.div
          ref={ref6}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView6 ? 1 : 0,
            x: InView6 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" xl:w-[50%] flex"
        >
          <div className="flex flex-wrap  *:flex content-center m-4 md:m-8 xl:mx-12  ">
            <p className="  my-2 text-white font-rubik w-full">
              {data[4].toptxt}
            </p>
            <h1 className=" my-2 text-white font-rubik w-full text-[40px]">
              {data[4].maintxt}
            </h1>
            {data[3].content?.map((para) => (
              <p
                key={para.id}
                className="  my-3 text-white font-rubik w-full 2xl:text-[23px]"
              >
                {para.txt}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="sec6 bg-slate-50 py-28">
        <h1 className=" w-full py-8 flex justify-center text-black text-[25px] md:text-[40px] xl:text-[50px] font-rubik p-4 pt-8 md:pt-12 xl:pt-14 ">
          {data[5].title}
        </h1>
        <div className=" flex flex-wrap justify-center xl:justify-evenly ">
          {/* {/////////////////////////////////animation_emotion7/////////////////////////////////////} */}
          {/* {/////////////////////////////////animation_emotion7/////////////////////////////////////} */}
          <motion.div
            ref={ref7}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView7 ? 1 : 0,
              y: InView7 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex pb-24 justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 rounded-[10px]"
          >
            <figure className="relative group flex justify-center h-[200px] w-[200px] md:h-[300px] md:w-[300px] xl:h-[300px] xl:w-[300px] 2xl:h-[400px] 2xl:w-[400px]">
              <Image
                layout="reintrinsic"
                height={800}
                width={1200}
                className="bg-slate-800 object-cover w-full h-full rounded-[100%] border-4 border-black"
                src={data?.[5].team?.[0].image as string}
                alt={data?.[5].team?.[0].alt as string}
              />
              <figcaption className="absolute w-full top-[100%] left-0 text-center flex flex-wrap justify-center p-4 text-bla text-[20px] font-rubik">
                <span className="flex justify-center text-slate-600 text-[16px] font-roboto w-full">
                  {data?.[5].team?.[0].name}
                </span>
                {data?.[5].team?.[0].role}
              </figcaption>
            </figure>
          </motion.div>

          {/* {/////////////////////////////////animation_emotion8/////////////////////////////////////} */}
          <motion.div
            ref={ref8}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView8 ? 1 : 0,
              y: InView8 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex pb-24 justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 rounded-[10px]"
          >
            <figure className="relative group flex justify-center h-[200px] w-[200px] md:h-[300px] md:w-[300px] xl:h-[300px] xl:w-[300px] 2xl:h-[400px] 2xl:w-[400px]">
              <Image
                layout="reintrinsic"
                height={800}
                width={1200}
                className="bg-slate-800 object-cover w-full h-full rounded-[100%] border-4 border-black"
                src={data?.[5].team?.[1].image as string}
                alt={data?.[5].team?.[1].alt as string}
              />
              <figcaption className="absolute w-full top-[100%] left-0 text-center flex flex-wrap justify-center p-4 text-bla text-[20px] font-rubik">
                <span className="flex justify-center text-slate-600 text-[16px] font-roboto w-full">
                  {data?.[5].team?.[1].name}
                </span>
                {data?.[5].team?.[1].role}
              </figcaption>
            </figure>
          </motion.div>

          {/* {/////////////////////////////////animation_emotion9/////////////////////////////////////} */}
          <motion.div
            ref={ref9}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView9 ? 1 : 0,
              y: InView9 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex pb-24 justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 rounded-[10px]"
          >
            <figure className="relative group flex justify-center h-[200px] w-[200px] md:h-[300px] md:w-[300px] xl:h-[300px] xl:w-[300px] 2xl:h-[400px] 2xl:w-[400px]">
              <Image
                layout="reintrinsic"
                height={800}
                width={1200}
                className="bg-slate-800 object-cover w-full h-full rounded-[100%] border-4 border-black"
                src={data?.[5].team?.[2].image as string}
                alt={data?.[5].team?.[2].alt as string}
              />
              <figcaption className="absolute w-full top-[100%] left-0 text-center flex flex-wrap justify-center p-4 text-bla text-[20px] font-rubik">
                <span className="flex justify-center text-slate-600 text-[16px] font-roboto w-full">
                  {data?.[5].team?.[2].name}
                </span>
                {data?.[5].team?.[2].role}
              </figcaption>
            </figure>
          </motion.div>

          {/* {/////////////////////////////////animation_emotion10/////////////////////////////////////} */}
          <motion.div
            ref={ref10}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView10 ? 1 : 0,
              y: InView10 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex pb-24 justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 rounded-[10px]"
          >
            <figure className="relative group flex justify-center h-[200px] w-[200px] md:h-[300px] md:w-[300px] xl:h-[300px] xl:w-[300px] 2xl:h-[400px] 2xl:w-[400px]">
              <Image
                layout="reintrinsic"
                height={800}
                width={1200}
                className="bg-slate-800 object-cover w-full h-full rounded-[100%] border-4 border-black"
                src={data?.[5].team?.[3].image as string}
                alt={data?.[5].team?.[3].alt as string}
              />
              <figcaption className="absolute w-full top-[100%] left-0 text-center flex flex-wrap justify-center p-4 text-bla text-[20px] font-rubik">
                <span className="flex justify-center text-slate-600 text-[16px] font-roboto w-full">
                  {data?.[5].team?.[3].name}
                </span>
                {data?.[5].team?.[3].role}
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>
      <Request />

      <Footer />
    </main>
  );
}
