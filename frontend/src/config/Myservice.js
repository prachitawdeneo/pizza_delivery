import axios from 'axios';
import { MAIN_URL } from './Url';
let token = localStorage.getItem('_token')
export function getRegUser(){
    // console.log("Done!")
    return( axios.get(`${MAIN_URL}user/getuser`)
   )
}
export function addUser(data){
    console.log("Done!")
    return( axios.post(`${MAIN_URL}user/adduser`,data)
   )
}
export function logUser(data){
    console.log("Done!")
    return( axios.post(`${MAIN_URL}user/loguser`,data)
   )
}

export function getMenu(){
    console.log("Done!")
    return( axios.get(`${MAIN_URL}pizza/menu`,{headers:{"Authorization":`Bearer ${token}`}})
   )
}

export function addPizza(data,id){
    console.log("Done!")
    console.log(id)
    return( axios.post(`${MAIN_URL}pizza/addcart/${id}`,data)
   )
}
export function getPizza(){
    console.log("Done!")
    return( axios.get(`${MAIN_URL}pizza/getorders`)
   )
}

export function addQty(data,id){
    console.log("Done!")
    console.log(id)
    return( axios.put(`${MAIN_URL}pizza/addqty/${id}`,data)
   )
}
export function plcOrder(data,id){
    console.log("Done!")
    console.log(id)
    return( axios.post(`${MAIN_URL}pizza/placeorder`,data)
   )
}

export function getMyOrders(){
    console.log("Done!")
    return( axios.get(`${MAIN_URL}pizza/myorders`)
   )
}