import React, {Component} from 'react';
import BookShelf from './BookShelf.js';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class HomePage extends Component {
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
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle='Currently Reading' books={this.state.currentlyReading} />
                        <BookShelf shelfTitle='Want to Read' books={this.state.wantToRead} />
                        <BookShelf shelfTitle='Read' books={this.state.read} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;