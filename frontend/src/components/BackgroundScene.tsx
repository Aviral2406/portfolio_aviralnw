"use client";

import { useRef, useLayoutEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles, MeshTransmissionMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function UnrealSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    if (!groupRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // smoother scrub
      },
    });

    // Epic Camera / Object Dive
    // Plunging deep through the object, shifting extremely
    tl.to(groupRef.current.position, { x: 3, y: -2, z: 2, ease: "power1.inOut" }, 0)
      .to(groupRef.current.rotation, { x: 1, y: 2, z: 0.5, ease: "power1.inOut" }, 0)
      
      .to(groupRef.current.position, { x: -4, y: -3, z: 5, ease: "power1.inOut" }, 0.25)
      .to(groupRef.current.rotation, { x: 2, y: 4, z: -1, ease: "power1.inOut" }, 0.25)
      
      .to(groupRef.current.position, { x: 0, y: -1, z: 8, ease: "power1.inOut" }, 0.5) // Right up close
      .to(groupRef.current.rotation, { x: 3, y: Math.PI * 2, z: 2, ease: "power1.inOut" }, 0.5)
      
      .to(groupRef.current.position, { x: 2, y: -2, z: -4, ease: "power1.inOut" }, 0.75)
      
      .to(groupRef.current.position, { x: 0, y: 0, z: -8, ease: "power1.inOut" }, 0.9)
      .to(groupRef.current.rotation, { x: 0, y: Math.PI * 4, z: 0, ease: "power1.inOut" }, 0.9);

    return () => { tl.kill(); };
  }, []);

  useFrame((state, delta) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.15;
      outerRingRef.current.rotation.y -= delta * 0.1;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y += delta * 0.2;
      innerRingRef.current.rotation.z += delta * 0.25;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x -= delta * 0.1;
      coreRef.current.rotation.y -= delta * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.z += delta * 0.05;
      wireframeRef.current.rotation.y += delta * 0.05;
    }
    
    if (groupRef.current) {
      // Intense mouse parallax
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, groupRef.current.rotation.y + targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, groupRef.current.rotation.x + targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[5, 0, -5]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        
        {/* Core Glass Object */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[2, 0]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={1}
            anisotropy={0.3}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#ffffff"
          />
        </mesh>

        {/* Outer Wireframe Geometry */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshBasicMaterial color="#333333" wireframe transparent opacity={0.3} />
        </mesh>

        {/* Massive Neon Rings */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[4, 0.02, 16, 100]} />
          <meshBasicMaterial color="#00ff66" toneMapped={false} />
        </mesh>
        
        <mesh ref={innerRingRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.2, 0.01, 16, 100]} />
          <meshBasicMaterial color="#ffffff" toneMapped={false} />
        </mesh>

        {/* Floating Neon Dust */}
        <Sparkles count={500} scale={12} size={1.5} speed={0.4} opacity={1} color="#00ff66" />
        <Sparkles count={300} scale={8} size={2} speed={0.2} opacity={0.5} color="#ffffff" />
      </Float>
    </group>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }} // false alpha for better post-processing blending
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={3} color="#00ff66" />
        
        <UnrealSculpture />
        
        <Environment preset="studio" />

        <EffectComposer multisampling={4}>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={2.5} mipmapBlur />
          <ChromaticAberration 
            blendFunction={BlendFunction.NORMAL} 
            offset={new THREE.Vector2(0.002, 0.002)} 
          />
          <Noise opacity={0.04} blendFunction={BlendFunction.OVERLAY} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}