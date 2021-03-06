import React from 'react';



class ShowAllSearchItems extends React.Component{
    render(){
        return(
            <div>
                <h1 className={"text-center"}>Choices </h1>
                <div>
                    <ul className={"list-group list-group-horizontal"}>
                        <li className={"list-group-item col-4 text-center"}>meal name</li>
                        <li className={"list-group-item col-6 text-center"}>food content</li>
                        <li className={"list-group-item col-2 text-center"}> Add</li>
                    </ul>
                    {
                        this.props.foods && this.props.foods.map(food=>
                            <ul className={"list-group list-group-horizontal"} key={food.id}>
                                <li className={"list-group-item col-4"}>{food.label}</li>
                                <li className={"list-group-item col-6"}>{food.foodContent}</li>
                                <li className={"list-group-item col-2"}>
                                    <button onClick={()=>this.props.addItem(food.label, food.foodContent, food.kcal, food.imageUrl)}>Add</button>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>

        )
    }
}

export default ShowAllSearchItems;


