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
import { addBook, deleteBook } from '../../actions/index';

const NewBook = React.lazy(() => import('../NewBook/NewBook'))

const API_URL = process.env.REACT_APP_API_URL;

class Books extends Component {

	componentDidMount() {
		BookService.fetchBooks().then(books => this.setState({books: books})
	)}
	
	
	bookSelectedHandler = (id) => {
		debugger
		this.props.history.push({pathname:'/books/' + id});
		this.setState({
			selectedBookId: id
		})
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

		// const newArray = this.props.books.filter(book => book.id === this.props.selectedBookId)
	    // if (this.props.selectedBookId !== null){
        //     return(
		// 			<FullBook 
		// 				title={newArray[0].title}
		// 				author={newArray[0].author}
		// 				img_url={newArray[0].img_url} alt={newArray[0].title}
		// 				description={newArray[0].description}
		// 				delete={() => this.props.deleteBook(this.props.selectedBookId)} /> 
		// 	)
		// }
	
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
							{renderBooks}				
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

export default connect(mapStateToProps, {addBook, deleteBook})(withRouter(Books));