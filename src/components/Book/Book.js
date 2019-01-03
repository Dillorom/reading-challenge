import React, {Component} from 'react';
import './Book.css';

class Book extends Component {
   
    handleClick = (id) => {
        this.props.likeCounter(id)
      }

    // callApi = () => {
    //     let data = {
    //         method: 'GET',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //         }
    //       }
    //       fetch('http://localhost:3000/api/books', data)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(books => console.log( books))
    // }
render(){
    return(
        <div className="Book" onClick={this.props.clicked}>
            <h3>{this.props.title}</h3>
        <div className="Info">
                <div className="Author">{this.props.author}</div>
                    <img className="bookImage" src={this.props.img_url} alt={this.props.title}/>
                    <button onClick={() => this.handleClick(this.props.id)}>Like</button>
                    {/* <button onClick={this.callApi}>Call Api</button> */}
                    <p>{this.props.counter}</p>
                </div>
            </div>
        )
    }

}

export default Book;