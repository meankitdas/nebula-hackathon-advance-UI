import Stars from "./stars";
import MainContent from "./maincontent";
import Navbar from "./navbar";
import Image from "next/image";
import Mark from "../../public/pencil.webp";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MainPage() {
  let { scrollYProgress } = useScroll();
  let scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);
  let opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);
  let x = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);
  let y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);

  return (
    <motion.section style={{ x, y, opacity, s }} className=" min-h-screen p-2 " id="about">
      {/* we will suspend it in small screen */}

      <nav className="bg-white min-w-screen h-14 mx-10 rounded-2xl  text-black text-sm overflow-hidden hidden lg:block md:block">
        <Navbar />
      </nav>

      {/* stars image  */}
      <Stars />

      {/* main content */}

      <MainContent />

      {/* live section */}
      <div className="relative">
        <Image
          src={Mark}
          className="absolute w-28 bottom-12 right-0 md:right-20"
        />
        <div className="flex justify-center items-center h-24 overflow-hidden md:m-32 md:mb-5 m-10 bg-white rounded-2xl ">
          <h1 className="md:text-2xl text-base">** Live Registration</h1>
        </div>
      </div>
    </motion.section>
  );
}
