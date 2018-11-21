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
                'Content-Type': 'application/json',
            }
        };
        return fetch(`${API_URL}/books`, request)
            .then(response => response.json())
    }
}

export default BookService;