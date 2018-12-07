const initialState = {
  books: [],
  selectedBookId: null
}
const manageBooks = (state = initialState, action) => {

    switch (action.type) {
      case 'FETCH_BOOKS':
        return { ...state, books: action.payload }
      case "ADD_BOOK":
        return { ...state, books: state.books.concat(action.payload) }
      case 'DELETE_BOOK':
        return {...state, books: state.books.filter(book => book.id !== action.payload)}
      default:
        console.log("initial state is ", state)
        return state;
    }
  };
  export default manageBooks;