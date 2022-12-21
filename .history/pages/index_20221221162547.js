import Head from "next/head";
import Image from "next/image";
import stars from "../public/stars.webp";
import jain from "../public/jain_logo.webp";
import { isMobile } from "react-device-detect";

import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary ">
        <section className=" min-h-screen p-2 ">
          {/* we will suspend it in small screen */}

          <nav className="bg-white min-w-screen h-14 mx-10 rounded-2xl font-dosis text-black text-xs overflow-hidden hidden lg:block md:block">
            <Navbar />
          </nav>

          <Image
            src={stars}
            alt="stars"
            className="md:w-auto md:h-auto absolute md:right-0 md:mt-0 mt-80 hidden md:block  "
          />

          <div className="p-10 mb-4 ">
            <div className="  text-black">
              <div className="mb-4 ">
                <Image src={jain} alt="jain" className="w-80 z-20 " />
              </div>
              <h2 className="text-2xl font-dosis mb-4 ">Presents</h2>
              <div className="mb-4 font-dosis md:text-8xl text-6xl">
                <h1 className="">Nebula</h1>
                <h1 className="">
                  Tech <span className="text-secondary">Hackathon</span>
                </h1>
              </div>
              <h2 className="text-2xl font-dosis mb-4 ">
                Apr 27<sup>th</sup> - 31<sup>st</sup>, 2023
              </h2>
            </div>

            {/* button */}

            <div className=" font-dosis md:mt-10 mt-28 z-20 ">
              <button className="bg-secondary p-2 pl-5 pr-5 md:mr-4 mr-2 rounded-lg">
                Go to dashboard
              </button>
              <button className="bg-secondary p-2 pl-5 pr-5 rounded-lg">
                Join discord
              </button>
            </div>
          </div>

          {/* live section */}

          <div className=" h-24 overflow-hidden m-10  bg-white ">

          </div>
        </section>
      </main>
    </>
  );
}
