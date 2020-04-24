

//let local_url = "http://localhost:8080";
let local_url = "https://yu2749luca-spring-boot-server.herokuapp.com";
let restaurant_url = (rid) => `${local_url}/api/restaurants/${rid}`;


export const findRestaurant = (rid)=>{
    let testRid = parseInt(rid);
    if(!testRid){
        alert("restauraunt id invalid");
    }
    return fetch(restaurant_url(rid))
        .then(response=> response.json()
    );
}

export const updateRestaurant = (rid,restaurant) =>{
    return fetch(restaurant_url(rid),{
        method:'PUT',
        body: JSON.stringify((restaurant)),
        credentials: "include",
        headers:{
            'content-type':'application/json'
        }
    }).then(response=>response.json());
}

export default {
    findRestaurant, updateRestaurant
}



