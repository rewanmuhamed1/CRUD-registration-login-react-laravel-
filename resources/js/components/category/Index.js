import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';
export default class Index extends Component {
    render() {
        return (
            <div >
                
                    <Link to="/category" className="btn btn-primary">Categories</Link>
                    <Link to="/category/add" className="btn btn-primary">Add</Link>
                    <Route exact path="/category" component={Listing} />
                    <Route exact path="/category/add" component={Add}/>
                    <Route exact path="/category/edit/:id" component={Edit}/>
                
            </div>
        );
    }
}
