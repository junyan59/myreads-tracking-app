import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './Components/SearchBooks';
import HomePage from './Components/HomePage';
import * as BooksAPI from '../BooksAPI';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter(book => book.shelf === 'wantToRead'),
        read: books.filter(book => book.shelf === 'read')
      });
    });
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" component={SearchBooks onMoveBook={this.props.onMoveBook}/>
          <Route exact path="/" render={() => (
            <HomePage
                currentlyReading={currentlyReading}
                wantToRead={wantToRead}
                read={read}
                onShelfChange={this.onMoveBook}
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
