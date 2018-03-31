import React, {Component} from 'react';
import BookShelf from './BookShelf.js';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle='Currently Reading' books={this.props.currentlyReading} onMoveBook={this.props.onMoveBook}/>
                        <BookShelf shelfTitle='Want to Read' books={this.props.wantToRead} onMoveBook={this.props.onMoveBook}/>
                        <BookShelf shelfTitle='Read' books={this.props.read} onMoveBook={this.props.onMoveBook}/>
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
