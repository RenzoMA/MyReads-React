import React from 'react'
import BookSelectInput from './BookSelectInput'
import BookSearchInput from './BookSearchInput'
import BookListHeader from './BookListHeader'
import BookSection from './BookSection'

class BookList extends React.Component {
    render() {
        return (
            <div className="list-books">
                <BookListHeader />
                <div className="list-books-content">
                    <div>
                        <BookSection />
                    </div>
                </div>
                <BookSearchInput />
            </div>

        )
    }
}

export default BookList