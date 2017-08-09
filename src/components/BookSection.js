import React from 'react'
import BookSelectInput from './BookSelectInput'
import Book from './Book'
import PropTypes from 'prop-types'

class BookSection extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }
    render() {
        let { title, books } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) =>
                            <li key={book.id} ><Book /></li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSection