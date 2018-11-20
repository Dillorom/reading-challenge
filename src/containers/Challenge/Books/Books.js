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
				img_url: "https://images.gr-assets.com/books/1476133952l/26046333.jpg",
				description: "Build a Life that Works for You"
			},
            {
                title: "The last lecture",
				author: "Randy Pausch",
				img_url: "https://images.gr-assets.com/books/1529682044l/40611510.jpg",
				descriont: "Based on the extraordinary final lecture by Carnegie Mellon University professor Randy Pausch, given after he discovered he had pancreatic cancer, this moving book goes beyond the now-famous lecture to inspire readers to live each day with purpose and joy."
            },
            { 
                title: "The arabian nights",
				author: "Wa'fa Tarnovska",
				img_url: "https://images.gr-assets.com/books/1347497895l/7959757.jpg",
				description: "Lebanese author Wafa' Tarnowska opens a window onto the Arab world with her magnificent new translation of eight stories from A Thousand and One Nights."
            }
        ]
	}
	
	bookSelectedHandler = (id) => {
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
						img_url={book.img_url}
						description={book.description}
					clicked={() => this.bookSelectedHandler(book.id)} />
				</Link>

				);
			});
		}

		// let fullBooks;
		// if (this.bookSelectHandler) {
		// 	fullBooks = this.state.allBooks.map(book => {
		// 		return(
		// 			<FullBook 
		// 			title={book.title} 
		// 			author={book.author}
		// 			img_url={book.img_url}
		// 			description={book.description}
		// 			/>
		// 	);
		// 	});
		// }

		return (
			<div>
				<section className="Books">
					{allBooks}				
				</section>
				<section className="FullBooks">
				{/* <Route path={this.props.match.url + '/:id'} render={(props) => <FullBook {...props} books={fullBooks} />} /> */}
					<Route path={this.props.match.url + '/:id'} render={(props) => <FullBook books={this.state.allBooks} />} /> 
				</section>
			</div>
		);
		// how do I get to the exact route, so that full page does not show up in books page, until I click on a book -- 
		//exact component={FullBook}
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