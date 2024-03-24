'use client'
import React, { useRef, useState } from 'react';
import { useFrame } from 'three'; // This is a Three.js renderer for React

const Box = ({ position }) => {
  const meshRef = useRef();

  // Rotate the box
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const ThreeDSlider = () => {
  const [boxes, setBoxes] = useState([
    { position: [0, 0, 0] },
    { position: [2, 0, 0] },
    { position: [-2, 0, 0] },
  ]);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {boxes.map((box, index) => (
          <Box key={index} position={box.position} />
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeDSlider;
