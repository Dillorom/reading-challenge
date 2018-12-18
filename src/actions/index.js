const API_URL = process.env.REACT_APP_API_URL;

export const setGoal = goal => {
    return {
      type: "SET_GOAL",
      goal
    };
  };
  
  // export const likeCounter = (id) => {
  //   //debugger
  //   return {
  //     type: 'INCREMENT_LIKE_COUNTER',
  //     payload: id
  //   }
  //  }

  
  export const likeCounter = (bookId) => {
    //debugger
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookId)
    }

    return dispatch => {
      fetch(`${ API_URL }/books`, data)
        .then(response => response.json())
        .then(book => console.log(book.likes))
        .then( book => dispatch({
          type: 'INCREMENT_LIKE_COUNTER',
          payload: bookId
        }))
        .catch(err => err)
     }
  }
   

  export const viewBook = (payload) => {
    return {
      type: 'VIEW_BOOK',
      payload
    }
  }

  export const fetchBooks = () => {
    let data = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'Authorization': sessionStorage.jwt
      }
    }

    return dispatch => {
      fetch(`${ API_URL }/books`, data)
        .then(response => response.json())
        .then(books => {
          dispatch({
              type: 'FETCH_BOOKS',
              payload: books
          })
        })
        .catch(err => err)
    }
  }
  
  export const addBook = book => {
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    }
  
    return dispatch => {
      fetch(`${ API_URL }/books`, data)
        .then(response => response.json())
        .then(book => dispatch({
          type: 'ADD_BOOK',
          payload: book
        }))
        .catch(err => err)
    }
  }
  
  export const deleteBook = id => {
    let data = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  
    return dispatch => {
      fetch(`${ API_URL }/books/${ id }`, data)
        .then(response => response.json())
        .then(book => dispatch({
          type: 'DELETE_BOOK',
          payload: book
        }))
        .catch(err => err)
    }
  }

export const login = user => {
  return {
    type: 'LOGIN',
    user

  }
};
