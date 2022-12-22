import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
// import "../../styles/slider.module.css"

export default function App() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div>
      
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle
          id="circle"
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="bg"
        />
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
        <li className="li"></li>
        <li className="li"></li>
      </ul>
      <style jsx>{`
        #progress {
          // position: fixed;
          top: 20px;
          left: 20px;
          transform: rotate(-90deg);
        }
        .bg {
          stroke: "#fafafa";
          opacity: 0.3;
        }
        #circle {
          stroke-dashoffset: 0;
          stroke-width: 15%;
          fill: none;
        }
        #progress .indicator {
          stroke: "#fafafa";
        }
        ul {
          display: flex;
          list-style: none;
          height: 300px;
          overflow-x: scroll;
          padding: 20px 0;
          flex: 0 0 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
