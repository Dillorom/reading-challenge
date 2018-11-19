import React, { Component } from 'react';
import './NewBook.css';
import { Redirect } from 'react-router-dom';

class NewBook extends Component {
    state = {
        title: '',
        author: '',
        submitted: false

    }

    postDataHandler = (e) => {
        e.preventDefault();
        this.setState({
            title: this.state.title,
            author: this.state.author,
            submitted: true
        }) 
        console.log(this.state)
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        let redirect = null;
        if (this.state.submitted){
            redirect = <Redirect to="/books" />
        }
        return(
            <div className="NewBook">
                {redirect}
                <h1>Add a Book</h1>
                <form onSubmit={this.postDataHandler}>
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                    <label>Author</label>
                    <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        );
    }
};

export default NewBook;