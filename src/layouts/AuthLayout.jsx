const AuthLayout = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;