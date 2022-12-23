import { Html } from "next/document";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-end h-full align-middle items-center">
        <div className="flex items-center ">
          <div className="flex items-center">
            
              <h1 className="p-5"><a href="#about">ABOUT</a></h1>
            

            
              <h1 className="p-5"><a href="#speaker">SPEAKER</a></h1>
            
            
              <h1 className="p-5"><a href="#sponsors">SPONSORS</a></h1>
            
            
              <h1 className="p-5"><a href="#schedule">SCHEDULE</a></h1>
            
            
              <h1 className="p-5"><a href="#tracks">TRACKS</a></h1>
            
            
              <h1 className="p-5">FAQs</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
