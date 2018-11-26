import React, { Component, Suspense } from 'react';
import './Books.css';
import Book from '../../../components/Book/Book';
import { Link } from 'react-router-dom';

import FullBook from '../FullBook/FullBook';
import BookService from '../../../services/BookService';
import NewBook from '../NewBook/NewBook';


import ChallengeTracker from '../../../components/ChallengeTracker/ChallengeTracker'
import { Route, NavLink, Switch } from 'react-router-dom';
import Search from '../Search/Search';
import BookInfo from '../BookInfo/BookInfo';
import Login from '../Login/Login';

//const NewBook = React.lazy(() => import('../NewBook/NewBook'))

const API_URL = process.env.REACT_APP_API_URL;

class Books extends Component {
	state = {
		allBooks: [],
		selectedBookId: null
	}

	componentDidMount() {
		BookService.fetchBooks().then(allBooks => this.setState({allBooks: allBooks})
	)}
	
	
	bookSelectedHandler = (id) => {
		this.props.history.push({pathname:'/books/' + id});
		this.setState({
			selectedBookId: id
		})
		//this.props.history.push('/' + id);
	}

	addBook = book => {
		BookService.createBook(book).then(book => this.setState({
			allBooks: this.state.allBooks.concat(book)
		}))
	}

	deleteBook = bookId => {
		const request = {
		method: 'DELETE'
		}
		return fetch(`${API_URL}/books/${bookId}`, request)
			.then(response => {
				if (response.ok){
					const index = this.state.allBooks.findIndex(book => book.id === bookId)  
					this.setState({
						allBooks: [
							...this.state.allBooks.slice(0, index),
							...this.state.allBooks.slice(index + 1)
						]
					})
				} else {
					window.alert("Unable to delete the book.")
				}
			})
			.catch(err => console.log("Received this error while trying to delete a book:", err))
	}

	render(){
		let allBooks = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
		if (!this.state.error) {
			allBooks = this.state.allBooks.map(book => {
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
		}

		return (
			<div className="Challenge">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>My Books</NavLink></li>

                            <li><NavLink to={{
                                pathname: '/new-book',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Add Book</NavLink></li>
							<li><NavLink to="/goal" exact>My Goal</NavLink></li>
							<li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/login" component={Login} />
					
					<Route path="/goal" component={ChallengeTracker} />
                       <Route path="/new-book" render={(props) => (
                        <Suspense fallback={<div>Loading...</div>} >
                            <NewBook addBook={this.addBook}/>
                        </Suspense>
                        )}
                    />
                    
					{this.state.selectedBookId == null ?
					(<section className="Books">
						{allBooks}				
					</section> ) :
					(<section className="FullBooks">
						<Route path={this.props.match.url + '/:id'} render={(props) => <FullBook id={this.state.selectedBookId} books={this.state.allBooks} deleteBook={this.deleteBook}/>} /> 
					</section> )}
               </Switch>
				
            </div>
		);
	}
};

export default Books;