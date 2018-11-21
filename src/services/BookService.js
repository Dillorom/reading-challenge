const API_URL = process.env.REACT_APP_API_URL;

const BookService = {
    fetchBooks: () => {
        return fetch(`${API_URL}/books`)
            .then(response => response.json())
    }
}

export default BookService;