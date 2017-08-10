import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookSection = props => {
    const { title, books } = this.props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) =>
                        <li key={book.id} ><Book editBookStatus={this.props.editBookStatus} book={book} /></li>
                    )}
                </ol>
            </div>
        </div>
    )
}

BookSection.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
}

export default BookSection