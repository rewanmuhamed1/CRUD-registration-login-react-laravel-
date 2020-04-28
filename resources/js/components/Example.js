import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Footer/>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Router ><Example /></Router>, document.getElementById('example'));
}
