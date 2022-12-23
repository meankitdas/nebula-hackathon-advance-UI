import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const color = "#000";

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);



var Star = function (_a) {
    var p = _a.p;
    var ref = useRef(null);
    useLayoutEffect(function () {
        var distance = mix(2, 3.5, Math.random());
        var yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
        var xAngle = degreesToRadians(360) * p;
        ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
    });

    return (
        <mesh ref={ref}>
          <boxGeometry args={[0.05, 0.05, 0.05]} />
          <meshBasicMaterial wireframe color={color} />
        </mesh>
      );
    

};


function Scene({ numStars = 100 }) {
    var gl = useThree(function (state) { return state.gl; });
    var {scrollYProgress} = useScroll();
    var yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(180)]);
    var distance = useTransform(scrollYProgress, [0, 1], [20, 3]);
    var time = useTime();
    

    useFrame(function (_a) {
        var camera = _a.camera;
        camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0005);
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });
    

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

export default function StarAnimation() {
  return (
    <div className="container fixed w-1 h-full right-0">
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  );
}
