import React from 'react'
import BookSearchInput from './BookSearchInput'
import BookListHeader from './BookListHeader'
import BookSection from './BookSection'
import PropTypes from 'prop-types'
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../Contants'

const BookList = (props) => {
    const { books, editBookStatus } = props;
    const currentlyBooks = books.filter((book) => book.status === CURRENTLY_READING);
    const wantToReadBooks = books.filter((book) => book.status === WANT_TO_READ);
    const readBooks = books.filter((book) => book.status === READ);

    return (
        <div className="list-books">
            <BookListHeader title={'MyReads'} />
            <div className="list-books-content">
                <div>
                    <BookSection editBookStatus={editBookStatus} title={"Currently Reading"} books={currentlyBooks} />
                    <BookSection editBookStatus={editBookStatus} title={"Want to Read"} books={wantToReadBooks} />
                    <BookSection editBookStatus={editBookStatus} title={"Read"} books={readBooks} />
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