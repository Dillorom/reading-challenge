import React, { Component } from 'react';
import './FullBook.css';

const FullBook = (props) => (
    <div className="FullBook">
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <img src={props.img_url} alt={props.title}/>
        <p>{props.description}</p>
        <div className="Edit">
            <button onClick={props.delete} className="Delete">Delete</button>
        </div>
    </div>
);

export default FullBook;