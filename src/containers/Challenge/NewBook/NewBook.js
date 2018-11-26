import React, { Component } from 'react';
import './NewBook.css';
import { Redirect } from 'react-router-dom';

class NewBook extends Component {
    state = {
        title: '',
        author: '',
        img_url: '',
        description: '',
        submitted: false

    }

    postDataHandler = (e) => {
        e.preventDefault();
        const book = this.state;
        this.props.addBook(book);
        this.setState({
            title: '',
            author: '',
            img_url: '',
            description: '',
            submitted: true
        }) 
    }
   
    render() {
        let redirect = null;
        if (this.state.submitted){
            alert("Your book has been added!")
            redirect = <Redirect to="/" />
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
                    <label>Image URL</label>
                    <input type="text" value={this.state.img_url} onChange={(event) => this.setState({img_url: event.target.value})}/>
                    <label>Description</label> 
                    <input type="text" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        );
    }
};

export default NewBook;