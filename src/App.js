import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import { Route } from 'react-router-dom'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksApi.getAll().then((books) => {
      this.setState({ books })
    })
  }

  editBookStatus = (status, selectedBook) => {
    selectedBook.status = status;
    this.setState((prevState) => {
      let newBooks = prevState.books.filter((book) => book.id !== selectedBook.id);
      newBooks.push(selectedBook);
      return { books: newBooks };
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} editBookStatus={this.editBookStatus} />
        )} />
        <Route path="/search" render={() => (
          <BookSearch books={this.state.books} editBookStatus={this.editBookStatus} />
        )} />
      </div>
    )
  }
}

export default BooksApp
