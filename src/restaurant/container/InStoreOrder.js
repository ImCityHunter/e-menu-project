
import React from "react";
import menuService from "../../service/menuService";
import ShowOrderMenu from "../component/inStoreOrder/ShowOrderMenu";
import ViewCart from "./ViewCart";
import CheckOutComponent from "../component/inStoreOrder/CheckOutComponent";
import orderService from "../../service/orderService";
import userService from "../../service/userService";
import {Link} from "react-router-dom";

class InStoreOrder extends React.Component{

    state = {
        order:{
            orderedMeals:[],
            cost:0,
            tableNumber:-1
        },
        menu:[],
        viewCart:false,
        temp:0
    }

    paying = () => {
        this.setState({
            viewCart:!this.state.viewCart
        })
    }

    componentDidMount() {
        menuService.findMenuByRestaurantId(this.props.rid)
            .then(menu=>this.setState({
                menu:menu,
                order:{
                    orderedMeals:[],
                    cost:0,
                    tableNumber:this.props.location.state.tableNumber
                }
            }));
    }

    addItemInOrder=(meal, count)=>{
        let OrderedMeal = {id: this.state.temp,mealName:meal.name, count: count, price: meal.price};
        this.setState(prevState=>({
            order: {
                ...prevState.order,
                orderedMeals: [
                    ...prevState.order.orderedMeals,
                    OrderedMeal
                ],
                cost: prevState.order.cost + parseFloat(meal.price)* parseInt(count)
            },
            temp: prevState.temp+1
        }))
    }

    back = () => {
        this.props.history.push('/profile')
    }

    render(){
        return(
            <div className={"container"}>
                <h1 className={"text-center"}> In Store Order </h1>

                <button onClick={()=>this.back()} className={"btn btn-danger"}>Back</button>

                {
                    !this.state.viewCart &&
                    <button
                        onClick={()=>this.paying()}
                        className={"float-right btn btn-warning"}> View-cart </button>
                }
                {
                    this.state.viewCart &&
                    <button
                        onClick={()=>this.paying()}
                        className={"float-right btn btn-warning"}> View-menu </button>
                }
                {
                    !this.state.viewCart && !this.state.checkout &&
                    <ShowOrderMenu
                        addItemInOrder={this.addItemInOrder}
                        menu={this.state.menu}
                        order={this.state.order}
                        viewCart={this.state.viewCart}
                        paying={this.paying}
                        props={this.props}
                    />
                }
                {
                    this.state.viewCart &&
                    <ViewCart
                        orderedMeals={this.state.order.orderedMeals}/>

                }
                {
                    this.state.viewCart &&
                    <Link to={{
                        pathname: `/restaurant/${this.props.rid}/menu/InStoreOrder/checkout`,
                        state:{
                            order:this.state.order
                        }
                    }}
                        className={"btn btn-success float-right"}>Checkout</Link>
                }
            </div>
        )
    }
}

export default InStoreOrder;
