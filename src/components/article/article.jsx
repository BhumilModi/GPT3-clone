import React from "react";
import "./article.css";

const article = ({ imgurl }) => {
  return (
    <div className="gpt3__blog__article">
      <div className="gpt3__blog__article-image">
        <img src={imgurl} alt="BlogImage" />
      </div>
      <div className="gpt3__blog__article-content">
        <div>
          <p>Sep 26, 2021</p>
          <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default article;
