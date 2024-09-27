import "../articles/Style.scss";
import Data from "../articles/LinkedInArticles.json"; // Create a JSON file with article data

import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import Heading from "../../Components/Heading/Heading";
import { LoadMore } from "../../Components/Loader/Loader";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";

const LinkedInArticles = ({ selectedLanguage }) => {
  const [articles, setArticles] = useState(Data);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const handleShowAllArticles = () => {
    setArticles(Data);
    setShowAllArticles(true);
  };

  const translations = {
    en: {
      heading: "LinkedIn Articles",
      showMore: "Show More",
    },
    de: {
      heading: "LinkedIn-Artikel",
      showMore: "Mehr anzeigen",
    },
    fr: {
      heading: "Articles LinkedIn",
      showMore: "Voir plus",
    },
  };

  return (
    <div className="work"> {/* Reuse work class for consistent styling */}
      <Heading Heading={translations[selectedLanguage].heading} />
      <div className="cards">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            url={article.link}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkedInArticles;