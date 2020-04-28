import React, { Component } from 'react';
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
export default class Listing extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3,
            alert_massege: ''

        }
    }
    componentDidMount() {
        axios.get('api/category').then(result => {
            this.setState({ 
                categories: result.data.data,
                itemsCountPerPage:result.data.per_page,
                totalItemsCount:result.data.total,
                activePage:result.data.current_page
            });
        });
    }
    handlePageChange(pageNumber) {
        //console.log(`active page is ${pageNumber}`);
       // this.setState({activePage: pageNumber});
        axios.get('api/category?page='+pageNumber).then(result => {
            this.setState({ 
                categories: result.data.data,
                itemsCountPerPage:result.data.per_page,
                totalItemsCount:result.data.total,
                activePage:result.data.current_page
            });
        });
      }
    onDelete(category_id) {
        axios.delete('api/category/delete/' + category_id)
        .then(result => {
            var   categories=this.state.categories;
               for(var i=0 ;i< categories.length ;i++)
               {
            if(categories[i].id==category_id)
            {
               categories.splice(i,1);
             this.setState({categories:categories});


            }
            }
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
                 {this.state.alert_massege == "success" ? <SuccessAlert message="Category Deleted Successfuly"/> : null}
                {this.state.alert_massege == "error" ? <ErrorAlert message="Error Deleted Category "/> : null}
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(category => {
                                return (
                                    <tr id={category.id} key={category.id}>
                                        <th scope="row">{category.id}</th>
                                        <td>{category.name}</td>
                                        <td>{category.active ? 'active' : 'in active'}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                        <td>
                                        <Link to={'category/edit/'+ category.id} >Edit</Link>|
                                            <a href="#" onClick={this.onDelete.bind(this, category.id)}>Delete</a>
                                            </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>

            </div>
        );
    }
}
