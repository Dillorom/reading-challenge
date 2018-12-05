export const setGoal = goal => {
    return {
      type: "SET_GOAL",
      goal
    };
  };

  export const addBook = book => {
    return {
      type: "ADD_BOOK",
      book
    };
  };

 export const deleteBook = bookId => {
   return{
    type: "DELETE_BOOK",
    bookId
   };
 };