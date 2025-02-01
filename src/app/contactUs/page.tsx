"use client";
import Request from "@/sendRequest/page";
import React from "react";
import Image from "next/image";
import Data from "@/app/Data.json";
import Footer from "../footer/page";

export default function Contact() {
  const data = Data.routes.contactUs;

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
            src={data[0].Image as string}
          />
          <span className=" absolute w-full h-full top-0 left-0 bg-black opacity-40"></span>
        </figure>
        <div className=" absolute w-full h-full top-0 left-0 flex  justify-center lg:justify-start lg:ml-20 xl:ml-28 2xl:ml-32  items-center">
          <h1 className=" text-white font-passion text-[35px] md:text-[60px] lg:text-[80px]">
            {data[0].heading}
          </h1>
        </div>
      </section>

      <Request />

      <Footer />
    </main>
  );
}
