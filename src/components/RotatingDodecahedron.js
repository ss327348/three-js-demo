import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Dodecahedron } from "@react-three/drei";

const RotatingDodecahedron = ({ visible, rotationSpeed }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <Dodecahedron
      visible={visible}
      ref={meshRef}
      args={[2, 0]}
      position={[6, 0, 0]}
    >
      <meshBasicMaterial attach="material" color="white" />
    </Dodecahedron>
  );
};

export default RotatingDodecahedron;
