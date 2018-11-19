import React, { Component } from 'react';
import './Books.css';
import Book from '../../../components/Book/Book';
//import {PropTypes} from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullBook from '../FullBook/FullBook';

class Books extends Component {
	state = {
        allBooks: [
            {
                title: "Design your life",
				author: "Bill Burnett",
				id: 1
            },
            {
                title: "The last lecture",
				author: "Randy Pausch",
				id: 2
            },
            { 
                title: "The arabian nights",
				author: "Unknown",
				id: 3
            }
        ]
	}
	
	bookSelectedHandler = (id) => {
		console.log(this.props)
		this.props.history.push({pathname:'/books/' + id});
		//this.props.history.push('/' + id);
	}

	render(){
	
		let allBooks = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
		if (!this.state.error) {
			allBooks = this.state.allBooks.map(book => {
				return(
				<Link to={"/books/" + book.id} key={book.id} >
					 <Book
					 	//key={book.id} 
						title={book.title} 
						author={book.author}
					clicked={() => this.bookSelectedHandler(book.id)} />
				</Link>
				);
			});
		}

		return (
			<div>
				<section className="Books">
					{allBooks}
				</section>
				<Route path={this.props.match.url + '/:id'} exact component={FullBook} />
			</div>
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