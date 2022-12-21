import Image from "next/image";
import jain from "../../public/jain_logo.webp";

export default function MainContent() {
    return (
        <div className="relative p-10 mb-4 md:ml-5 ml-0">
            <div className="  text-black">
              <div className="mb-4 ">
                <Image src={jain} alt="jain" className="w-80 z-20 " />
              </div>
              <h2 className="text-2xl  mb-4 ">Presents</h2>
              <div className="mb-4  md:text-8xl text-6xl">
                <h1 className="">Nebula</h1>
                <h1 className="">
                  Tech <span className="text-secondary">Hackathon</span>
                </h1>
              </div>
              <h2 className="text-2xl mb-4 ">
                Apr 27<sup>th</sup> - 31<sup>st</sup>, 2023
              </h2>
            </div>

            {/* button */}

            <div className="  md:mt-10 mt-28 z-20 text-white ">
              <button className="bg-secondary p-2 pl-5 pr-5 md:mr-4 mr-2 rounded-lg">
                Go to dashboard
              </button>
              <button className="bg-secondary p-2 pl-5 pr-5 rounded-lg">
                Join discord
              </button>
            </div>
          </div>
    )
}