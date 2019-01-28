import React from 'react';
import PropTypes from 'prop-types';

const NewsArticle = (props) => {
  const formatTime = (time) => {
    const dateFromStr = new Date(time);
    let longForm = `${dateFromStr}`.split("GMT")[0];
    let splitIt = longForm.split(" ");
    let year = splitIt[3];
    let month = splitIt[1];
    let dayte = splitIt[2];
    let timeFull = splitIt[4];
    let shortForm = `${dayte}th ${month} ${year} ${timeFull} GMT`;
    return shortForm;
  };

  const { article } = props;
  return (
    <div className="news-article">
      <img className="article-img" src={article.urlToImage} alt="news pic here" />
      <div className="article-content">
        <a className="article-title" href={`${article.url}`}>{`${article.title}`}</a>
        <p className="article-body">{`${article.content}`}</p>
        <div className="meta-data">
          <span>
            Published
            {` ${formatTime(article.publishedAt)} `}
          </span>
          <br />
          <span>
            by
            {` ${article.author} `}
            of
          </span>
          <a href={`${article.url}`}>{` ${article.source.name}`}</a>
        </div>
      </div>
    </div>
  );
};

NewsArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsArticle;
