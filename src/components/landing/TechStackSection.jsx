const techStack = [
  "React",
  "Three.js",
  "Node.js",
  "Express",
  "MongoDB",
  "AWS",
  "JWT",
  "Tailwind CSS",
];

const TechStackSection = () => {
  return (
    <section
      id="tech-stack"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Tech Stack
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-lg"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;