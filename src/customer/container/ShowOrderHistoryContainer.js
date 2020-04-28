
import React from 'react'
import {Link} from "react-router-dom";
import {Card, CardColumns, ListGroup, ListGroupItem} from "react-bootstrap";
import orderService from "../../service/orderService";
class ShowOrderHistoryContainer extends React.Component{
    state = {
        completedOrders:[]
    }

    componentDidMount() {
        orderService.getAllCompletedOrdersByUser(this.props.cid).then(completedOrders=>this.setState({
            completedOrders:completedOrders
        }))
    }

    back = () => {
        this.props.history.push('/profile');
    }
    render(){
        return(
            <div className={"container text-center"}>
                <h2>Show Completed Orders</h2>
                {/*<Link to={`/customer/${this.props.cid}`}*/}
                {/*      className={"btn btn-warning btn-block"}>Back</Link>*/}
                <button onClick={()=>this.back()} className={"btn btn-warning btn-block"}>
                    Back
                </button>
                <br />
                <CardColumns>
                    {
                        this.state.completedOrders && this.state.completedOrders.map(order=>
                            <Card style={{ width: '18rem' }} key={order.id} className={"bg-info"}>
                                <Card.Body>
                                    <Card.Title className={"bg-light"}> Restaurant: {order.restaurant.name}</Card.Title>
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
                            </Card>
                        )
                    }
                </CardColumns>
            </div>
        )
    }
}

export default ShowOrderHistoryContainer;
