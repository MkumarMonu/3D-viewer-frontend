import {
  Link,
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-800 backdrop-blur-xl sticky top-0 z-50 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          3D Viewer
        </Link>

        <div className="flex items-center gap-8">
          <a href="#features">
            Features
          </a>

          <a href="#tech-stack">
            Tech Stack
          </a>

          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;