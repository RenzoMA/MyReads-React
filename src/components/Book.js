import React from 'react'
import BookSelectInput from './BookSelectInput'

const Book = (props) => {
    const { book, editBookShelf } = props;
    const imageUrl = props.book.imageLinks ? props.book.imageLinks.thumbnail : '';
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageUrl}")` }}></div>
                <div className="book-shelf-changer">
                    <BookSelectInput book={book} editBookShelf={(shelf, book) => editBookShelf(shelf, book)} />
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}
export default Book