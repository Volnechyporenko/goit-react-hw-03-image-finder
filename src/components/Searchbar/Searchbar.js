import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s['SearchForm-button']}>
            <span className={s['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={s['SearchForm-input']}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={search}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
