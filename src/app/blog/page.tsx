"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Request from "@/sendRequest/page";
import Data from "@/app/Data.json";
import Footer from "../footer/page";

const CustomButton1 = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "16px 20px",
  color: "white",
  border: "1px solid",
  borderColor: "#009fff",
  lineHeight: 1.5,
  backgroundColor: "#009fff",
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

const data = Data.routes.blogs

export default function Blog() {
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
            src="/creear.png"
          />
          <span className=" absolute w-full h-full top-0 left-0 bg-black opacity-40"></span>
        </figure>
        <div className=" absolute w-full h-full top-0 left-0 flex  justify-center lg:justify-start lg:ml-20 xl:ml-28 2xl:ml-32  items-center">
          <h1 className=" text-white font-passion text-[35px] md:text-[60px] lg:text-[80px]">
            BLOG
          </h1>
        </div>
      </section>

      <section className="sec2 w-full">
        <ul className=" w-full flex flex-wrap justify-center xl:justify-evenly *:w-full *:xl:w-[45%] p-4 md:p-8 lg:p-10 xl:p-20 2xl:p-32">
          {data.map((post) => (
            <li
              key={post.id}
              className="flex h-[300px] 2xl:h-[400px] my-4 md:my-8"
            >
              <Link className="w-full h-full group" href={`/blog/${post.slug}`}>
                <figure className="flex bg-slate-600 w-full h-full relative">
                  <Image
                    className="w-full h-full object-cover"
                    layout="responsive"
                    height={800}
                    width={1200}
                    src={post.image}
                    alt={post.title}
                  />
                  <span className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10 group-hover:opacity-50 duration-300"></span>
                  <figcaption className="absolute z-20 flex flex-wrap w-[80%]  *:w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-white font-pts text-[25px]">
                      {post.title}
                    </h1>
                    <p className="text-slate-300 text-[14px] pb-4">
                      {post.date} / {post.categories.join(", ")}
                    </p>
                    <CustomButton1>READ MORE</CustomButton1>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Request />

      <Footer />
    </main>
  );
}
