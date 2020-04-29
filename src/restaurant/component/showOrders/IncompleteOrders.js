
import React from 'react'
import {Link} from "react-router-dom";
import {Card, CardDeck, ListGroup, ListGroupItem, CardColumns} from 'react-bootstrap';
import orderService from "../../../service/orderService";
class IncompleteOrders extends React.Component{

    state = {
        orders:[],
        update: false
    }

    componentDidMount() {
        orderService.getAllIncompleteOrdersForRestaurant(this.props.rid).then(orders=>{
            this.setState({
                orders:orders
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.update!==this.state.update){
            orderService.getAllIncompleteOrdersForRestaurant(this.props.rid).then(orders=>{
                this.setState({
                    orders:orders
                })
            })
        }
    }

    update = (order_id) => { //change incomplete orders
        orderService.updateAnIncompleteOrder(order_id)
            .then(status=> {
                console.log("update incomplete "+status);
                this.setState(prevState=>({
                    update:!prevState.update
                })
               )
            });
    }

    cancel = (order_id) => {
        alert("unavaliable now");
    }

    render(){
        return(
            <div className={"container text-center"}>
                <h2>Incomplete Orders</h2>
                <Link to={`/restaurant/${this.props.rid}`}
                      className={"btn btn-warning btn-block"}>Back</Link>
                <br />
                <CardColumns>
                    {
                        this.state.orders && this.state.orders.map(order=>
                            <Card style={{ width: '18rem' }} key={order.id} className={"bg-light"}>
                                <Card.Body>
                                    {
                                        order.tableNumber &&
                                        <Card.Title> For Table {order.tableNumber} </Card.Title>
                                    }
                                    <Card.Text>
                                        {order.date}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    {
                                        order.orderedMeals && order.orderedMeals.map(meal=>
                                            <ListGroupItem key={meal.id}>{meal.mealName} x {meal.count}</ListGroupItem>
                                        )
                                    }
                                </ListGroup>
                                <Card.Body>
                                    <button
                                        className={"btn btn-success"}
                                        onClick={()=>this.update(order.id)}>Accept</button>
                                    <button
                                        className={"btn btn-danger"}
                                        onClick={()=>this.cancel(order.id)}>Cancel</button>
                                </Card.Body>
                            </Card>
                        )
                    }
                </CardColumns>
            </div>
        )
    }
}

export default IncompleteOrders;
