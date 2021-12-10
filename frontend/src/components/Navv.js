import React,{useState,useEffect} from 'react'
import {Navbar,Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getMyOrders, getPizza } from '../config/Myservice';

export default function Navv() {
  const [orders,setOrders]=useState([]);
    // const [total,setTotal]=useState(0)
    let total=0
    orders.forEach(ord => {
        total=total + ord.quantity;
        // console.log(total)
    });
    useEffect(()=>{
        getPizza()
        .then(res=>{
            console.log(res.data)
            setOrders(res.data.orderData)
        })
        
        console.log(total)
    },[])
  const navigate=useNavigate();
  const logOut=()=>{
    // localStorage.setItem('_token',null)
    navigate('/',{replace:true})
  }
    return (
        <>
            <Container>
            <Navbar variant="dark" className="row">
    <Container className="col-7">
      <Navbar.Brand href="/"  >
        <img
          alt=""
          src="images/icon.png"
          width="80"
          height="80"
          className="d-inline-block align-top rounded-circle"
        />
      </Navbar.Brand>
    </Container>
    <Container className="col-5">
        <Link to="/menu" className="text-dark text-decoration-none">Menu</Link> 
        <Link to="/cart" className="text-dark  text-decoration-none">Cart <span>{total}</span></Link> 
        <Link to="/orders" className="text-dark text-decoration-none">My orders</Link> 
        <Link to="/profile" className="text-dark text-decoration-none">Profile</Link> 
        <button to="/logout" className="btn text-decoration-none btn-outline-dark" onClick={logOut}>Logout</button> 
    </Container>
  </Navbar>
  </Container>
        </>
    )
}
