import {server_url} from "./url";

let order_post_url = (rid,username) => `${server_url}/api/${rid}/${username}/orders`;
let order_imcomplete_url = (rid) => `${server_url}/api/restaurants/${rid}/orders/completed`;
let order_update_incomplete_url = (order_id)=> `${server_url}/api/orders/${order_id}/incomplete`;
let user_completed_orders_url=(cid)=>`${server_url}/api/users/${cid}/orders/completed`;
const createOrder = (rid,username, order) =>{
    console.log(order_post_url(rid,username));
    console.log(order);
    return fetch(order_post_url(rid,username),{
        method: 'POST',
        body: JSON.stringify(order),
        credentials: "include",
        headers:{
            'content-type': 'application/json'
        }
    }).then(response=>response.json())
}

const getAllIncompleteOrdersForRestaurant = (rid) =>
    fetch(order_imcomplete_url(rid)).then(response=>response.json())

const updateAnIncompleteOrder = (order_id) => {
    console.log(order_update_incomplete_url(order_id));
    return fetch(order_update_incomplete_url(order_id), {
    method: 'PUT',
    credentials: "include",
    headers:{
        'content-type': 'application/json'
    }
}).then(response=>response.json())
}

const getAllCompletedOrdersByUser = (cid) =>
    fetch(user_completed_orders_url(cid)).then(response=>response.json())



export default {
    createOrder, getAllIncompleteOrdersForRestaurant, updateAnIncompleteOrder, getAllCompletedOrdersByUser
}
