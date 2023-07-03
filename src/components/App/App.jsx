import React, { Component } from 'react';

import axios from 'axios';

import ArticleList from 'components/ArticleList/ArticleList';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await axios.get('/search?query=react');

    this.setState({ articles: response.data.hits, isLoading: false });
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        <Header>
          Пошук
          <SearchBar />
        </Header>
        <Section>
          <Container>
            <div>
              {isLoading ? <Loader /> : <ArticleList articles={articles} />}
            </div>
          </Container>
        </Section>
      </>
    );
  }
}
