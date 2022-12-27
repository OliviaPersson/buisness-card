import emailSymbol from "../images/email-logo.png";
import linkedinSymbol from "../images/linkedin-logo.png";
import "./EmailButton.css";

function EmailButton() {
  return (
    <div className="buttons-container">
      <button className="email-button">
        <img className="email-symbol" src={emailSymbol} alt="Email symbol" />
        Email
      </button>
      <button className="linkedin-button">
        <img
          className="linkedin-symbol"
          src={linkedinSymbol}
          alt="Linkedin symbol"
        />
        Linkedin
      </button>
    </div>
  );
}

export default EmailButton;
