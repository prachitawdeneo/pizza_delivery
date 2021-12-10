import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function DashNav() {
    return (
        <>
        <Container>
            <Navbar variant="dark" className="row">
    <Container className="col-10">
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
    <Container className="col-2">
        <Link to="/register" className="btn btn-outline-dark">Sign Up</Link> 
        <Link to="/login" className="btn btn-outline-dark">Login</Link> 
    </Container>
  </Navbar>
  </Container>
        </>
    )
}
