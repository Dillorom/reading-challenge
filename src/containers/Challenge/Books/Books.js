import React, { Component } from 'react';
import './Books.css';
import Book from '../../../components/Book/Book';
//import {PropTypes} from 'react';

class Books extends Component {
	state = {
        allBooks: [
            {
                title: "Design your life",
                author: "Bill Burnett"
            },
            {
                title: "The last lecture",
                author: "Randy Pausch"
            },
            { 
                title: "The arabian nights",
                author: "Unknown"
            }
        ]
	}

	render(){
	
		let allBooks = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
		if (!this.state.error) {
			allBooks = this.state.allBooks.map(book => {
				return <Book 
					key={book.id} 
					title={book.title} 
					author={book.author}
					clicked={() => this.postSelectedHandler(book.id)} />;
			});
		}

		return (
			<section className="Books">
				{allBooks}
			</section>
		);
	}
};

Books.propTypes = {
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



export default Books;