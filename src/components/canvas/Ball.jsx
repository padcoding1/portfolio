import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<>
			<OrbitControls enableZoom={false} position0={0} />
			<Float speed={5} rotationIntensity={1} floatIntensity={2}>
				{/* Group the ball and lights together, and move them higher by setting the position */}
				<group position={[0, 0.7, 0]}>
					{" "}
					{/* Adjust Y-axis position to move everything higher */}
					<ambientLight intensity={0.25} />
					<directionalLight position={[-1, -0.75, .55]} />
					<mesh castShadow receiveShadow scale={2.2}>
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
						<Decal
							position={[0, 0, -1]}
							rotation={[0, Math.PI, 0]}
							color={"#ffb400"}
							flatShading
							map={decal}
						/>
					</mesh>
				</group>
			</Float>
		</>
	);
};

export default Ball;
