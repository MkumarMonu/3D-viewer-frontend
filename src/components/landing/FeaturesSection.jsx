import {
  FaCloudUploadAlt,
  FaCube,
  FaDatabase,
  FaLock,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "3D Visualization",

    description:
      "Interact with 3D models using zoom, rotate and pan controls.",

    icon: <FaCube />,
  },

  {
    title: "Secure Authentication",

    description:
      "JWT-based secure authentication and protected routes.",

    icon: <FaLock />,
  },

  {
    title: "Cloud Uploads",

    description:
      "Upload GLB models securely to scalable cloud storage.",

    icon: <FaCloudUploadAlt />,
  },

  {
    title: "Persistent States",

    description:
      "Save camera positions and restore viewer state anytime.",

    icon: <FaDatabase />,
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Platform Features
        </h2>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Built with modern technologies for scalable and interactive 3D experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;