import React,{useState,useEffect} from 'react'
import { Container,Table } from 'react-bootstrap'
import { getMyOrders } from '../config/Myservice'
import Navv from './Navv'

export default function MyOrder() {
    const [myOrder,setMyOrder]=useState([])
    useEffect(()=>{
        getMyOrders()
        .then(res=>{
            if(res.data.err === 1){
                alert(res.data.msg)
            }
            else if( res.data.err === 0){
                console.log(res.data)
                setMyOrder(res.data.myOrder)
            }
        })
    },[])
    return (
        <div>
            <Navv/>
            <Container>
            <Table>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Order ID</th>
                            <th>Credit card No</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrder.map((ord,index)=>
                            <tr>
                                <td>{index+1}</td>
                                <td>{ord._id}</td>
                                <td>{ord.credit}</td>
                                <td>{ord.quantity}</td>
                                <td>{ord.price}</td>
                                
                            </tr>
                            )}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
