import React,{useEffect,useState,useRef} from 'react'
import Navv from './Navv';
import { Container,Form,Button } from 'react-bootstrap';
import { getPizza, plcOrder } from '../config/Myservice';
import { useNavigate } from 'react-router';

export default function Checkout() {
    const [orders,setOrders]=useState([]);
    const creditInp=useRef(null);
    const navigate=useNavigate();
    // const [total,setTotal]=useState(0)
    let total=0
    let totalqty=0
    orders.forEach(ord => {
        total=total + ord.price;
        totalqty=totalqty + ord.quantity;
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

    const placeOrder=(event)=>{
        event.preventDefault();
        if(creditInp.current.value.length === 16){
            let data={credit:creditInp.current.value,quantity:totalqty,price:total}
            console.log(data)
            plcOrder(data)
            .then(res=>{
                console.log(res.data)
            })
            alert("Order Placed!")
            navigate("/orderplaced",{replace:true})
        }
        else{
            alert("Enter Valid Card number")
        }
    }
    return (
        <div>
            <Navv/>
            <Container>
                <h1>Checkout</h1>
                <Form onSubmit={placeOrder} method="post">
  <Form.Group className="mb-3" controlId="credit">
    <Form.Label>Credirt Card</Form.Label>
    <Form.Control type="text" placeholder="Enter Credit Card number..." ref={creditInp}/>
  </Form.Group>
    <p>Order Total : <b>{total}/-</b></p>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </Container>
        </div>
    )
}
