import profileImage from "../images/temporary-profile-image.png";
import Button from "./Button";
import PersonalDescription from "./PersonalDescription";
import emailSymbol from "../images/email-logo.png";
import linkedinSymbol from "../images/linkedin-logo.png";
import "./BuisnessCard.css";

function BuisnessCard() {
  const label = "About";
  const description = `I am a frontend developer with a particular interest in making things
    simple and automating daily tasks. I try to keep up with security and
    best practices, and am always looking for new things to learn.`;

  const label2 = "Interests";
  const description2 = `Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
  Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.`;

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
      <div className="main-content">
        <PersonalDescription label={label} text={description} />
        <PersonalDescription label={label2} text={description2} />
      </div>
    </div>
  );
}

export default BuisnessCard;
