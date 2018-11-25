import React, { Component, Suspense } from 'react';
import './Challenge.css';
import Books from './Books/Books';
import FullBook from './FullBook/FullBook';
//import NewBook from './NewBook/NewBook';
import ChallengeTracker from '../../components/ChallengeTracker/ChallengeTracker'
import { Route, NavLink, Switch } from 'react-router-dom';
import Search from './Search/Search';
import BookInfo from './BookInfo/BookInfo';
import Login from './Login/Login';



const NewBook = React.lazy(() => import('./NewBook/NewBook'))




class Challenge extends Component {
    state = {
        results: [],
        expandedBook: null
      };
    
      setResults = results => {
        this.setState({ results });
      };
    
      collapseBook = () => {
        this.setState({
          expandedBook: null
        });
      };
    
      expandBook = expandedBook => {
        this.setState({ expandedBook });
      };
   
    render () {
        return (
            <div className="Challenge">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-book',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Book</NavLink></li>
                            <li><NavLink to="/books/">My Books</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/books" component={Books} />
                    <Route path="/login" component={Login} />
                       <Route path="/new-book" render={() => (
                        <Suspense fallback={<div>Loading...</div>} >
                            <NewBook/>
                        </Suspense>
                        )}
                    />
                    <Route path="/" component={ChallengeTracker} />
                    {/* <Route render={() => <h1>Not found</h1>} /> */}
                </Switch>
                    <div className="container">
                    <div className="header clearfix mt-5">
                    <h3 className="text-muted">Goodreads Book Search</h3>
                    </div>
                    <div className="jumbotron">
                    {this.state.expandedBook ? (
                        <BookInfo
                        bookData={this.state.expandedBook}
                        collapseBook={this.collapseBook}
                        />
                    ) : (
                        <Search
                        results={this.state.results}
                        setResults={this.setResults}
                        expandBook={this.expandBook}
                        />
                    )}
                    </div>
                </div>

            </div>
        );
    }
}

export default Challenge;