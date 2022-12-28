import React, { Component } from "react";
import { getPersonalInformation } from "./../data/fakePersonalInformationService";
import Button from "./Button";
import PersonalDescription from "./PersonalDescription";
import Footer from "./Footer";
import emailSymbol from "../images/email-logo.png";
import linkedinSymbol from "../images/linkedin-logo.png";
import twitterIcon from "../images/twitter-icon.png";
import facebookIcon from "../images/facebook-icon.png";
import githubIcon from "../images/github-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import "./BuisnessCard.css";

class BuisnessCard extends Component {
  state = {
    data: {},
    icons: [twitterIcon, facebookIcon, instagramIcon, githubIcon],
  };

  getPersonalData = (id) => {
    return getPersonalInformation(id);
  };

  componentDidMount() {
    const data = { ...this.getPersonalData("5b21ca3eeb7f6fbccd471818") };
    this.setState({ data });
  }

  render() {
    const { name, title, website, image, personalInfo } = this.state.data;
    const icons = this.state.icons;

    return (
      <div className="buisness-card">
        <img className="buisness-card-image" src={image} alt="Profile image" />
        <div className="card-body">
          <h2>{name}</h2>
          <h5>{title}</h5>
          <p>
            <small>{website}</small>
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
          {personalInfo?.map((d, index) => (
            <PersonalDescription
              key={index}
              label={d.descriptionLabel}
              text={d.descriptionContent}
            />
          ))}
        </div>
        <Footer icons={icons} />
      </div>
    );
  }
}

export default BuisnessCard;
