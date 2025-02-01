"use Client";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Image from "next/image";
import Data from "@/app/Data.json";
import { useRef } from "react";

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

export default function Request() {
  const data = Data.routes.request;
  // { celect refs}
  const inp1 = useRef<HTMLInputElement | null>(null);
  const inp2 = useRef<HTMLInputElement | null>(null);
  const inp3 = useRef<HTMLInputElement | null>(null);
  const inp4 = useRef<HTMLInputElement | null>(null);
  const inp5 = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    // Collect input values
    const values = {
      name: inp1.current?.value,
      email: inp2.current?.value,
      phone: inp3.current?.value,
      address: inp4.current?.value,
      message: inp5.current?.value,
    };

    console.log("Collected Values:", values);

    // Send data to the PHP backend
    try {
      const response = await fetch("http://localhost:5000/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Send as JSON
        },
        body: JSON.stringify(values), // Convert to JSON string
      });

      if (response.ok) {
        const result = await response.text(); // Get response from PHP
        console.log("Success:", result);
        alert("Your request has been submitted!");
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("There was an error submitting your request.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert(
        "There was a problem submitting your request. Please try again later."
      );
    }
  };
  return (
    <section className="w-full flex flex-wrap xl:flex-nowrap xl:justify-between justify-center items-center bg-stone-100">
      <div className="flex flex-wrap m-4 md:m-8 w-full xl:w-[50%] my-12 md:my-14 xl:my-28 2xl:my-36 ">
        <span className="my-2 text-lightGreen font-rubik w-full text-center xl:text-start ">
          {data[0].heading}
        </span>
        <h1 className="my-2 text-black font-rubik w-full text-[25px] text-center xl:text-start ">
          {data[0].description}
        </h1>

        <input
          className=" focus:outline  font-pts  rounded-none w-full border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
          type={data?.[0].inputs?.[0].type as string}
          id="inp1"
          ref={inp1}
          name="name"
          placeholder={data?.[0].inputs?.[0].placeholder as string}
        />
        <input
          className=" focus:outline  font-pts  rounded-none w-full border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
          type={data?.[0].inputs?.[1].type as string}
          id="inp2"
          ref={inp2}
          name="Gmail"
          placeholder={data?.[0].inputs?.[1].placeholder as string}
        />
        <input
          className=" focus:outline  font-pts  rounded-none w-full border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
          type={data?.[0].inputs?.[2].type as string}
          id="inp3"
          ref={inp3}
          name="number"
          placeholder={data?.[0].inputs?.[2].placeholder as string}
        />
        <input
          className=" focus:outline  font-pts  rounded-none w-full border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
          type={data?.[0].inputs?.[3].type as string}
          id="inp4"
          ref={inp4}
          name="address"
          placeholder={data?.[0].inputs?.[3].placeholder as string}
        />
        <textarea
          rows={10}
          className=" w-full font-pts focus:outline border-2 border-slate-300 2xl:text[20px] mt-4 md:mt-8 xl:md:mt-10 2xl:md:mt-14  p-2 2xl:p-4"
          id="message-area"
          name="message"
          ref={inp5}
          placeholder={data?.[0].inputs?.[4].placeholder as string}
        ></textarea>
        <CustomButton1 className=" w-full font-rubik" onClick={handleSubmit}>
          {data?.[0].button.label}
        </CustomButton1>
      </div>
      <figure className="flex h-[450px] md:h-[600px] xl:h-[750px] 2xl:h-[950px] m-4 md:m-8 w-full xl:w-[50%] overflow-hidden rounded-[10px] mb-12 md:mb-16 xl:my-28 2xl:my-36 ">
        <Image
          className=" h-full  w-full object-cover hover:scale-110 duration-500 filter contrast-125"
          src={data[0].image as string}
          alt={data[0].alt as string}
          layout="reintrinsic"
          height={800}
          width={1200}
        />
      </figure>
    </section>
  );
}
