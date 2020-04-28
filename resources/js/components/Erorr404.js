import React, { Component } from 'react';
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom';
export default class Eroor404 extends Component {
    render() {
        return (
            <div className="alert alert-danger">
               404 page not found . <Link to="/" className="alert-link">Back to Home</Link>
            </div>
        );
    }
}
