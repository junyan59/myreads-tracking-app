import React, {Component} from 'react';
import BookShelf from './BookShelf.js';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

class HomePage extends Component {
    static propTypes = {
        shelfTitle: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle='Currently Reading'
                            books={this.props.currentlyReading}
                            onChangeShelf={this.props.onChangeShelf}/>
                        <BookShelf shelfTitle='Want to Read'
                            books={this.props.wantToRead}
                            onChangeShelf={this.props.onChangeShelf}/>
                        <BookShelf shelfTitle='Read'
                            books={this.props.read}
                            onChangeShelf={this.props.onChangeShelf}/>
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
