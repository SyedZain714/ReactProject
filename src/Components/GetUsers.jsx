import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './ReusableComponents/Pagination'
import Listgroup from './ReusableComponents/ListGroup';
import { getStudentsByUniversity, paginate } from '../utils/Paginate';

//Pagination and Filtering Added
class GetUsers extends Component {
    state = {
        Users: [],
        currentPage: 1,
        selectedFilter:'All Universities'
    }
    async componentDidMount() {
        fetch('http://localhost:53535/api/Employee')
            .then((res) => res.json())
            .then((res) => {
                this.setState({ Users: res })
            })
    }
    displaySelectedData = (itemNo) => {
        this.setState({ currentPage: itemNo })
    }
    handleListItemClick=(uni)=>{
        console.log(uni)
        this.setState({selectedFilter:uni})
    }
    render() {
        const { Users, currentPage,selectedFilter } = this.state
        let newUsers=getStudentsByUniversity(Users,selectedFilter)
        newUsers=paginate(newUsers,currentPage,5)

        return (
            <div>
                <div class="list-head">
                    <h2>STUDENT LIST</h2>
                </div>

                <div className='row'>
                    <div className='col-sm'>
                        <Listgroup onListItemClick={this.handleListItemClick}/>
                    </div>
                    <div className='col-sm-9'>
                        <div className='container'>
                            <table className="table container">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">University</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newUsers.map((listValue, index) => {
                                        return (
                                            <tr>
                                                <td className='btn btn-primary'>{index}</td>
                                                <td>{listValue.name}</td>
                                                <td>{listValue.university_name}</td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <Pagination PageCount={5} ItemCount={this.state.Users.length} onItemClick={this.displaySelectedData} pageClicked={currentPage} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default GetUsers;