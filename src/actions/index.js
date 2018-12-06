const API_URL = process.env.REACT_APP_API_URL;

export const setGoal = goal => {
    return {
      type: "SET_GOAL",
      goal
    };
  };

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
// export const deleteBook = bookId => {
//   return (dispatch) => {
//     dispatch({type: 'DELETE_BOOK'});
//     const request = {
//     method: 'DELETE'
//     }
//       return fetch(`${API_URL}/books/${bookId}`, request)
//         .then(response => {
//           if (response.ok){
//             const index = this.props.books.findIndex(book => book.id === bookId)  
//             this.setState({
//               books: [
//                 ...this.props.books.slice(0, index),
//                 ...this.props.books.slice(index + 1)
//               ]
//             })
//           } else {
//             window.alert("Unable to delete the book.")
//           }
//         })
//         .catch(err => console.log("Received this error while trying to delete a book:", err))
//       }
// };

// export const addBook = book => {
//   return (dispatch) => {
//     dispatch({type: "ADD_BOOK"});
//     const request = {
//         method: 'POST',
//         body: JSON.stringify({
//             book: book
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     return fetch(`${API_URL}/books`, request)
//         .then(response => response.json())
//         .then(book => this.setState({
//             books: this.props.books.concat(book)
//           }))
//   }
// };

// export const signup = user => {
//   return(dispatch) => {
//     dispatch({type: 'LOGIN'});
//     const request = {
//       method: 'GET',
//       body: JSON.stringify({
//           user: user
//       }),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   };
//     return fetch(`${API_URL}/users`, request)
//     .then(response => response.json())
//     .then(user => this.setState({
//       users: this.props.users.concat(user)
//     }))
//   }
// }

export const login = user => {
  return {
    type: 'LOGIN',
    user

  }
};