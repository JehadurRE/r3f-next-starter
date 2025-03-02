'use client'
import { Canvas } from "@react-three/fiber"
import { Experience } from "./Experience"
export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  )
}
