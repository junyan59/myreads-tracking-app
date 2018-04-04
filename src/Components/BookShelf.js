import React, {Component} from 'react';
import Book from "./Book";
import PropTypes from "prop-types";

class BookShelf extends Component {
    static propTypes = {
        shelfTitle: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            <li key={key.id}>
                                <Book
                                    book={book}
                                    onChangeShelf={this.props.onChangeShelf}/>
                            </li>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;
