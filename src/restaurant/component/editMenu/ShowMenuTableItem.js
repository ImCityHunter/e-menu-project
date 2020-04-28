import React  from "react";
import ShowMenuRowItem from "./ShowMenuRowItem";
import menuService from "../../../service/menuService";
export default class ShowMenuTableItem extends React.Component {


    state = {
        menu:[],
        save:true
    }

    componentDidMount() {
        menuService.findMenuByRestaurantId(this.props.rid).
        then(menu=> this.setState({menu: menu}
        ));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.save!==this.state.save){
            menuService.findMenuByRestaurantId(this.props.rid).
            then(menu=> this.setState({menu: menu}
            ));
        }
    }

    save = (mid,item) => {
        menuService.updateMeal(mid,item).then(
            status=>{
                this.setState({
                    save:!this.state.save
                })
            })
    }

    render() {
        return(
            <div className={"container-fluid"}>
                <div>
                    <ul className={"list-group list-group-horizontal"}>
                        <li className={"list-group-item col-2 text-center list-group-item-dark"}>Meal Name</li>
                        <li className={"list-group-item col-7 text-center list-group-item-dark"}>Food Content</li>
                        <li className={"list-group-item col-2 text-center list-group-item-dark"}>Price</li>
                        <li className={"list-group-item col-1 text-center list-group-item-dark"}>Edit</li>
                    </ul>
                    {
                        this.state.menu && this.state.menu.map(item=>
                            <ShowMenuRowItem
                                item={item}
                                key={item.id}
                                save={this.save}
                            />
                        )
                    }
                </div>
                <br/>
            </div>
        )
    }
}
