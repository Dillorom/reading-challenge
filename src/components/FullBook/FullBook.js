import React, { Component } from 'react';

import './FullBook.css';

class FullBook extends Component {
    render(){
        let book = <p>Please, add a book!</p>
        book = (
        <div className="FullBook">
            <h1>Title</h1>
            <h2>Author</h2>
            <div className="Edit">
                <button className="Delete">Delete</button>
            </div>
        </div>
    );
        return book;
   }
};

export default FullBook;