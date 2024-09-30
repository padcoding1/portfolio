import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import * as THREE from 'three';

// Add a 'show3D' prop to conditionally use R3F hooks
const Cube = ({ icon, name, selected, onClick, show3D, position }) => {
  const cubeRef = useRef(null);

  // Only run `useFrame` hook when in 3D mode
  useFrame(() => {
    if (show3D && cubeRef.current) {
      cubeRef.current.rotation.y += 0.00; // Rotate the cube on the y-axis
    }
  });

  return show3D ? (
    // 3D Cube rendering
    <mesh ref={cubeRef} onClick={onClick} position={position} scale={[1, 1, 1]}>
      <icosahedronGeometry args={[1.5, 1, 1]}  />
      <meshStandardMaterial attach="material" color="#ffb400">
        <primitive attach="map" object={new THREE.TextureLoader().load(icon)} />
      </meshStandardMaterial>
      {/* Add lighting effect */}
      {selected && <spotLight intensity={0.3} position={[2, 3, 2]} />}
      {/* Text below cube */}
      <Html center>
        <p className="text-center text-sm mt-2">{name}</p>
      </Html>
    </mesh>
  ) : (
    // 2D Cube rendering (just an image and text)
    <Float 
    key={category.name}
    speed={1} // Animation speed of the floating effect
    rotationIntensity={1} // How much the object rotates
    floatIntensity={2} // How high or low it floats
    floatingRange={[0, 0.5]} // Range of the floating effect>
    >
    <Html>
      console.log("rendering 2d image: ", {name});
      <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
        <img src={icon} alt={name} className="w-16 h-16" />
        <p className="text-sm mt-2">{name}</p>
      </div>
    </Html>
    </Float>
  );
};

export default Cube;
