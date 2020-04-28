import React  from "react";
import ShowOrderMenuCard from "./ShowOrderMenuCard";
import {CardDeck, CardColumns} from 'react-bootstrap';
import ShowInStoreMenuCard from "./ShowInStoreMenuCard";


class ShowOrderMenu extends React.Component{

    render() {
        return(
            <div className={"container"}>
                <br/>
                <h1> Restaurant Menu</h1>
                <CardColumns>
                    {
                        this.props.menu && this.props.menu.map(meal=>
                            // <ShowOrderMenuCard
                            //     meal={meal}
                            //     key={meal.id}
                            //     addItemInOrder={this.props.addItemInOrder}
                            //     order={this.props.order}
                            // />

                            <ShowInStoreMenuCard
                                meal={meal}
                                key={meal.id}
                                addItemInOrder={this.props.addItemInOrder}
                                order={this.props.order}
                            />
                        )
                    }
                </CardColumns>
            </div>
        )
    }
}
export default ShowOrderMenu;
