import React from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksApi from '../BooksAPI'

class BookSection extends React.Component {
  state = {
    books: []
  }

  onValueChanged = (value) => {
    if (value !== '') {
      BooksApi.search(value, 50).then((books) => {
        if (books.error) {
          this.setState({ books: [] })
        } else {
          let booksSelected = this.props.books;
          for (let book of books) {
            for (let selectedBook of booksSelected) {
              if (book.id === selectedBook.id) {
                book.status = selectedBook.status;
              }
            }
          }
          this.setState({ books: books });
        }
      })
    } else {
      this.setState({ books: [] })
    }
  }

  render() {
    const books = this.state.books;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={(event) => this.onValueChanged(event.target.value)} type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              books.map((book) => {
                return (<li key={book.id} ><Book editBookStatus={(status, book) => this.props.editBookStatus(status, book)} book={book} /></li>)
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSection