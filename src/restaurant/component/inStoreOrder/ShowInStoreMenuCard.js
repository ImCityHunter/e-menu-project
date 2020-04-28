import React from 'react'
import {Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap';
class ShowInStoreMenuCard extends React.Component {
    state = {
        count:0
    }

    add=()=>{
        if(this.state.count<10){
            this.setState({
                count:this.state.count+1
            })
        }
    }
    minus=()=>{
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1
            })
        }
    }

    addItemInOrder=()=>{
        if(this.state.count>0){
            this.props.addItemInOrder(this.props.meal,this.state.count)
        }
        this.setState({
            count:0
        })
    }
    render() {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${this.props.meal.imageUrl}`} />
                <Card.Body>
                    <Card.Title>{this.props.meal.name}</Card.Title>
                    <Card.Text>
                        {this.props.meal.recipe}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className={"text-center"}>kcal: {this.props.meal.kcal}</ListGroupItem>
                    <ListGroupItem className={"text-center"}>${this.props.meal.price}</ListGroupItem>
                    <ListGroupItem className={"text-center"}>
                        <span>
                            <button onClick={()=>this.minus()}> - </button>
                                <span className={"ml-2 mr-2"}>{this.state.count}</span>
                            <button onClick={()=>this.add()}> + </button>
                        </span>
                    </ListGroupItem>
                </ListGroup>
                <button className={"btn btn-success btn-block"}
                    onClick={()=>this.addItemInOrder()}>
                    submit
                </button>
            </Card>
        )
    }
}

export default ShowInStoreMenuCard;
