import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Error from './Erorr404';
import Category from './category/Index';
import Navbar from './user/Navbar';
import Login from './user/Login';
import Register from './user/Register';
import Profile from './user/Profile';

export default class Header extends Component {
    render() {
        return (


            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/about">About</Link>
                            <Link className="nav-item nav-link" to="/category">Category</Link>
                            <Navbar />

                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/category/add" component={Category} />
                    <Route exact path="/category/edit/:id" component={Category} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/*" component={Error} />
                </Switch>
            </div>
        );
    }
}
//