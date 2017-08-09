import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import { Route } from 'react-router-dom'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: {
      currentlyBooks: [],
      wantToReadBooks: [],
      readBooks: []
    }
  }

  componentDidMount() {
    BooksApi.getAll().then((books) => {
      this.setState({ books: { ...this.state.books, readBooks: books } })
    })
  }

  addBook(type, book) {
    let books = this.state.books.type;
    books.push(book);
    this.setState({ books: { ...book, [type]: books } })
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} />
        )} />
        <Route path="/search" render={() => (
          <BookSearch addBook={this.addBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp
