const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400">
          © 2026 3D Viewer Platform
        </p>

        <p className="text-slate-500">
          Built with React + Three.js + AWS
        </p>
      </div>
    </footer>
  );
};

export default Footer;