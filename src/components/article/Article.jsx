import React from 'react';
import '../article/article.css';

const Article = ({ imgUrl, date, text }) => (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read full Article</p>
      </div>
    </div>
  );

export default Article
