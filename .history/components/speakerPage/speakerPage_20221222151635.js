import BirthPage from "./birthPage";
import ThemePage from "./themePage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function SpeakerPage() {
  
  return (
    <section
      
      className=" min-h-screen p-0  bg-white  md:block"
      id="speaker"
    >
      <div className=" h-screen ">
        {/* birth of Innovator */}
        <div className="flex w-full h-1/2 ">
          <BirthPage />
        </div>
        {/* theme  */}
        <motion.div className="flex w-full h-1/2 bg-primary" >
          <ThemePage />
        </motion.div>
      </div>
    </section>
  );
}
