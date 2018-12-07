import React, { Component } from 'react';
import './FullBook.css';
import { connect } from 'react-redux';
import { deleteBook } from '../../actions/index';
import FullBookChild from '../../components/FullBookChild';

class FullBook extends Component {

    handleClick = () => {
        this.props.deleteBook(this.props.fullbook[0].id);
        this.props.history.push({pathname:'/books/'});
    }
    render(){


        // const bookList
        // if (this.props.selectedBookId !== null) {
        //     bookList = this.props.books.map(book => {
        //         return <FullBookChild title={book.title} author={book.author} 
        //             img_url={book.img_url} description={book.description}
        //             delete={this.props.delete} />
        //     })
        //     return bookList;
        // }
        // const bookList = () => {
        //     let filter = this.props.books.filter(book => book.id === this.props.selectedBookId)
        //     debugger
        //     }


            // {
            //         return <FullBookChild title={book.title} author={book.author} 
            //             img_url={book.img_url} description={book.description}
            //             delete={this.props.delete} />
            //     })
        return(
            <div>
                {/* {this.props.selectedBookId} ? {bookList} : null */}
                {/* {bookList()} */}
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
        books: state.manageBooks.books,
        selectedBookId: state.manageBooks.selectedBookId ,
        fullbook: state.viewBook[0]
    }
}
export default connect(mapStateToProps, { deleteBook })(FullBook);