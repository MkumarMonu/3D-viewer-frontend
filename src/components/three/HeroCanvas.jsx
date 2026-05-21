import {
  Canvas,
} from "@react-three/fiber";

import {
  OrbitControls,
} from "@react-three/drei";

const RotatingCube = () => {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial
        color="#2563eb"
      />
    </mesh>
  );
};

const HeroCanvas = () => {
  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-slate-800">
      <Canvas>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[2, 2, 2]}
        />

        <RotatingCube />

        <OrbitControls
          enableZoom
          autoRotate
        />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;