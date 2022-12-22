import BirthPage from "./birthPage";
import ThemePage from "./themePage";
import { motion, useScroll, useTransform } from "framer-motion";



export default function SpeakerPage() {
  let { scrollYProgress } = useScroll();
  let scale = useTransform(scrollYProgress, [1, 0.5, ], [1, 0.5, 1]);
  let opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);
  let x = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);
  let y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);

  return (
    <section className=" min-h-screen p-0  bg-white  md:block" id="speaker">
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
    </section>
  );
}
