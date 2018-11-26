import React, { Component } from 'react';

import './FullBook.css';

// const FullBook = (props) => (
//                 <div className="FullBook">
//                {props.books.map(book => {
//                         return(
//                         <div key={book.id}>   
//                             <h1>{book.title}</h1>
//                             <h2>{book.author}</h2>
//                             <img src={book.img_url} alt={book.title}/>
//                             <p>{book.description}</p>
//                             <div className="Edit">
//                                 <button onClick={() => props.deleteBook(book.id)} className="Delete">Delete</button>
//                             </div>
//                         </div>
//                         )
//                     })}
                    
//                 </div>
// )

class FullBook extends Component {
    render(){
        let book = <p style={{textAlign: 'center'}}>Please, selected a book.</p>
        if (this.props.id){
            console.log(this.props.id)
            const newArray = this.props.books.filter(book => book.id === this.props.id)
            console.log(newArray)
            return(
                <div className="FullBook">
                    <h1>{newArray[0].title}</h1>
                    <h2>{newArray[0].author}</h2>
                    <img src={newArray[0].img_url} alt={newArray[0].title}/>
                    <p>{newArray[0].description}</p>
                    <div className="Edit">
                        <button onClick={() => this.props.deleteBook(newArray[0].id)} className="Delete">Delete</button>
                    </div>
                </div>
            )
        }
        return book;
    }
}


export default FullBook;