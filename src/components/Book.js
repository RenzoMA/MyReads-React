import React from 'react'
import BookSelectInput from './BookSelectInput'

class Book extends React.Component {
    render() {
        let book = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <BookSelectInput book={book} editBookStatus={(status, book) => this.props.editBookStatus(status, book)} />
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}
export default Book