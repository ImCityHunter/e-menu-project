import React from 'react'
class ViewCart extends React.Component{

    state = {
        order: this.props.order
    }

    render(){
        return(
            <div>
                <h1>View Cart</h1>
                <ul className={"list-group list-group-horizontal"}>
                    <li className={"list-group-item col-4 text-center"}>meal name</li>
                    <li className={"list-group-item col-4 text-center"}>price</li>
                    <li className={"list-group-item col-4 text-center"}>count</li>
                </ul>
                {
                    this.state.order && this.state.order.map(meal=>
                        <ul className={"list-group list-group-horizontal"} key={meal.id}>
                            <li className={"list-group-item col-4"}>{meal.name}</li>
                            <li className={"list-group-item col-4 text-center"}>{meal.price}</li>
                            <li className={"list-group-item col-4 text-center"}>{meal.count}</li>
                        </ul>
                    )
                }

            </div>
        )

    }
}

export default ViewCart
