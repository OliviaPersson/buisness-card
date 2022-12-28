import "./Footer.css";

const Footer = ({ icons }) => {
  return (
    <div className="footer-icons">
      {icons.map((icon, index) => (
        <img className="footer-icon" key={index} src={icon} />
      ))}
    </div>
  );
};

export default Footer;
