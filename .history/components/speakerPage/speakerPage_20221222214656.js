import BirthPage from "./birthPage";
import ThemePage from "./themePage";



export default function SpeakerPage() {
  
  return (
    <section
      
      className=" min-h-screen p-0  bg-white  md:block"
      id="speaker"
    >
      <div className="text-cyan-900 text-8xl relative ">
          <ParallaxText baseVelocity={-5}>India's Biggest hackathon</ParallaxText>
          {/* <ParallaxText baseVelocity={5}>nebula hackathon</ParallaxText> */}
        </div>
      <div className=" h-screen ">
        {/* birth of Innovator */}
        <div className="flex w-full h-1/2 ">
          <BirthPage />
        </div>
        {/* theme  */}
        <div className="flex w-full h-1/2 bg-primary" >
          <ThemePage />
        </div>
      </div>
    </section>
  );
}
