import Sidebar from "../components/common/Sidebar";

const DashboardLayout = ({
  children,
}) => {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;