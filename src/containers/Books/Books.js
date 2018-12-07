import React, { Component, Suspense } from 'react';
import './Books.css';
import Book from '../../components/Book/Book';
import { Link } from 'react-router-dom';
import FullBook from '../FullBook/FullBook';
import BookService from '../../services/BookService';
//import NewBook from '../NewBook/NewBook';
import ChallengeTracker from '../../components/ChallengeTracker/ChallengeTracker'
import { Route, NavLink, Switch } from 'react-router-dom';
import Login from '../../components/User/Login/Login';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addBook, deleteBook, fetchBooks, viewBook } from '../../actions/index';


const NewBook = React.lazy(() => import('../NewBook/NewBook'))

const API_URL = process.env.REACT_APP_API_URL;

class Books extends Component {

	componentDidMount() {
		this.props.fetchBooks()
	}
	
	bookSelectedHandler = (id) => {
		let filter = this.props.books.filter(book => book.id === id)
		this.props.viewBook(filter);
		// this.setState({
		// 	selectedBookId: id
		// })
		
		this.props.history.push({pathname:'/books/' + id});
		//this.props.history.push('/' + id);
	}

	// addBook = book => {
	// 	BookService.createBook(book).then(book => this.setState({
	// 		books: this.props.books.concat(book)
	// 	}))
	// }

	// deleteBook = bookId => {
	// 	const request = {
	// 	method: 'DELETE'
	// 	}
	// 	return fetch(`${API_URL}/books/${bookId}`, request)
	// 		.then(response => {
	// 			if (response.ok){
	// 				const index = this.props.books.findIndex(book => book.id === bookId)  
	// 				this.setState({
	// 					books: [
	// 						...this.props.books.slice(0, index),
	// 						...this.props.books.slice(index + 1)
	// 					]
	// 				})
	// 			} else {
	// 				window.alert("Unable to delete the book.")
	// 			}
	// 		})
	// 		.catch(err => console.log("Received this error while trying to delete a book:", err))
	// }

	render(){
		// let allBooks = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
		// if (!this.state.error) {
		// 	console.log(this.state.allBooks)
		// 	allBooks = this.state.allBooks.map(book => {
		// 		return(
		// 		<Link to={"/books/" + book.id} key={book.id} >
		// 			 <Book
		// 				title={book.title} 
		// 				author={book.author}
		// 				img_url={book.img_url}
		// 				description={book.description}
		// 				clicked={() => this.bookSelectedHandler(book.id)} />
		// 		</Link>

		// 		);
		// 	});
		// };

		const renderBooks = () => this.props.books.map(book => {
			// debugger
					return(
					<Link to={"/books/" + book.id} key={book.id} >
						 <Book
							title={book.title} 
							author={book.author}
							img_url={book.img_url}
							description={book.description}
							clicked={() => this.bookSelectedHandler(book.id)} />
					</Link>
	
					);
				});
	
		return(
			<div className="Challenge">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/books" exact>Library</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-book',
                                // hash: '#submit',
                                // search: '?quick-submit=true'
                            }}>Add Book</NavLink></li>
							<li><NavLink to="/goal" exact>My Goal</NavLink></li>
							<li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/login" component={Login} />
					<Route path="/books/:id" component={FullBook} />
					<Route path="/goal" component={ChallengeTracker} />
                       <Route path="/new-book" render={(props) => (
                        <Suspense fallback={<div>Loading...</div>} >
                            <NewBook addBook={this.props.addBook}/>
                        </Suspense>
                        )} />
						<section className="Books">
							{renderBooks()}				
						</section> 
               </Switch>
			</div>
		);
	}
};
const mapStateToProps = state => {
	return {
	  books: state.manageBooks.books,
	  selectedBookId: state.manageBooks.selectedBookId
	}
  }

export default withRouter(connect(mapStateToProps, {addBook, deleteBook, fetchBooks, viewBook})(Books));