"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Request from "@/sendRequest/page";
import Footer from "@/app/footer/page";

const CustomButton1 = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "16px 20px",
  color: "white",
  border: "1px solid",
  borderColor: "#007fff",
  lineHeight: 1.5,
  backgroundColor: "#007fff",
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

export default function Rope() {
  const { ref: ref1, inView: InView1 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref2, inView: InView2 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref3, inView: InView3 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref4, inView: InView4 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref5, inView: InView5 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref6, inView: InView6 } = useInView({
    threshold: 0.4,
  });

  const { ref: ref7, inView: InView7 } = useInView({
    threshold: 0.4,
  });

  const { ref: ref8, inView: InView8 } = useInView({
    threshold: 0.4,
  });

  const { ref: ref9, inView: InView9 } = useInView({
    threshold: 0.4,
  });

  return (
    <main>
      <div className="gap h-[120px]"></div>

      <section className="sec1 relative w-full flex flex-wrap">
        <figure className=" w-full h-[300px] relative overflow-hidden">
          <Image
            className=" object-cover"
            layout="responsive"
            height={800}
            width={1200}
            alt="photo"
            src="/contact.jpg"
          />
          <span className=" absolute w-full h-full top-0 left-0 bg-black opacity-40"></span>
        </figure>
        <div className=" absolute w-full h-full top-0 left-0 flex justify-center lg:justify-start lg:ml-20 xl:ml-28 2xl:ml-32  items-center">
          <h1 className=" text-white font-passion flex items-center text-center h-full text-[35px] md:text-[40px] lg:text-[45px]">
            ROPE ACCESS SERVICES
          </h1>
        </div>
      </section>

      <section className="sec2 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        <figure className="m-4 h-[250px] md:h-[400px] xl:h-[700px] 2xl:h-[850px] md:m-8 overflow-hidden rounded-[10px] transition-transform border">
          <Image
            className=" object-cover"
            src="/aboutSec2.jpg"
            alt=""
            layout="responsive"
            height={800}
            width={1200}
          />
        </figure>

        <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
          <p className="  my-2 text-lightGreen font-rubik w-full">WHAT IS IT</p>
          <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
            ROPE ACCESS SERVICES: UNPARALLELED EXPERTISE ACROSS METRO VANCOUVER
          </h1>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            UNDERSTANDING ROPE ACCESS
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            In the dynamic skyline of cities from Vancouver, North Vancouver,
            West Vancouver to Surrey, Coquitlam, and Burnaby, efficient and
            secure work-at-height solutions are pivotal. Enter Rope Access. Rope
            Access isn’t merely a method—it’s an art and a science combined.
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            This cost-effective approach doesn’t just give access to challenging
            areas; it provides flexibility, allowing professionals to move
            omnidirectionally, self-rescue, deftly position heavy equipment, and
            so much more. A vital distinction needs to be made here:
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            Rope Access is a galaxy apart from the limited scope of unlicensed
            Bosun’s Chair work, which significantly restricts mobility and
            functionality.
          </p>
          <Link className=" w-full justify-start mt-8" href="/services/Rope">
            <CustomButton1 className="">LEARN MORE</CustomButton1>
          </Link>
        </div>
      </section>

      <section className="sec3 bg-lightGreen bg-[url('/cartographer.png')]">
        <h1 className=" w-full flex justify-center text-white text-[20px] md:text-[30px] xl:text-[40px] font-rubik p-4 pt-8 md:pt-12 xl:pt-14 ">
          WHTA WE DO
        </h1>
        <div className=" flex flex-wrap xl:flex-nowrap justify-center xl:justify-evenly ">
          {/* {/////////////////////////////////animation_emotion1/////////////////////////////////////} */}
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView1 ? 1 : 0,
              y: InView1 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" flex justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 overflow-hidden  rounded-[10px] "
          >
            <figure className=" w-full relative group ">
              <Link
                className="h-[450px] md:h-[600px] xl:h-[400px] 2xl:h-[500px]  w-full  "
                href="/services/Rope/Anchor"
              >
                <Image
                  className=" object-cover group-hover:scale-125 duration-500"
                  src="/IMG_3775.jpeg"
                  alt=""
                  layout="responsive"
                  height={800}
                  width={1200}
                />
                <figcaption className=" absolute w-full h-full top-0 left-0  text-start  flex items-end shadow-imgShadow  p-4 text-white text-[20px] font-rubik">
                  ANCHOR INSPECTION
                </figcaption>
              </Link>
            </figure>
          </motion.div>
          {/* {/////////////////////////////////animation_emotion2/////////////////////////////////////} */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView2 ? 1 : 0,
              y: InView2 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" flex justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 overflow-hidden  rounded-[10px]"
          >
            <figure className=" w-full  relative group  ">
              <Link
                className=" h-[450px] md:h-[600px] xl:h-[400px] 2xl:h-[500px] w-full"
                href="/services/Rope/Photo"
              >
                <Image
                  className=" object-cover group-hover:scale-125 duration-500"
                  src="/IMG_4913.jpg"
                  alt=""
                  layout="responsive"
                  height={800}
                  width={1200}
                />
                <figcaption className=" absolute w-full h-full top-0 left-0 text-start  flex items-end shadow-imgShadow p-4 text-white text-[20px] font-rubik">
                  PHOTO REPORTING
                </figcaption>
              </Link>
            </figure>
          </motion.div>
          {/* {/////////////////////////////////animation_emotion3/////////////////////////////////////} */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView3 ? 1 : 0,
              y: InView3 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" flex justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 overflow-hidden  rounded-[10px] "
          >
            <figure className=" w-full relative group ">
              <Link
                className="h-[450px] md:h-[600px] xl:h-[400px] 2xl:h-[500px] w-full"
                href="/services/Rope/StandBy"
              >
                <Image
                  className=" object-cover group-hover:scale-125 duration-500"
                  src="/imgd.png"
                  alt=""
                  layout="responsive"
                  height={800}
                  width={1200}
                />
                <figcaption className=" absolute w-full  h-full top-0 left-0 text-start  flex items-end shadow-imgShadow  p-4 text-white text-[20px] font-rubik">
                  STAND-BY RESCUE
                </figcaption>
              </Link>
            </figure>
          </motion.div>
        </div>
      </section>

      <section className="sec4 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        {/* {/////////////////////////////////animation_emotion4/////////////////////////////////////} */}
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView4 ? 1 : 0,
            x: InView4 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <figure className=" m-4 h-[350px] md:h-[400px] xl:h-[650px] 2xl:h-[750px] md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              className=" object-cover"
              src="/aboutSec2.jpg"
              alt=""
              layout="responsive"
              height={800}
              width={1200}
            />
          </figure>
        </motion.div>
        {/* {/////////////////////////////////animation_emotion5/////////////////////////////////////} */}
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: InView5 ? 1 : 0,
            x: InView5 ? 0 : 50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" flex items-center"
        >
          <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
            <p className="  my-2 text-lightGreen font-rubik w-full">
              ROPE ACCESS SERVICE
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              ANCHOR INSPECTION
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
              Through our strong partnerships and years of experience, Granite
              offers detailed Anchor Inspection services. We cover yearly
              assessments and evaluations for new installations. Our deep
              knowledge of anchor techniques allows us to perform both permanent
              and temporary setups, ensuring safe access for crews in difficult
              locations while maintaining top safety and structural standards.
            </p>
            <Link className=" w-full justify-start mt-8" href="/services/Rope">
              <CustomButton1 className="">LEARN MORE</CustomButton1>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="sec5 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        {/* {/////////////////////////////////animation_emotion6/////////////////////////////////////} */}
        <motion.div
          ref={ref6}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView6 ? 1 : 0,
            x: InView6 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" order-2 xl:order-1 flex items-center"
        >
          <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
            <p className="  my-2 text-lightGreen font-rubik w-full">
              ROPE ACCESS SERVICE
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              PHOTO REPORTING
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
              At Granite, we understand the importance of accurate documentation
              and offer comprehensive Photo Reporting services tailored to fit
              your project’s specific needs. Whether you require a basic visual
              record or more detailed reporting with markups, we’ve got you
              covered. Our advanced photo reporting is particularly beneficial
              for collaborations with engineering firms, providing invaluable
              assistance in the creation of depreciation reports and other
              technical documentation. This service ensures that every aspect of
              your project is captured with precision, aiding in clear
              communication and seamless project management.
            </p>
            <Link className=" w-full justify-start mt-8" href="/services/Rope">
              <CustomButton1 className="">LEARN MORE</CustomButton1>
            </Link>
          </div>
        </motion.div>
        {/* {/////////////////////////////////animation_emotion7/////////////////////////////////////} */}
        <motion.div
          ref={ref7}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: InView7 ? 1 : 0,
            x: InView7 ? 0 : 50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" order-1 xl:order-2"
        >
          <figure className=" m-4 h-[350px] md:h-[400px]  xl:h-[650px] 2xl:h-[750px] md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              className=" object-cover"
              src="/aboutSec2.jpg"
              alt=""
              layout="responsive"
              height={800}
              width={1200}
            />
          </figure>
        </motion.div>
      </section>

      <section className="sec6 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        {/* {/////////////////////////////////animation_emotion8/////////////////////////////////////} */}
        <motion.div
          ref={ref8}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView8 ? 1 : 0,
            x: InView8 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <figure className=" m-4 h-[250px] md:h-[400px]  xl:h-[650px] 2xl:h-[750px] md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              className=" object-cover"
              src="/aboutSec2.jpg"
              alt=""
              layout="responsive"
              height={800}
              width={1200}
            />
          </figure>
        </motion.div>
        {/* {/////////////////////////////////animation_emotion9/////////////////////////////////////} */}
        <motion.div
          ref={ref9}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: InView9 ? 1 : 0,
            x: InView9 ? 0 : 50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" flex items-center"
        >
          <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
            <p className="  my-2 text-lightGreen font-rubik w-full">
              ROPE ACCESS SERVICE
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              STAND-BY RESCUE
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px]">
              At Granite, we specialize in providing top-notch Stand-By Rescue
              services, equipped with high-angle tripods and an array of
              anchorage options. This allows us to install systems precisely
              where necessary, ensuring your job site runs safely and smoothly.
              Understanding the unpredictable nature of on-call demands, we
              prioritize open communication with our clients to tailor our
              services to their specific needs. Our goal is to offer the most
              competitive pricing and plans, guaranteeing that operations on
              your job site continue without interruption.
            </p>
            <Link className=" w-full justify-start mt-8" href="/services/Rope">
              <CustomButton1 className="">LEARN MORE</CustomButton1>
            </Link>
          </div>
        </motion.div>
      </section>

      <Request />

      <Footer />
    </main>
  );
}
