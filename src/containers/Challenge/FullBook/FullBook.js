import React, { Component } from 'react';

import './FullBook.css';

const FullBook = (props) => (
            {props.allBooks.map(book => 
                <div className="FullBook">
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <img src={book.img_url} alt={book.title}/>
                    <p>{book.description}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    )}
)

export default FullBook;