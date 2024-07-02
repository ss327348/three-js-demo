import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";

const RotatingTorus = ({ visible, rotationSpeed }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <Torus
      visible={visible}
      ref={meshRef}
      args={[2, 0.5, 16, 100]}
      position={[0, 0, 0]}
    >
      <meshBasicMaterial attach="material" color="white" />
    </Torus>
  );
};

export default RotatingTorus;
