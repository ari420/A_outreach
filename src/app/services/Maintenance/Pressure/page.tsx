"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
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

export default function Pressure() {
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
            PRESSURE WASHING
          </h1>
        </div>
      </section>

      <section className="sec2 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        <figure className="m-4  md:m-8 overflow-hidden rounded-[10px] transition-transform border">
          <Image
            className=" h-[250px] md:h-[400px] xl:h-[950px] 2xl:h-[1200px] object-cover"
            src="/aboutSec2.jpg"
            alt=""
            layout="reintrinsic"
            height={800}
            width={1200}
          />
        </figure>

        <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
          <p className="  my-2 text-lightGreen font-rubik w-full">WHAT IS IT</p>
          <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
            PROFESSIONAL PRESSURE WASHING IN METRO VANCOUVER
          </h1>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            REVITALIZE YOUR PROPERTY WITH PRESSURE WASHING PRESSURE WASHING
            SERVICES
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            From Vancouver to Burnaby, Coquitlam, North Vancouver, Surrey, and
            West Vancouver, every property owner understands the toll our
            climate can take on building exteriors. Over time, grime, dirt, and
            organics can degrade surfaces, affecting not only aesthetics but
            also the structural integrity of properties. This is where
            professional pressure washing steps in.
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            Pressure washing stands out as an economical solution to enhance
            your property’s appearance, boosting curb appeal and potentially
            warding off costly damages or repainting tasks. By effectively
            removing the build-up of organic matter, you can prolong the life
            and vibrancy of your property’s surfaces.
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            However, a word of caution: while powerful and effective, pressure
            washing in inexperienced hands can be detrimental. The use of
            specific tools like the 15-degree or rotary nozzle requires utmost
            precision and knowledge to prevent damages.
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            That’s why it’s imperative to engage with a seasoned contractor
            familiar with both the rewards and constraints of pressure washing.
            At Granite, we pride ourselves on our expertise in delivering
            top-tier pressure washing services tailored to your property’s
            unique needs, ensuring a safe and stellar result every time. Choose
            experience; choose quality.
          </p>
          <Link className=" w-full justify-start mt-8" href="/services/Rope">
            <CustomButton1 className="">LEARN MORE</CustomButton1>
          </Link>
        </div>
      </section>

      <Request />

      <Footer />
    </main>
  );
}
