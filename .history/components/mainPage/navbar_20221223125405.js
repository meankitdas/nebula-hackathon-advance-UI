import { Html } from "next/document";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-end h-full align-middle items-center">
        <div className="flex items-center ">
          <div className="flex items-center">
            
              <h1 className="p-5"><a href="#about">ABOUT</h1>
            </a>

            <a href="#speaker">
              <h1 className="p-5">SPEAKER</h1>
            </a>
            <a href="#sponsors">
              <h1 className="p-5">SPONSORS</h1>
            </a>
            <a href="#schedule">
              <h1 className="p-5">SCHEDULE</h1>
            </a>
            <a href="#tracks">
              <h1 className="p-5">TRACKS</h1>
            </a>
            <a href="#faqs">
              <h1 className="p-5">FAQs</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
