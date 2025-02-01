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

export default function StandBy() {
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
            className=" w-full object-cover"
            layout="reintrinsic"
            height={800}
            width={1200}
            alt="photo"
            src="/contact.jpg"
          />
          <span className=" absolute w-full h-full top-0 left-0 bg-black opacity-40"></span>
        </figure>
        <div className=" absolute w-full h-full top-0 left-0 flex justify-center lg:justify-start lg:ml-20 xl:ml-28 2xl:ml-32  items-center">
          <h1 className=" text-white font-passion flex items-center text-center h-full text-[35px] md:text-[40px] lg:text-[45px]">
            STAND-BY RESCUE
          </h1>
        </div>
      </section>

      <section className="sec2 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        <figure className="m-4 md:m-8 overflow-hidden rounded-[10px] transition-transform border">
          <Image
            className=" h-[250px] md:h-[400px] xl:h-[950px] 2xl:h-[1200px] w-full object-cover"
            src="/imgtop.png"
            alt=""
            layout="reintrinsic"
            height={800}
            width={1200}
          />
        </figure>

        <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
          <p className="  my-2 text-lightGreen font-rubik w-full">
            YOUR SAFETY, OUR PRIORITY STAND-BY RESCUE
          </p>
          <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
            STAND-BY RESCUE CLEANING SERVICES IN METRO VANCOUVER
          </h1>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            REVITALIZE YOUR PROPERTY WITH STAND-BY RESCUE
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            Ensure the safety and efficiency of your home or business in
            Vancouver, North Vancouver, West Vancouver, Surrey, Coquitlam, and
            Burnaby with our top-tier Dryer Duct Cleaning services. We employ
            advanced exterior reverse blow air cleaning, utilizing
            industry-standard vent cleaning hoses tailored to your building’s
            needs. With capabilities to safely reach up to thirty feet into duct
            systems, we ensure the thorough removal of lint accumulations and
            other obstructing debris.
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            Annually in North America, a staggering 17,000 fires are linked to
            unkempt dryer vent ducts. Prioritize this service not just for a
            vital fire prevention measure but also to avert potential water leak
            expenses. Blocked vents that fail to vent out the damp air
            eventually condense moisture, leading to rusting and, ultimately,
            water leakage. The repair costs from damage in just one unit of a
            multi-dwelling structure, like a high-rise, can equate to what you
            might have spent on cleaning the ducts for the entire building. Opt
            for prevention and ensure long-term savings.
          </p>
          <Link className=" w-full justify-start mt-8" href="/services/Rope">
            <CustomButton1 className="">LEARN MORE</CustomButton1>
          </Link>
        </div>
      </section>

      <section className="sec3 relative z-10 bg-[url('/aboutSec3Bg.jpeg')] bg-no-repeat bg-cover flex flex-wrap py-24 md:py-32 xl:py-40  2xl:py-52  xl:flex-nowrap  overflow-hidden">
        {/* {/////////////////////////////////animation_emotion1/////////////////////////////////////} */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView1 ? 1 : 0,
            x: InView1 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full xl:w-[50%] flex justify-center order-2 xl:order-1"
        >
          <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
            <p className="  my-2 text-lightGreen font-rubik w-full">
              WHAT WE DO
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              STAND-BY RESCUE
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
              For those duct systems in Vancouver and surrounding areas that
              have seen years of neglect and can’t be accessed solely from the
              outside, our specialized Combination Clean comes to the rescue.
              This thorough method combines the force of an interior
              high-powered air-stream with the expertise of our technicians
              externally employing a reverse blow, ensuring the tract is
              impeccably clear. This dual-approach is our go-to for residential
              homes across Surrey, Coquitlam, Burnaby, and beyond, guaranteeing
              safety and efficiency in every service call.
            </p>
            <Link className=" w-full justify-start mt-8" href="/services/Rope">
              <CustomButton1 className="">LEARN MORE</CustomButton1>
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
          className="w-full xl:w-[50%] order-1 xl:order-2"
        >
          <figure className="m-4 md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              className=" h-[350px] md:h-[500px] xl:h-[600px] 2xl:h-[800px] w-full object-cover"
              src="/aboutSec3.jpg"
              alt=""
              layout="reintrinsic"
              height={800}
              width={1200}
            />
          </figure>
        </motion.div>
        <span className=" w-full h-full absolute top-0 left-0 -z-50 bg-white opacity-90 "></span>
      </section>

      <Request />

      <Footer />
    </main>
  );
}
