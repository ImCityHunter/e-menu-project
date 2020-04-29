import React from 'react';
import orderService from "../../../service/orderService";
class CheckOutComponent extends React.Component{
    state = {
        username:'sample: customer',
        paymentInfo:'',
        order:{}
    }

    makeAPayment = () => {
        orderService.createOrder(this.props.rid, this.state.username, this.state.order)
            .then(status=> {
                console.log(status);
                //this.props.history.push(`/profile`);
                this.props.history.push(`/restaurant/${this.props.rid}/table/`);
            })
    }

    componentDidMount() {
        this.setState({
            order:this.props.location.state.order
        })
    }

    render(){
        return(
            <div className={"container"}>
                <br/>
                <h1 className={"text-center"}>Sample CheckOut</h1>
                <br/>
                <h4 className={"text-center"}>Total Cost: ${this.state.order.cost}</h4>

                <div className="form-group row">
                    <label htmlFor={this.state.username} className="col-sm-2 col-form-label">Customer Username</label>
                    <div className="col-sm-10">
                        <input className={"form-control"} placeholder="username" value={this.state.username}
                               onChange={(e) => {
                                   let username = e.target.value;
                                   this.setState(prevState => ({
                                       username:username
                                   }))
                               }}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor={this.state.paymentInfo} className="col-sm-2 col-form-label">Payment Info</label>
                    <div className="col-sm-10">
                        <input className={"form-control"} placeholder="payment info" value={this.state.paymentInfo}
                               type={"password"}
                               onChange={(e) => {
                                   let paymentInfo = e.target.value;
                                   this.setState(prevState => ({
                                       paymentInfo:paymentInfo
                                   }))
                               }}/>
                    </div>
                </div>

                <button className={"btn btn-success btn-block"}
                onClick={()=>this.makeAPayment()}> Pay </button>
            </div>
        )
    }
}

export default CheckOutComponent;
