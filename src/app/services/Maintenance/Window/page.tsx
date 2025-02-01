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

export default function Window() {
  const { ref: ref1, inView: InView1 } = useInView({
    threshold: 0.4,
  });

  const { ref: ref2, inView: InView2 } = useInView({
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
            WINDOW CLEANING
          </h1>
        </div>
      </section>

      <section className="sec2 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        <figure className=" m-4 h-[250px] md:h-[400px] xl:h-[700px] 2xl:h-[850px] md:m-8 overflow-hidden rounded-[10px] transition-transform border">
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
            PREMIER WINDOW CLEANING SOLUTIONS IN METRO VANCOUVER
          </h1>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            EXPERIENCE THE CLARITY WINDOW CLEANING SERVICES
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            Whether it’s a towering high-rise in downtown Vancouver or a quaint
            low-rise in North Vancouver, our window cleaning services cater to
            structures of every height. Utilizing traditional methods, we
            champion the unbeatable combination of soap, water, and a squeegee,
            ensuring cost-effectiveness while upholding unmatched quality. For
            architecturally complex structures in places like Surrey and
            Coquitlam, our advanced filtration system coupled with a water-fed
            pole emerges as the optimal solution. Buildings with accumulated
            grime in West Vancouver and Burnaby will particularly benefit from
            our water-fed pole technique, ensuring not just the glass but also
            the frames are spotlessly clean. We’re here to discuss the best
            approach tailored to your needs.
          </p>
          <Link className=" w-full justify-start mt-8" href="/services/Rope">
            <CustomButton1 className="">LEARN MORE</CustomButton1>
          </Link>
        </div>
      </section>

      <section className="sec3 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        {/* {/////////////////////////////////animation_emotion1/////////////////////////////////////} */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView1 ? 1 : 0,
            x: InView1 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" order-2 xl:order-1 flex items-center"
        >
          <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
            <p className="  my-2 text-lightGreen font-rubik w-full">
              WHAT IS IT
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              REVOLUTIONARY WATERFED POLE CLEANING
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
              Venture beyond the conventional with our state-of-the-art waterfed
              pole cleaning services. While many may rely solely on standard
              soap-water techniques, we integrate the latest filtration systems
              to ensure crystal clear results across Vancouver, North Vancouver,
              Surrey, and beyond. Even the pristine waters of Vancouver can
              sometimes leave undesired residues. That’s where our filtration
              system shines, producing results that often surpass hand cleaning.
              While many contractors might offer waterfed pole cleaning as a
              quick, discounted solution, our use of specialized filtration
              ensures unparalleled brilliance. Ideal for residences in
              Coquitlam, Burnaby, and West Vancouver, our waterfed pole system
              is the gold standard for low-rise structures.
            </p>
            <Link className=" w-full justify-start mt-8" href="/services/Rope">
              <CustomButton1 className="">LEARN MORE</CustomButton1>
            </Link>
          </div>
        </motion.div>
        {/* {/////////////////////////////////animation_emotion7/////////////////////////////////////} */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: InView2 ? 1 : 0,
            x: InView2 ? 0 : 50,
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

      <Request />

      <Footer />
    </main>
  );
}
