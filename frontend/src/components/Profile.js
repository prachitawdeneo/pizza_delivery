import React,{useState,useEffect} from 'react'
import Navv from './Navv';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { getRegUser } from '../config/Myservice';

export default function Profile() {
    const [regUser,setRegUser]=useState([]);
    useEffect(()=>{
        getRegUser()
        .then(res=>{
            if(res.data.err === 1){
                alert(res.data.msg)
            }
            else if( res.data.err === 0){
                console.log(res.data)
                setRegUser(res.data.regUser)
                // console.log(regUser)
            }
        })
    },[])

    return (
        <div>
            <Navv/>
            <Container>
                    <div className="container p-3" style={{height:"500px",width:"600px",margin:"auto",backgroundColor:"wheat"}}>
                        <h1 className="text-center">Profile Info</h1>
                {regUser.map(user=>
                <div  style={{marginLeft:"200px",marginTop:"70px"}}>
                        <p>Name : {user.name}</p>
                        <p>Email : {user.email}</p>
                        <p>Mobile no : {user.mobile}</p>
                        <p>Address : {user.address}</p>
                        <p>Password : {user.password}</p>
                        </div>
                        )}
                    </div>
            </Container>
        </div>
    )
}
