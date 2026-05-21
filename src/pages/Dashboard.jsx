import DashboardLayout from "../layouts/DashboardLayout";

import {
  useAuth,
} from "../features/auth/hooks/useAuth";

const Dashboard = () => {

  const {
    user,
    logout,
  } = useAuth();

  
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome {user?.name}
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your 3D models
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;