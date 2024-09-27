import React from "react";
import "../Home/Style.scss";
import { motion } from "framer-motion";
import makrem from "../../Assets/Images/mee.jpg";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";

const Home = ({ selectedLanguage }) => {
  const translations = {
    en: {
      greeting: "Hello, I'm",
      name: "Makrem Ltifi",
      profession: "Full Stack Developer",
      contactMessage: "I am open to collaborations and inquiries. Please feel free to get in touch—I look forward to connecting with you!",
      leadership: "As a leader, I effectively manage projects and guide teams toward achieving their objectives.",
      qualityWork: "I am dedicated to delivering high-quality work through meticulous code reviews and comprehensive testing.",
      teamwork: "I value collaboration and support, believing that the best outcomes arise from effective teamwork.",
      leadershipTitle: "Leadership",
      qualityWorkTitle: "Quality Work",
      teamworkTitle: "Teamwork"
    },
    de: {
      greeting: "Hallo, ich bin",
      name: "Makrem Ltifi",
      profession: "Full Stack Entwickler",
      contactMessage: "Ich bin offen für Zusammenarbeit und Anfragen. Bitte zögern Sie nicht, mich zu kontaktieren – ich freue mich auf den Austausch mit Ihnen!",
      leadership: "Als Führungskraft manage ich Projekte effektiv und führe Teams zur Erreichung ihrer Ziele.",
      qualityWork: "Ich setze mich für hochwertige Arbeit durch sorgfältige Code-Reviews und umfassende Tests ein.",
      teamwork: "Ich schätze Zusammenarbeit und Unterstützung, da die besten Ergebnisse durch effektives Teamwork entstehen.",
      leadershipTitle: "Führung",
      qualityWorkTitle: "Qualitätsarbeit",
      teamworkTitle: "Teamarbeit"
    },
    fr: {
      greeting: "Salut, je suis",
      name: "Makrem Ltifi",
      profession: "Développeur Full Stack",
      contactMessage: "Je suis ouvert aux collaborations et aux questions. N'hésitez pas à me contacter – j'ai hâte d'échanger avec vous !",
      leadership: "En tant que leader, je gère efficacement les projets et guide les équipes vers l'atteinte de leurs objectifs.",
      qualityWork: "Je m'engage à fournir un travail de haute qualité à travers des revues de code méticuleuses et des tests complets.",
      teamwork: "Je valorise la collaboration et le soutien, croyant que les meilleurs résultats proviennent d'un travail d'équipe efficace.",
      leadershipTitle: "Leadership",
      qualityWorkTitle: "Qualité du travail",
      teamworkTitle: "Travail d'équipe"
    }
  };

  const { greeting, name, profession, contactMessage, leadership, qualityWork, teamwork, leadershipTitle, qualityWorkTitle, teamworkTitle } = translations[selectedLanguage];

  return (
    <div className="home">
      <div className="info-section">
        <motion.h1 {...animations.h1}>
          {greeting}<br />
          {name}
        </motion.h1>
        <motion.h2 {...animations.fade}>{profession}</motion.h2>
        <motion.p {...animations.fade}>{contactMessage}</motion.p>
        <motion.div {...animations.fade} className="leadership">
          <h3>{leadershipTitle}</h3>
          <p>{leadership}</p>
        </motion.div>
        <motion.div {...animations.fade} className="quality-work">
          <h3>{qualityWorkTitle}</h3>
          <p>{qualityWork}</p>
        </motion.div>
        <motion.div {...animations.fade} className="teamwork">
          <h3>{teamworkTitle}</h3>
          <p>{teamwork}</p>
        </motion.div>
        <Socials />
      </div>
      <div className="image-section">
        <img src={makrem} alt="Makrem Ltifi" />
      </div>
    </div>
  );
};

export default Home;
