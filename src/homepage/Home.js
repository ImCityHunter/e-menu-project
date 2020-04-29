import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'
class Home extends React.Component {
    render(){
        return(
            <div className="centered">
                <div>
                <h2 className={"text-center"}> Project E-Menu </h2>
                <Link to={"/register"} className={"btn btn-block btn-warning"}>Register</Link>
                <Link to={"/login"} className={"btn btn-block btn-primary"}>login</Link>
                </div>
            </div>

        )
    }
}

export default Home;
