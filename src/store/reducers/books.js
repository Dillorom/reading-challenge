const initialState = {
  books: [], 
  }
const manageBooks = (state = initialState, action) => {
  //debugger
  let index;
  let likedBook;
  let likedBookLikes;

    switch (action.type) {
      case 'FETCH_BOOKS':
        return { ...state, books: action.payload }
      case "ADD_BOOK":
        return { ...state, books: state.books.concat(action.payload)}
      case 'DELETE_BOOK':
        return {...state, books: state.books.filter(book => book.id !== action.payload.id)}
      case "INCREMENT_LIKE_COUNTER":
        //return {...state, books: state.books.filter(book => book.id == action.payload.id)}
   
        index = state.books.findIndex(book => book.id === action.payload.id); 
        likedBook = state.books[index];
        //debugger
        likedBookLikes = likedBook.likes
      
        return { ...state, ...state.books, likedBookLikes: likedBookLikes + 1};
      
    //     return {
    //       ...state.books.slice(0, index),
    //       ...state, likedBookLikes: likedBookLikes + 1,
    //       ...state.books.slice(index + 1)
    // };
    
      default:
      
        return state;
    }
  };
  export default manageBooks;

 