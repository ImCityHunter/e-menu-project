
import React from "react";
import menuService from "../../service/menuService";
import ShowOrderMenu from "../component/inStoreOrder/ShowOrderMenu";
import ViewCart from "./ViewCart";
import CheckOutComponent from "../component/inStoreOrder/CheckOutComponent";
import orderService from "../../service/orderService";
import userService from "../../service/userService";
class InStoreOrder extends React.Component{

    state = {
        order:{
            orderedMeals:[

            ],
            cost:0
        },
        menu:[],
        viewCart:false,
        checkout:false,
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
                menu:menu
            }))
    }

    addItemInOrder=(meal, count)=>{
        let OrderedMeal = {id: this.state.temp,mealName:meal.name, count: count, price: meal.price};
        this.setState(prevState=>({
            order: {
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

    checkout =()=>{
        this.setState({
            checkout:true,
        })

    }

    payment = (rid,username) =>{
        orderService.createOrder(rid, username, this.state.order)
            .then(status=> {
                console.log(status);
                this.props.history.push(`/profile`);
            })
    }
    render(){
        return(
            <div className={"container"}>
                <h1 className={"text-center"}> In Store Order </h1>

                <button onClick={()=>this.back()} className={"btn btn-danger"}>Back</button>

                {
                    !this.state.viewCart && !this.state.checkout &&
                    <button
                        onClick={()=>this.paying()}
                        className={"float-right btn btn-warning"}> View-cart </button>
                }
                {
                    this.state.viewCart && !this.state.checkout &&
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
                    />
                }
                {
                    this.state.viewCart && !this.state.checkout &&
                    <ViewCart
                        orderedMeals={this.state.order.orderedMeals}/>

                }
                {
                    this.state.viewCart && !this.state.checkout &&
                    <button className={"btn btn-success float-right"}
                        onClick={()=>this.checkout()}>Checkout</button>
                }
                {
                    this.state.checkout &&
                    <CheckOutComponent
                        total={this.state.total}
                        orderedMeals={this.state.order.orderedMeals}
                        rid={this.props.rid}
                        payment={this.payment}
                        />
                }
            </div>
        )
    }
}

export default InStoreOrder;
