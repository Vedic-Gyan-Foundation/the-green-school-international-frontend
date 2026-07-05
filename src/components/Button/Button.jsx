const Button = ({
  clickHandler,
  children,
  variant = "primary",
  className = "",
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide cursor-pointer transition-all duration-300 ease-out disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-br from-coral-500 to-coral-600 text-white shadow-[0_10px_25px_-10px_rgba(255,102,82,0.65)] hover:shadow-[0_18px_35px_-10px_rgba(255,102,82,0.7)] hover:-translate-y-0.5",
    sun: "bg-gradient-to-br from-sun-300 to-sun-500 text-brand-900 shadow-[0_10px_25px_-10px_rgba(234,190,97,0.7)] hover:shadow-[0_18px_35px_-10px_rgba(234,190,97,0.85)] hover:-translate-y-0.5",
    brand:
      "bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-[0_10px_25px_-10px_rgba(8,112,61,0.65)] hover:shadow-[0_18px_35px_-10px_rgba(8,112,61,0.75)] hover:-translate-y-0.5",
    ghost:
      "bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50 hover:ring-brand-300",
  };

  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
