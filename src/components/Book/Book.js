import React from 'react';
import './Book.css';

const book = (props) => (
    <div className="Book" onClick={props.clicked}>
        <h3>{props.title}</h3>
        <div className="Info">
            <div className="Author">{props.author}</div>
            <img className="bookImage" src={props.img_url} alt={props.title}/>
        </div>
    </div>

);

export default book;