import Stars from "../components/mainPage/stars";
import MainContent from "../components/mainPage/maincontent";
import Navbar from "../components/mainPage/navbar";


export default function Home() {
  return (
    <section className=" min-h-screen p-2 " id="about">
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
  );
}