import React from 'react'
import './App.css'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import { Route } from 'react-router-dom'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  editBookShelf = (shelf, selectedBook) => {
    BooksApi.update(selectedBook, shelf).then(() => {
      selectedBook.shelf = shelf;
      this.setState((prevState) => {
        let actualBooks = prevState.books.filter((book) => book.id !== selectedBook.id);
        actualBooks.push(selectedBook);
        return { books: actualBooks };
      })
    });
  }

  componentDidMount() {
    BooksApi.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} editBookShelf={this.editBookShelf} />
        )} />
        <Route path="/search" render={() => (
          <BookSearch books={this.state.books} editBookShelf={this.editBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
