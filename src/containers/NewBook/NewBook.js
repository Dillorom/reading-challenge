import React, { Component } from 'react';
import './NewBook.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBook } from '../../actions/index';
import uuid from 'uuid';

class NewBook extends Component {
    state = {
        title: '',
        author: '',
        img_url: '',
        description: '',
        submitted: false

    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            submitted: true,
            id: uuid()
        })
        this.props.addBook(this.state);
        alert("Your book has been added!")
        this.props.history.push('/books') 
    }

    handleChange = event => {
        this.setState({
          [event.target.ref]: event.target.value
        });
      }
   
    render() {
        return(
            <div className="NewBook">
                <h1>Add a Book</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" ref="title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                    <label>Author</label>
                    <input type="text" ref="author" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                    <label>Image URL</label>
                    <input type="text" ref="img_url" value={this.state.img_url} onChange={(event) => this.setState({img_url: event.target.value})}/>
                    <label>Description</label> 
                    <input type="text" ref="description" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        );
    }
};

export default withRouter(connect(null, { addBook })(NewBook));