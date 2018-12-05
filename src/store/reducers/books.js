const initialState = {
  books: [],
  selectedBookId: null
}
const manageBooks = (state = initialState, action) => {

    switch (action.type) {
      case "ADD_BOOK":
        return { books: state.books.concat(action.payload) };
      case 'DELETE_BOOK':
        return {books: state.books.filter(book => book.id !== action.payload)}
      default:
        console.log("initial state is ", state)
        return state;
    }
  };
  export default manageBooks;