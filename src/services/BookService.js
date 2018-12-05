const API_URL = process.env.REACT_APP_API_URL;

const BookService = {
    fetchBooks: () => {
        return fetch(`${API_URL}/books`)
            .then(response => response.json())
    },

    createBook(book) {
        const request = {
            method: 'POST',
            body: JSON.stringify({
                book: book
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return fetch(`${API_URL}/books`, request)
            .then(response => response.json())
    },
    deleteBook(bookId) {
        const request = {
			method: 'DELETE'
        }
        return fetch(`${API_URL}/books/${bookId}`, request)
            .then(response => {
                if (response.ok){
                    const index = this.props.books.findIndex(book => book.id === bookId)  
                    this.setState({
                        books: [
                            ...this.props.books.slice(0, index),
                            ...this.props.books.slice(index + 1)
                        ]
                    })
                } else {
                    window.alert("Unable to delete the book.")
                }
            })
            .catch(err => console.log("Received this error while trying to delete a book:", err))
    }
}

export default BookService;