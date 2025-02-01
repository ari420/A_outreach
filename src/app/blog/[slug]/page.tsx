"use client";  // Add this line to indicate client-side execution

import React, { useEffect, useState } from "react";
import Data from "@/app/Data.json";
import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Footer from "@/app/footer/page";

type Params = {
  slug: string;
};

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

export default function BlogPost({ params }: { params: Promise<Params> }) {
  const [resolvedParams, setResolvedParams] = useState<Params | null>(null);

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params; // Unwrap the params Promise here
      setResolvedParams(resolved);
    };
    resolveParams();
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const { slug } = resolvedParams;

  const post = Data.routes.blogs.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main>
        <div className="gap h-[120px]"></div>
        <section className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-[40px] text-gray-700">404 - Post Not Found</h1>
          <CustomButton1 onClick={() => (window.location.href = "/blog")}>
            Back to Blog
          </CustomButton1>
        </section>
      </main>
    );
  }

  return (
    <main>
      <div className="gap h-[120px]"></div>
      <section className="sec1 relative w-full flex flex-wrap">
        <figure className="w-full h-[300px] relative overflow-hidden">
          <Image
            className="object-cover"
            layout="responsive"
            height={800}
            width={1200}
            alt={post.title}
            src={post.image}
          />
          <span className="absolute w-full h-full top-0 left-0 bg-black opacity-40"></span>
        </figure>
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <h1 className="text-white font-passion text-[35px] md:text-[60px] lg:text-[80px]">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="w-full px-8 lg:px-32 py-16">
        {post.txt.map((data) => (
          <div key={data.id}>
            <h1 className="text-[30px] font-rubik">{data.tupic}</h1>
            <p className="text-slate-600 text-[18px] leading-relaxed text-justify">
              {data.content}
            </p>
          </div>
        ))}
        <div className="mt-8">
          <CustomButton1 onClick={() => (window.location.href = "/blog")}>
            Back to Blog
          </CustomButton1>
        </div>
      </section>

      <Footer />
    </main>
  );
}
