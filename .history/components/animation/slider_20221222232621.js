import styles from "../../styles/slider.module.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function App() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div style={sty}>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle id="circle" cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref} id="ul">
        <li className="li"></li>
        <li className="li"></li>
        <li className="li"></li>
        <li className="li"></li>
        
       
      </ul>
    </div>
  );
}
