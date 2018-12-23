const initialState = {
  books: [], 
  }
const manageBooks = (state = initialState, action) => {
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
        const updatedState = { ...state, books: state.books.map(book => 
          {if (book.id == action.payload.id){
            return {...book, likes: action.payload.likes}
           } else {
             return book;
           }}
        )}
        return updatedState;
  
    case 'SORT_BY_LIKES':
        return {...state, books: action.payload.sort(function (a, b) {
          return b.likes - a.likes;
        })};
      default:
      
        return state;
    }
  };
  export default manageBooks;

 