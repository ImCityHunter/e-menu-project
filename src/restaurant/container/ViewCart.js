import React from 'react'
class ViewCart extends React.Component{

    state = {
        orderedMeals:this.props.orderedMeals
    }


    componentDidMount() {
        this.setState({
            orderedMeals:this.props.orderedMeals
        })
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
                    this.state.orderedMeals && this.state.orderedMeals.map(orderedMeal=>
                        <ul className={"list-group list-group-horizontal"} key={orderedMeal.id}>
                            <li className={"list-group-item col-4"}>{orderedMeal.mealName}</li>
                            <li className={"list-group-item col-4 text-center"}>{orderedMeal.price}</li>
                            <li className={"list-group-item col-4 text-center"}>{orderedMeal.count}</li>
                        </ul>
                    )
                }

            </div>
        )

    }
}

export default ViewCart
