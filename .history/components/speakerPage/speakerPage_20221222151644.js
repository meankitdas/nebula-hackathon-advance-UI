import BirthPage from "./birthPage";
import ThemePage from "./themePage";



export default function SpeakerPage() {
  
  return (
    <section
      
      className=" min-h-screen p-0  bg-white  md:block"
      id="speaker"
    >
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
