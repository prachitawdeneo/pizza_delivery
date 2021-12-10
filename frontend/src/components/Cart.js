import Button from '@restart/ui/esm/Button';
import React,{useEffect,useState} from 'react'
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPizza } from '../config/Myservice';
import Navv from './Navv'

export default function Cart() {
    const [orders,setOrders]=useState([]);
    // const [total,setTotal]=useState(0)
    let total=0
    orders.forEach(ord => {
        total=total + ord.price;
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
    return (
        <div>
            <Navv/>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((ord,index)=>
                            <tr>
                                <td>{index+1}</td>
                                <td>{ord.pname}</td>
                                <td><img src={ord.image} alt="" height="100px" width="100px"/></td>
                                <td>{ord.quantity}</td>
                                <td>{ord.price}</td>
                                
                            </tr>
                            )}
                            <tr>
                                <td colSpan="4">Total</td>
                                <td>{total}</td>
                            </tr>  
                    </tbody>
                </Table>
                <div className="row">
                    <div className="col-9"></div>
                <Link to="/checkout" className="btn btn-success mt-2 mb-5 col-3 align-self-end">Checkout</Link>
                </div>
            </Container>
            
        </div>
    )
}
