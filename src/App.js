import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './Components/SearchBooks';
import HomePage from './Components/HomePage';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Route path="/search" component={SearchBooks} />
          <Route exact path="/" component={HomePage} />
      </div>
    )
  }
}

export default BooksApp
