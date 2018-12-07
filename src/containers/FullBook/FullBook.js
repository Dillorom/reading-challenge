import React, { Component } from 'react';
import './FullBook.css';
import { connect } from 'react-redux';
import { deleteBook } from '../../actions/index';

class FullBook extends Component {

    handleClick = () => {
        this.props.deleteBook(this.props.fullbook[0].id);
        this.props.history.push({pathname:'/books/'});
    }
    render(){
        return(
            <div>
                <h1> {this.props.fullbook[0].title}</h1>
                <h2> {this.props.fullbook[0].author}</h2>
                <img src={this.props.fullbook[0].img_url} alt={this.props.fullbook[0].title} />
                <p>{this.props.fullbook[0].description}</p>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
};
const mapStateToProps = state => {
    return{
       fullbook: state.viewBook[0]
    }
}
export default connect(mapStateToProps, { deleteBook })(FullBook);