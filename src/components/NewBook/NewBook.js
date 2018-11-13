import React, { Component } from 'react';
import './NewBook.css';

class NewBook extends Component {
    state = {
        title: '',
        author: '',

    }
    render() {
        return(
            <div className="NewBook">
                <h1>Add a Book</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                <label>Author</label>
                <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                <button>Add Book</button>
            </div>
        );
    }
};

export default NewBook;