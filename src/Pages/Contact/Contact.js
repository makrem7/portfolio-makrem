import React from "react";
import "../Contact/Style.scss";
import { motion } from "framer-motion";
import { BiSolidMessage, BiSolidPhone } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";
import Form from "../../Components/Form/Form";

const Contact = ({ selectedLanguage }) => {
  const translations = {
    en: {
      heading: "Contact me",
      contactInfo: "Contact info",
      email: "makrem.mltifi@gmail.com",
      phoneNumber: "+216 99 58 26 52",
      location: "Tunis, Tunisia.",
      socialNetworks: "Social networks"
    },
    de: {
      heading: "Kontaktiere mich",
      contactInfo: "Kontaktinformationen",
      email: "makrem.mltifi@gmail.com",
      phoneNumber: "+216 99 58 26 52",
      location: "Tunis, Tunesien.",
      socialNetworks: "Soziale Netzwerke"
    },
    fr: {
      heading: "Contactez-moi",
      contactInfo: "Informations de contact",
      email: "makrem.mltifi@gmail.com",
      phoneNumber: "+216 99 58 26 52",
      location: "Tunis, Tunisie.",
      socialNetworks: "Réseaux sociaux"
    }
  };

  return (
    <>
      <Heading Heading={translations[selectedLanguage].heading} />
      <motion.div {...animations.fade} className="contact-section">
        <div className="form">
        <Form selectedLanguage={selectedLanguage} />
          <div className="details">
            <div>
              <h3>{translations[selectedLanguage].contactInfo}</h3>
              <div>
                <BiSolidMessage />
                {translations[selectedLanguage].email}
              </div>
              <div>
                <BiSolidPhone />
                {translations[selectedLanguage].phoneNumber}
              </div>
              <div>
                <HiLocationMarker />
                {translations[selectedLanguage].location}
              </div>
            </div>
            <div>
              <h3>{translations[selectedLanguage].socialNetworks}</h3>
              <Socials />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
