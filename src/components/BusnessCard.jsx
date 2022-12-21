import profileImage from "../images/temporary-profile-image.png";
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
    </div>
  );
}

export default BuisnessCard;
