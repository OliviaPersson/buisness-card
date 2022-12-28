import profileImage from "../images/temporary-profile-image.png";

const personalInformations = [
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "Olivia Persson",
    title: "Software Developer",
    website: "olivia.persson.website",
    image: profileImage,
    personalInfo: [
      {
        descriptionLabel: "About",
        descriptionContent: `I am a frontend developer with a particular interest in making things
      simple and automating daily tasks. I try to keep up with security and
      best practices, and am always looking for new things to learn.`,
      },
      {
        descriptionLabel: "Interests",
        descriptionContent: `Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
      Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.`,
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Gustav Larsson",
    title: "Fullstack Developer",
    website: "gustav.larsson.website",
    image: profileImage,
    personalInfo: [
      {
        descriptionLabel: "About",
        descriptionContent: `I am a frontend developer with a particular interest in making things
      simple and automating daily tasks. I try to keep up with security and
      best practices, and am always looking for new things to learn.2`,
      },
      {
        descriptionLabel: "Interests",
        descriptionContent: `Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
      Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.2`,
      },
    ],
  },
];

export function getAllPersonalInformations() {
  return personalInformations;
}

export function getPersonalInformation(id) {
  return personalInformations.find((i) => i._id === id);
}
