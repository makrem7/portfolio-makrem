import React from "react";
import "../About/Style.scss";
import { motion } from "framer-motion";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";

// Import icons for different languages
import {
  BiLogoAngular,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoFlutter,
} from "react-icons/bi";
import { SiDocker, SiSwagger, SiGit } from "react-icons/si";
import { FaAndroid, DiApple } from "react-icons/fa";
import { DiLinux } from "react-icons/di";

const About = ({ selectedLanguage }) => {
  // Define translations for different languages
    const translations = {
      en: {
        aboutHeading: "About me",
        aboutText: (
          <>
            <p>👋 Hello, I'm Makrem Ltifi.</p>
            <br />
            <p>
              🌟 I am passionate about teamwork and leading teams to success. Throughout my career, I have developed strong leadership skills, enabling me to effectively collaborate with diverse teams and drive projects to successful completion.
            </p>
            <br />
            <p>
              🎓 I completed my preparatory cycle (math, physics, informatics) at Issat Mahdia and graduated as a software engineer from Enicarthage in 2022. During my studies, I worked on projects like creating image editing tools and games, sparking my passion for programming.
            </p>
            <br />
            <p>
              💻 My career began with frontend development, working with Angular to create interactive web applications. I then freelanced as a mobile developer, contributing to the game League Hunters, which was published on Google Play and the App Store.
            </p>
            <br />
            <p>
              🚀 I joined Amineware as a full-stack developer, where I gained expertise in both frontend and backend technologies. I worked on a mobile application for delivery personnel, enhancing my skills in mobile and web development.
            </p>
            <br />
            <p>
              🌟 Currently, I am a Lead Engineer at Med'in Outlook. I develop and analyze mobile and web applications in the medical field, collaborating with healthcare professionals to integrate specific requirements.
            </p>
            <br />
            <p>
              🙏 Thank you for your time, and I appreciate any potential opportunities that may come my way.
            </p>
            <br />
          </>
        ),
        stuffIKnow: "Stuff I know:",
      },
      de: {
        aboutHeading: "Über mich",
        aboutText: (
          <>
            <p>👋 Hallo, ich bin Makrem Ltifi.</p>
            <br />
            <p>
              🌟 Ich bin leidenschaftlich über Teamarbeit und das Führen von Teams zum Erfolg. Im Laufe meiner Karriere habe ich starke Führungsfähigkeiten entwickelt, die es mir ermöglichen, effektiv mit vielfältigen Teams zusammenzuarbeiten und Projekte erfolgreich abzuschließen.
            </p>
            <br />
            <p>
              🎓 Ich habe meinen Vorbereitungszyklus (Mathematik, Physik, Informatik) an der Issat Mahdia abgeschlossen und 2022 als Software-Ingenieur an der Enicarthage abgeschlossen. Während meines Studiums habe ich an Projekten wie der Erstellung von Bildbearbeitungswerkzeugen und Spielen gearbeitet, was meine Leidenschaft für Programmierung geweckt hat.
            </p>
            <br />
            <p>
              💻 Meine Karriere begann mit der Frontend-Entwicklung, wobei ich mit Angular interaktive Webanwendungen erstellt habe. Danach habe ich als freiberuflicher Mobile-Entwickler gearbeitet und zum Spiel League Hunters beigetragen, das auf Google Play und im App Store veröffentlicht wurde.
            </p>
            <br />
            <p>
              🚀 Ich bin zu Amineware als Full-Stack-Entwickler gekommen, wo ich Kenntnisse in sowohl Frontend- als auch Backend-Technologien erworben habe. Ich habe an einer mobilen Anwendung für Lieferpersonal gearbeitet und dabei meine Fähigkeiten in der mobilen und Webentwicklung verbessert.
            </p>
            <br />
            <p>
              🌟 Derzeit bin ich Lead Engineer bei Med'in Outlook. Ich entwickle und analysiere mobile und Webanwendungen im medizinischen Bereich und arbeite mit Gesundheitsfachleuten zusammen, um spezifische Anforderungen zu integrieren.
            </p>
            <br />
            <p>
              🙏 Vielen Dank für Ihre Zeit, ich schätze alle potenziellen Möglichkeiten, die sich mir bieten könnten.
            </p>
            <br />
          </>
        ),
        stuffIKnow: "Was ich weiß:",
      },
      fr: {
        aboutHeading: "À propos de moi",
        aboutText: (
          <>
            <p>👋 Bonjour, je suis Makrem Ltifi.</p>
            <br />
            <p>
              🌟 Je suis passionné par le travail d'équipe et la conduite des équipes vers le succès. Tout au long de ma carrière, j'ai développé de solides compétences en leadership, me permettant de collaborer efficacement avec des équipes diversifiées et de mener à bien des projets.
            </p>
            <br />
            <p>
              🎓 J'ai terminé mon cycle préparatoire (mathématiques, physique, informatique) à Issat Mahdia et j'ai obtenu mon diplôme d'ingénieur logiciel à Enicarthage en 2022. Pendant mes études, j'ai travaillé sur des projets tels que la création d'outils de retouche d'image et de jeux, ce qui a éveillé ma passion pour la programmation.
            </p>
            <br />
            <p>
              💻 Ma carrière a commencé par le développement frontend, travaillant avec Angular pour créer des applications web interactives. J'ai ensuite travaillé en freelance en tant que développeur mobile, contribuant au jeu League Hunters, publié sur Google Play et l'App Store.
            </p>
            <br />
            <p>
              🚀 J'ai rejoint Amineware en tant que développeur full-stack, où j'ai acquis une expertise en technologies frontend et backend. J'ai travaillé sur une application mobile pour le personnel de livraison, renforçant mes compétences en développement mobile et web.
            </p>
            <br />
            <p>
              🌟 Actuellement, je suis Lead Engineer chez Med'in Outlook. Je développe et analyse des applications mobiles et web dans le domaine médical, collaborant avec des professionnels de la santé pour intégrer des exigences spécifiques.
            </p>
            <br />
            <p>
              🙏 Merci pour votre temps, et j'apprécie toutes les opportunités potentielles qui pourraient se présenter à moi.
            </p>
            <br />
          </>
        ),
        stuffIKnow: "Ce que je sais:",
      },
    };

  // If selectedLanguage is not provided, default to English
  const language = selectedLanguage || "de";

  return (
    <>
      <Heading Heading={translations[language].aboutHeading} />
      <div className="about">
        <div className="info">
          <motion.p {...animations.fade}>{translations[language].aboutText}</motion.p>
        </div>
        {/* Removed the skills section as it wasn't relevant to the provided content */}
      </div>
    </>
  );
};

export default About;
