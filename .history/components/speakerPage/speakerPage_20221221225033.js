import ThemeBox from "./themeBox";

export default function SpeakerPage() {
  const theme1 = [
    { name: "Theme 1" },
    { name: "Theme 2" },
    { name: "Theme 3" },
  ];

  const theme2 = [
    { name: "Theme 4" },
    { name: "Theme 5" },
    { name: "Theme 6" },
  ];

  return (
    <section className=" min-h-screen p-0  bg-white  md:block" id="speaker">
      <div className=" h-screen ">
        <div className="flex w-full h-1/2 ">
          
        </div>
        <div className="flex w-full h-1/2 bg-primary">
          
        </div>
      </div>
    </section>
  );
}
