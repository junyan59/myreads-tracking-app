import React, {Component} from 'react';
import Book from "./Book";

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            <li key={key.id}>
                                <Book book={book} onMoveBook={this.props.onMoveBook}/>
                            </li>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;
