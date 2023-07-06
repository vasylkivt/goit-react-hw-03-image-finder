import React, { Component } from 'react';
import { fetchPhotosWithQuery } from 'services/api';

import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ButtonLoadMore from 'components/Button/Button';
import Backdrop from 'components/Modal/Modal';

export default class App extends Component {
  perPage = 12;
  state = {
    photos: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    totalPage: 0,
    showBackdrop: null,
    largeImageURL: '',
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.updateGallery();
    }
  }

  async updateGallery() {
    const { photos, query, page } = this.state;

    this.setState({ isLoading: true });
    try {
      const response = await fetchPhotosWithQuery(query, page);

      const totalPage = response.totalHits / this.perPage;
      this.setState({
        photos: [...photos, ...response.hits],
        isLoading: false,
        totalPage,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handlerSubmit = value => {
    this.setState(() => {
      return {
        query: value.searchValue,
        page: 1,
        photos: [],
        totalPage: 0,
      };
    });
  };

  handlerLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  showBackdrop = largeImageURL => {
    this.setState({ showBackdrop: true, largeImageURL: largeImageURL });
  };

  closeBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.setState({ showBackdrop: false, largeImageURL: '' });
    }
  };

  render() {
    const {
      photos,
      isLoading,
      error,
      page,
      totalPage,
      showBackdrop,
      largeImageURL,
    } = this.state;

    const isGalleryEmpty = photos.length === 0;

    const isLastPage = page > totalPage;
    return (
      <>
        <Header>
          <SearchBar onSubmit={this.handlerSubmit} />
        </Header>
        {!isGalleryEmpty && (
          <Section>
            <Container>
              {error && <p>Whoops, something went wrong: {error.message}</p>}
              <ImageGallery photos={photos} showBackdrop={this.showBackdrop} />
              {isLoading && <Loader />}
              {!isLoading && !isLastPage && !isGalleryEmpty && (
                <ButtonLoadMore onClick={this.handlerLoadMore} />
              )}
            </Container>
          </Section>
        )}

        {showBackdrop && (
          <Backdrop
            closeBackdrop={this.closeBackdrop}
            largeImageURL={largeImageURL}
          />
        )}
      </>
    );
  }
}
