import {
  Link,
} from "react-router-dom";

const CTASection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] p-16 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Start Building Interactive 3D Experiences
        </h2>

        <p className="mt-6 text-lg text-slate-200">
          Upload, manage and visualize 3D assets in real-time.
        </p>

        <Link
          to="/register"
          className="inline-block mt-10 bg-white text-black px-10 py-4 rounded-2xl font-semibold"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTASection;