import {server_url} from "./url";


const login = (user) => {
    return fetch(`${server_url}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
}

const logout = () => fetch(`${server_url}/logout`, {
        method: 'POST',
        credentials: "include"
    })
const register = async (user) =>{
    let response = await fetch(`${server_url}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    });
    return await response.json()
}

const currentUser = () =>{
    return fetch(`${server_url}/currentUser`, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json());
}

const updateUser = (user)=>{
    console.log(user);
    return fetch(`${server_url}/updateUser`, {
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
