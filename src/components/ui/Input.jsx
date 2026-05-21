const Input = ({
  label,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 outline-none focus:border-blue-500"
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;