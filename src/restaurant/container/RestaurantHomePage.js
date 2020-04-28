import React from 'react';
import restaurantService from "../../service/restaurantService";
import {Link} from "react-router-dom";
import userService from "../../service/userService";

class RestaurantHomePage extends React.Component {
    state = {
        restaurant: {
            name: "",
            phone: "",
        },
        editing: false
    }
    componentDidMount() {
        restaurantService.findRestaurant(this.props.rid).then(restaurant=>
            this.setState({
            restaurant:restaurant
        })
        );
    }
    logout = () => {
        userService.logout().then(response => this.props.history.push('/'));
    }
    editing = ()=>{
        this.setState({
            editing:true
        })
    }

    back = () => {
        this.props.history.push('/profile')
    }

    save = ()=>{
        restaurantService.updateRestaurant(this.props.rid, this.state.restaurant)
            .then(status=> alert("update status "+status))
            .then(()=> this.setState({
                editing:false
            })
        )
    }
    render(){
        return(
            <div className={"container"}>
                <br/>
                <h1 className={"text-center"}>Restaurant</h1>
                <br/>
                <div>
                    <Link to={`/restaurant/${this.props.rid}/menu/InStoreOrder`}
                          className={"btn btn-primary btn-block"}>In Store Order</Link>
                    <button
                        onClick={()=>this.props.history.push('/profile')}
                        className={"btn btn-warning btn-block"}>Back To User Profile</button>
                    <Link to={`/restaurant/${this.props.rid}/incompleteOrders`} className={"btn btn-dark btn-block"}>Incomplete Orders</Link>
                    <Link to={`/restaurant/${this.props.rid}/menu`} className={"btn btn-success btn-block"}>Change Menu</Link>
                </div>
                <br/>
                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4"}>Restaurant Name</li>
                    <li className={"list-group-item col-8 text-right"}>
                        {
                            !this.state.editing && this.state.restaurant.name
                        }
                        {
                            this.state.editing &&
                            <input placeholder="restaurant name" value={this.state.restaurant.name} onChange={(e)=>{
                                let name = e.target.value;
                                this.setState(prevState=>({
                                    restaurant:{
                                        ...prevState.restaurant,
                                        name:name
                                    }}))}}/>
                        }
                    </li>
                </ul>
                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4"}>Phone</li>
                    <li className={"list-group-item col-8 text-right"}>
                        {
                            !this.state.editing && this.state.restaurant.phone
                        }
                        {
                            this.state.editing &&
                            <input placeholder="restaurant phone" value={this.state.restaurant.phone} onChange={(e)=>{
                                let phone = e.target.value;
                                this.setState(prevState=>({
                                    restaurant:{
                                        ...prevState.restaurant,
                                        phone:phone
                                    }}))}}/>
                        }

                    </li>
                </ul>
                <br/>
                {
                    !this.state.editing && <button onClick={()=>this.editing()} className={"btn btn-danger"}>Edit Info</button>
                }
                {
                    this.state.editing && <button onClick={()=>this.save()}className={"btn btn-primary "}>save</button>
                }
                {
                    !this.state.editing && <button className={"float-right btn btn-danger"} onClick={()=>userService.logout().then(response => this.props.history.push('/'))}>log out</button>
                }

            </div>
        )
    }
}

export default RestaurantHomePage;
