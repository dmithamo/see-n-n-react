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
    let shortForm = `${dayte}th ${month} ${year} ${timeFull}`;
    return shortForm;
  };

  const { article } = props;
  return (
    <div className="news-article">
      <a className="article-title" href={`${article.url}`}>{`${article.title}`}</a>
      <div className="article-content">
        <p className="article-body">{`${article.content}`}</p>
        <div className="meta-data">
          <span>
            Published
            {` ${formatTime(article.publishedAt)} `}
          </span>
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
}

NewsArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsArticle;
