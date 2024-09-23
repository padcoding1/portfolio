import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';
import { useInView } from 'react-intersection-observer';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.4}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          color={"#ffb400"}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only load once when it comes into view
    threshold: 0.1, // Load when 10% of the component is visible
  });

  return (
    <div ref={ref}>
      {inView && (
        <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false} position0={0} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
