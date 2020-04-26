import React from "react";
import menuService from "../../../service/menuService";


class MenuItemTableList extends React.Component{
    state = {
        item:{},
        selectedId:'',
        editing:false
    }

    componentDidMount() {
        this.setState({
            item: this.props.item,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.selectedId!==this.state.selectedId){

        }
    }

    select=()=>{
        this.setState({
            editing:true
        })
    }

    save = () =>{
        this.props.save(this.state.item.id, this.state.item);
        this.setState({
            editing:false
        })
    }
    render(){
        return(
            <div>
                {
                    !this.state.editing &&
                    <ul className={`list-group list-group-horizontal`}>
                        <li className={"list-group-item col-2"}>{this.state.item.name}</li>
                        <li className={"list-group-item col-7"}>{this.state.item.recipe}</li>
                        <li className={"list-group-item col-2 text-center"}>{this.state.item.price}</li>
                        <li className={"list-group-item col-1 text-center"}>
                            <button onClick={()=>this.select()}>select</button>
                        </li>
                    </ul>
                }

                {
                    this.state.editing  &&
                        <ul className={`list-group list-group-horizontal`}>
                            <li className={`list-group-item col-2 ${this.state.editing?'active':''}`}>
                                <textarea className={`col`}
                                    placeholder="meal name" value={this.state.item.name} onChange={(e)=>{
                                    let name = e.target.value;
                                    this.setState(prevState=>({
                                        item:{
                                            ...prevState.item,
                                            name:name
                                        }}))}}/>
                            </li>


                            <li className={`list-group-item col-7 ${this.state.editing?'active':''}`}>
                                <textarea className={'col'}
                                       placeholder="recipe" value={this.state.item.recipe} onChange={(e)=>{
                                    let recipe = e.target.value;
                                    this.setState(prevState=>({
                                        item:{
                                            ...prevState.item,
                                            recipe:recipe
                                        }}))}}/>

                            </li>

                            <li className={`list-group-item col-2 ${this.state.editing?'active':''}`}>
                                <input className={`col`}
                                       placeholder="price" value={this.state.item.price} onChange={(e)=>{
                                    let val = e.target.value;
                                    let price = parseFloat(val);
                                    this.setState(prevState=>({
                                        item:{
                                            ...prevState.item,
                                            price:price
                                        }}))}}/>

                            </li>

                            <li className={`list-group-item col-1 text-center`}>
                                <button onClick={()=>this.save()}>save</button>
                            </li>
                        </ul>

                }




            </div>
        )
    }
}

export default MenuItemTableList;
