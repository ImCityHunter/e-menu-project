import {server_url} from "./url";


let restaurant_menu_url = (rid) => `${server_url}/api/restaurants/${rid}/menu`;
let meal_url = (mid) => `${server_url}/api/meals/${mid}`;

export const findMenuByRestaurantId = (rid) => {
    let testRid = parseInt(rid);
    if(!testRid){
        alert("testRID");
    }
    return fetch(restaurant_menu_url(rid)).then(response=>response.json());
}

export const updateMeal = (mid, meal) => {
    let parse = parseInt(mid);
    return fetch(meal_url(parse), {
        method: 'PUT',
        body: JSON.stringify(meal),
        credentials: "include",
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json())


}

export const addMeal = (rid,meal) =>{
    return fetch(restaurant_menu_url(rid), {
        method: 'POST',
        body: JSON.stringify(meal),
        credentials: "include",
        headers:{
            'content-type': 'application/json'
        }
    }).then(response=>response.json())
}

export default {
    findMenuByRestaurantId, addMeal, updateMeal
}
