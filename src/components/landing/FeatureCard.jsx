const FeatureCard = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">
      <div className="text-4xl mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-slate-400 leading-7">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;