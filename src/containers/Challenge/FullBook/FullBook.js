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
            return(
                <div className="FullBook">
                    {this.props.books.map(book => {
                        return(
                        <div key={book.id}>   
                            <h1>{book.title}</h1>
                            <h2>{book.author}</h2>
                            <img src={book.img_url} alt={book.title}/>
                            <p>{book.description}</p>
                            <div className="Edit">
                                <button onClick={() => this.props.deleteBook(book.id)} className="Delete">Delete</button>
                            </div>
                        </div> 
                        ) 
                })}
                </div>
            )
            
        }
        return book;
    }
}


export default FullBook;