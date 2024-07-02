import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

const RotatingBox = ({ visible, rotationSpeed }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <Box visible={visible} ref={meshRef} args={[2, 2, 2]} position={[-6, 0, 0]}>
      <meshBasicMaterial attach="material" color="white" />
    </Box>
  );
};

export default RotatingBox;
