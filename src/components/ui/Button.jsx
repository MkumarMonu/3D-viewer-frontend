const Button = ({
  children,
  loading,
  ...props
}) => {
  return (
    <button
      {...props}
      className="bg-blue-600 hover:bg-blue-700 transition-all px-4 py-3 rounded-xl font-medium cursor-pointer"
    >
      {loading
        ? "Loading..."
        : children}
    </button>
  );
};

export default Button;