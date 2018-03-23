import React, {Component} from 'react';
import Book from "./Book";

class BookShelf extends Component {
    render() {
        const {shelfTitle, books} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, key) => {
                            <li key={key}>
                                <Book title={book.title} author={book.authors} imageLinks={book.imageLinks.thumbnail}/>
                            </li>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;
