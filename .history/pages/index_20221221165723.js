import Head from "next/head";
import Stars from "../components/ma/stars";
import MainContent from "../components/mainPage/maincontent";
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

          <nav className="bg-white min-w-screen h-14 mx-10 rounded-2xl  text-black text-sm overflow-hidden hidden lg:block md:block">
            <Navbar />
          </nav>

          {/* stars image  */}
          <Stars />

          {/* main content */}

          <MainContent />

          {/* live section */}

          <div className="flex justify-center items-center h-24 overflow-hidden md:m-32 md:mb-5 m-10 bg-white rounded-2xl ">
            <h1 className="md:text-2xl text-base">** Live Registration</h1>
          </div>
        </section>
      </main>
    </>
  );
}
