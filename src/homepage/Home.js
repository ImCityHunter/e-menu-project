import React from "react";
import {Link} from "react-router-dom";
class Home extends React.Component {
    render(){
        return(
            <div className={"container"}>
                <h1 className={"text-center"}> Welcome To Our Project </h1>

                <Link to={"/register"} className={"btn btn-block btn-warning"}>Register</Link>


                <Link to={"/login"} className={"btn btn-block btn-primary"}>login</Link>
            </div>
        )
    }
}

export default Home;
