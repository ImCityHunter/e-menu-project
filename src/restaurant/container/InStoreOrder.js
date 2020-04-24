
import React from "react";
import menuService from "../../service/menuService";
import ShowOrderMenu from "../component/inStoreOrder/ShowOrderMenu";
import ViewCart from "./ViewCart";
import CheckOutComponent from "../component/inStoreOrder/CheckOutComponent";
class InStoreOrder extends React.Component{

    state = {
        order:[],
        menu:[],
        total:0,
        viewCart:false,
        checkout:false
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
        this.setState(prevState=>({
            order:[
                ...prevState.order,
                {id: meal.id, name:meal.name, count: count, price:meal.price, kcal: meal.kcal}
            ]
        }))
    }

    checkout =()=>{
        let total = 0;
        for(let i=0; i < this.state.order.length; i++){
            let item = this.state.order[i];
            let price = item.price;
            let count = item.count;
            if(count > 0){
                total=total+(price*count);
            }
        }
        this.setState({
            checkout:true,
            total:total
        })

    }
    render(){
        return(
            <div className={"container"}>
                <h1> In Store Order </h1>
                {
                    !this.state.viewCart && !this.state.checkout &&
                    <button
                        onClick={()=>this.paying()}
                        className={"float-right btn btn-warning"}> view-cart </button>
                }
                {
                    this.state.viewCart && !this.state.checkout &&
                    <button
                        onClick={()=>this.paying()}
                        className={"float-right btn btn-warning"}> view-menu </button>
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
                    <ViewCart order={this.state.order}/>

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
                        order={this.state.order}
                        rid={this.props.rid}
                        />
                }
            </div>
        )
    }
}

export default InStoreOrder;
