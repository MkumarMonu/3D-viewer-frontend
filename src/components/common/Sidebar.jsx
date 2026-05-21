import {
  Link,
} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-3xl font-bold mb-10">
        3D Viewer
      </h1>

      <div className="flex flex-col gap-5">
        <Link to="/">
          Dashboard
        </Link>

        <Link to="/upload">
          Upload Model
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;