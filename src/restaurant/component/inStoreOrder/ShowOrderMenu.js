import React  from "react";
import ShowOrderMenuCard from "./ShowOrderMenuCard";

class ShowOrderMenu extends React.Component{


    state = {
        order:[
        ],
    }

    render() {
        return(
            <div>
                <h1> Restaurant Menu</h1>
                <div className={"container row"}>
                    {
                        this.props.menu && this.props.menu.map(meal=>
                            <ShowOrderMenuCard
                                meal={meal}
                                key={meal.id}
                                addItemInOrder={this.props.addItemInOrder}
                                order={this.props.order}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}
export default ShowOrderMenu;
