import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotation }) => {
  const computer = useGLTF("./house_model/scene.gltf");

  return (
    <mesh rotation={rotation}>
      <hemisphereLight intensity={0} groundColor='black' />
      <spotLight
        position={[100, 0, 0]} // Adjust the position to above the model
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? [0.9, 0.9, 0.9] : [35, 35, 35]} // Adjust the scale values
        position={isMobile ? [0, 0, -2.2] : [0, -3.2, 0]} // Adjust the y-coordinate (second element)
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Rotate the model
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(([x, y, z]) => [x, y + 0.001, z]); // Adjust the rotation speed
    }, 16); // Adjust the interval for smoother rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} rotation={rotation} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
