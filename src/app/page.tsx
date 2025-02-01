"use client";
import React, { useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "next/navigation";
import Data from "@/app/Data.json";
import Footer from "./footer/page";

// Dynamically import Request if needed
const Request = React.lazy(() => import("@/sendRequest/page"));

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

const CustomButton2 = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "16px 20px",
  color: "white",
  lineHeight: 1.5,
  border: "1px solid",
  backgroundColor: "#7adcb400",
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
    backgroundColor: "#009C61",
    boxShadow: "none",
    borderColor: "#009C61",
  },
  borderRadius: "0",
});

export default function Home() {
  const searchParams = useSearchParams();
  const requestRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollToFallback = searchParams.get("scrollTo");
    if (scrollToFallback === "requestUs" && requestRef.current) {
      requestRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  const { ref: ref1, inView: InView1 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref2, inView: InView2 } = useInView({
    threshold: 0.5,
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
    threshold: 0.2,
  });

  const { ref: ref7, inView: InView7 } = useInView({
    threshold: 0.2,
  });

  const data = Data.routes.Home

  return (
    <main>
      <section className="sec1 w-full h-[100vh] flex flex-wrap *:w-full overflow-hidden">
        <div className="gap h-[120px]"></div>
        <div className=" h-[calc(100vh-120px)]  flex justify-center relative ">
          <figure className=" w-full h-full relative  ">
            <Image
              className=" w-full h-full  object-cover filter brightness-125 contrast-150 "
              src={data[0].backgroundImage as string}
              alt=""
              layout="reintrinsic"
              height={800}
              width={1200}
            />
            <span
              style={{
                backgroundImage: `url(${
                  data[0].logoBackground as string
                })`,
              }}
              className=" hidden md:block absolute top-[-50px] right-[-80px]  w-[50%] 2xl:w-[60%] h-[100vh] rotate-[-20deg] bg-no-repeat bg-cover"
            ></span>

            <span className=" absolute top-0 left-0 w-full h-full bg-black opacity-70 "></span>
          </figure>
          <div className="txt absolute top-0 left-0 w-full h-full flex flex-wrap *:w-full justify-start content-center ">
            <div className="ml-4 md:ml-6 xl:ml-16">
              <h1 className=" font-paint text-white  text-[50px] md:text-[70px] 2xl:text-[100px] underline ">
                {data[0].heading}
              </h1>
            </div>
            <div className="ml-4 md:ml-6 xl:ml-16 mr-2 md:mr-4 text-white font-rubik  sm:my-8 2xl:my-16  ">
              <p className="text-[15px] md:text-[18px] 2xl:[20px] xl:w-[500px] 2xl:w-[600px]">
                {data[0].description}
              </p>
            </div>
            <div className=" flex flex-wrap md:flex-nowrap">
              <Link
                className=" w-full md:w-fit ml-4 md:ml-6 xl:ml-16 xl my-2"
                href={data[0].link as string}
              >
                <CustomButton1 className=" " variant="contained">
                  {data[0].label}
                </CustomButton1>
              </Link>
              <Link
                className="w-full md:w-fit ml-4 md:ml-6 xl:ml-8 xl my-2"
                href={data[0].link2 as string}
              >
                <CustomButton2 className=" " variant="contained">
                  {data[0].label2}
                </CustomButton2>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        {/* {/////////////////////////////////animation_emotion1/////////////////////////////////////} */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: InView1 ? 1 : 0,
            x: InView1 ? 0 : -50,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <figure className="m-4 md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              className=" h-[250px] md:h-[400px] xl:h-[450px] 2xl:h-[650px] w-full object-cover"
              src={data[1].image as string}
              alt={data[1].altImage as string}
              layout="reintrinsic"
              height={800}
              width={1200}
            />
          </figure>
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
          className=" flex justify-center items-center"
        >
          <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
            <p className="  my-2 text-lightGreen font-rubik w-full">
              {data[1].subHeading}
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              {data[1].heading}
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px]">
              {data[1].paragraph}
            </p>
            <Link
              className=" w-full justify-start mt-8"
              href={data[1].link as string}
            >
              <CustomButton1 className="">
                {data[1].label}
              </CustomButton1>
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="sec3 flex flex-wrap *:w-full justify-center content-center bg-[#e7e7e796]">
        <h1 className=" text-[30px] flex justify-center pt-8 pb-4 px-4 mx-4 xl:pt-20 xl:px-8 ">
          {data[2].heading}
        </h1>
        <p className=" text-center flex justify-center pb-8 px-8  mx-4 xl:pb-20 xl:px-28 2xl:px-32 2xl:text-[20px]">
          {data[2].paragraph}
        </p>
      </section>
      <section className="sec4 bg-lightGreen bg-[url('/cartographer.png')]">
        <h1 className=" w-full flex justify-center text-white text-[20px] md:text-[30px] xl:text-[40px] font-rubik p-4 pt-8 md:pt-12 xl:pt-14 ">
          {data[3].heading}
        </h1>
        <div className=" flex flex-wrap xl:flex-nowrap justify-center xl:justify-evenly ">
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
                className="h-[450px] md:h-[600px] xl:h-[400px] 2xl:h-[500px]  w-full  "
                href={data[3].img1?.link as string}
              >
                <Image
                  className=" rounded-[10px] h-full  w-full  object-cover group-hover:scale-125 duration-500"
                  src={data[3].img1?.image as string}
                  alt={data[3].img1?.altImage as string}
                  layout="reintrinsic"
                  height={800}
                  width={1200}
                />
                <figcaption className=" absolute w-full h-full top-0 left-0  text-start  flex items-end shadow-imgShadow  p-4 text-white text-[20px] font-rubik">
                  {data[3].img1?.title}
                </figcaption>
              </Link>
            </figure>
          </motion.div>
          {/* {/////////////////////////////////animation_emotion4/////////////////////////////////////} */}
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView4 ? 1 : 0,
              y: InView4 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" flex justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 overflow-hidden  rounded-[10px]"
          >
            <figure className=" w-full  relative group  ">
              <Link
                className=" h-[450px] md:h-[600px] xl:h-[400px] 2xl:h-[500px] w-full"
                href={data[3].img2?.link as string}
              >
                <Image
                  className=" rounded-[10px] h-full w-full object-cover group-hover:scale-125 duration-500"
                  src={data[3].img2?.image as string}
                  alt={data[3].img2?.altImage as string}
                  layout="reintrinsic"
                  height={800}
                  width={1200}
                />
                <figcaption className=" absolute w-full h-full top-0 left-0 text-start  flex items-end shadow-imgShadow p-4 text-white text-[20px] font-rubik">
                  {data[3].img2?.title}
                </figcaption>
              </Link>
            </figure>
          </motion.div>
          {/* {/////////////////////////////////animation_emotion5/////////////////////////////////////} */}
          <motion.div
            ref={ref5}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView5 ? 1 : 0,
              y: InView5 ? 0 : 60,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" flex justify-center items-center w-full xl:w-[30%] m-4 md:m-8 xl:m-12 overflow-hidden rounded-[10px] "
          >
            <figure className=" w-full relative group ">
              <Link
                className="h-[450px] md:h-[600px] xl:h-[400px] 2xl:h-[500px] w-full"
                href={data[3].img3?.link as string}
              >
                <Image
                  className=" rounded-[10px] h-full w-full object-cover group-hover:scale-125 duration-500"
                  src={data[3].img3?.image as string}
                  alt={data[3].img3?.altImage as string}
                  layout="reintrinsic"
                  height={800}
                  width={1200}
                />
                <figcaption className=" absolute w-full  h-full top-0 left-0 text-start  flex items-end shadow-imgShadow  p-4 text-white text-[20px] font-rubik">
                  {data[3].img3?.title}
                </figcaption>
              </Link>
            </figure>
          </motion.div>
        </div>
      </section>
      <section className="sec5 flex  flex-wrap  xl:flex-nowrap *:w-full *:xl:w-[50%] ">
        <div className=" flex justify-center content-center flex-wrap *:font-rubik *:w-full text-center  p-4 xl:my-20 2xl:my-28">
          <span className=" mt-8  text-lightGreen ">
            {data[4].heading}
          </span>
          <h1 className=" mt-1 text-[20px] md:text-[25px] ">
            {data[4].subHeading}
          </h1>
          <p className=" mt-4 text-[14px] md:text-[16px] ">
            {data[4].description}
          </p>
        </div>
        <div className="slider p-4  my-6  xl:my-20 2xl:my-28">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Register Swiper modules
            spaceBetween={20} // Set the space between slides
            centeredSlides={true} // Ensures the current slide is centered
            autoplay={{
              delay: 2500, // Set the autoplay delay (2.5 seconds)
              disableOnInteraction: false, // Ensure autoplay continues after user interaction
            }}
            navigation={true} // Enable navigation arrows
            pagination={{
              clickable: true, // Clickable pagination dots
              dynamicBullets: true, // Makes the pagination bullets dynamic
            }}
            grabCursor={true} // Change the cursor to a grabbing hand when dragging
            loop={true} // Infinite loop for the slides
            loopAdditionalSlides={1} // Preloads 1 slide for smoother transition
            speed={500} // Transition speed in ms
            className="auto-drag-swiper w-full h-[200px]  xl:w-[600px]  md:h-[300px] " // Ensure the swiper has appropriate size
          >
            {/* Add your slides below */}
            {data[4].slider?.map((para) => (
              <SwiperSlide key={para.id}>
                <Image
                  loading="lazy"
                  src={para.img as string}
                  alt={para.alt as string}
                  style={{
                    borderRadius: "0px",
                    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  layout="reintrinsic"
                  height={800}
                  width={1200}
                  className="w-full h-full object-fill "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${data[5].backImage as string})`,
        }}
        className="sec6 relative z-10  overflow-hidden  bg-no-repeat bg-cover"
      >
        <div className=" flex flex-wrap xl:flex-none *:lg:w-[50%] content-start">
          {/* {/////////////////////////////////animation_emotion6/////////////////////////////////////} */}
          <motion.div
            ref={ref6}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView6 ? 1 : 0,
              y: InView6 ? 0 : 60,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" w-full flex justify-center items-center py-12"
          >
            <figure className=" w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:h-full  lg:w-full  lg:p-16">
              <Image
                layout="reintrinsic"
                height={800}
                width={1200}
                className=" w-full h-full object-cover "
                src={data[5].logo as string}
                alt={data[5].altlogo as string}
              />
            </figure>
          </motion.div>
          {/* {/////////////////////////////////animation_emotion7/////////////////////////////////////} */}
          <motion.div
            ref={ref7}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: InView7 ? 1 : 0,
              y: InView7 ? 0 : 60,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" flex justify-center  px-5 py-12"
          >
            <div className=" h-full w-full  flex flex-wrap  *:w-full  content-start lg:content-center ">
              <span className=" mt-4 text-[14px]  text-white font-rubik  ">
                {data[5].subHeading}
              </span>
              <h1 className=" mt-1 text-[22px] md:text-[25px] text-white font-rubik ">
                {data[5].heading}
              </h1>
              <ul className=" mt-2 list-disc content-center *:text-white *:font-rubik *:text-[16px] *:md:text-[18px]  *:2xl:text-[25px]   *:mx-4 flex flex-wrap *:w-full ">
                {data[5].list?.map((para) => (
                  <li key={para.id}>{para.txt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        <span className=" w-full h-full absolute top-0 left-0 -z-50 bg-black opacity-50 "></span>
      </section>

      <section className="sec7" ref={requestRef}>
        <Request />
      </section>

      <Footer />
    </main>
  );
}
