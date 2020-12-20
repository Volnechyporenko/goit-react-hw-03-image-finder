import { Component } from 'react';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import s from './App.module.css';

const API_URL = {
  url: 'https://pixabay.com/api/',
  key: 'key=19554713-985e885829a4f41904dd25c99',
};

class App extends Component {
  state = {
    images: [],
    status: 'idle',
    query: '',
    loading: false,
    perPage: 12,
    page: 1,
    showModal: false,
    modalImage: {},
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, perPage, page, images } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ status: 'pending' });
      fetch(
        `${API_URL.url}?${API_URL.key}&q=${query}&image_type=photo&per_page=${perPage}&page=${page}`,
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(new Error('Нет картинок'));
        })
        .then(data =>
          this.setState(prev => ({
            images: prev.images.concat(data.hits),
            status: data.totalHits > 0 ? 'resolved' : 'notFound',
          })),
        )
        .catch(error => this.setState({ status: 'error' }));
    }
    if (prevState.images.length && images.length > prevState.images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  onImageClick = image => {
    this.setState({ modalImage: image });
    this.toggleModal();
  };
  onSubmit = query => {
    if (!query) {
      return;
    }

    this.setState({ query, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status, showModal, modalImage } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {(status === 'resolved' || status === 'pending') && (
          <>
            <ImageGallery images={images} onImageClick={this.onImageClick} />
            {status === 'pending' ? (
              <Loader />
            ) : (
              <Button onClick={this.onLoadMore} />
            )}
          </>
        )}
        {status === 'notFound' && <div>Images not found</div>}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              className={s.modalImage}
              src={modalImage.largeImageURL}
              alt={modalImage.tags}
            />
            <button className={s.closeButton} onClick={this.toggleModal}>
              X
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
