import BirthPage from "./birthPage";
import ThemePage from "./themePage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function SpeakerPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

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
        <motidiv className="flex w-full h-1/2 bg-primary">
          <ThemePage />
        </motidiv>
      </div>
    </section>
  );
}
