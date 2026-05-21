import {
  Link,
} from "react-router-dom";

import HeroCanvas from "../three/HeroCanvas";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <p className="text-blue-400 mb-4 uppercase tracking-widest text-sm">
          3D Visualization Platform
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          Visualize and Interact with 3D Models
        </h1>

        <p className="text-slate-400 mt-8 text-lg leading-8">
          Upload, manipulate and manage 3D models in real-time using Three.js, React and AWS-powered infrastructure.
        </p>

        <div className="flex items-center gap-5 mt-10">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-medium"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-slate-700 hover:border-slate-500 transition px-8 py-4 rounded-2xl"
          >
            Live Demo
          </Link>
        </div>
      </div>

      <HeroCanvas />
    </section>
  );
};

export default HeroSection;