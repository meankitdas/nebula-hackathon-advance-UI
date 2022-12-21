import Head from "next/head";
import Image from "next/image";
import stars from "../public/stars.webp";
import MainContent from "../components/maincontent";
// import { isMobile } from "react-device-detect";

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
      <main className="bg-primary text-black font-dosis ">
        <section className=" min-h-screen p-2 ">
          {/* we will suspend it in small screen */}

          <nav className="bg-white min-w-screen h-14 mx-10 rounded-2xl  text-black text-xs overflow-hidden hidden lg:block md:block">
            <Navbar />
          </nav>

          <Image
            src={stars}
            alt="stars"
            className="md:w-auto md:h-auto absolute md:right-0 md:mt-0 mt-80 hidden md:block  "
          />

          <MainContent />

          {/* live section */}

          <div className="flex justify-center items-center h-24 overflow-hidden md:m-32 m-10 bg-white rounded-2xl ">
              <h1 className="md:text-2xl text-base">** Live Registration</h1>
          </div>
        </section>
      </main>
    </>
  );
}
