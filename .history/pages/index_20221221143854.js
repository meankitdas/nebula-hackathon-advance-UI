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
            className="md:w-auto md:h-auto md:absolute md:right-0 md:mt-0 mt-80  "
          />

          <div className="p-10 bg-red-700">
            <div className=" bg-slate-800  text-black">
              <div className="mb-4 ">
                <Image src={jain} alt="jain" className="w-80 z-20 " />
              </div>
              <h2 className="text-">Presents</h2>
              <div>
                <h1>India's Biggest</h1>
                <h1>
                  Tech <span>Hackathon</span>
                </h1>
              </div>
              <h2>
                Apr 27<sup>th</sup> - 31<sup>st</sup>, 2023
              </h2>
            </div>

            {/* button */}

            <div className=" flex">
              <button>Go to dashboard</button>
              <button>Join discord</button>
            </div>
          </div>

          
        </section>
      </main>
    </>
  );
}
