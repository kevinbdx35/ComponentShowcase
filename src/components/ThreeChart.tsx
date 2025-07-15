import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface BarProps {
  position: [number, number, number];
  height: number;
  color: string;
}

function Bar({ position, height, color }: BarProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, height, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export const ThreeChart: React.FC = () => {
  const data = [
    { name: 'Jan', value: 2, color: '#8884d8' },
    { name: 'Feb', value: 3, color: '#82ca9d' },
    { name: 'Mar', value: 1.5, color: '#ffc658' },
    { name: 'Apr', value: 2.5, color: '#ff7c7c' },
    { name: 'May', value: 3.5, color: '#8dd1e1' },
  ];

  return (
    <div style={{ height: '400px', width: '100%' }} data-testid="three-container">
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }} data-testid="three-canvas">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {data.map((item, index) => (
          <group key={item.name}>
            <Bar
              position={[index * 1.2 - 2, item.value / 2, 0]}
              height={item.value}
              color={item.color}
            />
            <Text
              position={[index * 1.2 - 2, -0.5, 0]}
              fontSize={0.3}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              {item.name}
            </Text>
          </group>
        ))}
        
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};