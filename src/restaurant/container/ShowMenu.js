import React from "react";
import ShowMenuItem from "../component/editMenu/ShowMenuItem";
import menuService from "../../service/menuService";
import {Link} from "react-router-dom";
class ShowMenu extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render(){
        return(
            <div className={"container"}>
                <br />
                <h1> Restaurant </h1>
                <h2> Your Current Menu</h2>
                <br />
                <ShowMenuItem rid={this.props.rid}/>
                <Link to={`/restaurant/${this.props.rid}/menu/edit-menu`} className={"btn btn-danger"}> Edit Menu </Link>
                <button className={"btn btn-warning float-right"} onClick={()=>this.props.history.push(`/restaurant/${this.props.rid}`)}> Back </button>

            </div>
        )
    }
}

export default ShowMenu;
