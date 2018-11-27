import React from 'react';
import './ChallengeTracker.css';
import BookList from './BookList/BookList';
import BookCount from './BookCount/BookCount';


const ChallengeTracker = (props) => (
    <div className="ChallengeTracker">
       {/* <BookList books={
           [
               {
                    date: new Date("11/27/2018"),
                    title: "Power of Meaning",
                    author: "Emily Esfahani Smith",
                    img_url: "https://images.gr-assets.com/books/1465653308l/30008950.jpg",
​​                    description: "This wise, stirring book argues that the search for meaning can immeasurably deepen our lives and is far more fulfilling than the pursuit of personal happiness."
               },
               {
                    date: new Date("11/26/2018"),    
                    title: "Designing Your Life",
                    author: " Bill Burnett, Dave Evans",
                    img_url: "https://images.gr-assets.com/books/1476133952l/26046333.jpg",
                    description: "Whether we’re 20, 40, 60 or older, many of us are still looking for an answer to that perennial question, ‘What do you want to be when you grow up?’ "  
               }
           ]
       }/> */}
       <BookCount total={85} goal={100}/>
    </div>
    
);

export default ChallengeTracker;
