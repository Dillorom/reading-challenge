const initialState = {
  books: [], 
  counter: 0
}
const manageBooks = (state = initialState, action) => {

    switch (action.type) {
      case 'FETCH_BOOKS':
        return { ...state, books: action.payload }
      case "ADD_BOOK":
        return { ...state, books: state.books.concat(action.payload)}
      case 'DELETE_BOOK':
        return {...state, books: state.books.filter(book => book.id !== action.payload.id)}
      case "INCREMENT_LIKE_COUNTER":
        // return {...state, books: state.books.filter(book => book.id == action.id), counter: state.counter + 1}
        return { ...state, counter: state.counter + 1}
      default:
        return state;
    }
  };
  export default manageBooks;