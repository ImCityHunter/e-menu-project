import {server_url} from "./url";

let order_post_url = (rid,username) => `${server_url}/api/${rid}/${username}/orders`;

const createOrder = (rid,username, order) =>{
    console.log(order_post_url(rid,username));
    return fetch(order_post_url(rid,username),{
        method: 'POST',
        body: JSON.stringify(order),
        credentials: "include",
        headers:{
            'content-type': 'application/json'
        }
    }).then(response=>response.json())
}

export default {
    createOrder
}
