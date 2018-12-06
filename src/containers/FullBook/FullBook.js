import React, { Component } from 'react';
import './FullBook.css';
import { connect } from 'react-redux';
import { deleteBook } from '../../actions/index';
import FullBookChild from '../../components/FullBookChild';

class FullBook extends Component {
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
        const bookList = this.props.books.map(book => {
                    return <FullBookChild title={book.title} author={book.author} 
                        img_url={book.img_url} description={book.description}
                        delete={this.props.delete} />
                })
        return(
            <div>
                {/* {this.props.selectedBookId} ? {bookList} : null */}
                {bookList}
            </div>
        )
    }
};
const mapStateToProps = state => {
    return{
        books: state.manageBooks.books,
        selectedBookId: state.manageBooks.selectedBookId 
    }
}
export default connect(mapStateToProps, { deleteBook })(FullBook);