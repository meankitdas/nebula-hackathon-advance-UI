import Image from "next/image";
import stars from "../../public/stars.webp";\

export default function Stars() {
  return (
    <Image
      src={stars}
      alt="stars"
      className="md:w-auto md:h-auto absolute md:right-0 md:mt-0 mt-80 hidden md:block  "
    />
  );
}
