import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };
    state = {
        query: ''
    };
    updateQuery = (query) => {
        this.setState(() => ({
          query: query.trim()
        }))
    };

    render() {
        const { query } = this.state
        const { books, changeShelf } = this.props

        const showingContacts = query === ''
          ? books
          : books.filter((c) => (
              c.title.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                          className="search-books-input"
                          type="text"
                          placeholder="Search by title or author"
                          value={query}
                          onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                    <Link
                          to="/"
                          className="close-search">Close
                    </Link>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book book={book}
                                onChangeShelf={this.props.onChangeShelf} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks
