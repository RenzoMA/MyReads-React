import React from 'react'
import BookSelectInput from './BookSelectInput'
import BookSearchInput from './BookSearchInput'
import BookListHeader from './BookListHeader'
import BookSection from './BookSection'
import PropTypes from 'prop-types'
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../Contants'

class BookList extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        let currentlyBooks = this.props.books.filter((book) => book.status === CURRENTLY_READING);
        let wantToReadBooks = this.props.books.filter((book) => book.status === WANT_TO_READ);
        let readBooks = this.props.books.filter((book) => book.status === READ);

        return (
            <div className="list-books">
                <BookListHeader />
                <div className="list-books-content">
                    <div>
                        <BookSection editBookStatus={this.props.editBookStatus} title={"Currently Reading"} books={currentlyBooks} />
                        <BookSection editBookStatus={this.props.editBookStatus} title={"Want to Read"} books={wantToReadBooks} />
                        <BookSection editBookStatus={this.props.editBookStatus} title={"Read"} books={readBooks} />
                    </div>
                </div>
                <BookSearchInput />
            </div>

        )
    }
}

export default BookList