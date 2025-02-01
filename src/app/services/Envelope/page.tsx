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

export default function Envelope() {
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
            BUILDING ENVELOPE SERVICES
          </h1>
        </div>
      </section>

      <section className="sec2 flex flex-wrap py-8 2xl:py-12  xl:flex-nowrap *:w-full *:xl:w-[50%] overflow-hidden">
        <figure className=" m-4 h-[250px] md:h-[400px] xl:h-[700px] 2xl:h-[850px] md:m-8 overflow-hidden rounded-[10px] transition-transform border">
          <Image
            className=" object-cover"
            src="/about.jpg"
            alt="photo"
            layout="responsive"
            height={800}
            width={1200}
          />
        </figure>

        <div className="flex flex-wrap  *:flex content-center m-4 md:m-8  ">
          <p className="  my-2 text-lightGreen font-rubik w-full">WHAT IS IT</p>
          <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
            BUILDING ENVELOPE SERVICES
          </h1>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            A building envelope consists of the coatings and structures
            engineered to keep the inside in and the outside out. Many coatings
            and systems work together to achieve this end result, but they must
            be maintained and sometimes repaired.
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            We are knowledgeable about these systems and the foundation on which
            they are built. As experts in the industry, we can handle concrete
            and rebar repairs before coating applications, either in small
            localized patches or entire structures. A benefit of working with us
            is that we are a full-delivery firm. We can handle your project from
            preparation through to final clean delivery.
          </p>
          <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
            All projects are staffed and managed by us. We won’t rely on several
            subcontractors to get the job done and are wholly dependable to you.
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
                href="/services/Envelope/Painting"
              >
                <Image
                  className=" object-cover group-hover:scale-125 duration-500"
                  src="/IMG_3775.jpeg"
                  alt=""
                  layout="responsive"
                  height={800}
                  width={1200}
                />
                <figcaption className=" absolute w-full h-full top-0 left-0 text-start flex items-end shadow-imgShadow  p-4 text-white text-[20px] font-rubik">
                  PAINTING SERVICES
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
                href="/services/Envelope/Caulking"
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
                  CAULKING SERVICES
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
                href="/services/Envelope/Waterproofing"
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
                  WATERPROOFING SERVICES
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
          <figure className="m-4 h-[350px] md:h-[400px] xl:h-[650px] 2xl:h-[750px] border md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              className=" object-cover"
              src="/about.jpg"
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
              BUILDING ENVELOPE SERVICES
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              PAINTING
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
              At Granite, we enhance our painting services to perfectly meet
              your building’s aesthetic needs. Our skilled technicians start
              with a detailed evaluation of the surface, preparing it thoroughly
              by fixing imperfections and ensuring it’s clean, smooth, and ready
              for paint. We move away from traditional scaffolding methods,
              instead using our rope access experts and their advanced rigging
              techniques to efficiently reach even the most hard-to-access areas
              of your building. Our commitment goes beyond just applying paint;
              we provide a manufacturer warranty on our services and enforce a
              strict cleanup policy with advanced gear, sticking to our “leave
              no trace” principle—except for our expertly applied paint.
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
              BUILDING ENVELOPE SERVICES
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              CAULKING
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px] text-justify">
              In the intricate work of maintaining and enhancing buildings, the
              precision in applying caulking cannot be overstated. Operating in
              the challenging environments of rope access, our team pays
              meticulous attention to detail to ensure that sealant is applied
              only where needed, avoiding unintended areas such as windows and
              siding. We offer various caulking services tailored to meet your
              building’s specific needs, from securing coping caps to sealing
              window frames. This careful approach not only enhances your
              structure’s aesthetic and functional integrity but also prevents
              future damage by ensuring a watertight seal in critical areas.
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
          <figure className="m-4 h-[350px] md:h-[400px]  xl:h-[650px] 2xl:h-[750px] md:m-8 overflow-hidden rounded-[10px] transition-transform ">
            <Image
              className="  w-full object-cover"
              src="/about.jpg"
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
              src="/about.jpg"
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
              BUILDING ENVELOPE SERVICES
            </p>
            <h1 className=" my-2 text-black font-rubik w-full text-[40px]">
              WATERPROOFING
            </h1>
            <p className="  my-2 text-black font-rubik w-full 2xl:text-[23px]">
              Our waterproofing services offer a vital layer of protection for
              high-rise concrete structures, combating the inherent
              vulnerabilities of concrete to water infiltration. Despite its
              strength, concrete is prone to allowing water to penetrate through
              capillary action or its cracks, risking the integrity of the
              reinforcing steel within and, ultimately, the structure itself.
              This can manifest in corrosion, spalling, and severe structural
              damage over time. By applying a waterproof membrane, we create an
              impervious barrier that halts water penetration, preserving the
              building’s structural integrity and longevity. This preventative
              measure is crucial for maintaining the health and safety of any
              concrete edifice, ensuring it remains robust against the elements.
              We also specialize in industrial marine grade coatings for
              susceptible metal components.
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
