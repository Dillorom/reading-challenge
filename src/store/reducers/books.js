const initialState = {
  books: []
}
const manageBooks = (state = initialState, action) => {

    switch (action.type) {
      case 'FETCH_BOOKS':
        return { ...state, books: action.payload }
      case "ADD_BOOK":
        return { ...state, books: state.books.concat(action.payload)}
      case 'DELETE_BOOK':
        return {...state, books: state.books.filter(book => book.id !== action.payload.id)}
      default:
        return state;
    }
  };
  export default manageBooks;