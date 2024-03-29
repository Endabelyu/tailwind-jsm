const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : 'bg-coral-red border-coral-red text-white'
      }
      ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrowRight icon"
          className="ml-2 rounded-full "
        />
      )}
    </button>
  );
};

export default Button;
