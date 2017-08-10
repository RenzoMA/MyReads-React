import React from 'react'
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../Contants'

const BookSelectInput = (props) => {
    let { book, editBookStatus } = props;
    return (
        <select
            value={book.status ? book.status : "none"}
            onChange={(event) => editBookStatus(event.target.value, book)}>
            <option value="none" disabled>Move to...</option>
            <option value={CURRENTLY_READING}>Currently Reading</option>
            <option value={WANT_TO_READ}>Want to Read</option>
            <option value={READ}>Read</option>
            <option value="none">None</option>
        </select>
    )
}

export default BookSelectInput