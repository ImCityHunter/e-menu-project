import React from 'react';
import {Link} from "react-router-dom";
import userService from "../service/userService";
class Profile extends React.Component{
    state = {
        currentUser:{
            id:'',
            username: '',
            firstName: '',
            lastName: '',
            phone:'',
            type:'',
            restaurant:{
                id:-1
            }
        },
        editing:false
    }
    componentDidMount() {
        userService.currentUser()
            .then(currentUser =>
                this.setState({
                    currentUser:currentUser
                })
            )
    }

    editing = () => {
        this.setState({
            editing:true
        })
    }

    save = () =>{
        userService.updateUser(this.state.currentUser).then(status=>
            console.log(`update status: ${status}`)
        )
        this.setState({
            editing:false
        })
    }
    render(){
        return(
                <div className={"container"}>
                    <h1 className={"text-center"}> Profile Page </h1>
                    <ul className={"list-group list-group-horizontal"}>
                        <li className={"list-group-item col-4"}>Your Username</li>
                        <li className={"list-group-item col-8 text-right"}>{this.state.currentUser.username}</li>
                    </ul>

                    <ul className={"list-group list-group-horizontal"}>
                        <li className={"list-group-item col-4"}>User Type</li>
                        <li className={"list-group-item col-8 text-right"}>{this.state.currentUser.type}</li>
                    </ul>

                    <ul className={"list-group list-group-horizontal"}>
                        <li className={`list-group-item col-4 ${this.state.editing?'active':''}`}>First Name</li>
                        {
                            !this.state.editing && <li className={"list-group-item col-8 text-right"}>{this.state.currentUser.firstName}</li>
                        }
                        {
                            this.state.editing &&

                            <input className={"list-group-item col-8 text-right"}
                                   placeholder="editing first name" value={this.state.currentUser.firstName}
                                   onChange={(e) => {
                                       let firstName = e.target.value;
                                        this.setState(prevState => ({
                                            currentUser: {
                                                 ...prevState.currentUser,
                                                firstName: firstName
                                             }
                                         }))
                            }}/>
                        }
                    </ul>

                    <ul className={"list-group list-group-horizontal"}>
                        <li className={`list-group-item col-4 ${this.state.editing?'active':''}`}>Last Name</li>
                        {
                            !this.state.editing && <li className={"list-group-item col-8 text-right"}>{this.state.currentUser.lastName}</li>
                        }
                        {
                            this.state.editing &&

                            <input className={"list-group-item col-8 text-right"}
                                   placeholder="editing lastname" value={this.state.currentUser.lastName}
                                   onChange={(e) => {
                                       let lastName = e.target.value;
                                       this.setState(prevState => ({
                                           currentUser: {
                                               ...prevState.currentUser,
                                               lastName: lastName
                                           }
                                       }))
                                   }}/>
                        }
                    </ul>

                    <ul className={"list-group list-group-horizontal"}>
                        <li className={"list-group-item col-4"}>System Id</li>
                        <li className={"list-group-item col-8 text-right"}>{this.state.currentUser.id}</li>
                    </ul>

                    <ul className={"list-group list-group-horizontal"}>
                        <li className={`list-group-item col-4 ${this.state.editing?'active':''}`}>Your Phone</li>
                        {
                            !this.state.editing && <li className={"list-group-item col-8 text-right"}>{this.state.currentUser.phone}</li>
                        }
                        {
                            this.state.editing &&

                            <input className={"list-group-item col-8 text-right"}
                                   placeholder="editing phone" value={this.state.currentUser.phone}
                                   onChange={(e) => {
                                       let phone = e.target.value;
                                       this.setState(prevState => ({
                                           currentUser: {
                                               ...prevState.currentUser,
                                               phone: phone
                                           }
                                       }))
                                   }}/>
                        }
                    </ul>
                    <br/>
                    {
                        !this.state.editing && this.state.currentUser.restaurant &&
                        <ul className={"list-group list-group-horizontal"}>
                            <Link to={`/restaurant/${this.state.currentUser.restaurant.id}`}
                                  className={"btn btn-info btn-block"}>
                                See Your Restaurant Info
                            </Link>
                        </ul>
                    }
                    {
                        !this.state.editing && this.state.currentUser.type === "CUSTOMER" &&
                        <ul className={"list-group list-group-horizontal"}>
                            <Link to={`/customer/${this.state.currentUser.id}`}
                                  className={"btn btn-info btn-block"}>
                                See Your Order History
                            </Link>
                        </ul>
                    }
                    <br/>

                    {/*Go To Restaurant Home Page.js*/}
                    <button className={"float-right btn btn-danger"} onClick={
                        ()=>userService.logout().then(response => this.props.history.push('/'))
                    }>log out</button>
                    {
                        !this.state.editing && <button onClick={()=>this.editing()} className={"btn btn-warning"}>Edit</button>
                    }
                    {
                        this.state.editing && <button onClick={()=>this.save()} className={"btn btn-success"}>Save</button>
                    }
                </div>
        )
    }
}
export default Profile;
