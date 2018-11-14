import React, { Component } from 'react';

import './FullBook.css';

class FullBook extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        let book = <p>Please, add a book!</p>
        book = (
        <div className="FullBook">
        <p>FullBook page</p>
            <h1>props.title</h1>
            <h2>props.author</h2>
            <div className="Edit">
                <button className="Delete">Delete</button>
            </div>
        </div>
    );
        return book;
   }
};

export default FullBook;