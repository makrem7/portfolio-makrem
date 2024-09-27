import React from "react";
import "../ArticleCard/Style.scss"; // Reuse the same styles for consistency
import linkedinArtcile from "../../Components/ArticleCard/linkedin_artcile.png"; // Adjust the path as needed


const ArticleCard = ({ title, url, imageUrl }) => {
  return (
    <div className="card">
      <div className="image-section">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={linkedinArtcile} alt={title} className="loaded" />
        </a>
      </div>
      <div className="info">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
