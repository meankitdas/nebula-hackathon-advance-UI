import Head from "next/head";

import MainPage from "../components/mainPage/mainPage";
import SpeakerPage from "../components/speakerPage/speakerPage";
import TimelinePage from "../components/timelinePage/timelinePage";

// import { isMobile } from "react-device-detect";
import StarAnimation from "../components/animation/starAnimation";

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
        <MainPage />

        <SpeakerPage />

        <TimelinePage />
       

      </main>
    </>
  );
}
