import "./Button.css";

const Button = ({ label, symbol, backgroundColor, color, border }) => {
  return (
    <button
      key={label}
      className="button"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border: border,
      }}
    >
      <img className="symbol" src={symbol} alt={`${label} symbol`} />
      {label}
    </button>
  );
};

export default Button;
