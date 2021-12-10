import { Link } from 'react-router-dom'
import React from 'react'
import { Container } from 'react-bootstrap'
import Navv from './Navv'

export default function OrderPlaced() {
    return (
        <div>
            <Navv/>
            <Container>
                <h1>Order has Been Placed Successfully!</h1>
                <div className="alert alert-success">You will recieve notification by email with order details.</div>
                <div>
                    <Link to="/menu" className="btn btn-dark">Go and order some more</Link>
                    <span> </span> <Link to="/orders" className="btn btn-dark">Go to my orders</Link>
                </div>
            </Container>
        </div>
    )
}
