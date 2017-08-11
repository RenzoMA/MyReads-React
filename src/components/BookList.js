import React from 'react'
import BookSearchInput from './BookSearchInput'
import BookListHeader from './BookListHeader'
import BookSection from './BookSection'
import PropTypes from 'prop-types'
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../Contants'

const BookList = (props) => {
    const { books, editBookShelf } = props;
    const currentlyBooks = books.filter((book) => book.shelf === CURRENTLY_READING);
    const wantToReadBooks = books.filter((book) => book.shelf === WANT_TO_READ);
    const readBooks = books.filter((book) => book.shelf === READ);

    return (
        <div className="list-books">
            <BookListHeader title={'MyReads'} />
            <div className="list-books-content">
                <div>
                    <BookSection editBookShelf={editBookShelf} title={"Currently Reading"} books={currentlyBooks} />
                    <BookSection editBookShelf={editBookShelf} title={"Want to Read"} books={wantToReadBooks} />
                    <BookSection editBookShelf={editBookShelf} title={"Read"} books={readBooks} />
                </div>
            </div>
            <BookSearchInput />
        </div>
    )
}

BookList.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookList