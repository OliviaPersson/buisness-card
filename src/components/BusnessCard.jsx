import profileImage from "../images/temporary-profile-image.png";
import Button from "./Button";
import emailSymbol from "../images/email-logo.png";
import linkedinSymbol from "../images/linkedin-logo.png";
import "./BuisnessCard.css";

function BuisnessCard() {
  return (
    <div className="buisness-card">
      <img
        className="buisness-card-image"
        src={profileImage}
        alt="Profile image"
      />
      <div className="card-body">
        <h2>Olivia Persson</h2>
        <h5>Software Developer</h5>
        <p>
          <small>olivia.persson.website</small>
        </p>
      </div>
      <div className="buttons-container">
        <Button
          label="Email"
          symbol={emailSymbol}
          backgroundColor="#FFFFFF"
          color="#374151"
          border="1px solid #D1D5DB"
        />
        <Button
          label="Linkedin"
          symbol={linkedinSymbol}
          backgroundColor="#5093E2"
          color="#FFFFFF"
          border="1px solid #5093E2"
        />
      </div>
    </div>
  );
}

export default BuisnessCard;
