import axios from 'axios';
import React, { Component } from 'react';

import NewsArticle from './newsArticle';
import FourOhFour from './reuse/404';

const API_KEY = '0240c7583a744026977e20577dae994b';
let searchTerm = "";
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
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log("\n\n\n", err);
    });

    let searchBar = document.querySelector("#search-bar");
    searchBar.addEventListener("keydown", () => {
      if(event.keyCode === 13){
        this.searchForNews();
        // Reset search bar
        searchBar.value = '';
        searchBar.blur();
      }
    });
  }

  searchForNews = () => {
    searchTerm = localStorage.searchTerm;

    let searchArticlesEndpoint = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2019-01-26&to=2019-01-26&sortBy=popularity&apiKey=${API_KEY}`;
    axios.get(searchArticlesEndpoint)
      .then(resp => {
        const articles = resp.data.articles;
        this.setState({articles});
        // eslint-disable-next-line no-console
        console.log("\n\n\n", articles);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log("\n\n\n", err);
      });
  }

  render() {
    let { articles } = this.state;
    return (
      <div className="news-container">
        <ul>
          {
            articles.length ? articles.map(article => (
              <li key={articles.indexOf(article)}>
                <NewsArticle article={article} />
              </li>
            ))
              : <FourOhFour />
          }
        </ul>
      </div>
    );
  }
}

export default NewsItemsContainer;
