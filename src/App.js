import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './Components/SearchBooks';
import HomePage from './Components/HomePage';
import * as BooksAPI from '../BooksAPI';

class BooksApp extends React.Component {
  state = {
      books: []
  };

  componentDidMount() {
      this.getBooks();
  }

  getBooks() {
      BooksAPI.getAll().then((books) => {
          this.setState({books});
      });
  }

  onChangeShelf = (book, newshelf) => {
      BooksAPI.update(book, newshelf)
          .then(
              this.setState((state) => ({
                  books: state.books.map(b => {
                      if (b.title === book.title) {
                          b.shelf = shelf;
                          return b
                      } else {
                          return b
                      }
                  }),
              }))
          )
  };

  render() {
    const currentlyReading = this.state.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = this.state.books.filter((book) => book.shelf === 'wantToRead')
    const read = this.state.books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
          <Route exact path="/" render={() => (
              <div className="list-books">
                  <div className="list-books-title">
                      <h1>My Reads Tracking App</h1>
                  </div>
                  <div className="list-books-content">
                      <HomePage
                          currentlyReading={currentlyReading}
                          wantToRead={wantToRead}
                          read={read}
                          onChangeShelf={this.onChangeShelf}
                      />
                  </div>
              </div>
          )}/>
          <Route path="/search" render={({history}) => (
              <SearchBooks
                  onChangeShelf={this.onChangeShelf}
                  books={this.state.searchBooks}
                  updateQuery={this.updateQuery}
              />
          )}/>
      </div>
    )
  }
}

export default BooksApp
