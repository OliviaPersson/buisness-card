import "./PersonalDescription.css";

const PersonalDescription = ({ label, text }) => {
  return (
    <div className="content-container">
      <h3 className="label">{label}</h3>
      <p className="text">{text}</p>
    </div>
  );
};

export default PersonalDescription;
