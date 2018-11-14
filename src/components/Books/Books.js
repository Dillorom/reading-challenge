import React from 'react';
import './Books.css';
import Book from '../Book/Book';
//import {PropTypes} from 'react';

const books = ({allBooks}) => (
    <ol>{allBooks.map((book, i) => 
        <li key={i}><Book 
                {...book}/></li>
        )}
    </ol>
);

books.propTypes = {
	allBooks: function(props) {
		if(!Array.isArray(props.allBooks)) {
			return new Error(
				"Books should be an array"	
				)
		} else if(!props.allBooks.length) {
			return new Error(
				"Books must have at least one record"
				)
		} else {
			return null
		}
	}
}

export default books;