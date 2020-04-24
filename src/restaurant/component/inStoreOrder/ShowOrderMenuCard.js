import React from 'react';

class ShowOrderMenuCard extends React.Component{

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

    render(){
        return(
            <div className={"card"} style={{width: "18rem"}}>
                <div className={"card item-wr"}>
                    <img className={"card-img-top"}
                         alt={"Card image cap"}
                         src={`${this.props.meal.imageUrl}`}/>
                    <div className={"card-body"}>
                        <h5 className={"card-title text-center"}>{this.props.meal.name}</h5>
                        <p className={"card-text"}>
                            {this.props.meal.recipe}
                        </p>
                    </div>
                    <ul className={"list-group list-group-flush text-center"}>
                        <li className={"list-group-item"}>kcal: {this.props.meal.kcal}</li>
                        <li className={"list-group-item"}>price: ${this.props.meal.price}</li>
                    </ul>
                    <div className={"card-body text-center"}>
                        <span>
                            <button onClick={()=>this.minus()}> - </button>
                                <span className={"ml-2 mr-2"}>{this.state.count}</span>
                            <button onClick={()=>this.add()}> + </button>
                        </span>
                    </div>
                    <div className={"card-footer text-center"}>
                        <button onClick={()=>this.addItemInOrder()}>
                            submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowOrderMenuCard;
