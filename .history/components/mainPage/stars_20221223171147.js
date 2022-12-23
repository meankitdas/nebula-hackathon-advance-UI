import Image from "next/image";
import stars from "../../public/stars.webp";
import Lottie from "lottie-react";
import 

export default function Stars() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Image
      src={stars}
      alt="stars"
      className="md:w-auto md:h-auto absolute md:right-0 md:mt-0 mt-80 hidden md:block  "
    />
  );
}