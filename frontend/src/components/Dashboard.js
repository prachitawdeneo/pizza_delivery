import React from 'react'
import { Container } from 'react-bootstrap'
import DashNav from './DashNav';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <>
            <DashNav/>
            <Container>
            <div className="row">
                <div className="col">
                    <Container>
                    <div class="alert alert-danger mt-4" role="alert">
                        Fastest Delivery!
                    </div>
                    <h1 className="fw-bolder mb-4" style={{fontSize:"60px"}}>You would love our <span className="text-danger">Hot Pizza</span>!!</h1>
                    <p className=" mb-5">Get 10% instant off for all orders and INR 200 signup bonus today for new registration.</p>
                    <hr/>
                    <div className="text-center mt-4">
                    <Link to="/register" className="btn btn-outline-dark  ">Sign Up</Link>
                    </div>
                    </Container>
                </div>
                <div className="col " style={{backgroundImage:"url(images/dashboard.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"500px",width:"100%",borderRadius:"10px"}} >
                 
                
                </div>
        
            </div>
            </Container>
        </>
    )
}
