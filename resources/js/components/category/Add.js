import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
export default class Add extends Component {
    constructor()
    {
        super();
        this.state={
            category_name:'',
            alert_massege: ''
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.onChangeCategory=this.onChangeCategory.bind(this);
    }
    onChangeCategory(e)
    {
        this.setState({ category_name:e.target.value});
    }
    handleSubmit(e)
    {
       e.preventDefault();
       const category={
        category_name:this.state.category_name
       }
        axios.post('/api/category/store',category)
        .then(res => {
            this.setState({ alert_massege: "success" });
        })
        .catch(error => {
            this.setState({ alert_massege: "error" });
        });
    }

    render() {
        return (
            <div >
                 <hr/>
                {this.state.alert_massege == "success" ? <SuccessAlert message="Category Added Successfuly"/> : null}
                {this.state.alert_massege == "error" ? <ErrorAlert message="Error added Category "/> : null}
                <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="category_name" className="col-sm-2 col-form-label">Category Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="category_name" value={this.state.category_name} onChange={this.onChangeCategory} placeholder="Category Name"/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
