import React, { Component, Suspense } from 'react';
import './Books.css';
import Book from '../../components/Book/Book';
import { Link } from 'react-router-dom';
import FullBook from '../FullBook/FullBook';
import ChallengeTracker from '../../components/ChallengeTracker/ChallengeTracker'
import { Route, NavLink, Switch } from 'react-router-dom';
import Login from '../../components/User/Login/Login';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchBooks, viewBook, likeCounter } from '../../actions/index';
import NewBook from '../NewBook/NewBook';

class Books extends Component {

	componentDidMount() {
		// this.props.fetchBooks()
	}

	bookSelectedHandler = (id) => {
		let filter = this.props.books.filter(book => book.id === id)
		this.props.viewBook(filter);
		this.props.history.push({pathname:'/books/' + id});
	}

	handleLikeClick = (bookId) => {
		let filter = this.props.books.filter(book => book.id === bookId)
		//debugger
		this.props.likeCounter(filter[0]);
		// this.props.history.push('/books')
	}

	render(){
		//debugger
		const renderBooks = () => this.props.books.map(book => {
			//debugger
			return(
		
			<div key={book.id}> 
					<Book
					title={book.title} 
					author={book.author}
					img_url={book.img_url}
					description={book.description}
					counter={book.likes}
					likeCounter={this.handleLikeClick}
					id={book.id} />
			
			</div>
			);
		});
	
		return(
			<div className="Challenge">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/books" exact>Library</NavLink></li>
                            <li><NavLink to={{pathname: '/new-book'}}>Add Book</NavLink></li>
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
                            <NewBook />
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
	//debugger
	return {
		
	  books: state.manageBooks.books,
	}
  }

export default withRouter(connect(mapStateToProps, { fetchBooks, viewBook, likeCounter })(Books));