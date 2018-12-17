import React, {Component} from 'react';
import './Book.css';

class Book extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.likeCounter()
    }

    callApi = () => {
        let data = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              //'Authorization': sessionStorage.jwt
            }
          }
          fetch('http://localhost:3000/api/books', data)
            .then(response => {
                return response.json()
            })
            .then(books => console.log( books))
    }
render(){
    return(
        <div className="Book" onClick={this.props.clicked}>
            <h3>{this.props.title}</h3>
        <div className="Info">
                <div className="Author">{this.props.author}</div>
                    <img className="bookImage" src={this.props.img_url} alt={this.props.title}/>
                    <button onClick={this.handleClick}>Like</button>
                    <button onClick={this.callApi}>Call Api</button>
                    <p>{this.props.counter}</p>
                </div>
            </div>
        )
    }

}

// const book = (props) => (
//     <div className="Book" onClick={props.clicked}>
//         <h3>{props.title}</h3>
//         <div className="Info">
//             <div className="Author">{props.author}</div>
//             <img className="bookImage" src={props.img_url} alt={props.title}/>
//         </div>
//     </div>

// );


export default Book;