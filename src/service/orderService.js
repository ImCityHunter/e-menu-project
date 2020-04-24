
//let local_url = "http://localhost:8080";

let local_url = "https://yu2749luca-spring-boot-server.herokuapp.com";
let order_post_url = (rid,username) => `${local_url}/api/${rid}/${username}/orders`;

const createOrder = (rid,username, order) =>{
    alert(order_post_url(rid,username))
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
