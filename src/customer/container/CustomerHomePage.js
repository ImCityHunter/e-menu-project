

import React from 'react';
import userService from "../../service/userService";
import {Link} from "react-router-dom";

class CustomerHomePage extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <h1 className={"text-center"}> User Home Page </h1>
                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4"}>Your First Name</li>
                    <li className={"list-group-item col-8 text-right"}>First Name</li>
                </ul>

                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4"}>Your First Name</li>
                    <li className={"list-group-item col-8 text-right"}>Last Name</li>
                </ul>


                <Link to={`/customer/${this.props.cid}/orderhistory`} className={"btn btn-info btn-block"}>
                    Check Order History
                </Link>
                <button className={"float-right btn btn-danger btn-block"} onClick={
                    ()=>userService.logout().then(response => this.props.history.push('/'))}>log out</button>
            </div>
        )
    }
}



export default CustomerHomePage;
