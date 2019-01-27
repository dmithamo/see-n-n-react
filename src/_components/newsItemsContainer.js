import axios from 'axios';
import React, { Component } from 'react';

import NewsArticle from './newsArticle';

const API_KEY = '0240c7583a744026977e20577dae994b';
const allArticlesEndpoint = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;


class NewsItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios.get(allArticlesEndpoint)
      .then(resp => {
        const articles = resp.data.articles;
        this.setState({articles});
        console.log("\n\n\n", articles);
      })
      .catch(err => {
        console.log("\n\n\n", err);
      });
  }
  render() {
    let { articles } = this.state;
    return (
      <ul className="news-container">
        <p>All the news will be here</p>
        {articles.map(article => (
          <li key={articles.indexOf(article)}>
            <NewsArticle article={article} />
          </li>
        ))}
      </ul>
    );
  }
}

export default NewsItemsContainer;
