const initialState = {
  books: [], 
  counter: 0
  }
const manageBooks = (state = initialState, action) => {
  let index;
  let book;

    switch (action.type) {
      case 'FETCH_BOOKS':
        return { ...state, books: action.payload }
      case "ADD_BOOK":
        return { ...state, books: state.books.concat(action.payload)}
      case 'DELETE_BOOK':
        return {...state, books: state.books.filter(book => book.id !== action.payload.id)}
      case "INCREMENT_LIKE_COUNTER":
        // return {...state, counter: state.counter + 1, books: state.books.filter(book => book.id == action.payload)}
        return { ...state, counter: state.counter + 1}
    //     index = state.books.findIndex(book => book.id === action.payload.id);
    //     book = state.books[index];
    //     return {
    //       ...state.books.slice(0, index),
    //       ...state, counter: state.counter += 1 ,
    //       ...state.books.slice(index + 1)
    // };
      default:
        return state;
    }
  };
  export default manageBooks;

 