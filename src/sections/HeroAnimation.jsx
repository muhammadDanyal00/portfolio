// // HeroAnimation.js
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

// const HeroAnimation = () => {
//   return (
//     <Canvas>
//       <OrbitControls enableZoom={false} />
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 5, 2]} />
//       <Suspense fallback={null}>
//         <Sphere visible args={[1, 100, 200]} scale={2.5}>
//           <MeshDistortMaterial
//             color="#8352FD"
//             attach="material"
//             distort={0.3} // Strength, 0 disables the effect (default=0)
//             speed={1.5} // Speed (default=1)
//             roughness={0}
//           />
//         </Sphere>
//       </Suspense>
//     </Canvas>
//   );
// };

// export default HeroAnimation;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Torus, MeshDistortMaterial } from "@react-three/drei";

const HeroAnimation = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }} // Full canvas size
      camera={{ position: [0, 0, 5], fov: 75 }} // Adjust camera position if needed
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <Suspense fallback={null}>
        {/* Centered torus shape */}
        <Torus
          visible
          args={[1, 0.4, 100, 200]}
          scale={1.5}
          position={[0, 0, 0]}
        >
          <MeshDistortMaterial
            color="#8352FD"
            attach="material"
            distort={0.5} // Strength of distortion
            speed={1.5} // Speed of distortion
            roughness={0}
          />
        </Torus>
      </Suspense>
    </Canvas>
  );
};

export default HeroAnimation;
