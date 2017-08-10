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
        this.setState({ books: books.error ? [] : books });
      })
    } else {
      this.setState({ books: [] })
    }
  }

  render() {
    let books = this.state.books;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input onChange={(event) => this.onValueChanged(event.target.value)} type="text" placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => {
              return (<li key={book.id} ><Book book={book} /></li>)
            }
            )}
            {this.props.addBook}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSection