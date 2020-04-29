import React from 'react';
import {Link} from "react-router-dom";
import '../../../css/home.css';
import restaurantService from "../../../service/restaurantService";
class EnterTableNumber extends React.Component {

    state = {
        tableNumber:0,
        restaurant_name:"",
        restaurant:{}
    }

    componentDidMount() {
        restaurantService.findRestaurant(this.props.rid)
            .then(restaurant=>this.setState({restaurant:restaurant}))}


    render(){
        return(
            <div className={"centered"}>
                <div className={"text-center"}>
                    {
                        this.state.restaurant.name &&
                        <h2>{this.state.restaurant.name}</h2>
                    }

                    <h4>Table Number</h4>
                    <div className="form-group row">
                        <div className="col">
                            <input className={"form-control"}
                                   placeholder="table number"
                                   value={this.state.tableNumber}
                                   onChange={(e)=>{
                                let value = e.target.value;
                                let tableNumber=parseInt(value);
                                this.setState({
                                    tableNumber:tableNumber
                                })}}/>
                        </div>
                        <Link to={{
                            pathname: `/restaurant/${this.props.rid}/menu/InStoreOrder`,
                            state:{
                                tableNumber:this.state.tableNumber
                            }
                        }} className={"btn btn-success btn-primary"}>submit</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default EnterTableNumber;
