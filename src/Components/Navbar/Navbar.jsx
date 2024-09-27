import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Navbar/Style.scss";
import React, { useState, useRef, useEffect } from "react";

const Navbar = ({ selectedLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    onLanguageChange(newLanguage);
    navigate(`/${newLanguage}`); // Update the URL with the new selected language
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const translations = {
    en: {
      home: "Home",
      about: "About me",
      work: "Work",
      hireMe: "Contact me",
      articles: "Articles"
    },
    de: {
      home: "Startseite",
      about: "Über mich",
      work: "Arbeit",
      hireMe: "Kontaktieren Sie mich",
      articles: "Artikel"
    },
    fr: {
      home: "Accueil",
      about: "À propos de moi",
      work: "Travail",
      hireMe: "Contactez-moi",
      articles: "Articles"
    }
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`} ref={navbarRef}>
      <div className="navbar-menu">
        <ul className={`menu ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to={`/${selectedLanguage}/`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active-link" : ""
              }
              end // This makes sure it only gets the active class when exactly at the home path
              onClick={handleMenuItemClick}
            >
              {translations[selectedLanguage].home}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${selectedLanguage}/about`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active-link" : ""
              }
              onClick={handleMenuItemClick}
            >
              {translations[selectedLanguage].about}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${selectedLanguage}/work`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active-link" : ""
              }
              onClick={handleMenuItemClick}
            >
              {translations[selectedLanguage].work}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${selectedLanguage}/articles`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active-link" : ""
              }
              onClick={handleMenuItemClick}
            >
              {translations[selectedLanguage].articles}
            </NavLink>
          </li>
          <li>
            <a href="mailto:makrem.mltifi@gmail.com" target="_blank" rel="noopener noreferrer">
              <button>{translations[selectedLanguage].hireMe}</button>
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="navbar-brand">
        <Link to={`/${selectedLanguage}/`}>
          <h1 style={{ display: 'none' }}>Dev.</h1>
        </Link>
      </div>
      {/* Language Selection */}
      <div className="language-select">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
