import React from 'react'
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../Contants'

class BookSelectInput extends React.Component {
    render() {
        let book = this.props.book;
        debugger;
        return (
            <select
                value={book.status ? book.status : "none"}
                onChange={(event) => this.props.editBookStatus(event.target.value, book)}>
                <option value="none" disabled>Move to...</option>
                <option value={CURRENTLY_READING}>Currently Reading</option>
                <option value={WANT_TO_READ}>Want to Read</option>
                <option value={READ}>Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default BookSelectInput