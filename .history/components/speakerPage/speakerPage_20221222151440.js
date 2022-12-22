import BirthPage from "./birthPage";
import ThemePage from "./themePage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function SpeakerPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 0]);

  return (
    <motion.section
      style={{ y }}
      className=" min-h-screen p-0  bg-white  md:block"
      id="speaker"
    >
      <div className=" h-screen ">
        {/* birth of Innovator */}
        <div className="flex w-full h-1/2 ">
          <BirthPage />
        </div>
        {/* theme  */}
        <div className="flex w-full h-1/2 bg-primary">
          <ThemePage />
        </div>
      </div>
    </motion.section>
  );
}