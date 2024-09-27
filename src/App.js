import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import LinkedInArticles from "./Pages/articles/LinkedInArticles";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Component to wrap Routes and handle language extraction
  const LanguageWrapper = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract language from the path
    const extractLanguage = (path) => {
      const parts = path.split('/');
      const lang= parts[1];
      const supportedLanguages = ["en", "de", "fr"];
      if (lang && supportedLanguages.includes(lang)) {
      return lang;
      }
      else{
        navigate('/en/');
        return 'en';
      }
    };

    useEffect(() => {
      const language = extractLanguage(location.pathname);
      setSelectedLanguage(language);
    }, [location.pathname]);

    return (
      <>
        <Navbar selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={<Navigate to={`/${selectedLanguage}`} />} />
          <Route path="/:lang" element={<Home selectedLanguage={selectedLanguage} />} />
          <Route path="/:lang/articles" element={<LinkedInArticles selectedLanguage={selectedLanguage} />} />
          <Route path="/:lang/about" element={<About selectedLanguage={selectedLanguage} />} />
          <Route path="/:lang/work" element={<Work selectedLanguage={selectedLanguage} />} />
          <Route path="*" element={<Navigate to={`/${selectedLanguage}`} />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LanguageWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
