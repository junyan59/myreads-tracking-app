import React, {Component} from 'react';

class Book extends Component {
    onMoveBook = (e) => {
        const shelf = e.target.value;
        this.props.onMoveBook(this.props.book, shelf);
    };
    render() {
        const {book} = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${thumbnail}")`
                    }}/>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={this.onMoveBook}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(', ')}</div>
            </div>);
    }
}

export default Book;
