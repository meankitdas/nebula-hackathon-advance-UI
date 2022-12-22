import { useRef } from "react";
import { motion, useScroll } from "framer-motion";


export default function Slider({list}) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100" className="hidden md:block my-2 md:my-" >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        {list.map((item) => (
          <li>{item.name}</li>
        ))}
        {/* <li>Apple</li> */}
        
      </ul>
    </div>
  );
}
