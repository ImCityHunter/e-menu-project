import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RestaurantHomePage from "../restaurant/container/RestaurantHomePage";
import ShowCurrentMenu from "../restaurant/container/ShowCurrentMenu";
import EditMenuContainer from "../restaurant/container/EditMenuContainer";
import Profile from "./Profile";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import InStoreOrder from "../restaurant/container/InStoreOrder";
import CustomerHomePage from "../customer/container/CustomerHomePage";
import IncompleteOrders from "../restaurant/component/showOrders/IncompleteOrders";
import ShowOrderHistoryContainer from "../customer/container/ShowOrderHistoryContainer";
import EnterTableNumber from "../restaurant/component/inStoreOrder/EnterTableNumber";
import CheckOutComponent from "../restaurant/component/inStoreOrder/CheckOutComponent";

class Whiteboard extends React.Component{
    render(){
        return(
            <Router>

                <Route path="/register" exact={true} render={(props)=><Register {...props}/>}/>
                <Route path="/login" exact={true} render={(props)=><Login {...props}/>}/>
                <Route path="/profile" exact={true} render={(props)=><Profile {...props}/>}/>
                <Route path="/home" exact={true} render={(props)=><Home {...props}/>}/>

                <Route
                    path="/customer/:cid"
                    exact={true}
                    render={(props)=>
                        <CustomerHomePage
                            cid = {props.match.params.cid}
                            {...props}
                        />}
                />

                <Route
                    path="/customer/:cid/orderhistory"
                    exact={true}
                    render={(props)=>
                        <ShowOrderHistoryContainer
                            cid = {props.match.params.cid}
                            {...props}
                        />}
                />



                <Route
                    path="/"
                    exact={true}
                    render={(props)=>
                        <Home
                            {...props}
                        />}
                />

                <Route
                    path="/restaurant/:rid"
                    exact={true}
                    render={(props)=>
                        <RestaurantHomePage
                            rid = {props.match.params.rid}
                            {...props}
                        />}
                />

                <Route
                    path="/restaurant/:rid/menu/InStoreOrder"
                    exact={true}
                    render={(props)=>
                        <InStoreOrder
                            rid = {props.match.params.rid}
                            {...props}
                        />}
                />

                <Route
                    path={"/restaurant/:rid/menu/InStoreOrder/checkout"}
                    exact={true}
                    render={(props)=>
                        <CheckOutComponent
                            rid = {props.match.params.rid}
                            {...props}
                        />
                    }
                />

                <Route
                    path="/restaurant/:rid/table/"
                    exact={true}
                    render={(props)=>
                        <EnterTableNumber
                            rid = {props.match.params.rid}
                            {...props}
                        />
                    }
                />


                <Route
                        path="/restaurant/:rid/incompleteOrders"
                        exact={true}
                        render={(props)=>
                            <IncompleteOrders
                                rid = {props.match.params.rid}
                                {...props}
                            />}
                    />

                <Route
                    path="/restaurant/:rid/menu"
                    exact={true}
                    render={(props)=>
                        <ShowCurrentMenu
                            rid = {props.match.params.rid}
                            {...props}
                        />}
                />

                <Route
                    path="/restaurant/:rid/menu/edit-menu"
                    exact={true}
                    render={(props)=>
                        <EditMenuContainer
                            rid = {props.match.params.rid}
                            {...props}
                        />}
                />

            </Router>
        )
    }
}
export default Whiteboard;
