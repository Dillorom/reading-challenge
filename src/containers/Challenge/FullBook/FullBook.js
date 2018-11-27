import React, { Component } from 'react';
import './FullBook.css';

class FullBook extends Component {
    componentDidMount(){
    }
    render(){
        let book = <p style={{textAlign: 'center'}}>Please, selected a book.</p>
        if (this.props.id){
            const newArray = this.props.books.filter(book => book.id === this.props.id)
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