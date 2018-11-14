import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
//import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Account from '../Users/Account/Account';

class Layout extends Component {
    render(){
        return(
            <Aux>
                <Account />
                <Toolbar />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;

