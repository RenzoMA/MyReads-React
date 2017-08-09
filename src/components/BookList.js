import React from 'react'
import BookSelectInput from './BookSelectInput'
import BookSearchInput from './BookSearchInput'
import BookListHeader from './BookListHeader'
import BookSection from './BookSection'
import PropTypes from 'prop-types'

class BookList extends React.Component {
    static propTypes = {
        books: PropTypes.object.isRequired
    }

    render() {
        let { currentlyBooks, wantToReadBooks, readBooks } = this.props.books;
        return (
            <div className="list-books">
                <BookListHeader />
                <div className="list-books-content">
                    <div>
                        <BookSection title={"Currently Reading"} books={currentlyBooks} />
                        <BookSection title={"Want to Read"} books={wantToReadBooks} />
                        <BookSection title={"Read"} books={readBooks} />
                    </div>
                </div>
                <BookSearchInput />
            </div>

        )
    }
}

export default BookList