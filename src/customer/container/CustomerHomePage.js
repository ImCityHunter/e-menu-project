

import React from 'react';
import userService from "../../service/userService";
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

                <button className={"float-right btn btn-danger"} onClick={
                    ()=>userService.logout().then(response => this.props.history.push('/'))}>log out</button>
            </div>
        )
    }
}



export default CustomerHomePage;