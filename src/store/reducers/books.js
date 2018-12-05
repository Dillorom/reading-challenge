const initialState = {
  books: [],
  selectedBookId: null
}
const addBook = (state = initialState, action) => {

    switch (action.type) {
      case "ADD_BOOK":
      console.log('Current statee is:', state.books);
      
      console.log({ books: state.books.concat(action.payload) });
 
      return { books: state.books.concat(action.payload) };
      default:
      console.log("initial state is ", state)
        return state;
    }
  };
  export default addBook;