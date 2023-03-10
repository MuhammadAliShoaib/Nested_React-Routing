import axios from "axios"

let apiHandler = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


let Get= (endpoint)=>{
    return apiHandler.get(endpoint);
}

let GetById= (endpoint,id)=>{
    return apiHandler.get(`${endpoint}/${id}`);
}


export {Get,GetById} ;