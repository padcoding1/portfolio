import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/duck/RubberDuck.gltf");
  const duck = nodes["node-0"].geometry.scale(0.1, 0.1, 0.1);
  return {
    material: materials.RubberDuck_mat1,
    geometry: duck
  };
}

useGLTF.preload("/duck/RubberDuck.gltf");