//const local_url = "http://localhost:8080";
let local_url = "https://yu2749luca-spring-boot-server.herokuapp.com";

const login = (user) => {
    fetch(`${local_url}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => {})
}

const logout = () => fetch(`${local_url}/logout`, {
        method: 'POST',
        credentials: "include"
    })
const register = (user) =>{
    return fetch(`${local_url}/register`, {
        method: 'POST',
        body: JSON.stringify((user)),
        headers:{
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response=>response.json())
}

const currentUser = () =>{
    return fetch(`${local_url}/currentUser`, {
        method: 'GET',
        credentials: "include"
    }).then(response=>response.json())
}

const updateUser = (user)=>{
    console.log(user);
    return fetch(`${local_url}/updateUser`, {
        method: 'PUT',
        body: JSON.stringify(user),
        credentials: "include",
        headers:{
            'content-type':'application/json'
        }
    }).then(response=>response.json())
}
export default {
    login, register, currentUser, updateUser, logout
}
