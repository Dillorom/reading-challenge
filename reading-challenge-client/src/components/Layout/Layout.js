import React, { Component } from 'react';

//import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
//import Account from '../Users/Account/Account';
import Login from '../User/Login/Login';

class Layout extends Component {
    render(){
        return(
            <React.Fragment>
              {/* <Account />   */}
                {/* <Toolbar />
                <Login /> */}
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
};

export default Layout;

