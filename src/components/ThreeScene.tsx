import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </Box>
    </Float>
  );
};

const AnimatedTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={1.5} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>
    </Float>
  );
};

const AnimatedIcosahedron = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[0.7, 0]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#3B82F6" />
      
      <AnimatedSphere position={[0, 0, 0]} color="#8B5CF6" />
      <AnimatedBox position={[3, 1.5, -1]} color="#3B82F6" />
      <AnimatedTorus position={[-3, -1, 0]} color="#06B6D4" />
      <AnimatedIcosahedron position={[2.5, -2, 1]} color="#10B981" />
    </>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
