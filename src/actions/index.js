const API_URL = process.env.REACT_APP_API_URL;

export const setGoal = goal => {
    return {
      type: "SET_GOAL",
      goal
    };
  };
  
  export const likeCounter = (book, id) => {
    let likes = book.likes;
    let  newbook = {...book, likes: book.likes +1}
      
    let data = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*'
      },
      body: JSON.stringify(newbook)
    }
    return dispatch => {
      fetch(`${API_URL}/books/${ id }`, data)
        .then(response => response.json())
          .then(newbook => dispatch({
          type: 'INCREMENT_LIKE_COUNTER',
          payload: newbook
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

export const sortBooksByLikes = books => {
  return {
    type: 'SORT_BY_LIKES',
    payload: books
  }
}