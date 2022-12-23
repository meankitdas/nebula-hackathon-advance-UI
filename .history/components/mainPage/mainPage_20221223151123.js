import Stars from "./stars";
import MainContent from "./maincontent";
import Navbar from "./navbar";
import Image from "next/image";
import Mark from "../../public/pencil.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import StarAnimation from "../animation/starAnimation";

export default function MainPage() {
  

  

  return (
    <section  className=" min-h-screen p-2 " id="about">
      {/* we will suspend it in small screen */}

      <nav className="bg-white min-w-screen h-14 mx-10 rounded-2xl  text-black text-sm overflow-hidden hidden lg:block md:block">
        <Navbar />
      </nav>

      {/* stars image  */}
      <div >
      {/* <Stars />
       */}
      <StarAnimation />
      </div>

      {/* main content */}

      <MainContent />

      {/* live section */}
      <div className="relative" >
        <Image
          src={Mark}
          className="absolute w-28 bottom-12 right-0 md:right-20"
        />
        <div className="flex justify-center items-center h-24 overflow-hidden md:m-32 md:mb-5 m-10 bg-white rounded-2xl ">
          <h1 className="md:text-2xl text-base">** Live Registration</h1>
        </div>
      </div>
    </section>
  );
}
