import React, { Component } from 'react';
import Book from '../../components/Book/Book';
import FullBook from '../../components/FullBook/FullBook';
import NewBook from '../../components/NewBook/NewBook';

import './Challenge.css';

class Challenge extends Component {
    render () {
        return (
            <div>
                <section className="Books">
                    <Book />
                    <Book />
                    <Book />
                </section>
                <section>
                    <FullBook />
                </section>
                <section>
                    <NewBook />
                </section>
            </div>
        );
    }
}

export default Challenge;